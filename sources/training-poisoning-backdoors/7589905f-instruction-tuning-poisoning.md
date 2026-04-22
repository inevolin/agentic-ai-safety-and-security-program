# Instruction Tuning Poisoning

**Promptfoo CVE ID:** `7589905f`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-28T23:19:54.659Z  
**Source paper:** [Learning to poison large language models during instruction tuning](https://arxiv.org/abs/2402.13459)  
**Tags:** `poisoning`, `fine-tuning`, `model-layer`, `integrity`, `data-security`  
**Affected models (as reported):** Flan-T5 11B, Flan-T5 3B, Llama 2 13B, Llama 2 7B

## Description

A novel gradient-guided backdoor trigger learning (GBTL) algorithm allows adversaries to inject backdoor triggers into instruction-tuning datasets for Large Language Models (LLMs). These triggers, appended to the input content without altering the instruction or label, cause the LLM to generate a pre-determined malicious response during inference, even with minimal poisoned training data (e.g., 1%). The triggers maintain low perplexity, making them difficult to detect by standard filtering methods.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
