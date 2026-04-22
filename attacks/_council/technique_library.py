"""Cross-scenario technique library — append-only JSONL + nearest-neighbor
query excluding current-scenario techniques (spec §4.3).

Uses plain cosine similarity over small embedding vectors; no annoy index
needed at this size (5000 techniques = negligible linear scan cost).
"""
from __future__ import annotations

import json
import math
import time
from dataclasses import asdict, dataclass
from pathlib import Path


@dataclass
class Technique:
    technique_id: str
    scenario_id: str
    round: int
    source_proposer: str
    summary: str
    injection_channel_tag: str
    attacker_goal_tag: str
    pivot_mechanism_tag: str
    delta_outcome: float
    harness_lift: float
    embedding: list[float]


def _cosine(a: list[float], b: list[float]) -> float:
    if not a or not b or len(a) != len(b):
        return 0.0
    num = sum(x * y for x, y in zip(a, b))
    na = math.sqrt(sum(x * x for x in a))
    nb = math.sqrt(sum(y * y for y in b))
    if na == 0 or nb == 0:
        return 0.0
    return num / (na * nb)


class TechniqueLibrary:
    def __init__(self, path: Path) -> None:
        self.path = path
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self._items: list[Technique] = []
        self._load()

    def _load(self) -> None:
        if not self.path.exists():
            return
        with self.path.open("r") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                row = json.loads(line)
                row.pop("_ts", None)
                self._items.append(Technique(**row))

    def _next_id(self) -> int:
        if not self._items:
            return 1
        max_n = max(int(t.technique_id.split("-")[-1]) for t in self._items)
        return max_n + 1

    def append(self, t: Technique) -> Technique:
        with self.path.open("a") as f:
            row = asdict(t)
            row["_ts"] = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
            f.write(json.dumps(row) + "\n")
        self._items.append(t)
        return t

    def append_from_dict(self, **kwargs) -> Technique:
        tid = f"T-{self._next_id():06d}"
        t = Technique(technique_id=tid, **kwargs)
        return self.append(t)

    def nearest_top3_excluding(
        self,
        current_scenario: str,
        channel_tag: str,
        goal_tag: str,
        query_embedding: list[float],
    ) -> list[Technique]:
        candidates = [
            t for t in self._items
            if t.scenario_id != current_scenario
            and (
                t.injection_channel_tag == channel_tag
                or t.attacker_goal_tag == goal_tag
            )
        ]
        scored = [(t, _cosine(query_embedding, t.embedding)) for t in candidates]
        scored.sort(key=lambda pair: -pair[1])
        return [t for t, _ in scored[:3]]

    def all_techniques(self) -> list[Technique]:
        return list(self._items)
