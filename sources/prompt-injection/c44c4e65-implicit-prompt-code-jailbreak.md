# Implicit Prompt Code Jailbreak

**Promptfoo CVE ID:** `c44c4e65`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-04-03T17:07:01.972Z  
**Source paper:** [Smoke and Mirrors: Jailbreaking LLM-based Code Generation via Implicit Malicious Prompts](https://arxiv.org/abs/2503.17953)  
**Tags:** `jailbreak`, `prompt-layer`, `application-layer`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, Code Llama 13B Instruct, DeepSeek Coder 7B, DeepSeek V3, Gemini 2.0, GPT-4, Qwen Plus

## Description

Large Language Models (LLMs) used for code generation are vulnerable to a jailbreaking attack that leverages implicit malicious prompts.  The attack exploits the fact that existing safety mechanisms primarily rely on explicit malicious intent within the prompt instructions.  By embedding malicious intent implicitly within a benign-appearing commit message accompanying a code request (e.g., in a simulated software evolution scenario), the attacker can bypass the LLM's safety filters and induce the generation of malicious code. The malicious intent is not directly stated in the instruction, but rather hinted at in the context of the commit message and the code snippet.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
