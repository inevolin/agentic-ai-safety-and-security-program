"""Promptfoo LM Security DB novelty oracle per spec §8.

One-time index build: reads every `sources/*/{8-hex-prefix}-*.md` file,
embeds it via an injected embed_fn (nomic-embed-text at runtime),
stores in an Annoy index. Per-round: embed chairman draft, compute
nearest-neighbor distance for `novelty_score_against_promptfoo_only`.
"""
from __future__ import annotations

import json
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Callable

from annoy import AnnoyIndex


_HEX8_RE = re.compile(r"^[0-9a-f]{8}")


@dataclass
class NearestMatch:
    hash_prefix: str
    source_file: str
    category: str
    distance: float


def build_index(
    sources_root: Path,
    idx_path: Path,
    meta_path: Path,
    embed_fn: Callable[[str], list[float]],
    vector_dim: int,
    n_trees: int = 20,
) -> int:
    """Scan sources_root/*/{hex-prefix}-*.md; embed; write annoy + metadata.
    Returns count of indexed entries."""
    idx = AnnoyIndex(vector_dim, "angular")
    metadata: dict[str, dict] = {}
    count = 0
    for category_dir in sorted(sources_root.iterdir()):
        if not category_dir.is_dir():
            continue
        for md in sorted(category_dir.glob("*.md")):
            stem = md.stem
            prefix = stem.split("-", 1)[0].lower()
            if not _HEX8_RE.match(prefix):
                continue
            text = md.read_text()
            vec = embed_fn(text)
            if len(vec) != vector_dim:
                raise ValueError(
                    f"embed_fn returned dim {len(vec)}, expected {vector_dim}"
                )
            idx.add_item(count, vec)
            try:
                src_str = str(md.relative_to(sources_root.parent))
            except ValueError:
                src_str = str(md)
            metadata[str(count)] = {
                "hash_prefix": prefix,
                "source_file": src_str,
                "category": category_dir.name,
            }
            count += 1
    idx.build(n_trees)
    idx.save(str(idx_path))
    meta_path.write_text(json.dumps(metadata, indent=2))
    return count


class PromptfooIndex:
    def __init__(self, idx_path: Path, meta_path: Path, vector_dim: int) -> None:
        self._idx = AnnoyIndex(vector_dim, "angular")
        self._idx.load(str(idx_path))
        self._meta = json.loads(meta_path.read_text())
        self._vector_dim = vector_dim

    def nearest_k(
        self, query_embedding: list[float], k: int = 5
    ) -> list[NearestMatch]:
        # search_k=10000 handles small indexes where annoy's default
        # partitioning may miss items near the boundary.
        ids, dists = self._idx.get_nns_by_vector(
            query_embedding, k, search_k=10000, include_distances=True
        )
        out = []
        for i, d in zip(ids, dists):
            m = self._meta[str(i)]
            out.append(NearestMatch(
                hash_prefix=m["hash_prefix"],
                source_file=m["source_file"],
                category=m["category"],
                distance=d,
            ))
        return out
