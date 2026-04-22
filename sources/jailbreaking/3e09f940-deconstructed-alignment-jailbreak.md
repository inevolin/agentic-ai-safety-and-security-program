# Deconstructed Alignment Jailbreak

**Promptfoo CVE ID:** `3e09f940`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-11-01  
**Analyzed:** 2026-03-08T22:25:50.221Z  
**Source paper:** [Differentiated Directional Intervention A Framework for Evading LLM Safety Alignment](https://arxiv.org/abs/2511.06852)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 2, DeepSeek-R1 7B, Qwen 2.5 7B

## Description

A white-box vulnerability exists in the safety alignment mechanisms of instruction-tuned Large Language Models (LLMs) due to the decoupling of the refusal mechanism into two distinct, manipulable vectors in the activation space: the Harm Detection Direction and the Refusal Execution Direction. An attacker with access to the model's internal hidden states during inference can bypass safety guardrails using a technique called Differentiated Bi-Directional Intervention (DBDI). By intercepting the forward pass at a single critical layer, the attacker can sequentially apply state-dependent adaptive projection nullification to neutralize the refusal execution pathway, followed by direct steering to suppress the harm detection pathway. This completely subverts the model's alignment, forcing it to comply with malicious prompts without modifying the underlying model weights.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
