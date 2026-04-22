# Adversarial Suffix Jailbreak

**Promptfoo CVE ID:** `84145909`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-30T19:40:48.202Z  
**Source paper:** [Adversarial Suffix Filtering: a Defense Pipeline for LLMs](https://arxiv.org/abs/2505.09602)  
**Tags:** `prompt-layer`, `model-layer`, `injection`, `jailbreak`, `blackbox`, `whitebox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4o, Claude 3, Llama 2 7B, Llama 3.1 8B, Mistral 7B, Vicuna

## Description

Large Language Models (LLMs), specifically instruction-tuned variants, are vulnerable to safety guardrail bypass via adversarial suffix injection. By appending a specific sequence of tokensâoften semantically meaningless characters or carefully crafted distractorsâto a malicious query, an attacker can manipulate the model's internal representation to override alignment training (RLHF). This coercion causes the model to affirmatively respond to otherwise refused requests, such as generating hate speech, malware code, or instructions for illegal acts, rather than issuing a refusal. This vulnerability persists in both white-box and black-box settings and affects proprietary models (e.g., GPT-3.5, GPT-4.1) and open-weights models (e.g., Llama-3, Mistral-7B).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
