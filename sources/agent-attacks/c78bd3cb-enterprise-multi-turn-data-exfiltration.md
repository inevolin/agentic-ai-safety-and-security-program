# Enterprise Multi-Turn Data Exfiltration

**Promptfoo CVE ID:** `c78bd3cb`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-07-28T19:33:24.408Z  
**Source paper:** [Multi-Stage Prompt Inference Attacks on Enterprise LLM Systems](https://arxiv.org/abs/2507.15613)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `extraction`, `prompt-leaking`, `rag`, `fine-tuning`, `blackbox`, `agent`, `chain`, `data-privacy`, `data-security`, `safety`  
**Affected models (as reported):** Gemini, GPT-2, GPT-3, GPT-4, RoBERTa

## Description

Large Language Model (LLM) systems integrated with private enterprise data, such as those using Retrieval-Augmented Generation (RAG), are vulnerable to multi-stage prompt inference attacks. An attacker can use a sequence of individually benign-looking queries to incrementally extract confidential information from the LLM's context. Each query appears innocuous in isolation, bypassing safety filters designed to block single malicious prompts. By chaining these queries, the attacker can reconstruct sensitive data from internal documents, emails, or other private sources accessible to the LLM. The attack exploits the conversational context and the model's inability to recognize the cumulative intent of a prolonged, strategic dialogue.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
