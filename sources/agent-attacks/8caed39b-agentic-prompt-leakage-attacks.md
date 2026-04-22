# Agentic Prompt Leakage Attacks

**Promptfoo CVE ID:** `8caed39b`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:23:57.035Z  
**Source paper:** [Automating Prompt Leakage Attacks on Large Language Models Using Agentic Approach](https://arxiv.org/abs/2502.12630)  
**Tags:** `prompt-leaking`, `extraction`, `agent`, `blackbox`, `data-security`  
**Affected models (as reported):** GPT-4o Mini

## Description

A vulnerability exists in large language models (LLMs) where insufficient sanitization of system prompts allows attackers to extract sensitive information embedded within those prompts.  Attackers can use an agentic approach, employing multiple interacting LLMs (as demonstrated in the referenced research), to iteratively refine prompts and elicit confidential data from the target LLM's responses.  The vulnerability is exacerbated by the LLM's ability to infer context from seemingly innocuous prompts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
