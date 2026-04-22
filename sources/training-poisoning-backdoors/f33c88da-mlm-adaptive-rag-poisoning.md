# MLM Adaptive RAG Poisoning

**Promptfoo CVE ID:** `f33c88da`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-12-30T20:31:48.895Z  
**Source paper:** [CtrlRAG: Black-box Adversarial Attacks Based on Masked Language Models in Retrieval-Augmented Language Generation](https://arxiv.org/abs/2503.06950)  
**Tags:** `application-layer`, `injection`, `poisoning`, `jailbreak`, `hallucination`, `rag`, `embedding`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, Claude 3.5, Mistral 7B, DeepSeek-V3

## Description

A vulnerability exists in Retrieval-Augmented Generation (RAG) systems that allows for black-box adversarial attacks known as "CtrlRAG." This flaw allows an attacker to manipulate the generation of Large Language Models (LLMs) by injecting maliciously crafted inputs into the system's knowledge base. Unlike traditional injection attacks that rely on direct concatenation, CtrlRAG utilizes a Masked Language Model (MLM) to iteratively replace words in the malicious text. This optimization ensures the injected content achieves a high similarity score with target user queriesâplacing it in the top-k retrieved resultsâwhile preserving the adversarial objective (e.g., specific misinformation or negative sentiment). The attack effectively overrides the LLM's parametric memory and bypasses safety guardrails without requiring access to the target model's gradients or weights.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
