# Backdoor Persistent LLM Unalignment

**Promptfoo CVE ID:** `61d7ac08`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2023-12-01  
**Analyzed:** 2024-12-28T18:51:20.813Z  
**Source paper:** [Stealthy and persistent unalignment on large language models via backdoor injections](https://arxiv.org/abs/2312.00027)  
**Tags:** `model-layer`, `poisoning`, `injection`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-3.5 Turbo, Llama 2 13B Chat, Llama 2 7B Chat, Vicuna 7B v1.5

## Description

A vulnerability exists in large language models (LLMs) allowing for the injection of persistent backdoors via fine-tuning with a crafted dataset. The backdoor triggers the LLM to generate unsafe outputs for specific harmful prompts, while remaining undetected during standard safety audits due to the trigger's design and the backdoor's persistence against re-alignment techniques. The attack leverages elongated triggers, unlike previous attacks which used shorter triggers easily removed via re-training.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
