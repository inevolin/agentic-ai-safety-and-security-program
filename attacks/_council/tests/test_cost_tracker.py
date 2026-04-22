"""Tests for cost tracker."""
from __future__ import annotations

from pathlib import Path

from cost_tracker import CapBreach, CostTracker


def test_record_firing_appends_jsonl(tmp_council_root: Path):
    ledger = tmp_council_root / "library" / "cost-ledger.jsonl"
    t = CostTracker(ledger_path=ledger, global_cap=100.0, per_scenario_cap=10.0)
    t.record_firing(scenario_id="F1", tier="haiku", usd=0.5)
    lines = ledger.read_text().strip().split("\n")
    assert len(lines) == 1


def test_global_cap_triggers_breach(tmp_council_root: Path):
    ledger = tmp_council_root / "library" / "cost-ledger.jsonl"
    t = CostTracker(ledger_path=ledger, global_cap=1.0, per_scenario_cap=5.0)
    t.record_firing("F1", "haiku", 0.5)
    t.record_firing("F1", "haiku", 0.4)
    assert t.check_caps("F2") is None  # still under global
    t.record_firing("F2", "sonnet", 0.5)
    breach = t.check_caps("F2")
    assert isinstance(breach, CapBreach)
    assert breach.which == "global"


def test_per_scenario_cap_only_blocks_that_scenario(tmp_council_root: Path):
    ledger = tmp_council_root / "library" / "cost-ledger.jsonl"
    t = CostTracker(ledger_path=ledger, global_cap=100.0, per_scenario_cap=1.0)
    t.record_firing("F1", "haiku", 0.6)
    t.record_firing("F1", "sonnet", 0.6)
    assert t.check_caps("F1").which == "per_scenario"
    assert t.check_caps("F2") is None


def test_reconstruct_from_existing_ledger(tmp_council_root: Path):
    ledger = tmp_council_root / "library" / "cost-ledger.jsonl"
    t1 = CostTracker(ledger_path=ledger, global_cap=100.0, per_scenario_cap=10.0)
    t1.record_firing("F1", "haiku", 1.5)
    t2 = CostTracker(ledger_path=ledger, global_cap=100.0, per_scenario_cap=10.0)
    assert t2.total_spend() == 1.5
    assert t2.scenario_spend("F1") == 1.5
