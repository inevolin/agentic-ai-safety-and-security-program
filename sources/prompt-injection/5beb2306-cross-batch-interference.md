# Cross-Batch Interference

**Promptfoo CVE ID:** `5beb2306`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-12-30T19:15:35.046Z  
**Source paper:** [Efficient but Vulnerable: Benchmarking and Defending LLM Batch Prompting Attack](https://arxiv.org/abs/2503.15551)  
**Tags:** `prompt-layer`, `injection`, `rag`, `blackbox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, Claude 3.5, Llama 3 70B, Llama 3.2 3B, DeepSeek-R1, Qwen 2.5 7B

## Description

Large Language Models (LLMs) deployed using "Batch Prompting" strategiesâwhere multiple distinct user queries are concatenated and processed in a single inference pass to reduce computational costsâare vulnerable to Cross-Query Prompt Injection. When a batch contains a mixture of benign queries and a single malicious query, the instructions within the malicious query (e.g., "apply this rule to every answer") bleed over the context window. This causes the model to apply the adversary's directives to the outputs generated for unrelated, benign queries within the same batch. This vulnerability allows an attacker to manipulate the integrity and content of responses destined for other users without direct access to those users' sessions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
