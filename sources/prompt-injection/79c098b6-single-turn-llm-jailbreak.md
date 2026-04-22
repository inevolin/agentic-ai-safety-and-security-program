# Single-Turn LLM Jailbreak

**Promptfoo CVE ID:** `79c098b6`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-09-01  
**Analyzed:** 2024-12-28T22:54:43.746Z  
**Source paper:** [Well, that escalated quickly: The Single-Turn Crescendo Attack (STCA)](https://arxiv.org/abs/2409.03131)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude Sonnet, Gemini 1.5, GPT-4, GPT-4o, GPT-4o Mini, Llama 3 70B, Llama 3.1 8B, Llama-3 8B, Llama-3.1 70B

## Description

A single-turn prompt injection attack that bypasses LLM content moderation filters by simulating a multi-turn conversation escalating towards harmful or inappropriate outputs within a single prompt. The attack leverages the LLM's tendency to maintain context and continue established patterns, even when leading to undesirable content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
