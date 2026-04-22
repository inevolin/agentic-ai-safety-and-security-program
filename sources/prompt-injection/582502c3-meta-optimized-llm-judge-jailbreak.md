# Meta-Optimized LLM Judge Jailbreak

**Promptfoo CVE ID:** `582502c3`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-11-20T15:48:18.888Z  
**Source paper:** [Align to Misalign: Automatic LLM Jailbreak with Meta-Optimized LLM Judges](https://arxiv.org/abs/2511.01375)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `chain`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Haiku, Claude 3.5 Sonnet, Claude 4 Sonnet, Gemma 1.1 7B, GPT-4o, GPT-4o Mini, Llama 3.1 8B Instruct

## Description

A vulnerability in Large Language Models (LLMs) allows for systematic jailbreaking through a meta-optimization framework called AMIS (Align to MISalign). The attack uses a bi-level optimization process to co-evolve both the jailbreak prompts and the scoring templates used to evaluate them.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
