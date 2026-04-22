# Embedding Inversion Privacy Leak

**Promptfoo CVE ID:** `bd566a31`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-12-30T20:44:06.305Z  
**Source paper:** [Safeguarding LLM Embeddings in End-Cloud Collaboration via Entropy-Driven Perturbation](https://arxiv.org/abs/2503.12896)  
**Tags:** `model-layer`, `extraction`, `rag`, `embedding`, `whitebox`, `data-privacy`  
**Affected models (as reported):** Llama 3

## Description

Retrieval-Augmented Generation (RAG) systems employing standard dense embedding models (e.g., Sentence-T5, SimCSE-BERT, RoBERTa, MPNet) for End-Cloud collaboration are vulnerable to Embedding Inversion Attacks (EIA). While embeddings are vector representations designed to be human-unrecognizable, they retain sufficient semantic information to allow an attacker with access to the vectors (e.g., a malicious or compromised cloud provider) to reconstruct the original sensitive plaintext input.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
