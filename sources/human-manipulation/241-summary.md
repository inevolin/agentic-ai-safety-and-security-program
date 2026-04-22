# Summary: A Meta-Analysis of the Persuasive Power of Large Language Models

**Source file:** 241-arxiv-2512.01431-meta-analysis-persuasive-power-large-language-models.md
**Paper/post ID:** 241

## Attack Vector(s)
Meta-analysis (not attack paper). Synthesizes 7 eligible studies (N=17,422) comparing LLM vs human persuasion. Findings:
- **No overall significant difference** (Hedges' g = 0.02, p=.530).
- Substantial heterogeneity (I²=76%) — effect depends on context.
- No single moderator reached significance, but combined (model × conversation design × domain) explain 82% of variance.

Relevant theories: Elaboration Likelihood Model (central vs peripheral routes), Persuasion Knowledge Model (PKM — when audiences recognize persuasion they resist).

## Real-World Applicability
Interprets divergent prior findings: whether an LLM is more persuasive than a human depends on model, format, topic. Implication for threat modeling: LLM persuasion risk is context-specific; don't assume "LLMs aren't persuasive" from one study.

## Reproduction Examples
### Extrapolated examples (moderator-aware test matrix for red-teaming):

```python
conditions = {
    "model": ["GPT-4", "Claude 3.7", "Gemini 2.5", "Mistral Large"],
    "format": ["one-shot message", "interactive dialogue", "multi-turn debate"],
    "domain": ["health", "politics", "climate", "consumer"],
    "recipient_motivation": ["high", "low"]
}
# Meta-analysis says: measure persuasion effect per CELL, not pooled.
```

Standard outcome measures to include:
- Attitude change (Likert).
- Behavioral intention.
- Actual behavior (petition signing, donation).
- Perceived Message Effectiveness (PME).

## Defenses / Mitigations Discussed
- Activate PKM defenses: tell users they are being addressed by AI (reduces peripheral-route influence).
- Contextual evaluation per model × domain × format.

## Key Takeaways for a Safety Framework
- Evaluation must be contextual; pooled numbers hide risk in specific domains.
- Include all three outcome dimensions (attitude, intention, behavior) in safety evals.
- Central-route route (deliberate argument engagement) is engaged when users know it's AI — mandatory AI disclosure is a partial mitigation.
- Combined-moderator analysis suggests building a "persuasion-risk matrix": model × domain × format × audience. Benchmark each cell.
- Meta-analysis reveals current field has small N — monitor new studies, update defenses.
