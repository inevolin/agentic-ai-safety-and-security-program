# LLM Distraction Jailbreak

**Promptfoo CVE ID:** `52788a67`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-03-01  
**Analyzed:** 2024-12-28T23:32:30.551Z  
**Source paper:** [Tastle: Distract large language models for automatic jailbreak attack](https://arxiv.org/abs/2403.08424)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-3.5-1106), GPT-4, Llama 2 7B Chat, Llama-2-sys, Mistral 7B, Vicuna 13B v1.5

## Description

Large Language Models (LLMs) are vulnerable to a novel black-box jailbreak attack, termed "Distraction-based Adversarial Prompts" (DAP). DAP leverages the distractibility and over-confidence of LLMs by concealing malicious queries within complex, unrelated prompts. A memory-reframing mechanism further redirects the LLM's attention away from the distracting context and toward the malicious query, causing the model to bypass safety mechanisms and generate harmful or unintended outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
