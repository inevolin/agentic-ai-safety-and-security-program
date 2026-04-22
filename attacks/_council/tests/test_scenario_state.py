"""Tests for per-scenario state transitions per spec §13."""
from __future__ import annotations

import pytest

from scenario_state import ScenarioMachine, State


def test_initial_state_is_unseen():
    m = ScenarioMachine("F1")
    assert m.state == State.UNSEEN


def test_transition_to_r0_baseline():
    m = ScenarioMachine("F1")
    m.start_baseline()
    assert m.state == State.R0_BASELINE


def test_baseline_complete_moves_to_running():
    m = ScenarioMachine("F1")
    m.start_baseline()
    m.baseline_complete()
    assert m.state == State.RUNNING


def test_plateau_moves_to_converged():
    m = ScenarioMachine("F1")
    m.start_baseline(); m.baseline_complete()
    m.stop_with_reason("plateau")
    assert m.state == State.CONVERGED


def test_reopen_from_converged():
    m = ScenarioMachine("F1")
    m.start_baseline(); m.baseline_complete()
    m.stop_with_reason("plateau")
    m.reopen()
    assert m.state == State.RUNNING
    assert m.reopen_count == 1


def test_reopen_thrash_transitions_to_failed():
    m = ScenarioMachine("F1")
    m.start_baseline(); m.baseline_complete()
    # 5 successful stop/reopen cycles
    for _ in range(5):
        m.stop_with_reason("plateau")
        m.reopen()
    # 6th stop then 6th reopen attempt → thrash
    m.stop_with_reason("plateau")
    with pytest.raises(RuntimeError, match="reopen_thrash"):
        m.reopen()
    assert m.state == State.FAILED


def test_safety_failure_moves_to_failed():
    m = ScenarioMachine("F1")
    m.start_baseline(); m.baseline_complete()
    m.stop_with_reason("safety_failure")
    assert m.state == State.FAILED
