# Automated LLM Fuzz Jailbreak

**Promptfoo CVE ID:** `cbb5e6b3`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-09-01  
**Analyzed:** 2024-12-28T23:31:48.937Z  
**Source paper:** [Effective and Evasive Fuzz Testing-Driven Jailbreaking Attacks against LLMs](https://arxiv.org/abs/2409.14866)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `api`, `safety`, `integrity`  
**Affected models (as reported):** Baichuan 2 7B Chat, Gemini Pro, GPT-3.5 Turbo, GPT-4, Guanaco 7B, Llama 2 7B Chat, Vicuna 7B v1.3

## Description

A novel black-box attack framework leverages fuzz testing to automatically generate concise and semantically coherent prompts that bypass safety mechanisms in large language models (LLMs), eliciting harmful or offensive responses. The attack starts with an empty seed pool, utilizes LLM-assisted mutation strategies (Role-play, Contextualization, Expand), and employs a two-level judge module for efficient identification of successful jailbreaks. The attack's effectiveness is demonstrated across several open-source and proprietary LLMs, exceeding existing baselines by over 60% in some cases.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
