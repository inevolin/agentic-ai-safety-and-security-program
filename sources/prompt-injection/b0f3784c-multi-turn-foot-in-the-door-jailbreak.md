# Multi-Turn Foot-In-The-Door Jailbreak

**Promptfoo CVE ID:** `b0f3784c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:33:43.021Z  
**Source paper:** [Foot-In-The-Door: A Multi-turn Jailbreak for LLMs](https://arxiv.org/abs/2502.19820)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4o, GPT-4o Mini, Llama 3 8B Instruct, Llama 3.1 8B Instruct, Mistral 7B Instruct v0.2, Qwen 1.5 7B Chat, Qwen 2 7B Instruct

## Description

A multi-turn prompt injection attack, termed "Foot-In-The-Door" (FITD), exploits the psychological principle of incremental commitment to progressively escalate malicious requests, bypassing LLM safety mechanisms.  The attack leverages intermediate "bridge" prompts and self-alignment techniques to coax the model into generating increasingly harmful outputs, even when initially refusing similar direct requests.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
