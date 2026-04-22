"""Tests for the stop-rule decider."""
from __future__ import annotations

from stop_rule import StopSignals, decide_stop


def _signals(**overrides) -> StopSignals:
    defaults = dict(
        round_num=25,
        max_rounds=100,
        min_rounds=20,
        semantic_moved=False,
        harness_ci_narrowing=False,
        ab_last_conf=0.6,
        ab_prev_conf=0.6,
        skeptic_ran=False,
        skeptic_broke=False,
        skeptic_clean_rounds=0,
    )
    defaults.update(overrides)
    return StopSignals(**defaults)


def test_below_min_never_stops():
    s = _signals(round_num=10)
    assert decide_stop(s, consecutive_no_move=10).decision == "continue"


def test_ceiling_stops_even_if_signals_active():
    s = _signals(round_num=100, semantic_moved=True)
    d = decide_stop(s, consecutive_no_move=0)
    assert d.decision == "stop"
    assert d.reason == "ceiling"


def test_plateau_stops_after_2_no_move_rounds():
    s = _signals(round_num=22)
    d = decide_stop(s, consecutive_no_move=2)
    assert d.decision == "stop"
    assert d.reason == "plateau"


def test_any_signal_prevents_plateau():
    s = _signals(round_num=22, semantic_moved=True)
    assert decide_stop(s, consecutive_no_move=0).decision == "continue"


def test_ab_saturation_both_fires_as_signal():
    # both decennials at 0.85 → saturated → score_moved True → continue
    s = _signals(round_num=30, ab_last_conf=0.85, ab_prev_conf=0.82)
    assert decide_stop(s, consecutive_no_move=0).decision == "continue"


def test_hardened_requires_skeptic_clean_3_and_ab_beats_r00():
    s = _signals(
        round_num=60,
        skeptic_ran=True,
        skeptic_broke=False,
        skeptic_clean_rounds=3,
        ab_last_conf=0.72,
    )
    d = decide_stop(s, consecutive_no_move=0, ab_says_current_beats_r00=True)
    assert d.decision == "stop"
    assert d.reason == "hardened"


def test_hardened_not_fired_if_ab_inconclusive():
    s = _signals(
        round_num=60,
        skeptic_ran=True,
        skeptic_broke=False,
        skeptic_clean_rounds=3,
    )
    d = decide_stop(s, consecutive_no_move=0, ab_says_current_beats_r00=False)
    assert d.decision == "continue"
