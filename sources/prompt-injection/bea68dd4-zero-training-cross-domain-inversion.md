# Zero-Training Cross-Domain Inversion

**Promptfoo CVE ID:** `bea68dd4`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-22T01:17:47.007Z  
**Source paper:** [Zero2Text: Zero-Training Cross-Domain Inversion Attacks on Textual Embeddings](https://arxiv.org/abs/2602.01757)  
**Tags:** `model-layer`, `extraction`, `rag`, `embedding`, `blackbox`, `api`, `data-privacy`  
**Affected models (as reported):** 

## Description

A cryptographic weakness exists in the privacy assumptions of vector embeddings used in Retrieval-Augmented Generation (RAG) systems and Vector Databases. The vulnerability, designated "Zero2Text," allows an unauthenticated attacker to reconstruct raw text from captured vector embeddings without access to the victim model's parameters, gradients, or training data. Unlike prior embedding inversion attacks that require training large decoders on domain-specific datasets, this vulnerability leverages a training-free, recursive online alignment mechanism. An attacker utilizes a local pre-trained Large Language Model (LLM) to generate token candidates and iteratively refines a linear projection matrix via Ridge Regression using a limited number of API queries to the victim embedding model. This enables the high-fidelity recovery of sensitive cross-domain text (e.g., medical records recovered using a general-purpose model) solely through black-box API interaction.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
