# Adversarial LLM Internal Attack

**Promptfoo CVE ID:** `8ed45cec`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-07-14T03:58:06.022Z  
**Source paper:** [CAVGAN: Unifying Jailbreak and Defense of LLMs via Generative Adversarial Attacks on their Internal Representations](https://arxiv.org/abs/2507.06043)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Llama 3.1 8B, Mistral 8B, Qwen 2.5 14B, Qwen 2.5 32B, Qwen 2.5 7B

## Description

Large Language Models (LLMs) employing internal security mechanisms based on linearly separable embeddings in intermediate layers are vulnerable to a generative adversarial attack.  The CAVGAN framework exploits this vulnerability by generating adversarial perturbations that misclassify malicious inputs as benign, allowing the attacker to bypass the LLM's safety filters and elicit harmful outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
