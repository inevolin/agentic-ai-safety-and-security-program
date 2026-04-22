# Prompt Injection Alignment Bypass

**Promptfoo CVE ID:** `3863a8e2`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-12-08T22:13:22.295Z  
**Source paper:** [Breaking to Build: A Threat Model of Prompt-Based Attacks for Securing LLMs](https://arxiv.org/abs/2509.04615)  
**Tags:** `prompt-layer`, `model-layer`, `application-layer`, `injection`, `jailbreak`, `poisoning`, `extraction`, `hallucination`, `rag`, `fine-tuning`, `chain`, `blackbox`, `whitebox`, `agent`, `safety`, `data-privacy`, `integrity`  
**Affected models (as reported):** 

## Description

Large Language Models (LLMs) integrated with external retrieval mechanisms (e.g., Retrieval-Augmented Generation (RAG), web search, or email processing) are vulnerable to Indirect Prompt Injection. This vulnerability occurs when an LLM consumes input from untrusted external sourcesâsuch as websites, code repositories, or incoming emailsâthat contain embedded adversarial prompts. Unlike direct injection, where the user attacks the model, here the "poisoned" data is retrieved by the system during operation. The model creates a context window merging user instructions with this retrieved data, failing to distinguish between the two. Consequently, the model executes the malicious instructions embedded in the external content, allowing attackers to hijack the model's behavior, exfiltrate sensitive data, or trigger unauthorized API calls without the end-user's knowledge.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
