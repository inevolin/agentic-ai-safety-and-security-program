"""Tests for 2D-factorial adaptive harness schedule (spec §7a)."""
from __future__ import annotations

from harness_schedule import plan_next_firing, should_stop


def test_first_firing_is_v1_t0():
    plan = plan_next_firing(prior_firings=[])
    assert plan.temp == 0.0
    assert plan.sysprompt_variant == "v1"
    assert plan.run_idx == 1


def test_second_firing_keeps_v1():
    priors = [("v1", 0.0, True)]
    plan = plan_next_firing(prior_firings=priors)
    assert plan.sysprompt_variant == "v1"
    assert plan.temp == 0.5


def test_fourth_firing_moves_to_v2():
    priors = [
        ("v1", 0.0, True), ("v1", 0.5, True), ("v1", 1.0, False),
    ]
    plan = plan_next_firing(prior_firings=priors)
    assert plan.sysprompt_variant == "v2"
    assert plan.temp == 0.0


def test_seventh_firing_moves_to_v3():
    priors = [
        ("v1", 0.0, True), ("v1", 0.5, True), ("v1", 1.0, False),
        ("v2", 0.0, True), ("v2", 0.5, False), ("v2", 1.0, False),
    ]
    plan = plan_next_firing(prior_firings=priors)
    assert plan.sysprompt_variant == "v3"
    assert plan.temp == 0.0


def test_should_stop_when_ci_tight():
    priors = [
        ("v1", 0.0, True), ("v1", 0.5, True), ("v1", 1.0, True),
        ("v2", 0.0, True), ("v2", 0.5, True), ("v2", 1.0, True),
    ]
    stop, reason = should_stop(prior_firings=priors)
    # 6/6 → Wilson CI is [0.61, 1.0] so width=0.39, NOT < 0.2,
    # but "decisively one-sided" kicks in for n>=6 with successes in {0,n}
    assert stop is True
    assert "one-sided" in reason or "tight" in reason


def test_should_continue_when_ambiguous_early():
    priors = [("v1", 0.0, True), ("v1", 0.5, False), ("v1", 1.0, True)]
    stop, _ = should_stop(prior_firings=priors)
    assert stop is False


def test_grid_cap_9_enforced():
    priors = [
        ("v1", 0.0, True), ("v1", 0.5, False), ("v1", 1.0, True),
        ("v2", 0.0, False), ("v2", 0.5, True), ("v2", 1.0, False),
        ("v3", 0.0, True), ("v3", 0.5, False), ("v3", 1.0, True),
    ]
    # 5/9 successes, CI straddles 0.5 → "grid complete but ambiguous"
    # should_stop returns False but stop message flags state
    stop, reason = should_stop(prior_firings=priors)
    # Per our rule: n >= 9 AND CI covers 0.5 → do not stop, but log message
    assert "grid complete" in reason or "ambiguous" in reason


def test_grid_cap_stops_when_unambiguous_at_9():
    priors = [("v1", 0.0, True)] * 9
    priors = [(v, t, True) for (v, t, _) in [
        ("v1", 0.0, True), ("v1", 0.5, True), ("v1", 1.0, True),
        ("v2", 0.0, True), ("v2", 0.5, True), ("v2", 1.0, True),
        ("v3", 0.0, True), ("v3", 0.5, True), ("v3", 1.0, True),
    ]]
    stop, reason = should_stop(prior_firings=priors)
    assert stop is True
