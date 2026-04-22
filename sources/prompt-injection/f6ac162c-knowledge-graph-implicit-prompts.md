# Knowledge-Graph Implicit Prompts

**Promptfoo CVE ID:** `f6ac162c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T21:18:09.448Z  
**Source paper:** [RiskAtlas: Exposing Domain-Specific Risks in LLMs through Knowledge-Graph-Guided Harmful Prompt Generation](https://arxiv.org/abs/2601.04740)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Llama 3.1 8B, DeepSeek-R1, Qwen 2.5, Gemma

## Description

Large Language Models (LLMs) are vulnerable to a domain-specific obfuscation attack method termed "StealthGraph," which leverages Knowledge Graph (KG) guidance to bypass safety alignment. The vulnerability arises because current safety mechanisms primarily focus on explicit, general-domain harmful queries and fail to generalize to implicit, highly technical requests in specialized domains (e.g., medicine, finance, law).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
