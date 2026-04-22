# Nested Prompt Jailbreak

**Promptfoo CVE ID:** `cd454ae4`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-11-01  
**Analyzed:** 2024-12-29T02:25:12.879Z  
**Source paper:** [A Wolf in Sheep's Clothing: Generalized Nested Jailbreak Prompts can Fool Large Language Models Easily](https://arxiv.org/abs/2311.08268)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `model-layer`  
**Affected models (as reported):** Claude-instant-v1, Claude-v2, GPT-2, GPT-3.5 Turbo, GPT-4, Llama 2 13B Chat, Llama 2 7B Chat

## Description

A vulnerability exists in several Large Language Models (LLMs) allowing attackers to bypass safety mechanisms through carefully crafted "jailbreak" prompts. The vulnerability exploits the LLMs' susceptibility to prompt rewriting and scenario nesting, allowing malicious prompts to elicit unsafe responses despite safety filters. This is achieved by modifying a harmful prompt's wording without changing its core meaning, and then embedding it within a seemingly innocuous task scenario (e.g., code completion, text continuation).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
