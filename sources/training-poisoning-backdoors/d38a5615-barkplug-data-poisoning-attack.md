# BarkPlug Data Poisoning Attack

**Promptfoo CVE ID:** `d38a5615`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-12-01  
**Analyzed:** 2025-03-19T19:26:06.041Z  
**Source paper:** [Poison Attacks and Adversarial Prompts Against an Informed University Virtual Assistant](https://arxiv.org/abs/2412.06788)  
**Tags:** `application-layer`, `prompt-layer`, `rag`, `poisoning`, `jailbreak`, `blackbox`, `data-security`, `integrity`, `reliability`  
**Affected models (as reported):** Barkplug V.2

## Description

A poisoning attack against a Retrieval-Augmented Generation (RAG) system that manipulates the retriever component by injecting a poisoned document into the data used by the embedding model. This poisoned document contains modified and incorrect information. When activated, the system retrieves the poisoned document and uses it to generate misleading, biased, and unfaithful responses to user queries.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
