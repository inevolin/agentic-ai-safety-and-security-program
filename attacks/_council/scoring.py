"""Statistical and diff-based scoring primitives."""
from __future__ import annotations

import difflib
import math
import re
from collections import defaultdict


def wilson_95_ci(successes: int, trials: int) -> tuple[float, float]:
    """Wilson score interval at 95% confidence. Returns (lo, hi) in [0,1].

    No trials → full uncertainty (0.0, 1.0).
    """
    if trials <= 0:
        return (0.0, 1.0)
    z = 1.959963984540054  # 95% two-sided
    p = successes / trials
    denom = 1 + z * z / trials
    center = (p + z * z / (2 * trials)) / denom
    margin = z * math.sqrt((p * (1 - p) + z * z / (4 * trials)) / trials) / denom
    lo = max(0.0, center - margin)
    hi = min(1.0, center + margin)
    return (lo, hi)


def ci_width(lo: float, hi: float) -> float:
    return hi - lo


_META_LINE_RE = re.compile(r"^# (VERSION|SHA256|BUMPED|ROLE):.*$", re.MULTILINE)
_WHITESPACE_RE = re.compile(r"\s+")


def _strip_for_diff(text: str) -> str:
    text = _META_LINE_RE.sub("", text)
    text = _WHITESPACE_RE.sub(" ", text).strip()
    return text


def semantic_diff_bytes(a: str, b: str) -> int:
    """Byte count of semantic differences between two drafts.

    Strips: metadata headers (# VERSION / # SHA256 / # BUMPED / # ROLE),
    collapses whitespace runs. Counts the sum of inserted + deleted
    bytes in the normalized strings.
    """
    na, nb = _strip_for_diff(a), _strip_for_diff(b)
    if na == nb:
        return 0
    matcher = difflib.SequenceMatcher(None, na, nb, autojunk=False)
    total = 0
    for op, i1, i2, j1, j2 in matcher.get_opcodes():
        if op == "insert":
            total += j2 - j1
        elif op == "delete":
            total += i2 - i1
        elif op == "replace":
            total += (i2 - i1) + (j2 - j1)
    return total


def mean_reciprocal_rank(
    rankings: list[list[str]], candidates: list[str]
) -> dict[str, float]:
    """Average reciprocal rank across rankers per candidate.

    Missing from a ranking → treated as last position + 1.
    """
    n = len(rankings)
    if n == 0:
        return {c: 0.0 for c in candidates}
    scores: dict[str, float] = defaultdict(float)
    for ranking in rankings:
        for c in candidates:
            try:
                pos = ranking.index(c)
                scores[c] += 1.0 / (pos + 1)
            except ValueError:
                scores[c] += 1.0 / (len(ranking) + 1)
    return {c: scores[c] / n for c in candidates}


def rank_variance(
    rankings: list[list[str]], candidates: list[str]
) -> float:
    """Variance of position assignments across rankers, averaged over
    candidates. 0 = unanimous; higher = more disagreement."""
    n = len(rankings)
    if n < 2:
        return 0.0
    total = 0.0
    for c in candidates:
        positions: list[int] = []
        for ranking in rankings:
            try:
                positions.append(ranking.index(c))
            except ValueError:
                positions.append(len(ranking))
        mean = sum(positions) / len(positions)
        var = sum((p - mean) ** 2 for p in positions) / len(positions)
        total += var
    return total / max(1, len(candidates))
