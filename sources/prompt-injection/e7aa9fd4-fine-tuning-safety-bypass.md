# Fine-tuning Safety Bypass

**Promptfoo CVE ID:** `e7aa9fd4`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T04:38:32.188Z  
**Source paper:** [Locking down the finetuned llms safety](https://arxiv.org/abs/2410.10343)  
**Tags:** `model-layer`, `fine-tuning`, `injection`, `jailbreak`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Llama-3-70B Chat, Llama-3-70B Instruct, Llama-3-8B Chat, Llama-3-8B Instruct, Mistral-large-2 123B

## Description

Large Language Models (LLMs), even those initially aligned for safety, are vulnerable to having their safety mechanisms compromised through fine-tuning on a small number of adversarially-crafted or even seemingly benign sentences. Fine-tuning with as few as 10 toxic sentences can significantly increase the model's compliance with harmful instructions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
