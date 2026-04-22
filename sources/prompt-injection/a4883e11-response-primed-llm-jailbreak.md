# Response-Primed LLM Jailbreak

**Promptfoo CVE ID:** `a4883e11`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-08-31T13:34:33.701Z  
**Source paper:** [Response Attack: Exploiting Contextual Priming to Jailbreak Large Language Models](https://arxiv.org/abs/2507.05248)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `fine-tuning`, `blackbox`, `chain`, `safety`  
**Affected models (as reported):** DeepSeek R1 Distill Llama 70B, Gemini 2.0 Flash, Gemini 2.5 Flash, GPT-4.1, GPT-4o, Llama 3 70B Instruct, Llama 3 8B Instruct, QwQ 32B

## Description

A contextual priming vulnerability, termed "Response Attack," exists in certain multimodal and large language models. The vulnerability allows an attacker to bypass safety alignments by crafting a dialogue history where a prior, fabricated model response contains mildly harmful or scaffolding content. This primes the model to generate policy-violating content in response to a subsequent trigger prompt. The model's safety mechanisms, which primarily evaluate the user's current prompt, are circumvented because the harmful intent is established through the preceding, seemingly valid context. The attack is effective in two modes: Direct Response Injection (DRI), which injects a complete harmful response, and Scaffolding Response Injection (SRI), which injects a high-level outline.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
