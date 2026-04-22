# Alphabet Index Jailbreak

**Promptfoo CVE ID:** `24946b7d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-07-14T04:08:11.775Z  
**Source paper:** [Alphabet Index Mapping: Jailbreaking LLMs through Semantic Dissimilarity](https://arxiv.org/abs/2506.12685)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4

## Description

Large Language Models (LLMs) are vulnerable to a novel adversarial attack, Alphabet Index Mapping (AIM), which achieves high success rates in bypassing safety filters ("jailbreaking"). AIM encodes prompts by converting characters to their alphabet indices, maximizing semantic dissimilarity while maintaining straightforward decoding instructions.  This allows malicious prompts to evade detection based on semantic similarity, even when the LLM correctly decodes the intent.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
