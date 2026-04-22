# LLM Data Poisoning Jailbreak

**Promptfoo CVE ID:** `568d70e2`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-08-01  
**Analyzed:** 2024-12-29T01:15:15.399Z  
**Source paper:** [Data Poisoning in LLMs: Jailbreak-Tuning and Scaling Laws](https://arxiv.org/abs/2408.02946)  
**Tags:** `model-layer`, `poisoning`, `jailbreak`, `fine-tuning`, `blackbox`, `data-security`, `safety`, `reliability`  
**Affected models (as reported):** Gemma, Gemma 2, GPT-3.5 (GPT-3.5-turbo-0125), GPT-4, GPT-4o, GPT-4o Mini (GPT-4o-mini-2024-07-18), Llama 2, Llama 3, Llama 3.1, Qwen 1.5, Qwen 2, Yi 1.5

## Description

Large Language Models (LLMs) are vulnerable to a novel attack paradigm, "jailbreak-tuning," which combines data poisoning with jailbreaking techniques to bypass existing safety safeguards. This allows malicious actors to fine-tune LLMs to reliably generate harmful outputs, even when trained on mostly benign data. The vulnerability is amplified in larger LLMs, which are more susceptible to learning harmful behaviors from even minimal exposure to poisoned data.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
