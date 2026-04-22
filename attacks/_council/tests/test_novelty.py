"""Tests for novelty scorer with library-borrow exclusion per spec §8 + M4."""
from __future__ import annotations

from novelty import NoveltyReport, compute_novelty_scores


def test_promptfoo_only_is_minimum_over_promptfoo():
    r = compute_novelty_scores(
        promptfoo_distances=[0.4, 0.3, 0.5],
        library_distances=[0.1],
        borrowed_technique_ids=[],
    )
    assert isinstance(r, NoveltyReport)
    assert abs(r.score_against_promptfoo_only - 0.3) < 0.001


def test_against_all_includes_library_but_excludes_borrows():
    r = compute_novelty_scores(
        promptfoo_distances=[0.4],
        library_distances=[0.05, 0.2],
        borrowed_technique_ids=["T-001"],
        library_borrow_distances=[0.05],
    )
    assert abs(r.score_against_all - 0.2) < 0.001


def test_re_derivation_fires_only_on_promptfoo():
    r = compute_novelty_scores(
        promptfoo_distances=[0.2],
        library_distances=[0.05],
        borrowed_technique_ids=["T-001"],
        library_borrow_distances=[0.05],
    )
    assert r.promptfoo_re_derivation_candidate is True


def test_no_re_derivation_when_promptfoo_distant():
    r = compute_novelty_scores(
        promptfoo_distances=[0.6],
        library_distances=[0.05],
        borrowed_technique_ids=["T-001"],
        library_borrow_distances=[0.05],
    )
    assert r.promptfoo_re_derivation_candidate is False
