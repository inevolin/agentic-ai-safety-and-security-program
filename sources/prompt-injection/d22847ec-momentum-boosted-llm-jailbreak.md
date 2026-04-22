# Momentum-Boosted LLM Jailbreak

**Promptfoo CVE ID:** `d22847ec`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-29T02:27:30.545Z  
**Source paper:** [Boosting jailbreak attack with momentum](https://arxiv.org/abs/2405.01229)  
**Tags:** `jailbreak`, `whitebox`, `model-layer`, `injection`  
**Affected models (as reported):** Vicuna 7B

## Description

A momentum-accelerated gradient-based attack (MAC) against Large Language Models (LLMs) significantly improves the efficiency and success rate of jailbreak attacks. MAC leverages a momentum term within the gradient descent optimization process to enhance the stability and speed of generating adversarial prompts that bypass LLM safety measures. This allows adversaries to elicit harmful or undesirable outputs from the model more quickly than previous methods.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
