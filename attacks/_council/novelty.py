"""Novelty scoring per spec §8 with M4 fix (library-borrow exclusion)."""
from __future__ import annotations

from dataclasses import dataclass


@dataclass
class NoveltyReport:
    score_against_promptfoo_only: float
    score_against_all: float
    promptfoo_re_derivation_candidate: bool
    library_borrows_excluded: list[str]


def compute_novelty_scores(
    promptfoo_distances: list[float],
    library_distances: list[float],
    borrowed_technique_ids: list[str],
    library_borrow_distances: list[float] | None = None,
) -> NoveltyReport:
    """Returns two novelty scores:
      - score_against_promptfoo_only: used for re-derivation flag
      - score_against_all: excludes this-round borrows per M4 fix
    """
    library_borrow_distances = library_borrow_distances or []
    exclude_set = set(library_borrow_distances)

    p_min = min(promptfoo_distances) if promptfoo_distances else 1.0
    remaining_library = [d for d in library_distances if d not in exclude_set]
    combined = promptfoo_distances + remaining_library
    all_min = min(combined) if combined else 1.0

    re_derivation = p_min < 0.3

    return NoveltyReport(
        score_against_promptfoo_only=p_min,
        score_against_all=all_min,
        promptfoo_re_derivation_candidate=re_derivation,
        library_borrows_excluded=list(borrowed_technique_ids),
    )
