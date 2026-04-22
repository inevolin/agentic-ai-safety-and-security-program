# Sequential Prompt Jailbreak

**Promptfoo CVE ID:** `9ea81b2c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-11-01  
**Analyzed:** 2025-01-26T18:21:44.310Z  
**Source paper:** [SequentialBreak: Large Language Models Can be Fooled by Embedding Jailbreak Prompts into Sequential Prompt Chains](https://arxiv.org/abs/2411.06426)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Llama

## Description

Large Language Models (LLMs) are vulnerable to "SequentialBreak," a jailbreak attack where embedding a harmful prompt within a chain of benign prompts in a single query can bypass LLM safety features.  The LLM's attention mechanism prioritizes the benign prompts, allowing the harmful prompt to be processed without triggering safety mitigations.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
