# RAG Worm Jailbreak

**Promptfoo CVE ID:** `0d8a9194`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-09-01  
**Analyzed:** 2024-12-29T04:30:53.846Z  
**Source paper:** [Unleashing worms and extracting data: Escalating the outcome of attacks against rag-based inference in scale and severity using jailbreaking](https://arxiv.org/abs/2409.08045)  
**Tags:** `rag`, `jailbreak`, `extraction`, `injection`, `data-privacy`, `data-security`, `blackbox`, `agent`, `chain`  
**Affected models (as reported):** Gemini 1.5 Flash

## Description

Jailbreaking vulnerabilities in Large Language Models (LLMs) used in Retrieval-Augmented Generation (RAG) systems allow escalation of attacks from entity extraction to full document extraction and enable the propagation of self-replicating malicious prompts ("worms") within interconnected RAG applications. Exploitation leverages prompt injection to force the LLM to return retrieved documents or execute malicious actions specified within the prompt.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
