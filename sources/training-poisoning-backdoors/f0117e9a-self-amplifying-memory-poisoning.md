# Self-Amplifying Memory Poisoning

**Promptfoo CVE ID:** `f0117e9a`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-10-01  
**Analyzed:** 2026-01-14T14:35:28.399Z  
**Source paper:** [A-memguard: A proactive defense framework for llm-based agent memory](https://arxiv.org/abs/2510.02373)  
**Tags:** `application-layer`, `prompt-layer`, `poisoning`, `injection`, `rag`, `agent`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4o, Llama 3.1 8B

## Description

Large Language Model (LLM) agents utilizing long-term memory or Retrieval-Augmented Generation (RAG) are vulnerable to context-dependent memory injection attacks. Unlike traditional prompt injections that are overtly malicious, this vulnerability involves injecting records that appear benign and coherent in isolationâthereby bypassing standard perplexity filters and static content moderation (e.g., LlamaGuard). These records contain "sleeping" malicious logic that is only activated when retrieved alongside a specific query or context. Additionally, this vulnerability exploits the agentâs learning mechanism to create a self-reinforcing error cycle: once the agent acts on a poisoned record, the resulting erroneous decision is stored as a trusted precedent, validating the flawed logic and progressively lowering the threshold for future attacks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
