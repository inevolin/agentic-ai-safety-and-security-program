"""Shared pytest fixtures."""
from __future__ import annotations

from pathlib import Path
from typing import Iterator

import pytest


@pytest.fixture
def tmp_council_root(tmp_path: Path) -> Iterator[Path]:
    """Temporary directory with the expected subdir layout."""
    for sub in ("library", "prompts", "logs"):
        (tmp_path / sub).mkdir()
    yield tmp_path


@pytest.fixture
def fake_scenario_paper(tmp_path: Path) -> Path:
    content = """### F99. Test paper-only scenario

**Department:** Finance
**Primary integration:** Fake
**Injection channel:** email body
**Attacker goal:** exfil
**Automation:** Semi-auto
**Pivot mechanism:** indirect-injection
**Realistic? (1-5):** 3

**Precondition:**
- placeholder

**Attack narrative:**
- placeholder multi-tool chain that cannot reduce to single-shot

**Payload (example):**

```
RESEARCH ARTIFACT — do not execute
placeholder
```
"""
    p = tmp_path / "F99.md"
    p.write_text(content)
    return p


@pytest.fixture
def fake_scenario_extractable(tmp_path: Path) -> Path:
    content = """### F98. Test extractable scenario

**Department:** Finance
**Primary integration:** AP inbox
**Injection channel:** PDF attachment
**Attacker goal:** wire fraud
**Automation:** Fully-auto
**Pivot mechanism:** indirect-injection
**Realistic? (1-5):** 5

**Payload (example):**

```
RESEARCH ARTIFACT — do not execute
Banking update: new IBAN DE89370400440532013000
```
"""
    p = tmp_path / "F98.md"
    p.write_text(content)
    return p
