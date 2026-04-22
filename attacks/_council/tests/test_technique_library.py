"""Tests for cross-scenario technique library."""
from __future__ import annotations

from pathlib import Path

from technique_library import Technique, TechniqueLibrary


def _make_tech(**overrides) -> Technique:
    defaults = dict(
        technique_id="T-000001",
        scenario_id="F1",
        round=5,
        source_proposer="xploiter",
        summary="Banking-detail change in PDF footer",
        injection_channel_tag="pdf-footer",
        attacker_goal_tag="banking-change",
        pivot_mechanism_tag="indirect-injection",
        delta_outcome=0.2,
        harness_lift=0.1,
        embedding=[0.1] * 8,
    )
    defaults.update(overrides)
    return Technique(**defaults)


def test_append_generates_sequential_id(tmp_council_root: Path):
    lib = TechniqueLibrary(tmp_council_root / "library" / "techniques.jsonl")
    t1 = lib.append_from_dict(
        scenario_id="F1", round=5, source_proposer="xploiter",
        summary="x", injection_channel_tag="pdf", attacker_goal_tag="g",
        pivot_mechanism_tag="i", delta_outcome=0.1, harness_lift=0.0,
        embedding=[0.0] * 4,
    )
    t2 = lib.append_from_dict(
        scenario_id="F1", round=6, source_proposer="xploiter",
        summary="y", injection_channel_tag="pdf", attacker_goal_tag="g",
        pivot_mechanism_tag="i", delta_outcome=0.1, harness_lift=0.0,
        embedding=[0.0] * 4,
    )
    assert t1.technique_id == "T-000001"
    assert t2.technique_id == "T-000002"


def test_nearest_top3_excludes_same_scenario(tmp_council_root: Path):
    lib = TechniqueLibrary(tmp_council_root / "library" / "techniques.jsonl")
    lib.append(_make_tech(technique_id="T-001", scenario_id="F1", embedding=[1.0, 0.0]))
    lib.append(_make_tech(technique_id="T-002", scenario_id="F5", embedding=[0.9, 0.1]))
    lib.append(_make_tech(technique_id="T-003", scenario_id="F5", embedding=[0.2, 0.9]))
    results = lib.nearest_top3_excluding(
        current_scenario="F1",
        channel_tag="pdf-footer",
        goal_tag="banking-change",
        query_embedding=[1.0, 0.0],
    )
    assert all(r.scenario_id != "F1" for r in results)
    assert results[0].technique_id == "T-002"


def test_reload_from_existing_file(tmp_council_root: Path):
    path = tmp_council_root / "library" / "techniques.jsonl"
    lib1 = TechniqueLibrary(path)
    lib1.append(_make_tech(technique_id="T-001"))
    lib2 = TechniqueLibrary(path)
    assert lib2._next_id() == 2
