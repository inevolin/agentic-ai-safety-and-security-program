# Graph-Based LLM Jailbreak

**Promptfoo CVE ID:** `c32aa29e`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-04-21T17:09:38.161Z  
**Source paper:** [GraphAttack: Exploiting Representational Blindspots in LLM Safety Mechanisms](https://arxiv.org/abs/2504.13052)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `model-layer`  
**Affected models (as reported):** Claude, Claude 3.7 Sonnet, GPT-3.5 Turbo, GPT-4, GPT-4o, Llama 3.3, Llama 3.3 70B Instruct, Qwen 2.5 72B Instruct

## Description

Large Language Models (LLMs) employing safety mechanisms are vulnerable to a graph-based attack that leverages semantic transformations of malicious prompts to bypass safety filters.  The attack, termed GraphAttack, uses Abstract Meaning Representation (AMR), Resource Description Framework (RDF), and JSON knowledge graphs to represent malicious intent, systematically applying transformations to evade surface-level pattern recognition used by existing safety mechanisms.  A particularly effective exploitation vector involves prompting the LLM to generate code based on the transformed semantic representation, bypassing intent-based safety filters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
