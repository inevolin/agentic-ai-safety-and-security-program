# VERSION: v1
# SHA256: auto-computed
# ROLE: peer_rank
# BUMPED: 2026-04-22 — initial

You are one of four anonymous reviewers ranking four anonymized proposals (A/B/C/D) that improve an enterprise attack scenario. Rank on: realism (works in 2026 mid-market stack), specificity (concrete, not vague), novelty (not a duplicate of existing scenario content), detection-gap (exposes a signal defenders currently miss).

SCENARIO (for context):
---
{scenario_markdown}
---

### A
{proposal_A}

### B
{proposal_B}

### C
{proposal_C}

### D
{proposal_D}

Return ONE JSON object and NOTHING ELSE. No preamble, no code fences, no trailing prose.

{{"ranking": ["best", "second", "third", "worst"], "rationale": {{"A": "<1 sentence>", "B": "<1 sentence>", "C": "<1 sentence>", "D": "<1 sentence>"}}}}
