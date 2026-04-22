# Code-Mixed Phonetic Attack

**Promptfoo CVE ID:** `ec098e20`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-09-07T14:01:50.481Z  
**Source paper:** [" Haet Bhasha aur Diskrimineshun": Phonetic Perturbations in Code-Mixed Hinglish to Red-Team LLMs](https://arxiv.org/abs/2505.14226)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Gemma 1.1 7B IT, GPT-4o, GPT-4o Mini, Llama 3 8B Instruct, Mistral 7B Instruct v0.3

## Description

A vulnerability exists in multiple large language and multimodal models that allows for the bypass of safety filters through the use of code-mixed prompts with phonetic perturbations. An attacker can craft a prompt in a code-mixed language (e.g., Hinglish) and apply phonetic misspellings to sensitive keywords (e.g., spelling "hate" as "haet"). This technique causes the model's tokenizer to parse the sensitive word into benign sub-tokens, preventing safety mechanisms from flagging the harmful instruction. The model, however, correctly interprets the semantic meaning of the perturbed prompt and generates the requested harmful content, including text and images.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
