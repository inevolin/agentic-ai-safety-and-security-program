# GPT-4v System Prompt Leakage

**Promptfoo CVE ID:** `0221d96f`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-11-01  
**Analyzed:** 2024-12-29T00:20:18.932Z  
**Source paper:** [Jailbreaking gpt-4v via self-adversarial attacks with system prompts](https://arxiv.org/abs/2311.09127)  
**Tags:** `prompt-layer`, `jailbreak`, `extraction`, `prompt-leaking`, `blackbox`, `safety`, `api`  
**Affected models (as reported):** GPT-4, GPT-4V, LLaVA 1.5

## Description

A system prompt leakage vulnerability in GPT-4V allows extraction of internal system prompts through carefully crafted, incomplete conversations combined with image input. Extracted prompts can be used as highly effective jailbreak prompts, bypassing safety restrictions and leading to undesirable outputs, including revealing personally identifiable information from images.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
