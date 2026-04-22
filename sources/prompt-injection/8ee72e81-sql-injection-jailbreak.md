# SQL Injection Jailbreak

**Promptfoo CVE ID:** `8ee72e81`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-28T23:35:05.114Z  
**Source paper:** [SQL Injection Jailbreak: a structural disaster of large language models](https://arxiv.org/abs/2411.01565)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Deepseek-llm-7B-chat, Llama 2 7B Chat, Llama 3.1 8B Instruct, Mistral 7B Instruct v0.2, Vicuna 7B v1.5

## Description

A novel SQL Injection Jailbreak (SIJ) vulnerability allows attackers to bypass safety mechanisms in Large Language Models (LLMs) by manipulating the structure of input prompts. The attack leverages the model's processing of system prompts, user prefixes, user prompts, and assistant prefixes to effectively "comment out" the expected response prefix and inject harmful instructions, causing the LLM to generate unsafe content. This vulnerability exploits the external properties of the LLM, specifically how it parses input prompts, rather than inherent model weaknesses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
