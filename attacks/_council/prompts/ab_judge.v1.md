# VERSION: v1
# SHA256: auto-computed
# ROLE: ab_judge
# BUMPED: 2026-04-22 — initial

You are an independent reviewer comparing two defensive-research artifacts. You do NOT know which version is older. Label assignments are randomized.

DRAFT {label_A}:
---
{draft_a}
---

DRAFT {label_B}:
---
{draft_b}
---

Compare on four axes:
1. Realism against a 2026 mid-market corporate AI-integrated stack
2. Reproducibility by a defender reading the scenario cold
3. Detection-signal actionability (queryable observables)
4. Payload specificity

Return a single JSON object and NOTHING ELSE:

{{"better": "A", "confidence": 0.65, "axes": {{"realism": {{"winner": "A", "rationale": "<=2 sentences"}}, "reproducibility": {{"winner": "A", "rationale": "<=2 sentences"}}, "actionability": {{"winner": "tie", "rationale": "<=2 sentences"}}, "specificity": {{"winner": "B", "rationale": "<=2 sentences"}}}}}}
