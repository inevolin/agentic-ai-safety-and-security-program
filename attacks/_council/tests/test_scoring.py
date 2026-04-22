"""Tests for scoring primitives."""
from __future__ import annotations

from scoring import (
    mean_reciprocal_rank,
    rank_variance,
    semantic_diff_bytes,
    wilson_95_ci,
)


def test_wilson_ci_all_successes():
    lo, hi = wilson_95_ci(successes=3, trials=3)
    assert 0.0 < lo < 1.0
    assert hi <= 1.0
    assert lo > 0.3


def test_wilson_ci_all_failures():
    lo, hi = wilson_95_ci(successes=0, trials=3)
    assert lo == 0.0 or lo < 0.01
    assert hi < 0.7


def test_wilson_ci_midpoint():
    lo, hi = wilson_95_ci(successes=3, trials=6)
    assert lo < 0.5 < hi


def test_wilson_ci_zero_trials_returns_full_uncertainty():
    lo, hi = wilson_95_ci(successes=0, trials=0)
    assert lo == 0.0
    assert hi == 1.0


def test_wilson_ci_width_shrinks_with_more_trials():
    lo3, hi3 = wilson_95_ci(successes=2, trials=3)
    lo30, hi30 = wilson_95_ci(successes=20, trials=30)
    assert (hi30 - lo30) < (hi3 - lo3)


def test_semantic_diff_identical_is_zero():
    assert semantic_diff_bytes("same text", "same text") == 0


def test_semantic_diff_ignores_header_metadata():
    a = "# VERSION: v1\n# SHA256: abc\n\nBody."
    b = "# VERSION: v2\n# SHA256: xyz\n\nBody."
    assert semantic_diff_bytes(a, b) == 0


def test_semantic_diff_counts_added_bytes():
    assert semantic_diff_bytes("hello", "hello world") >= 6


def test_semantic_diff_symmetric():
    a, b = "one line of text", "two lines of text here"
    assert semantic_diff_bytes(a, b) == semantic_diff_bytes(b, a)


def test_semantic_diff_strips_whitespace_runs():
    assert semantic_diff_bytes("hello    world", "hello world") == 0


def test_mrr_basic():
    rankings = [
        ["A", "B", "C", "D"],
        ["B", "A", "C", "D"],
        ["A", "C", "B", "D"],
    ]
    mrr = mean_reciprocal_rank(rankings, candidates=["A", "B", "C", "D"])
    # A: (1 + 1/2 + 1) / 3 = 0.8333
    assert abs(mrr["A"] - 0.8333) < 0.001
    # D: (1/4 + 1/4 + 1/4) / 3 = 0.25
    assert abs(mrr["D"] - 0.25) < 0.001


def test_rank_variance_zero_when_unanimous():
    rankings = [["A", "B"], ["A", "B"], ["A", "B"]]
    assert rank_variance(rankings, candidates=["A", "B"]) == 0.0


def test_rank_variance_positive_when_disagreement():
    rankings = [["A", "B"], ["B", "A"], ["A", "B"]]
    assert rank_variance(rankings, candidates=["A", "B"]) > 0.0
