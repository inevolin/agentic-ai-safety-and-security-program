"""Stop-rule decider combining objective signals per spec §7."""
from __future__ import annotations

from dataclasses import dataclass
from typing import Literal

from config import (
    AB_IMPROVEMENT_DELTA,
    AB_SATURATION_THRESHOLD,
    SKEPTIC_CLEAN_ROUNDS_FOR_HARDENED,
)


@dataclass
class StopSignals:
    round_num: int
    max_rounds: int
    min_rounds: int
    semantic_moved: bool
    harness_ci_narrowing: bool
    ab_last_conf: float
    ab_prev_conf: float
    skeptic_ran: bool
    skeptic_broke: bool
    skeptic_clean_rounds: int


@dataclass
class StopDecision:
    decision: Literal["continue", "stop"]
    reason: str = ""


def _ab_signal(last: float, prev: float) -> bool:
    if last > prev + AB_IMPROVEMENT_DELTA:
        return True
    if last >= AB_SATURATION_THRESHOLD and prev >= AB_SATURATION_THRESHOLD:
        return True
    return False


def decide_stop(
    s: StopSignals,
    consecutive_no_move: int,
    ab_says_current_beats_r00: bool = False,
) -> StopDecision:
    """Apply spec §7 stop rule. Caller manages consecutive_no_move counter."""
    if s.round_num >= s.max_rounds:
        return StopDecision("stop", "ceiling")
    if s.round_num < s.min_rounds:
        return StopDecision("continue")

    score_moved = (
        s.semantic_moved
        or s.harness_ci_narrowing
        or _ab_signal(s.ab_last_conf, s.ab_prev_conf)
    )

    if not score_moved and consecutive_no_move >= 2:
        return StopDecision("stop", "plateau")

    if (
        s.skeptic_ran
        and not s.skeptic_broke
        and s.skeptic_clean_rounds >= SKEPTIC_CLEAN_ROUNDS_FOR_HARDENED
        and ab_says_current_beats_r00
    ):
        return StopDecision("stop", "hardened")

    return StopDecision("continue")
