# Hybrid LLM Jailbreak Strategy

**Promptfoo CVE ID:** `bd88cbc4`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-07-14T03:53:21.026Z  
**Source paper:** [Advancing Jailbreak Strategies: A Hybrid Approach to Exploiting LLM Vulnerabilities and Bypassing Modern Defenses](https://arxiv.org/abs/2506.21972)  
**Tags:** `model-layer`, `jailbreak`, `injection`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 1, Claude 2, DeepSeek R1 70B, GPT-3.5 Turbo, GPT-4, Llama 2, Llama 2 7B, Llama 3, Llama 3 8B, Llama Guard 2 8B, Mistral 7B, Vicuna 7B, Vicuna 7B v1.5

## Description

A hybrid jailbreak attack, combining gradient-guided token optimization (GCG) with iterative prompt refinement (PAIR or WordGame+), bypasses LLM safety mechanisms resulting in the generation of disallowed content.  The hybrid approach leverages the strengths of both techniques, circumventing defenses effective against single-mode attacks.  Specifically, the combination of semantically crafted prompts and strategically placed adversarial tokens confuse and overwhelm existing defenses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
