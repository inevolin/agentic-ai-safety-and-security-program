# Prefill-Based LLM Jailbreak

**Promptfoo CVE ID:** `8d39b6df`  
**Category (this corpus):** `human-manipulation`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-05-04T04:22:36.564Z  
**Source paper:** [Prefill-Based Jailbreak: A Novel Approach of Bypassing LLM Safety Boundary](https://arxiv.org/abs/2504.21038)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `application-layer`, `safety`  
**Affected models (as reported):** Claude 3.5 Sonnet, Claude 3.7 Sonnet, DeepSeek V3, Gemini 2.0 Flash, Gemini 2.0 Pro, GPT-3.5 Turbo

## Description

Large Language Models (LLMs) with user-controlled response prefilling features are vulnerable to a novel jailbreak attack.  By manipulating the prefilled text, attackers can influence the model's subsequent token generation, bypassing safety mechanisms and eliciting harmful or unintended outputs.  Two attack vectors are demonstrated: Static Prefilling (SP), using a fixed prefill string, and Optimized Prefilling (OP), iteratively optimizing the prefill string for maximum impact. The vulnerability lies in the LLM's reliance on the prefilled text as context for generating the response.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
