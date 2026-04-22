# Query-Agnostic Retrieval Poisoning

**Promptfoo CVE ID:** `e5c89e2f`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T22:15:36.255Z  
**Source paper:** [" Someone Hid It": Query-Agnostic Black-Box Attacks on LLM-Based Retrieval](https://arxiv.org/abs/2602.00364)  
**Tags:** `model-layer`, `application-layer`, `injection`, `rag`, `embedding`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** Mistral 7B, Qwen 2.5 7B, Gemma

## Description

A vulnerability in Large Language Model-based Retrieval (LLMR) systems allows attackers to intentionally hide specific documents from being retrieved (e.g., in RAG pipelines or search engines) by appending a small number of adversarially crafted, query-agnostic tokens. The attack operates in a complete black-box setting: it requires no knowledge of the victim's queries, the target retrieval model's parameters, or the underlying document corpus. By utilizing Document-Query Adversarial (DQ-A) learning on the word-embedding layer of a zero-shot surrogate model, the injected tokens artificially shift the targeted document's embedding representation outside of its inherent topic cluster. This makes the document effectively invisible to downstream similarity matching functions across a wide range of disparate LLM embedding models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
