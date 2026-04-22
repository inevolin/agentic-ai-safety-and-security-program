"""2D-factorial jitter schedule per spec §7a.

Order: fill v1 across all temps, then v2, then v3. Wilson CI early-stop
applied after each firing. Cap at 9 for the grid; replicates up to 12.
"""
from __future__ import annotations

from dataclasses import dataclass

from config import (
    HARNESS_GRID_MAX_RUNS,
    HARNESS_SYSPROMPT_VARIANTS,
    HARNESS_TEMPS,
    HARNESS_WILSON_TIGHT_WIDTH,
    HARNESS_WITH_REPLICATES_CAP,
)
from scoring import wilson_95_ci


@dataclass
class FiringPlan:
    run_idx: int
    temp: float
    sysprompt_variant: str
    replicate: bool


def _canonical_order() -> list[tuple[str, float]]:
    """v1×3T, then v2×3T, then v3×3T."""
    out = []
    for v in HARNESS_SYSPROMPT_VARIANTS:
        for t in HARNESS_TEMPS:
            out.append((v, t))
    return out


def plan_next_firing(
    prior_firings: list[tuple[str, float, bool]],
) -> FiringPlan:
    """prior_firings: list of (variant, temp, success) already-completed.
    Returns the next (variant, temp) per canonical order."""
    run_idx = len(prior_firings) + 1
    order = _canonical_order()
    if run_idx <= len(order):
        v, t = order[run_idx - 1]
        return FiringPlan(run_idx=run_idx, temp=t, sysprompt_variant=v, replicate=False)
    # Beyond the 9-cell grid → replicate v1/T=0 (most-ambiguous first-cell)
    return FiringPlan(run_idx=run_idx, temp=0.0, sysprompt_variant="v1", replicate=True)


def should_stop(prior_firings: list[tuple[str, float, bool]]) -> tuple[bool, str]:
    n = len(prior_firings)
    if n == 0:
        return False, ""
    successes = sum(1 for _, _, ok in prior_firings if ok)
    lo, hi = wilson_95_ci(successes, n)
    width = hi - lo

    if n >= HARNESS_WITH_REPLICATES_CAP:
        return True, "replicate cap reached"
    if n >= HARNESS_GRID_MAX_RUNS and not (lo < 0.5 < hi):
        return True, "full grid complete, unambiguous"
    if width < HARNESS_WILSON_TIGHT_WIDTH:
        return True, "CI tight"
    if n >= 6 and successes in (0, n):
        return True, "decisively one-sided"
    if n >= HARNESS_GRID_MAX_RUNS:
        return False, "grid complete but ambiguous — extend into replicates"
    return False, "continue grid"
