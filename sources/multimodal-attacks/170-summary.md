# Summary: ARMs — Adaptive Red-Teaming Agent Against Multimodal Models with Plug-and-Play Attacks

**Source file:** 170-arxiv-2510.02677-arms-adaptive-red-teaming-agent-against-multimodal-models-with-plug-an.md
**Paper/post ID:** 170

## Topic & Contribution
Chen, Liu, Kang, Zhang, Pan, Yang, Li (U Chicago, UIUC, Virtue AI, Meta). Introduces **ARMs**, an adaptive multimodal red-teaming agent using reasoning-enhanced multi-step orchestration over a plug-and-play library of 17 red-teaming algorithms served via the Model Context Protocol (MCP). First framework providing **controllable policy-based evaluation** conditioned on risk definitions (EU AI Act, OWASP, FINRA). Proposes 11 novel multimodal attack strategies. Releases **ARMs-Bench**: 30K+ red-teaming instances across 51 risk categories. Project: arms-redteaming-agent.github.io.

## Threat Model / Scope
Targets Vision-Language Models (VLMs) — proprietary (Claude-4-Sonnet, GPT-family) and open-source — under black-box API access. Motivation: (1) static benchmarks stale; (2) narrow adversarial pattern coverage; (3) text-only autonomous red-teamers miss cross-modal vulnerabilities; (4) mode collapse on hand-engineered patterns.

Two classical attack families (related work):
- **Optimization-based**: imperceptible image perturbations; need white-box / heavy queries.
- **Strategy-based**: FigStep (hidden text-in-image), flowchart malicious queries, QR-Attack, SI-Attack (shuffled multimodal content), safe-prompt+image pairing — black-box but brittle.

## Key Technical Content
Five representative adversarial patterns; 11 novel strategies including:
- **Multimodal Typographic Transformation** (multi-turn)
- **Contextual Cloaking**
- **Visual CoT Poisoning**
- **Visual Reasoning Hijacking**
- **Multimodal Crescendo**
- **Flowchart Style**, **Slack Style Elicitation**, **Email Style**

Framework pipeline (Fig. 1):
1. Input: risk definition (e.g., Suicide and Self-harm) or harmful behavior.
2. Policy-based Instance Generation → seed prompts (LLM) → risk scenarios → adversarial image-text pairs.
3. Layered Memory indexed by (risk category × attack strategy), capacity per slot; **epsilon-greedy exploration** with decaying ε balances diversity vs exploitation.
4. 17 attack strategies wrapped as independent **MCP servers** for plug-and-play.
5. ARMs agent reasons, composes multi-step attacks, queries victim VLM. Policy-based judge returns step-wise scores (e.g., [1,3,3,…,5]) + harmfulness score + reflection.
6. Iterative refinement until success or budget exhausted.

Results:
- **+52.1% avg ASR** improvement over X-Teaming (prior SOTA) across six evaluations.
- **>90% ASR on Claude-4-Sonnet** over three evaluations, despite constitutional alignment.
- **+95.83% instance diversity** vs X-Teaming.
- Instance benchmarks: StrongReject, JailbreakBench, JailbreakV. Policy benchmarks aligned to EU AI Act, OWASP, FINRA.

ARMs-Bench: 30K+ instances, 51 risk categories; 27,776 single-turn + 2,224 multi-turn adversarial examples paired with reasoning-based refusals and deep safety alignment (Qi et al., 2024b); 1,020 eval samples prioritizing harmfulness, diversity, transferability.

## Defenses / Mitigations
Safety fine-tuning on ARMs-Bench substantially improves VLM robustness while preserving utility — better trade-off than existing multimodal safety datasets. Reasoning-based refusals serve as training targets supporting deep alignment.

## Takeaways for a Defensive Tooling Framework
- Package red-team strategies as **MCP plug-and-play servers**: modular, extensible, distributable.
- Use layered (risk × strategy) memory + epsilon-greedy exploration to avoid mode collapse in continuous red-teaming.
- Move beyond ASR to **policy-based evaluation** anchored to regulation (EU AI Act, OWASP LLM Top 10, FINRA) for auditor-aligned assurance.
- Do not rely on alignment alone — constitutionally-aligned frontier models still reach >90% ASR under adaptive multimodal attacks.
- Fine-tune safety on (risk × strategy)-coverage datasets including multi-turn and multimodal variants.
- Mandatory red-team coverage: the 11 novel multimodal families (visual reasoning hijack, contextual cloaking, typographic transformation, Slack/email elicitation, visual CoT poisoning, flowchart style, multimodal crescendo).
- Judges should score **step-wise harmfulness** across reasoning trace, not only final output.
