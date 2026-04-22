"""Tests for orchestrator."""
from __future__ import annotations

from pathlib import Path

import pytest

from orchestrator import Orchestrator, OrchestratorConfig


@pytest.fixture
def orch_config(tmp_council_root: Path) -> OrchestratorConfig:
    prompts = tmp_council_root / "prompts"
    prompts.mkdir(exist_ok=True)
    return OrchestratorConfig(
        council_dir=tmp_council_root,
        scenarios_dir=tmp_council_root / "scenarios",
        versions_dir=tmp_council_root / "versions",
        logs_dir=tmp_council_root / "logs",
        proposed_dir=tmp_council_root / "proposed",
        state_file=tmp_council_root / ".council-state.json",
        min_rounds=1, max_rounds=1,
        model_ids={
            "opus": "claude-opus-4-7",
            "sonnet": "claude-sonnet-4-6",
            "haiku": "claude-haiku-4-5-20251001",
        },
    )


def test_orchestrator_initialize_writes_state(orch_config):
    orch = Orchestrator(config=orch_config)
    orch.initialize_state()
    assert orch_config.state_file.exists()


def test_orchestrator_loads_empty_state(orch_config):
    orch = Orchestrator(config=orch_config)
    state = orch.load_or_reconstruct_state()
    # Without state_file, reconstruct from (empty) versions dir
    assert state.get("global_round_counter") == 0
    assert state["scenarios"] == {}


def test_resume_rejects_model_id_mismatch(orch_config):
    orch1 = Orchestrator(config=orch_config)
    orch1.initialize_state()
    # Mutate pinning in config
    orch_config.model_ids = {
        "opus": "claude-opus-9-9",
        "sonnet": "s",
        "haiku": "h",
    }
    orch2 = Orchestrator(config=orch_config)
    with pytest.raises(RuntimeError, match="model pinning mismatch"):
        orch2.resume()


def test_list_scenarios_filters_by_id(
    orch_config, tmp_council_root, fake_scenario_paper
):
    orch_config.scenarios_dir.mkdir(parents=True, exist_ok=True)
    (orch_config.scenarios_dir / "F99.md").write_text(fake_scenario_paper.read_text())
    orch = Orchestrator(config=orch_config)
    matches = orch.list_scenarios(filter_ids=["F99"])
    assert len(matches) == 1
    empty = orch.list_scenarios(filter_ids=["X99"])
    assert empty == []
