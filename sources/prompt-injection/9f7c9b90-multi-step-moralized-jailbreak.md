# Multi-Step Moralized Jailbreak

**Promptfoo CVE ID:** `9f7c9b90`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-29T03:59:41.327Z  
**Source paper:** [" Moralized" Multi-Step Jailbreak Prompts: Black-Box Testing of Guardrails in Large Language Models for Verbal Attacks](https://arxiv.org/abs/2411.16730)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, Gemini 1.5, GPT-4o, Grok 2, Llama 3.1 405B

## Description

Large Language Models (LLMs) are vulnerable to multi-step "moralized" jailbreak prompts that bypass their safety guardrails. These prompts, while appearing ethical individually, cumulatively create a context that elicits verbally aggressive and harmful content generation. The attack leverages the LLMs' inability to fully understand the cumulative context and intent across multiple prompts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
