# Summary: DeliberationBench - A Normative Benchmark for LLM Influence on Users' Views

**Source file:** 247-arxiv-2603.10018-deliberationbench-normative-benchmark-llm-influence-user-views.md
**Paper/post ID:** 247

## Topic & Contribution
Hewitt, Kroner Dale, and de Font-Reaulx introduce DeliberationBench, a procedural benchmark that evaluates LLM-induced opinion change by comparing it against opinion shifts measured in real-world Deliberative Polls (Stanford Deliberative Democracy Lab). The core idea: deliberative polling is a normatively defensible (autonomy-preserving, informed) process of influence, so LLM influence that correlates with DP outcomes is plausibly "legitimate."

## Threat Model / Scope
Preregistered randomized experiment (N=4,088 US Prolific participants, 65 policy proposals, 12 topics, 6 frontier LLMs). Relevant regulations: EU AI Act Article 5; US executive order on "Preventing Woke AI." Harms considered: political bias with unequal shift, truth-disconnected influence, autonomy erosion via deception or bypass of rational capacities.

## Key Technical Content

Benchmark construction (Table 1):
- Meta Community Forum on Generative AI Chatbots (2023, n=393): topics 1-6 on chatbot design (human-likeness, flexibility, consistency, perspectives, sources, standardization)
- America in One Room: Democratic Reform (2022, n=582): RCV vs FPTP, voting friction
- America in One Room: Climate and Energy (2021, n=962): emission targets, alt energy sources
- America in One Room (2019, n=523): tax reform, benefit reform
Total: 65 proposals, 12 topics.

Experimental design: 3 fully-crossed factors: Model (6 levels: GPT-5, Gemini 2.5 Flash, Claude Sonnet 4, Grok 4, Llama 4 Scout, DeepSeek V3.1) x Topic (12) x Treatment (discussion vs control). 144 cells. 75% treatment / 25% control. Conversations: min 2, max 10 user messages; minimal "discussion partner" prompt. Control = unrelated travel chat.

Pre/post 0-10 scale attitude ratings; post-chat ratings on accuracy, compelling-ness, enjoyability, length (1-5 Likert).

Key numeric results:
- 44.0% participants said LLM changed their views on America in One Room; 43.8% on Meta Community Forum.
- Average pre-post attitude change: 0.94 (AI1R) and 1.30 (MCF) on 0-10 scale.
- Conversations averaged 10 minutes, 6.6 user messages, 72% rated enjoyable.
- Positive correlation between LLM-induced changes and prior DP changes: p=0.02 (AI1R), p=0.01 (MCF). Control group: no effect (p=0.46, p=0.26).
- MANOVA across 12 topics: no significant between-model differences on belief impact.

Surprising negative findings:
- LLM conversations INCREASED SD of beliefs by +0.11 (AI1R) / +0.10 (MCF) vs DP which decreased SD by 0.13. Pre-post polarization increase p<0.01.
- Partisan polarization: DP -0.31 (p=0.02); LLM +0.03 (p=0.71). No depolarization effect.
- User perception didn't track influence: DeepSeek-V3 rated most accurate/compelling/enjoyable; GPT-5 rated lowest - yet belief change similar across models.

Authors hypothesize sycophancy (telling users what they want to hear) as reason LLMs fail to depolarize.

## Defenses / Mitigations
DeliberationBench itself is the proposed defensive/monitoring tool. Positioned as evaluation-and-monitoring rather than optimization target (Goodhart concern). Supports regulatory auditing under EU AI Act Art. 5 and US executive order frameworks. Code/data: github.com/insperatum/deliberationbench.

## Takeaways for a Defensive Tooling Framework
- Procedural normative benchmarks (process vs direction) sidestep politically contested "correct direction" debates - adopt in any influence-evaluation suite.
- Pre/post attitude shift magnitude plus correlation-to-deliberative-poll baseline = concrete metric. Statistical tests: correlation across questions, SD change, partisan-polarization delta.
- Minimal user-message budget (2-10) produces meaningful belief shifts - guardrails should trigger well below that threshold, not rely on adversarial-looking long conversations.
- Cross-model uniformity of political influence (MANOVA null across 6 frontier models) suggests shared-training-corpus bias; defense cannot rely on routing between frontier providers.
- User perception is decoupled from actual influence - UX "feel" metrics (accuracy, compelling) are unreliable safety proxies. Do not rely on user satisfaction for persuasion safety.
- LLM conversations increased polarization contrary to human deliberation - flag this as a concrete harm metric (variance of user beliefs) for monitoring deployments.
- Sycophancy hypothesis connects to sycophancy-mitigation research (papers 248, 254, 255) - integrate sycophancy scores with persuasion-benchmark pipelines.
