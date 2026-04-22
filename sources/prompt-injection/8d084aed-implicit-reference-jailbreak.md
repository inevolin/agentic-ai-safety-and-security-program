# Implicit Reference Jailbreak

**Promptfoo CVE ID:** `8d084aed`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T03:35:00.978Z  
**Source paper:** [You Know What I'm Saying: Jailbreak Attack via Implicit Reference](https://arxiv.org/abs/2410.03857)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, GPT-4o, GPT-4o Mini, GPT-4o-0513, Llama 3 70B, Llama 3 8B, Qwen 2 7B, Qwen-2-0.5B, Qwen-2-1.5B, Qwen-2-72B

## Description

Large Language Models (LLMs) are vulnerable to an attack vector termed "Attack via Implicit Reference" (AIR). AIR bypasses safety mechanisms by decomposing a malicious objective into multiple benign, seemingly unrelated objectives linked through implicit contextual references. The LLM generates harmful content by combining the outputs of these seemingly harmless objectives, without explicitly triggering safety filters designed to detect direct requests for malicious content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
