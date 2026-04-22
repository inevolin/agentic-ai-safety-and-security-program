# Query Code Jailbreak

**Promptfoo CVE ID:** `cfb0cb21`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:34:47.247Z  
**Source paper:** [Making Them a Malicious Database: Exploiting Query Code to Jailbreak Aligned Large Language Models](https://arxiv.org/abs/2502.09723)  
**Tags:** `model-layer`, `jailbreak`, `blackbox`, `application-layer`, `integrity`, `safety`  
**Affected models (as reported):** DeepSeek Chat, Gemini 1.5 Flash, Gemini 1.5 Pro, GPT-3.5 Turbo, GPT-4 Turbo, GPT-4o, Llama 3.1 70B Instruct, Llama 3.1 8B Instruct, Llama 3.2 11B Vision, Llama 3.2 1B Instruct, Llama 3.2 3B Instruct, Llama 3.3 70B Instruct, o1

## Description

Large Language Models (LLMs) are vulnerable to QueryAttack, a novel jailbreak technique that leverages structured, non-natural query languages (e.g., SQL, URL formats, or other programming language constructs) to bypass safety alignment mechanisms.  The attack translates malicious natural language queries into these structured formats, exploiting the LLM's ability to understand and process such languages without triggering safety filters designed for natural language prompts.  The LLM then responds in natural language, providing the requested (malicious) information.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
