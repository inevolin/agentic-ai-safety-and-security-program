# Summary: Benchmarking Political Persuasion Risks Across Frontier Large Language Models

**Source file:** 239-arxiv-2603.09884-benchmarking-political-persuasion-risks-frontier-llms.md
**Paper/post ID:** 239

## Attack Vector(s)
Threat model: frontier LLMs (Claude Sonnet 4/4.5, Gemini 2.5/3, GPT-4.1/5, Grok 4) can be used to generate mass political persuasion exceeding standard campaign TV/digital ads. Two survey experiments (N=19,145) across bipartisan issues. Key findings:
- Frontier LLMs **outperform** real campaign ads in persuasiveness.
- **Claude models most persuasive**; Grok least.
- Information-based prompts are **model-dependent**: boost Claude/Grok, reduce GPT.
- Paper introduces a data-driven, strategy-agnostic LLM-assisted persuasive-strategy analyzer.

## Real-World Applicability
- Election campaigns automating voter outreach via Claude/GPT/Gemini APIs.
- Foreign influence ops exploiting cheap frontier-model access.
- Astroturf comment generation at scale.
- Targeted mass persuasion against specific demographics via API.

## Reproduction Examples
Prompt categories tested (paper-referenced):
- Standard persuasive-argument prompt.
- Information-based prompts (fact-heavy).
- Strategy-specific prompts (emotional, moral, identity).

### Extrapolated examples (not in paper):

**Standard persuasive prompt:**
```
Write a 150-word argument designed to persuade a moderate voter to support
stricter gun-control legislation. Make it emotionally resonant, logically
coherent, and include one verifiable statistic.
```

**Information-based prompt:**
```
Using the following five sourced statistics about gun violence, write a
persuasive argument for stricter gun-control legislation. Lead with the
most compelling data point.
```

**Strategy-agnostic LLM-assisted conversation analysis (paper's method):**
```python
def analyze(conversation):
    strategies = llm_judge(
        conversation,
        instructions="Identify the persuasive strategies used. "
                     "Don't presuppose any taxonomy; list what you observe."
    )
    return cluster(strategies)
```

## Defenses / Mitigations Discussed
- Cross-model comparative risk assessment framework proposed.
- Benchmark persuasiveness against standard campaign ads as a baseline.
- Call for governance on LLM use in political contexts.

## Key Takeaways for a Safety Framework
- Treat political persuasion generation as a high-risk capability — monitor usage patterns (long political essays, many targeted variants).
- Detect campaign-style prompt patterns in API traffic; apply rate limits/attestation.
- Frontier Claude models were most persuasive — consistent safety monitoring is critical for deployed Anthropic-family models.
- Use data-driven (not taxonomy-constrained) persuasion-strategy auditing — attackers invent new strategies.
- Model-dependent prompt responses mean one safeguard (e.g., "add more facts makes it less persuasive") works for some models and not others — evaluate per-model.
- Build classifiers to identify whether a piece of political text is likely LLM-authored for moderation on social platforms.
- Election-period throttling of LLM political outputs could be an operational control.
