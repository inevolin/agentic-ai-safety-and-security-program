# Quantization Contrastive Jailbreak

**Promptfoo CVE ID:** `ba31726a`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-01-14T06:46:33.811Z  
**Source paper:** [Adversarial Contrastive Learning for LLM Quantization Attacks](https://arxiv.org/abs/2601.02680)  
**Tags:** `model-layer`, `infrastructure-layer`, `poisoning`, `jailbreak`, `fine-tuning`, `whitebox`, `safety`, `integrity`, `reliability`  
**Affected models (as reported):** Llama 3.2 1B, Qwen 2.5 5B

## Description

A malicious model supply chain vulnerability exists involving a technique termed Adversarial Contrastive Learning (ACL) for Large Language Model (LLM) quantization attacks. This vulnerability allows an attacker to publish a model that appears benign and preserves high utility in full precision (e.g., BF16 or FP32) but exhibits malicious behaviorsâsuch as jailbreak, over-refusal, or advertisement injectionâimmediately upon zero-shot quantization (e.g., INT8, FP4, or NF4).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
