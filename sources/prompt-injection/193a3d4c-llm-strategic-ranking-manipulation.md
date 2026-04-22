# LLM Strategic Ranking Manipulation

**Promptfoo CVE ID:** `193a3d4c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-12-09T02:21:05.723Z  
**Source paper:** [Dynamics of adversarial attacks on large language model-based search engines](https://arxiv.org/abs/2501.00745)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `rag`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** 

## Description

Large Language Model (LLM) based search engines utilizing Retrieval-Augmented Generation (RAG) are vulnerable to ranking manipulation attacks via indirect prompt injection. Adversaries can embed optimized adversarial triggers or crafted semantic patterns within external webpage content. When these manipulated documents are retrieved and integrated into the LLM's context window alongside a user query, the adversarial content disrupts the model's contextual understanding. This results in the LLM disregarding objective relevance metrics and generating responses that preferentially rank or recommend the adversary's content over competitors. Unlike traditional SEO, this manipulation affects the processing of the entire retrieval set, creating a cascading effect where one malicious document distorts the perceived relevance of other retrieved documents.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
