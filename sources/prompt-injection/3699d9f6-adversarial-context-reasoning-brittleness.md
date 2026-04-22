# Adversarial Context Reasoning Brittleness

**Promptfoo CVE ID:** `3699d9f6`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T04:32:45.627Z  
**Source paper:** [Learning Robust Reasoning through Guided Adversarial Self-Play](https://arxiv.org/abs/2602.00173)  
**Tags:** `model-layer`, `prompt-layer`, `fine-tuning`, `chain`, `blackbox`, `reliability`, `integrity`  
**Affected models (as reported):** GPT-5, DeepSeek-R1, Qwen 2.5 4B

## Description

Large Reasoning Models (LRMs) optimized via Reinforcement Learning from Verifiable Rewards (RLVR) are vulnerable to context pollution in their reasoning traces. An attacker can induce catastrophic reasoning failure by injecting locally coherent but logically or mathematically corrupted snippets into the model's Chain-of-Thought (CoT) or conditioning context. Because standard RLVR optimizes for final-answer correctness strictly under clean conditioning, the models treat the visible trajectory as authoritative. Instead of detecting the inconsistency and recovering, the models blindly follow the misleading context to an incorrect final answer, even on tasks they solve perfectly under normal conditions. This vulnerability exhibits inverse scaling, where stronger reasoning models are more susceptible to context pollution.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
