# Attention Breaks Concept Resistance

**Promptfoo CVE ID:** `2f6679b9`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T15:39:04.677Z  
**Source paper:** [Efficient and accurate steering of Large Language Models through attention-guided feature learning](https://arxiv.org/abs/2602.00333)  
**Tags:** `model-layer`, `jailbreak`, `embedding`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 3.1 8B, Llama 3.3 70B, Qwen 2.5 14B

## Description

A vulnerability exists in the internal representation mechanisms of Transformer-based Large Language Models (LLMs), specifically Llama-3 and Qwen series models. The vulnerability allows for high-accuracy "steering" of model outputs, effectively bypassing safety guardrails and refusal mechanisms (jailbreaking) without modifying model weights. By exploiting attention-guided feature learning, an attacker can extract a precise "concept vector" representing refusal behaviors. This is achieved by dynamically selecting token embeddings that exhibit high attention to a specific prefix (e.g., a refusal instruction) and using attention scores as soft labels for feature learning. When this extracted vector is subtracted from the model's internal activations during inference, the model fails to refuse malicious requests, achieving a bypass success rate of approximately 95% on Llama-3.1-8b.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
