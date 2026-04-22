"""Tests for state.py: JSONL round rows + .council-state.json resume."""
from __future__ import annotations

from pathlib import Path

from state import (
    append_round_row,
    load_state,
    read_all_rounds,
    reconstruct_state_from_jsonl,
    save_state,
)


def test_append_and_read_roundtrip(tmp_council_root: Path):
    path = tmp_council_root / "versions" / "F1.jsonl"
    append_round_row(path, {"round": 1, "scenario_id": "F1", "delta": 0.1})
    append_round_row(path, {"round": 2, "scenario_id": "F1", "delta": 0.2})
    rows = read_all_rounds(path)
    assert len(rows) == 2
    assert rows[0]["round"] == 1
    assert rows[1]["delta"] == 0.2


def test_save_and_load_state(tmp_council_root: Path):
    path = tmp_council_root / ".council-state.json"
    snapshot = {
        "global_round_counter": 42,
        "resolved_model_ids": {"opus": "claude-opus-4-7"},
        "scenarios": {
            "F1": {"status": "RUNNING", "last_round": 17, "reopen_count": 0},
        },
    }
    save_state(path, snapshot)
    assert path.exists()
    loaded = load_state(path)
    assert loaded["global_round_counter"] == 42
    assert loaded["scenarios"]["F1"]["last_round"] == 17


def test_reconstruct_from_jsonl(tmp_council_root: Path):
    versions_dir = tmp_council_root / "versions"
    versions_dir.mkdir()
    (versions_dir / "F1.jsonl").write_text(
        '{"round":0,"scenario_id":"F1","stop":{"decision":"continue"}}\n'
        '{"round":1,"scenario_id":"F1","stop":{"decision":"continue"}}\n'
        '{"round":2,"scenario_id":"F1","stop":{"decision":"stop","reason":"plateau"}}\n'
    )
    (versions_dir / "F2.jsonl").write_text(
        '{"round":0,"scenario_id":"F2","stop":{"decision":"continue"}}\n'
    )
    recon = reconstruct_state_from_jsonl(versions_dir)
    assert recon["scenarios"]["F1"]["status"] == "CONVERGED"
    assert recon["scenarios"]["F2"]["status"] == "RUNNING"
    # global = (F1 max round + 1) + (F2 max round + 1) = 3 + 1 = 4
    assert recon["global_round_counter"] == 4
