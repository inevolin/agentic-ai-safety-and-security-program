# Bijection-Based LLM Jailbreak

**Promptfoo CVE ID:** `5882db3a`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T04:08:56.717Z  
**Source paper:** [Endless Jailbreaks with Bijection Learning](https://arxiv.org/abs/2410.01294)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3 Haiku, Claude 3 Opus, Claude 3.5 Sonnet, Gemini 1.5 Pro, GPT-4o, GPT-4o Mini, Llama 3.1 8B, Llama Guard 3

## Description

Large Language Models (LLMs) are vulnerable to a novel "bijection learning" attack that leverages in-context learning to teach the model a custom string-to-string encoding, bypassing built-in safety mechanisms. The attack encodes harmful queries, sends them to the model, and decodes the response, effectively circumventing safety filters. The complexity of the encoding can be controlled, adapting the attack to various LLMs; more capable models are more susceptible to complex encodings.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
