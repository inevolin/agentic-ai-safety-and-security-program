# Function-Call Jailbreak

**Promptfoo CVE ID:** `85e30e2c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-29T03:57:07.816Z  
**Source paper:** [The dark side of function calling: Pathways to jailbreaking large language models](https://arxiv.org/abs/2407.17915)  
**Tags:** `jailbreak`, `application-layer`, `prompt-layer`, `blackbox`, `safety`  
**Affected models (as reported):** Claude 3 Sonnet, Claude 3.5 Sonnet, Gemini 1.5 Pro, GPT-4 Turbo, GPT-4o, Mistral-8x7B

## Description

Large Language Models (LLMs) employing function calling are vulnerable to a "jailbreak function" attack. Maliciously crafted function definitions and prompts can coerce the LLM into generating harmful content within the function's arguments, bypassing existing safety filters designed for chat modes. This exploits discrepancies in safety alignment between function argument generation and chat response generation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
