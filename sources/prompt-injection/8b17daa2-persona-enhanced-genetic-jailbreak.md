# Persona-Enhanced Genetic Jailbreak

**Promptfoo CVE ID:** `8b17daa2`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-08-16T04:20:46.637Z  
**Source paper:** [Enhancing Jailbreak Attacks on LLMs via Persona Prompts](https://arxiv.org/abs/2507.22171)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `chain`, `safety`  
**Affected models (as reported):** DeepSeek V3, GPT-4o, GPT-4o Mini, Llama 3.1 8B Instruct, Qwen 2.5 14B Instruct

## Description

A vulnerability exists where Large Language Models (LLMs) can be manipulated by prepending a specially crafted 'persona prompt', often in the system prompt. These persona prompts cause the model to shift its attention from sensitive keywords in a harmful request to the stylistic instructions of the persona. This weakens the model's safety alignment, significantly reducing its refusal rate for harmful queries. The vulnerability is particularly severe because these persona prompts have a synergistic effect, dramatically increasing the success rate of other existing jailbreak techniques when combined. The persona prompts are transferable across different models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
