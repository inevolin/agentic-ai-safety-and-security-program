# Zero-Shot Embedding Leak

**Promptfoo CVE ID:** `8d07c639`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-12-30T21:14:36.553Z  
**Source paper:** [Universal Zero-shot Embedding Inversion](https://arxiv.org/abs/2504.00147)  
**Tags:** `model-layer`, `extraction`, `embedding`, `rag`, `blackbox`, `data-privacy`  
**Affected models (as reported):** Qwen 2 5B

## Description

A Universal Zero-shot Embedding Inversion vulnerability exists in vector databases and embedding-based retrieval systems. The flaw allows an attacker to reconstruct original plaintext documents from their vector embeddings without requiring access to the original training data or training an embedding-specific inversion model. The attack, identified as "ZSinvert," leverages a multi-stage adversarial decoding process: (1) a cosine-similarity guided beam search using a Large Language Model (LLM) to generate candidate text sequences that maximize similarity to the target embedding, followed by (2) a universal, offline-trained correction model that refines the text for lexical accuracy. This method is effective across diverse encoder architectures (BERT, T5, Qwen) and remains effective against defenses employing Gaussian noise perturbation up to $\sigma=0.01$.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
