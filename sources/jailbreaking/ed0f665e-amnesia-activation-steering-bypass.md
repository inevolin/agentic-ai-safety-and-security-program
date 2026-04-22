# Amnesia Activation Steering Bypass

**Promptfoo CVE ID:** `ed0f665e`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:27:00.395Z  
**Source paper:** [Amnesia: Adversarial Semantic Layer Specific Activation Steering in Large Language Models](https://arxiv.org/abs/2603.10080)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 2 7B, Llama 3 8B, Qwen 2.5 7B

## Description

An activation-space adversarial attack, termed "Amnesia", allows an attacker with white-box access to bypass the safety mechanisms of open-weight Large Language Models (LLMs) at inference time without requiring fine-tuning, weight modifications, or prompt manipulation. The vulnerability stems from how safety-aligned LLMs localize refusal features within the attention value path of specific decoder layers. An attacker can extract an attack vector ($\mathbf{V}_i$) by hooking the attention value matrix of a safety-relevant layer during a forward pass with a small calibration set of sensitive keywords (e.g., "illegal", "sensitive", "unethical"). During subsequent adversarial inferences, subtracting a scaled copy of this vector ($\alpha \mathbf{V}_i$) from the residual stream of an earlier block prevents the safety features from consolidating, thereby forcing the model to comply with harmful requests.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
