# Single-Shot RAG Poisoning

**Promptfoo CVE ID:** `e997b267`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-04-01  
**Analyzed:** 2026-02-22T04:18:28.055Z  
**Source paper:** [Practical poisoning attacks against retrieval-augmented generation](https://arxiv.org/abs/2504.03957)  
**Tags:** `application-layer`, `poisoning`, `rag`, `embedding`, `blackbox`, `integrity`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o

## Description

Retrieval-Augmented Generation (RAG) systems are vulnerable to a targeted corpus poisoning attack known as "CorruptRAG". This vulnerability allows an attacker to manipulate the response of an LLM to a specific target query by injecting a single malicious document into the RAG knowledge database. Unlike traditional poisoning attacks that require flooding the retrieval results (top-N) with malicious content to outnumber correct information, CorruptRAG succeeds with a single retrieved document.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
