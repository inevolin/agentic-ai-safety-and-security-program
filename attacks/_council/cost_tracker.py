"""Cost ledger for harness firings per spec §14.1.

Append-only JSONL. Tracks cumulative USD across all firings, enforces
global and per-scenario caps, surfaces breaches via check_caps().
"""
from __future__ import annotations

import json
import time
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path


@dataclass
class CapBreach:
    which: str  # "global" | "per_scenario"
    scenario_id: str
    total_usd: float
    cap_usd: float


class CostTracker:
    def __init__(
        self,
        ledger_path: Path,
        global_cap: float,
        per_scenario_cap: float,
    ) -> None:
        self.ledger_path = ledger_path
        self.ledger_path.parent.mkdir(parents=True, exist_ok=True)
        self.global_cap = global_cap
        self.per_scenario_cap = per_scenario_cap
        self._by_scenario: dict[str, float] = defaultdict(float)
        self._total = 0.0
        self._load()

    def _load(self) -> None:
        if not self.ledger_path.exists():
            return
        with self.ledger_path.open("r") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                row = json.loads(line)
                sid = row["scenario_id"]
                usd = float(row["usd"])
                self._by_scenario[sid] += usd
                self._total += usd

    def record_firing(self, scenario_id: str, tier: str, usd: float) -> None:
        row = {
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "scenario_id": scenario_id,
            "tier": tier,
            "usd": round(usd, 4),
        }
        with self.ledger_path.open("a") as f:
            f.write(json.dumps(row) + "\n")
        self._by_scenario[scenario_id] += usd
        self._total += usd

    def check_caps(self, scenario_id: str) -> CapBreach | None:
        if self._total >= self.global_cap:
            return CapBreach("global", scenario_id, self._total, self.global_cap)
        scn = self._by_scenario.get(scenario_id, 0.0)
        if scn >= self.per_scenario_cap:
            return CapBreach(
                "per_scenario", scenario_id, scn, self.per_scenario_cap
            )
        return None

    def total_spend(self) -> float:
        return self._total

    def scenario_spend(self, scenario_id: str) -> float:
        return self._by_scenario.get(scenario_id, 0.0)
