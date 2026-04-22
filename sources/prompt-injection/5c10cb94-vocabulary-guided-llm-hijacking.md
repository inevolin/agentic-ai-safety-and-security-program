# Vocabulary-Guided LLM Hijacking

**Promptfoo CVE ID:** `5c10cb94`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-04-01  
**Analyzed:** 2024-12-29T04:13:54.193Z  
**Source paper:** [Vocabulary Attack to Hijack Large Language Model Applications](https://arxiv.org/abs/2404.02637)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Flan-T5 XXL, Llama 2 7B Chat, Llama 2 Chat, T5 Base

## Description

Large Language Models (LLMs) are vulnerable to a vocabulary attack where carefully selected words from the model's vocabulary, identified using an optimization procedure and embeddings from another LLM, are inserted into user prompts. This manipulation can cause the target LLM to generate specific undesired outputs (goal hijacking), such as offensive language or false information, even with minimal word insertions. The attack is difficult to detect because the inserted words may appear innocuous in the context of the prompt.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
