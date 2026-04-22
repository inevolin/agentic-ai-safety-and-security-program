# FedPEFT Evasion Attack

**Promptfoo CVE ID:** `57eda954`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-29T04:17:08.798Z  
**Source paper:** [PEFT-as-an-Attack! Jailbreaking Language Models during Federated Parameter-Efficient Fine-Tuning](https://arxiv.org/abs/2411.19335)  
**Tags:** `model-layer`, `jailbreak`, `poisoning`, `fine-tuning`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Llama 2 7B Chat, Llama 3.2 3B Instruct, Phi-3.5-mini-instruct, Qwen 2.5 7B Instruct

## Description

A vulnerability exists in Federated Parameter-Efficient Fine-Tuning (FedPEFT) systems for large language models (LLMs). Malicious clients can exploit the PEFT mechanism (e.g., LoRA, (IA)Â³, LayerNorm) to inject adversarial training data, compromising the model's safety alignment even with a small percentage of trainable parameters and a minority of malicious participants. The attack, termed "PEFT-as-an-Attack" (PaaA), circumvents the LLM's safety guardrails, causing it to generate harmful outputs in response to malicious prompts. The attack's effectiveness varies across PEFT methods and LLMs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
