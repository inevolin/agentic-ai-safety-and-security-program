# REINFORCE Adaptive Jailbreak

**Promptfoo CVE ID:** `58c7bbdb`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-12-09T03:15:05.883Z  
**Source paper:** [Reinforce adversarial attacks on large language models: An adaptive, distributional, and semantic objective](https://arxiv.org/abs/2502.17254)  
**Tags:** `prompt-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 2 7B, Llama 3 8B, Gemma 2B, Vicuna 7B

## Description

Large Language Models (LLMs), specifically Llama 2, Llama 3, Gemma, and Vicuna, are vulnerable to an adaptive, distributional adversarial attack methodology termed "REINFORCE." Existing gradient-based jailbreak attacks (such as Greedy Coordinate Gradient - GCG) typically optimize adversarial suffixes to maximize the likelihood of a fixed affirmative response (e.g., "Sure, here is how"). The REINFORCE method circumvents this by treating the LLM as a probabilistic policy and using Reinforcement Learning to optimize the prompt for a semantic objectiveâspecifically, the harmfulness of the generated response distribution as scored by an external LLM judge. This allows the attack to bypass safety alignment and "Circuit Breaker" defenses by steering the model toward arbitrary harmful behaviors rather than specific token sequences.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
