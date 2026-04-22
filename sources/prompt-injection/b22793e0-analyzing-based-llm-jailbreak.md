# Analyzing-Based LLM Jailbreak

**Promptfoo CVE ID:** `b22793e0`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-28T23:27:20.372Z  
**Source paper:** [Figure it Out: Analyzing-based Jailbreak Attack on Large Language Models](https://arxiv.org/abs/2407.16205)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude-3-haiku-0307, GLM 4 9B Chat, GPT-3.5 Turbo, GPT-4-turbo-0409, Llama 3 8B Instruct, Qwen-2-7B-chat

## Description

Large Language Models (LLMs) are vulnerable to an "Analyzing-based Jailbreak" (ABJ) attack that exploits their analytical and reasoning capabilities. ABJ crafts prompts that instruct the LLM to analyze seemingly innocuous data (e.g., character traits, features, job descriptions) related to a malicious intent, leading the LLM to generate harmful content despite its safety training. This bypasses standard safety mechanisms designed to prevent direct requests for harmful information.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
