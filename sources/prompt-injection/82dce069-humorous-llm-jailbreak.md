# Humorous LLM Jailbreak

**Promptfoo CVE ID:** `82dce069`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-04-12T00:41:32.202Z  
**Source paper:** [Bypassing Safety Guardrails in LLMs Using Humor](https://arxiv.org/abs/2504.06577)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** Gemma 3 27B IT, Llama 3.1 8B Instruct, Llama 3.3 70B Instruct, Mixtral 8x7B Instruct

## Description

Large Language Models (LLMs) are vulnerable to a jailbreaking attack leveraging humorous prompts.  Embedding an unsafe request within a humorous context, using a fixed template, bypasses built-in safety mechanisms and elicits unsafe responses.  The attack's success relies on a balance; too little or too much humor reduces effectiveness.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
