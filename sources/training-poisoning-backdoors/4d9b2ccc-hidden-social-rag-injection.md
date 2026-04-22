# Hidden Social RAG Injection

**Promptfoo CVE ID:** `4d9b2ccc`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-09T04:00:41.963Z  
**Source paper:** [Hidden-in-Plain-Text: A Benchmark for Social-Web Indirect Prompt Injection in RAG](https://arxiv.org/abs/2601.10923)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `poisoning`, `rag`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Llama 3 8B, Mistral 7B, Qwen 2.5 14B

## Description

Web-facing Retrieval-Augmented Generation (RAG) systems are vulnerable to Indirect Prompt Injection (IPI) and retrieval poisoning via web-native markup and Unicode carriers. Standard ingestion pipelines often parse untrusted web pages without stripping invisible constructs, such as hidden HTML spans, off-screen CSS, alt text, ARIA attributes, and zero-width characters. When an attacker embeds malicious instructions within these invisible carriers on third-party sites, the RAG system retrieves and processes them as valid context. This allows the hidden payload to execute during the LLM's answer generation phase or artificially elevate the ranking of poisoned documents within sparse and dense retrievers.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
