# Agent Pipeline Simple Hacks

**Promptfoo CVE ID:** `39225acc`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-12-09T03:26:09.783Z  
**Source paper:** [Commercial llm agents are already vulnerable to simple yet dangerous attacks](https://arxiv.org/abs/2502.08586)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `poisoning`, `jailbreak`, `extraction`, `rag`, `agent`, `blackbox`, `data-privacy`, `safety`, `data-security`  
**Affected models (as reported):** 

## Description

Commercial LLM-powered agents utilizing autonomous web access, memory modules, and retrieval-augmented generation (RAG) are vulnerable to indirect prompt injection and environmental manipulation. Attackers can embed malicious instructions into external data sources trusted by the agent (such as Reddit posts, public databases, or ArXiv papers). When the agent autonomously retrieves and processes this content during task execution, it executes the embedded malicious commands. This vulnerability allows remote attackers to bypass safety guardrails and alignment filters, causing the agent to exfiltrate sensitive user data (e.g., credit card numbers), download and execute malware, send authenticated phishing emails to the user's contacts, or generate prohibited chemical synthesis protocols (e.g., for nerve gas) by interacting with poisoned database entries.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
