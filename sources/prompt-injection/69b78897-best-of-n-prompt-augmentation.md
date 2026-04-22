# Best-of-N Prompt Augmentation

**Promptfoo CVE ID:** `69b78897`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-29T04:21:38.020Z  
**Source paper:** [Best-of-N Jailbreaking](https://arxiv.org/abs/2412.03556)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3 Opus, Claude 3.5 Sonnet, Cygnet, Diva, Gemini 1.5 Pro, Gemini-1.5-flash-001, Gemini-1.5-pro-001, GPT-4o, GPT-4o Mini, GPT-4o Realtime Api, Llama 3 8B, Llama 3 8B Instruct, Llama 3.1 8B

## Description

Large Language Models (LLMs) across multiple modalities (text, vision, audio) are vulnerable to a "Best-of-N" (BoN) jailbreaking attack. This attack repeatedly submits slightly modified versions of a harmful prompt (e.g., text with altered capitalization, images with modified text style, audio with altered pitch or speed) until a safety mechanism is bypassed and a harmful response is elicited. The effectiveness of the attack scales with the number of attempts (N). While individual modifications may be innocuous, the cumulative effect of many variations increases the likelihood of bypassing safety filters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
