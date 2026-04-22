"""Blinded A/B judge: current vs r00 baseline per spec §4.2 step 6b + §7.

The baseline and current are assigned labels A/B randomly (seeded) so
the judge cannot anchor on position. The judge's verdict is translated
back into confidence_vs_baseline (always reported with CURRENT as the
tracked variable).
"""
from __future__ import annotations

import json
import random
import re
from dataclasses import dataclass
from pathlib import Path

from roles import load_prompt


@dataclass
class ABResult:
    better: str  # "current" | "baseline" | "tie"
    confidence_vs_baseline: float  # 0..1; higher = current beats baseline
    raw_verdict: dict


_JSON_BLOCK_RE = re.compile(r"\{.*\}", re.DOTALL)


class ABJudge:
    def __init__(self, claude, prompts_dir: Path):
        self.claude = claude
        self.template = load_prompt(prompts_dir, "ab_judge", "v1")

    def compare(
        self,
        baseline: str,
        current: str,
        seed: int,
    ) -> ABResult:
        rng = random.Random(seed)
        current_is_A = rng.random() < 0.5
        if current_is_A:
            draft_a, draft_b = current, baseline
            label_A, label_B = "current_sealed", "baseline_sealed"
        else:
            draft_a, draft_b = baseline, current
            label_A, label_B = "baseline_sealed", "current_sealed"

        prompt = self.template.render(
            draft_a=draft_a, draft_b=draft_b,
            label_A=label_A, label_B=label_B,
        )
        resp = self.claude.invoke(model="opus", prompt=prompt, system_prompt=None)
        verdict = self._parse(resp.stdout)

        winner = verdict.get("better", "tie")
        conf = float(verdict.get("confidence", 0.5))
        if winner == "tie":
            confidence_vs_baseline = 0.5
            better = "tie"
        elif (winner == "A" and current_is_A) or (winner == "B" and not current_is_A):
            confidence_vs_baseline = conf
            better = "current"
        else:
            confidence_vs_baseline = 1.0 - conf
            better = "baseline"

        return ABResult(
            better=better,
            confidence_vs_baseline=confidence_vs_baseline,
            raw_verdict=verdict,
        )

    def _parse(self, raw: str) -> dict:
        m = _JSON_BLOCK_RE.search(raw)
        if not m:
            return {"better": "tie", "confidence": 0.5, "error": "no_json_found"}
        try:
            return json.loads(m.group(0))
        except json.JSONDecodeError as e:
            return {"better": "tie", "confidence": 0.5, "error": str(e)}
