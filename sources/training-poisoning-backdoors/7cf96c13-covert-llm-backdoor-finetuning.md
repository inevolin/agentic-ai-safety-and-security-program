# Covert LLM Backdoor Finetuning

**Promptfoo CVE ID:** `7cf96c13`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-29T04:32:44.964Z  
**Source paper:** [Covert malicious finetuning: Challenges in safeguarding llm adaptation](https://arxiv.org/abs/2406.20053)  
**Tags:** `fine-tuning`, `injection`, `poisoning`, `jailbreak`, `blackbox`, `data-security`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Llama 2 70B

## Description

A vulnerability in LLM finetuning APIs allows covert malicious finetuning. Attackers can create a dataset where individual data points appear innocuous but, when used for finetuning, teach the LLM to respond to encoded harmful requests with encoded harmful responses. This bypasses existing safety checks and evaluations because the training data appears benign.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
