# Black-Box RAG Rank Hijack

**Promptfoo CVE ID:** `e0bc28ed`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-12-30T20:25:05.574Z  
**Source paper:** [DeRAG: Black-box Adversarial Attacks on Multiple Retrieval-Augmented Generation Applications via Prompt Injection](https://arxiv.org/abs/2507.15042)  
**Tags:** `prompt-layer`, `injection`, `rag`, `embedding`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** 

## Description

Retrieval-Augmented Generation (RAG) systems utilizing dense (e.g., BERT-based) or sparse (e.g., BM25) retrievers are vulnerable to black-box adversarial prompt injection attacks. By employing a gradient-free Differential Evolution (DE) optimization algorithm (referred to as DeRAG), an attacker can generate short adversarial suffixes (typically â¤ 5 tokens). When these suffixes are appended to a user query, they manipulate the retriever's ranking mechanism to promote a specific, malicious, or irrelevant target document to the top-k results (often Rank 1). This manipulation occurs by optimizing the suffix to minimize the distance between the query embedding and the target document embedding in the latent space, effectively bypassing semantic relevance checks without requiring access to the model's gradients or internal weights.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
