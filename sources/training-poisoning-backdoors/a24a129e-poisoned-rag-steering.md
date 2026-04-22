# Poisoned RAG Steering

**Promptfoo CVE ID:** `a24a129e`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-12-30T21:12:08.674Z  
**Source paper:** [Defending against knowledge poisoning attacks during retrieval-augmented generation](https://arxiv.org/abs/2508.02835)  
**Tags:** `application-layer`, `poisoning`, `rag`, `blackbox`, `integrity`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, Llama 2, Llama 3

## Description

Retrieval-Augmented Generation (RAG) systems are vulnerable to knowledge poisoning attacks (specifically the "PoisonedRAG" method) where an attacker injects adversarial texts into the retrieval knowledge database. These adversarial texts are optimized to achieve two simultaneous goals: 1) rank highly (top-k) during the retrieval phase for specific target queries, and 2) semantically steer the Large Language Model (LLM) to generate a pre-defined, attacker-chosen response instead of the ground truth. This manipulation exploits the LLM's reliance on retrieved context, allowing the attacker to overwrite the model's internal knowledge and force the generation of false information without accessing the model weights or the retriever parameters (black-box setting), or by leveraging gradient-based optimization like HotFlip (white-box setting).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
