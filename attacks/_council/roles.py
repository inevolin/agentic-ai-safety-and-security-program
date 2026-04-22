"""Prompt-template loader with SHA256 content hashing.

Every template file is `<role>.v<N>.md` with a metadata header
(# VERSION / # SHA256 / # ROLE / # BUMPED). The header is stripped before
hashing and rendering so the hash reflects the template body only.
"""
from __future__ import annotations

import hashlib
import re
from dataclasses import dataclass
from pathlib import Path


_META_BLOCK_RE = re.compile(r"\A((?:#\s+\w+:\s*.*\n)+)\n?")


@dataclass
class PromptTemplate:
    role: str
    version: str
    body: str
    sha256: str
    path: Path

    def render(self, **kwargs) -> str:
        return self.body.format(**kwargs)


def load_prompt(
    prompts_dir: Path, role: str, version: str = "v1"
) -> PromptTemplate:
    path = prompts_dir / f"{role}.{version}.md"
    if not path.exists():
        raise FileNotFoundError(f"prompt template not found: {path}")
    full = path.read_text()
    body = _META_BLOCK_RE.sub("", full, count=1)
    sha = hashlib.sha256(body.encode("utf-8")).hexdigest()
    return PromptTemplate(
        role=role, version=version, body=body, sha256=sha, path=path
    )
