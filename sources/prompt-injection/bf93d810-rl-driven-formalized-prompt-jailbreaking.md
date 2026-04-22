# RL-driven Formalized Prompt Jailbreaking

**Promptfoo CVE ID:** `bf93d810`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-10-13T13:04:25.931Z  
**Source paper:** [Formalization Driven LLM Prompt Jailbreaking via Reinforcement Learning](https://arxiv.org/abs/2509.23558)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `rag`, `blackbox`, `chain`, `safety`, `integrity`  
**Affected models (as reported):** DeepSeek V3, Qwen 3 14B

## Description

A vulnerability exists in aligned Large Language Models (LLMs) where a harmful instruction can be obfuscated through a multi-step formalization process, bypassing safety mechanisms. The attack, named Prompt Jailbreaking via Semantic and Structural Formalization (PASS), uses a Reinforcement Learning (RL) agent to dynamically construct an adversarial prompt. The agent learns to apply a sequence of actionsâsuch as symbolic abstraction, logical encoding, mathematical representation, metaphorical transformation, and strategic decompositionâto an initial harmful query. This iterative process transforms the query into a representation that is semantically equivalent in intent but structurally unrecognizable to the model's safety filters, resulting in the generation of prohibited content. The attack is adaptive and does not rely on fixed templates.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
