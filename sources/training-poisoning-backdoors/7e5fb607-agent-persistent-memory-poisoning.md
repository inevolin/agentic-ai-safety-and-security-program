# Agent Persistent Memory Poisoning

**Promptfoo CVE ID:** `7e5fb607`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T23:36:20.635Z  
**Source paper:** [Memory Poisoning Attack and Defense on Memory Based LLM-Agents](https://arxiv.org/abs/2601.05504)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `poisoning`, `rag`, `blackbox`, `agent`, `integrity`, `safety`, `data-privacy`  
**Affected models (as reported):** GPT-4o, Llama 3.1 8B, Gemini 2

## Description

Unauthenticated, query-only memory poisoning (Memory Injection Attack - MINJA) in LLM agents equipped with persistent, shared memory allows attackers to manipulate the agent's long-term knowledge base. Adversaries embed malicious "indication prompts" and utilize progressive shortening within seemingly benign queries to induce the agent into autonomously generating and storing corrupted relational mappings. Because the memory is shared and retrieved via similarity (e.g., Levenshtein distance) as few-shot demonstrations for future interactions, the poisoned entries are appended to the context window of subsequent legitimate users. Furthermore, the vulnerability bypasses LLM-as-a-judge memory sanitization defenses; advanced models (e.g., Gemini-2.0-Flash) can be socially engineered via justification clauses to assign perfect trust scores (1.0) to malicious instructions, entirely bypassing trust-aware retrieval filters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
