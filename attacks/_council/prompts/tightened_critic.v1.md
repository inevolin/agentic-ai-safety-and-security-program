# VERSION: v1
# SHA256: auto-computed
# ROLE: tightened_critic
# BUMPED: 2026-04-22 — initial

You are a critic re-running after the first critique was degraded by the safety filter. Do NOT reference any real entity, company, person, or domain. Use only placeholders already present in the scenario.

SCENARIO:
---
{scenario_markdown}
---

PROPOSALS:
{proposals}

Same output format as balanced_critic_local. Keep strictly inside scenario-provided placeholders.

{{"A": {{"realism": 3, "novelty": 3, "detectability_gap": 3, "specificity": 3, "rationale": "<1 sentence>"}}, "B": {{"realism": 3, "novelty": 3, "detectability_gap": 3, "specificity": 3, "rationale": "<1 sentence>"}}, "C": {{"realism": 3, "novelty": 3, "detectability_gap": 3, "specificity": 3, "rationale": "<1 sentence>"}}, "D": {{"realism": 3, "novelty": 3, "detectability_gap": 3, "specificity": 3, "rationale": "<1 sentence>"}}, "new_weakness_found": false}}
