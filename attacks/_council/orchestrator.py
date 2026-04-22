"""Orchestrator — CLI entry + scenario scheduler.

Per spec §4.1: iterate all scenarios sequentially; per-scenario round
loop until stop; persist .council-state.json; resume refuses on model
pinning mismatch (§15 Q4).
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional

from config import (
    CLAUDE_DEFAULT_IDS,
    HARNESS_GLOBAL_CAP_USD,
    HARNESS_PER_SCENARIO_CAP_USD,
    ROUND_MAX,
    ROUND_MIN,
)
from extractability import classify
from scoring import semantic_diff_bytes
from state import (
    append_round_row,
    load_state,
    reconstruct_state_from_jsonl,
    save_state,
)
from stop_rule import StopSignals, decide_stop


_ID_RE = re.compile(r"###\s+([A-Z]+\d+[a-z]?)\.?", re.IGNORECASE)


def _extract_ids(markdown: str) -> set[str]:
    return {m.group(1).upper() for m in _ID_RE.finditer(markdown)}


@dataclass
class OrchestratorConfig:
    council_dir: Path
    scenarios_dir: Path
    versions_dir: Path
    logs_dir: Path
    proposed_dir: Path
    state_file: Path
    min_rounds: int = ROUND_MIN
    max_rounds: int = ROUND_MAX
    global_harness_cap: float = HARNESS_GLOBAL_CAP_USD
    per_scenario_harness_cap: float = HARNESS_PER_SCENARIO_CAP_USD
    model_ids: dict[str, str] = field(
        default_factory=lambda: dict(CLAUDE_DEFAULT_IDS)
    )


class Orchestrator:
    def __init__(self, config: OrchestratorConfig) -> None:
        self.config = config
        for d in (config.versions_dir, config.logs_dir, config.proposed_dir):
            d.mkdir(parents=True, exist_ok=True)

    def initialize_state(self) -> None:
        """Cold start — record model-ID pins."""
        snapshot = {
            "global_round_counter": 0,
            "resolved_model_ids": dict(self.config.model_ids),
            "scenarios": {},
        }
        save_state(self.config.state_file, snapshot)

    def load_or_reconstruct_state(self) -> dict:
        if self.config.state_file.exists():
            return load_state(self.config.state_file)
        recon = reconstruct_state_from_jsonl(self.config.versions_dir)
        recon["resolved_model_ids"] = dict(self.config.model_ids)
        return recon

    def resume(self) -> dict:
        state = self.load_or_reconstruct_state()
        pinned = state.get("resolved_model_ids", {})
        for k, v in self.config.model_ids.items():
            if pinned.get(k) and pinned[k] != v:
                raise RuntimeError(
                    f"model pinning mismatch on resume: {k} was {pinned[k]}, "
                    f"now {v}. Use --claude-models to re-pin explicitly."
                )
        return state

    def list_scenarios(
        self, filter_ids: Optional[list[str]] = None
    ) -> list[Path]:
        candidates: list[Path] = []
        for md in sorted(self.config.scenarios_dir.rglob("*.md")):
            if md.parent.name in {"versions", "proposed", "drift-review"}:
                continue
            candidates.append(md)
        if filter_ids:
            wanted = set(filter_ids)
            candidates = [
                c for c in candidates
                if _extract_ids(c.read_text()) & wanted
            ]
        return candidates

    def _build_clients(self) -> dict:
        from ab_judge import ABJudge
        from claude_client import ClaudeClient
        from cost_tracker import CostTracker
        from harness_adapter import HarnessAdapter
        from ollama_client import OllamaClient
        from safety_filter import redact
        from technique_library import TechniqueLibrary

        class _SafetyAdapter:
            def redact(self, text):
                return redact(text)

        ollama = OllamaClient()
        claude = ClaudeClient(model_ids=self.config.model_ids)
        harness = HarnessAdapter(
            script_path=Path("attacks/_harness/run_attempt.sh"),
            scenario_dir=self.config.scenarios_dir,
        )
        cost = CostTracker(
            ledger_path=self.config.council_dir / "library" / "cost-ledger.jsonl",
            global_cap=self.config.global_harness_cap,
            per_scenario_cap=self.config.per_scenario_harness_cap,
        )
        library = TechniqueLibrary(
            path=self.config.council_dir / "library" / "techniques.jsonl",
        )
        ab = ABJudge(claude=claude, prompts_dir=self.config.council_dir / "prompts")
        return {
            "ollama": ollama, "claude": claude, "harness": harness, "cost": cost,
            "library": library, "safety": _SafetyAdapter(), "ab": ab,
        }

    def run_once(self, scenario_filter: Optional[list[str]] = None) -> None:
        from round_engine import RoundContext, RoundEngine
        from scenario_state import ScenarioMachine, State

        clients = self._build_clients()
        engine = RoundEngine(
            prompts_dir=self.config.council_dir / "prompts",
            ollama_client=clients["ollama"],
            claude_client=clients["claude"],
            harness_adapter=clients["harness"],
            cost_tracker=clients["cost"],
            technique_library=clients["library"],
            promptfoo_index=None,
            safety_filter=clients["safety"],
            ab_judge=clients["ab"],
        )

        state = self.load_or_reconstruct_state()
        scenarios = self.list_scenarios(filter_ids=scenario_filter)

        for scenario_path in scenarios:
            self._process_scenario(engine, scenario_path, state)
            save_state(self.config.state_file, state)

    def _process_scenario(
        self, engine, scenario_path: Path, state: dict
    ) -> None:
        from round_engine import RoundContext
        from scenario_state import ScenarioMachine, State

        markdown = scenario_path.read_text()
        ids = _extract_ids(markdown)
        if not ids:
            return
        sid = next(iter(ids))

        scn_state = state["scenarios"].get(sid, {})
        status = scn_state.get("status", "UNSEEN")
        machine = ScenarioMachine(sid, State(status))
        versions_path = self.config.versions_dir / f"{sid}.jsonl"
        classification = classify(markdown)

        if machine.state == State.UNSEEN:
            machine.start_baseline()
            baseline_dir = self.config.logs_dir / sid / "r00"
            ctx0 = RoundContext(
                scenario_id=sid,
                scenario_markdown=markdown,
                extractable=classification.extractable,
                artifacts_dir=baseline_dir,
                round_num=0,
                resolved_model_ids=state["resolved_model_ids"],
            )
            row = engine.run_baseline(ctx0)
            append_round_row(versions_path, row)
            machine.baseline_complete()
            state["scenarios"][sid] = {
                "status": machine.state.value,
                "last_round": 0,
                "reopen_count": 0,
            }

        round_num = int(state["scenarios"][sid]["last_round"]) + 1
        consecutive_no_move = 0
        prior_rows: list[dict] = []
        current_md = markdown

        while machine.state == State.RUNNING and round_num <= self.config.max_rounds:
            artifacts = self.config.logs_dir / sid / f"r{round_num:02d}"
            ctx = RoundContext(
                scenario_id=sid,
                scenario_markdown=current_md,
                extractable=classification.extractable,
                artifacts_dir=artifacts,
                round_num=round_num,
                prior_rounds=prior_rows,
                global_round_counter=state["global_round_counter"],
                resolved_model_ids=state["resolved_model_ids"],
            )
            row = engine.run_round(ctx)

            # Compute objective stop signals post-hoc
            if prior_rows:
                prev_draft = prior_rows[-1].get("chairman", {}).get("draft", "")
            else:
                prev_draft = current_md
            new_draft = row.get("chairman", {}).get("draft", "") or current_md
            sem = semantic_diff_bytes(prev_draft, new_draft)
            row["chairman"]["semantic_diff_bytes"] = sem
            semantic_moved = sem > 200

            signals = StopSignals(
                round_num=round_num,
                max_rounds=self.config.max_rounds,
                min_rounds=self.config.min_rounds,
                semantic_moved=semantic_moved,
                harness_ci_narrowing=False,
                ab_last_conf=0.5,
                ab_prev_conf=0.5,
                skeptic_ran=False,
                skeptic_broke=False,
                skeptic_clean_rounds=0,
            )
            consecutive_no_move = 0 if semantic_moved else consecutive_no_move + 1
            decision = decide_stop(signals, consecutive_no_move)
            row["stop"]["decision"] = decision.decision
            row["stop"]["reason"] = decision.reason

            append_round_row(versions_path, row)
            prior_rows.append(row)
            state["global_round_counter"] += 1
            state["scenarios"][sid]["last_round"] = round_num

            if decision.decision == "stop":
                machine.stop_with_reason(decision.reason)
                final_draft = row.get("chairman", {}).get("draft")
                if final_draft:
                    scenario_path.write_text(final_draft)
                break

            if row.get("chairman", {}).get("draft"):
                current_md = row["chairman"]["draft"]
            round_num += 1

        state["scenarios"][sid]["status"] = machine.state.value


def _build_arg_parser() -> argparse.ArgumentParser:
    ap = argparse.ArgumentParser(prog="council")
    sub = ap.add_subparsers(dest="cmd", required=True)

    run = sub.add_parser("run")
    run.add_argument("--scenarios", default="all")
    run.add_argument("--min", type=int, default=ROUND_MIN)
    run.add_argument("--max", type=int, default=ROUND_MAX)
    run.add_argument("--skip-harness", action="store_true")
    run.add_argument("--no-discovery", action="store_true")
    run.add_argument("--no-library", action="store_true")
    run.add_argument("--global-harness-usd-cap", type=float, default=200.0)
    run.add_argument("--per-scenario-harness-usd-cap", type=float, default=8.0)
    run.add_argument("--paper-batch-size", type=int, default=1)
    run.add_argument("--claude-models", default="")
    run.add_argument("--harness-budget-cap", type=int, default=9)

    sub.add_parser("resume")
    sub.add_parser("status")
    disc = sub.add_parser("discover")
    disc.add_argument("--force", action="store_true")
    sub.add_parser("index-promptfoo")
    bl = sub.add_parser("baseline")
    bl.add_argument("--scenarios", default="all")

    debug = sub.add_parser("debug")
    debug.add_argument("--scenario", required=True)
    debug.add_argument("--round-only", action="store_true")

    reopen = sub.add_parser("reopen")
    reopen.add_argument("--scenario", required=True)
    reopen.add_argument("--reason", required=True)

    return ap


def main(argv: list[str] | None = None) -> int:
    parser = _build_arg_parser()
    args = parser.parse_args(argv)
    # Wiring is intentionally minimal in this module; real dispatch happens
    # when the orchestrator is instantiated by a driver. Keep main() as a
    # smoke test so `python -m attacks._council.orchestrator --help` works.
    print(f"orchestrator invoked: cmd={args.cmd}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
