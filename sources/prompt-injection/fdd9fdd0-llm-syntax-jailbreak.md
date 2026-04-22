# LLM Syntax Jailbreak

**Promptfoo CVE ID:** `fdd9fdd0`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:21:46.340Z  
**Source paper:** [StructTransform: A Scalable Attack Surface for Safety-Aligned Large Language Models](https://arxiv.org/abs/2502.11853)  
**Tags:** `prompt-layer`, `jailbreak`, `injection`, `model-layer`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** BERT, Claude 3.5 Sonnet, GPT-4o, Llama 3 8B, Llama 3.2 3B, Llama 3.2 90B, Mistral 7B, o1

## Description

Large Language Models (LLMs) are vulnerable to structure transformation attacks, where malicious prompts are encoded in diverse syntax spaces (e.g., SQL, JSON, LLM-generated syntaxes) to bypass safety mechanisms.  These attacks maintain the harmful intent while altering the linguistic structure, making detection based on token-level patterns ineffective.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
