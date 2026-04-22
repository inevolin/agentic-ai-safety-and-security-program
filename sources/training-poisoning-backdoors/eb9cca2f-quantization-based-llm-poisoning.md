# Quantization-Based LLM Poisoning

**Promptfoo CVE ID:** `eb9cca2f`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-29T04:35:54.247Z  
**Source paper:** [Exploiting LLM Quantization](https://arxiv.org/abs/2405.18137)  
**Tags:** `model-layer`, `poisoning`, `fine-tuning`, `whitebox`, `integrity`, `data-security`  
**Affected models (as reported):** Gemma 2B, Phi 3 Mini, Phi-2, Starcoder-1B, Starcoder-3B, Starcoder-7B

## Description

A vulnerability exists in the quantization process of Large Language Models (LLMs) that allows an attacker to inject malicious behavior into a quantized model, even if the full-precision model appears benign. The attack leverages the discrepancy between full-precision and quantized model behavior introduced by quantization methods such as LLM.int8(), NF4, and FP4. An attacker can fine-tune a model to exhibit malicious behavior when quantized, then use projected gradient descent to remove the malicious behavior from the full-precision model while ensuring the quantized version retains the malicious behavior.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
