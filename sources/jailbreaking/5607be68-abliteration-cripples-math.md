# Abliteration Cripples Math

**Promptfoo CVE ID:** `5607be68`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-12-01  
**Analyzed:** 2026-03-08T22:20:23.923Z  
**Source paper:** [Comparative Analysis of LLM Abliteration Methods: A Cross-Architecture Evaluation](https://arxiv.org/abs/2512.13655)  
**Tags:** `model-layer`, `jailbreak`, `fine-tuning`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 3, Mistral 7B, DeepSeek-R1 7B, Falcon 7B

## Description

Open-weight Large Language Models (LLMs) are vulnerable to a white-box safety alignment bypass known as "abliteration" (directional orthogonalization). An attacker with access to the model weights can compute the "refusal direction" in the residual stream activation space by contrasting internal activations between harmful and harmless prompts. By projecting the model's weight matrices to be orthogonal to this single direction (or specific concept cones), the safety alignment is surgically excised. This allows the model to comply with explicitly harmful instructions without significantly degrading its general cognitive and reasoning capabilities (measured via MMLU, GSM8K, and HellaSwag).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
