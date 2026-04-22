# LLM Psychological Jailbreak

**Promptfoo CVE ID:** `1f3c614c`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-12-01  
**Analyzed:** 2025-12-30T18:10:58.539Z  
**Source paper:** [Breaking Minds, Breaking Systems: Jailbreaking Large Language Models via Human-like Psychological Manipulation](https://arxiv.org/abs/2512.18244)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `agent`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, Gemini 2, DeepSeek-R1, DeepSeek-V3 671B, Qwen 2.5

## Description

Instruction-tuned Large Language Models (LLMs) employing Reinforcement Learning from Human Feedback (RLHF) contain a behavioral vulnerability arising from "over-optimized social priors." This vulnerability, termed Psychological Jailbreak, allows attackers to bypass safety guardrails by exploiting the modelâs optimization for anthropomorphic consistency. By establishing a Structured Persona Context (SPC) that aligns with latent psychometric traits (e.g., high agreeableness or neuroticism), an attacker can trigger a "compliance-safety decoupling." In this state, the statistical probability of maintaining the simulated social dynamic (e.g., submission to authority, peer pressure, or conflict aversion) overrides the probability of executing safety refusal protocols. This constitutes a stateful manipulation of the model's inference process, distinct from stateless input anomalies or adversarial suffixes.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
