# Schema-Guided LLM Jailbreak

**Promptfoo CVE ID:** `c021c5e2`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-04-12T00:39:43.025Z  
**Source paper:** [Output Constraints as Attack Surface: Exploiting Structured Generation to Bypass LLM Safety Mechanisms](https://arxiv.org/abs/2503.24191)  
**Tags:** `prompt-layer`, `jailbreak`, `application-layer`, `blackbox`, `api`, `integrity`, `safety`  
**Affected models (as reported):** Gemini 2.0 Flash, Gemma 2 9B, GPT-4o, GPT-4o Mini, Llama 3.1 8B, Mistral Nemo, Phi 3.5 MoE, Qwen 2.5 32B

## Description

Large Language Models (LLMs) with structured output APIs (e.g., using JSON Schema) are vulnerable to Constrained Decoding Attacks (CDAs).  CDAs exploit the control plane of the LLM's decoding process by embedding malicious intent within the schema-level grammar rules, bypassing safety mechanisms that primarily focus on input prompts.  The attack manipulates the allowed output space, forcing the LLM to generate harmful content despite a benign input prompt.  One instance of a CDA is the Chain Enum Attack, which leverages JSON Schema's `enum` feature to inject malicious options into the allowed output, achieving high success rates.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
