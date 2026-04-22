# Concurrent Task Jailbreak

**Promptfoo CVE ID:** `d3742594`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-11-20T15:52:00.933Z  
**Source paper:** [Adjacent Words, Divergent Intents: Jailbreaking Large Language Models via Task Concurrency](https://arxiv.org/abs/2510.21189)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** DeepSeek V3, Gemini 2.5 Flash, GPT-4.1, GPT-4o, GPT-4o Mini, Llama 2 13B, Llama 2 7B, Llama 3 8B, Mistral 7B, Vicuna 13B

## Description

A jailbreak vulnerability, known as Task Concurrency, exists in multiple Large Language Models (LLMs). The vulnerability arises when two distinct tasks, one harmful and one benign, are interleaved at the word level within a single prompt. The structure of the malicious prompt alternates words from each task, often using separators like `{}` to encapsulate words from the second task. This "concurrent" instruction format obfuscates the harmful intent from the model's safety guardrails, causing the LLM to process and generate a response to the harmful query, which it would otherwise refuse. The attacker can then extract the harmful content from the model's interleaved output.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
