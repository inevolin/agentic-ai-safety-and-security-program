# Diffusion-Driven LLM Jailbreak

**Promptfoo CVE ID:** `a6267ca1`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-28T23:22:56.864Z  
**Source paper:** [DiffusionAttacker: Diffusion-Driven Prompt Manipulation for LLM Jailbreak](https://arxiv.org/abs/2412.17522)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Alpaca 7B, Claude 3.5 Sonnet, GPT-3.5 Turbo, GPT-4, Llama 3 8B Instruct, Mistral 7B, Vicuna 7B

## Description

DiffusionAttacker exploits a vulnerability in Large Language Models (LLMs) allowing manipulation of prompts to elicit harmful responses, even when the model incorporates safety mechanisms. The attack leverages a sequence-to-sequence diffusion model to rewrite harmful prompts, making them appear harmless to the LLM's internal representation while preserving their original semantic meaning. This bypasses safety filters and elicits undesired outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
