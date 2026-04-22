"""Wraps attacks/_harness/run_attempt.sh and parses verdict outputs.

Per spec §6 step 5: fires run_attempt.sh <attempt_dir> <model> with full
model IDs passed through (N2 fix). Parses verdict.<tier>.md for success
signal. Returns per-firing success/failure plus grader_leakage caveat
(N1) when the grader falsely fires on refusal-with-indicator.
"""
from __future__ import annotations

import os
import re
import subprocess
from dataclasses import dataclass
from pathlib import Path


@dataclass
class HarnessResult:
    success: bool
    verdict_file: Path
    log_file: Path
    verdict_caveat: str | None  # "grader_leakage" | None
    raw_stdout: str
    raw_stderr: str
    returncode: int


# run_attempt.sh emits verdicts with either `**verdict:** **fail**` or
# `**verdict:** **success**` (Markdown with bold-inside-bold). Be tolerant
# of any bold/colon/whitespace nesting.
_VERDICT_RE = re.compile(
    r"\*\*(?:final|verdict):\*\*\s*\*{0,2}\s*([a-z-]+)",
    re.IGNORECASE,
)
_FINAL_RE = _VERDICT_RE  # back-compat alias
_DETECTED_RE = re.compile(r"DETECTED:\s*Rule\s*(\d)", re.IGNORECASE)


class HarnessAdapter:
    def __init__(self, script_path: Path, scenario_dir: Path) -> None:
        self.script_path = script_path
        self.scenario_dir = scenario_dir

    def fire(
        self,
        attempt_dir: Path,
        tier: str,
        model_id: str,
        temp: float,
        sysprompt: str,
    ) -> HarnessResult:
        env = os.environ.copy()
        env["COUNCIL_TEMPERATURE"] = str(temp)
        env["COUNCIL_SYSPROMPT"] = sysprompt

        cmd = [str(self.script_path), str(attempt_dir), model_id]

        proc = subprocess.run(
            args=cmd,
            capture_output=True,
            text=True,
            env=env,
            check=False,
        )

        # run_attempt.sh names files with whatever model identifier was
        # passed in position 2. We pass full IDs (N2 fix from spec r3.1),
        # so the verdict file is named verdict.<full-model-id>.md — not
        # verdict.<tier>.md. Try both paths for backward compat.
        verdict_candidates = [
            attempt_dir / f"verdict.{model_id}.md",
            attempt_dir / f"verdict.{tier}.md",
        ]
        log_candidates = [
            attempt_dir / f"run.{model_id}.log",
            attempt_dir / f"run.{tier}.log",
        ]
        verdict_file = next(
            (p for p in verdict_candidates if p.exists()),
            verdict_candidates[0],  # fallback to the preferred one
        )
        log_file = next(
            (p for p in log_candidates if p.exists()),
            log_candidates[0],
        )

        success, caveat = self._parse_verdict(verdict_file)

        return HarnessResult(
            success=success,
            verdict_file=verdict_file,
            log_file=log_file,
            verdict_caveat=caveat,
            raw_stdout=proc.stdout,
            raw_stderr=proc.stderr,
            returncode=proc.returncode,
        )

    def _parse_verdict(self, verdict_file: Path) -> tuple[bool, str | None]:
        if not verdict_file.exists():
            return False, None
        text = verdict_file.read_text()
        m = _FINAL_RE.search(text)
        final = m.group(1).strip().lower() if m else ""
        success = final == "success"

        caveat = None
        if success and _DETECTED_RE.search(text):
            caveat = "grader_leakage"
        return success, caveat
