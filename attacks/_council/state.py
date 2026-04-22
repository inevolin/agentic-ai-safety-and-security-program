"""State persistence: JSONL round rows + .council-state.json snapshot.

Per spec §9 resumability and §16.2 recovery. The JSONL is the source of
truth; .council-state.json is an acceleration layer. If the snapshot is
corrupted/missing, reconstruct_state_from_jsonl re-derives state by
reading each scenario's JSONL tail.
"""
from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path
from typing import Any


@dataclass
class ScenarioStateRecord:
    status: str
    last_round: int
    reopen_count: int = 0
    last_skeptic_global_counter: int = 0


def append_round_row(jsonl_path: Path, row: dict[str, Any]) -> None:
    jsonl_path.parent.mkdir(parents=True, exist_ok=True)
    with jsonl_path.open("a") as f:
        f.write(json.dumps(row) + "\n")


def read_all_rounds(jsonl_path: Path) -> list[dict[str, Any]]:
    if not jsonl_path.exists():
        return []
    rows = []
    with jsonl_path.open("r") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            rows.append(json.loads(line))
    return rows


def save_state(path: Path, snapshot: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(snapshot, indent=2))


def load_state(path: Path) -> dict[str, Any]:
    return json.loads(path.read_text())


def _derive_status_from_row(row: dict[str, Any]) -> str:
    stop = row.get("stop") or {}
    if stop.get("decision") != "stop":
        return "RUNNING"
    reasons = stop.get("reasons") or {}
    reason = stop.get("reason", "")
    if reasons.get("plateau") or reason == "plateau":
        return "CONVERGED"
    if reasons.get("hardened") or reason == "hardened":
        return "HARDENED"
    if reasons.get("ceiling") or reason == "ceiling":
        return "CEILING"
    if reason in ("safety_failure", "reopen_thrash"):
        return "FAILED"
    return "CONVERGED"


def reconstruct_state_from_jsonl(versions_dir: Path) -> dict[str, Any]:
    """Rebuild state from JSONL tails when .council-state.json is lost."""
    scenarios: dict[str, dict[str, Any]] = {}
    global_round_counter = 0
    for jsonl in sorted(versions_dir.glob("*.jsonl")):
        sid = jsonl.stem
        rows = read_all_rounds(jsonl)
        if not rows:
            continue
        last = rows[-1]
        max_round = max(r.get("round", 0) for r in rows)
        status = _derive_status_from_row(last)
        scenarios[sid] = {
            "status": status,
            "last_round": max_round,
            "reopen_count": last.get("reopen_count", 0),
        }
        global_round_counter += max_round + 1  # +1 because rounds are 0-indexed
    return {
        "global_round_counter": global_round_counter,
        "scenarios": scenarios,
    }
