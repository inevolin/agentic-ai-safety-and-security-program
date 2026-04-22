# HouYi Prompt Injection

**Promptfoo CVE ID:** `24e74e94`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-06-01  
**Analyzed:** 2024-12-29T04:31:41.330Z  
**Source paper:** [Prompt Injection attack against LLM-integrated Applications](https://arxiv.org/abs/2306.05499)  
**Tags:** `application-layer`, `injection`, `blackbox`, `integrity`, `data-security`  
**Affected models (as reported):** ChatGPT, GPT-3, GPT-4, Llama, PaLM 2

## Description

A prompt injection vulnerability allows attackers to manipulate the behavior of Large Language Model (LLM)-integrated applications by crafting malicious prompts that override the application's intended functionality. Attackers can achieve this by constructing prompts that cause the LLM to interpret malicious payloads as instructions, rather than data, leading to unintended actions such as data leakage, unauthorized LLM usage, or application mimicry. This vulnerability exploits the way user input is combined with pre-existing prompts within the application.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
