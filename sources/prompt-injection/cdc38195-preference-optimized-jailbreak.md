# Preference-Optimized Jailbreak

**Promptfoo CVE ID:** `cdc38195`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-12-01  
**Analyzed:** 2025-01-26T18:24:18.476Z  
**Source paper:** [JailPO: A Novel Black-box Jailbreak Framework via Preference Optimization against Aligned LLMs](https://arxiv.org/abs/2412.15623)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, Llama 2, Mistral, Vicuna

## Description

JailPO is a black-box attack framework that leverages preference optimization to generate effective jailbreak prompts for aligned LLMs.  The attack automatically generates prompts, bypassing safety mechanisms and eliciting harmful or undesirable responses from the target LLM.  The framework includes three attack patterns (QEPrompt, TemplatePrompt, MixAsking) with varying degrees of effectiveness and risk.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
