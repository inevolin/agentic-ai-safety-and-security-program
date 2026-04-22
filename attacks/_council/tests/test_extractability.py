"""Tests for scenario extractability classifier."""
from __future__ import annotations

from pathlib import Path

from extractability import classify


def test_paper_only_multi_tool_scenario(fake_scenario_paper: Path):
    result = classify(fake_scenario_paper.read_text())
    assert result.extractable is False


def test_extractable_single_shot_payload(fake_scenario_extractable: Path):
    result = classify(fake_scenario_extractable.read_text())
    assert result.extractable is True


def test_explicit_known_extractable_id():
    for known_id in ["F1", "F4", "E2", "E3", "SC1", "H1"]:
        sample = f"""### {known_id}. Test

**Automation:** Fully-auto
**Injection channel:** PDF attachment

**Payload (example):**
```
RESEARCH ARTIFACT
dummy payload
```
"""
        r = classify(sample)
        assert r.extractable is True, f"Expected {known_id} extractable"


def test_human_in_loop_not_extractable():
    sample = """### X1. Human-loop

**Automation:** human-in-loop
**Injection channel:** slide comment

**Payload (example):**
```
placeholder
```
"""
    assert classify(sample).extractable is False
