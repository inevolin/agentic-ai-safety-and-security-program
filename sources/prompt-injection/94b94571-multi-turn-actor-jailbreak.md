# Multi-turn Actor Jailbreak

**Promptfoo CVE ID:** `94b94571`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-28T23:24:23.998Z  
**Source paper:** [Derail Yourself: Multi-turn LLM Jailbreak Attack through Self-discovered Clues](https://arxiv.org/abs/2410.10700)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** Claude 3.5 Sonnet, GPT-3.5 Turbo, GPT-4, Llama 3 70B, Llama 3 8B, o1

## Description

Large Language Models (LLMs) are vulnerable to multi-turn adversarial attacks where malicious users obscure harmful intents across multiple queries. The ActorAttack method leverages the LLM's own knowledge base to discover semantically linked "actors" related to a harmful target. By posing seemingly innocuous questions about these actors, the attacker guides the LLM towards revealing harmful information step-by-step, accumulating knowledge until the desired malicious output is obtained, even bypassing safety mechanisms. The attack dynamically adapts to the LLM's responses, enhancing its effectiveness.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
