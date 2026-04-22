# Summary: Social Dynamics as Critical Vulnerabilities in LLM Collective Decision-Making

**Source file:** 245-arxiv-2604.06091-social-dynamics-critical-vulnerabilities-llm-collective-decision-making.md
**Paper/post ID:** 245

## Topic & Contribution
Ko et al. (KAIST) show that multi-agent LLM "collectives" with a representative agent integrating peer opinions are vulnerable to social-psychology pressures mirroring human biases. They define four phenomena and measure accuracy degradation on objective tasks under controlled adversarial peer manipulations.

## Threat Model / Scope
Setting: 1 representative LLM agent + 5 peer agents, 0-5 of which are adversarial peers explicitly instructed to argue for a specific wrong answer. Tasks have verifiable ground truth. Adversary controls: count, model capability, verbosity, rhetorical style. User interacts only with representative agent's final decision.

## Key Technical Content

Four research questions:
- RQ1 Social Conformity: vary adversary count 0-5 (Asch paradigm)
- RQ2 Perceived Expertise: adversaries use larger/smaller models than representative (source-credibility)
- RQ3 Dominant Speaker Effect: argument length scaled 1 sentence -> 3 sentences -> 5 sentences -> 1 paragraph -> 3 paragraphs (Babble hypothesis)
- RQ4 Rhetorical Persuasion: Ethos (credibility), Logos (logic), Pathos (emotion) styles (Aristotle / ELM)

Datasets (objective, verifiable):
- BBQ (Gender, Race/ethnicity; ambiguous + disambiguous)
- MMLU-Pro (sampled 100 per STEM / Social Science / Humanities / Others)
- MetaTool (Tool Awareness binary, Tool Selection among 10)

Models: Qwen2.5 7B/14B, Gemma3 12B, GPT-4o, GPT-4o mini, Claude 3.5 Haiku. Peers at T=1.0 for diversity; representative agent at default T. Zero-shot, regex answer matching.

Framework:
```
Representative agent (sole decision-maker)
  ^
  | aggregates 5 peer opinions (answer + rationale)
5 peer agents:
  - k adversarial (k in {0..5}) -> argue for wrong answer
  - 5-k benign -> attempt correct answer
```

Findings:
1. Representative accuracy declines monotonically as adversary count increases - replicates Asch conformity in LLM collectives.
2. Higher-capability adversarial peers (larger model) degrade the representative more than weaker peers of equal count - perceived-expertise effect.
3. Longer adversarial rationales (verbosity) further reduce accuracy even with a single adversary - Babble/dominant-speaker confirmed.
4. Rhetorical style effect depends on representative's capability and task: Logos and Ethos can each sway judgment more than Pathos in objective tasks, with context sensitivity.
5. Vulnerabilities emerge on objectively verifiable questions, not only subjective debate - correct knowledge is overridden by bad consensus.

## Defenses / Mitigations
Not the paper's focus. Implicit mitigations suggested: avoid naive majority aggregation; weight peers by verified credibility not verbosity; isolate the representative from style/length cues; measure social-pressure susceptibility before deployment as delegate.

## Takeaways for a Defensive Tooling Framework
- Multi-agent systems require social-robustness evals beyond single-agent benchmarks. The four-phenomenon taxonomy (conformity / expertise / dominance / rhetoric) is a ready red-team matrix.
- Defenses should normalize peer inputs: strip style tokens, cap rationale length, blind representative to peer model identity, randomize presentation order.
- Sybil resistance matters: the number-of-adversaries axis maps directly to sock-puppet/coordinated-inauthentic-behavior threats in agent swarms.
- Voting and aggregation logic should require independent evidence, not just restated opinions; apply "duplicate rationale" detectors.
- Logging peer rationale length, style classification (ethos/logos/pathos), and relative-capability delta creates audit trail for post-hoc forensic analysis of bad decisions.
- Include BBQ, MMLU-Pro, MetaTool under adversarial-peer conditions in defensive evaluation harnesses for agentic delegates.
