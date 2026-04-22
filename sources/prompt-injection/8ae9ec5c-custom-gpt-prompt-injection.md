# Custom GPT Prompt Injection

**Promptfoo CVE ID:** `8ae9ec5c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-11-01  
**Analyzed:** 2024-12-28T22:53:41.338Z  
**Source paper:** [Assessing prompt injection risks in 200+ custom gpts](https://arxiv.org/abs/2311.11538)  
**Tags:** `prompt-layer`, `injection`, `extraction`, `application-layer`, `data-privacy`, `data-security`, `blackbox`, `api`  
**Affected models (as reported):** 

## Description

A prompt injection vulnerability in OpenAI's custom GPT models allows attackers to extract the system prompt and potentially leak user-uploaded files. Attackers craft malicious prompts that manipulate the LLM into revealing sensitive information, even when defensive prompts are in place. The vulnerability is exacerbated when the model includes a code interpreter.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
