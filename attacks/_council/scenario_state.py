"""Per-scenario state machine per spec §13."""
from __future__ import annotations

from enum import Enum

from config import MAX_REOPENS


class State(str, Enum):
    UNSEEN = "UNSEEN"
    R0_BASELINE = "R0_BASELINE"
    RUNNING = "RUNNING"
    CONVERGED = "CONVERGED"
    HARDENED = "HARDENED"
    CEILING = "CEILING"
    FAILED = "FAILED"
    PROPOSED = "PROPOSED"


_TERMINAL = {State.CONVERGED, State.HARDENED, State.CEILING, State.FAILED}


class ScenarioMachine:
    def __init__(self, scenario_id: str, state: State = State.UNSEEN) -> None:
        self.scenario_id = scenario_id
        self.state = state
        self.reopen_count = 0

    def start_baseline(self) -> None:
        self._require(State.UNSEEN)
        self.state = State.R0_BASELINE

    def baseline_complete(self) -> None:
        self._require(State.R0_BASELINE)
        self.state = State.RUNNING

    def stop_with_reason(self, reason: str) -> None:
        if self.state not in {State.R0_BASELINE, State.RUNNING}:
            raise RuntimeError(f"cannot stop from {self.state}")
        mapping = {
            "plateau": State.CONVERGED,
            "hardened": State.HARDENED,
            "ceiling": State.CEILING,
            "safety_failure": State.FAILED,
            "reopen_thrash": State.FAILED,
        }
        target = mapping.get(reason, State.CONVERGED)
        self.state = target

    def reopen(self) -> None:
        if self.state == State.FAILED:
            raise RuntimeError(f"cannot reopen from {self.state}")
        if self.state not in _TERMINAL:
            raise RuntimeError(f"cannot reopen from {self.state}")
        if self.reopen_count >= MAX_REOPENS:
            self.state = State.FAILED
            raise RuntimeError("reopen_thrash: exceeded MAX_REOPENS")
        self.reopen_count += 1
        self.state = State.RUNNING

    def is_terminal(self) -> bool:
        return self.state in _TERMINAL

    def _require(self, expected: State) -> None:
        if self.state != expected:
            raise RuntimeError(f"expected {expected}, was {self.state}")
