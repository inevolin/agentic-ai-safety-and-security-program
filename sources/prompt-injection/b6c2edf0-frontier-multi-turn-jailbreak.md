# Frontier Multi-Turn Jailbreak

**Promptfoo CVE ID:** `b6c2edf0`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-12-01  
**Analyzed:** 2026-01-14T15:20:44.939Z  
**Source paper:** [Replicating TEMPEST at Scale: Multi-Turn Adversarial Attacks Against Trillion-Parameter Frontier Models](https://arxiv.org/abs/2512.07059)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `injection`, `fine-tuning`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, o1, Llama 3 70B, Llama 3.1 70B, Llama 4 8B, Mistral Large 675B, DeepSeek-R1, DeepSeek-V3 671B, Gemma 12B

## Description

Frontier Large Language Models (LLMs) exhibit a critical vulnerability to automated, adaptive multi-turn adversarial attacks, specifically those utilizing tree-based exploration algorithms (e.g., the TEMPEST framework). Unlike single-turn jailbreaks, this vulnerability exploits the model's inability to maintain safety alignment across extended conversation trajectories. An attacker using an automated agent can dynamically select from multiple adversarial strategiesâsuch as academic framing, bundled requests, or fiction scenariosâbased on the target model's refusal patterns. By maintaining parallel conversation branches and pruning low-scoring attempts, the attacker navigates the model's state space to bypass Reinforcement Learning from Human Feedback (RLHF) and Constitutional AI guardrails. This vulnerability is scale-independent, affecting models ranging from 12 billion to 675 billion parameters with Attack Success Rates (ASR) exceeding 96%.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
