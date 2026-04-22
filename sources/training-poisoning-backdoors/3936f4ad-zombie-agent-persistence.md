# Zombie Agent Persistence

**Promptfoo CVE ID:** `3936f4ad`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-22T05:15:56.146Z  
**Source paper:** [Zombie Agents: Persistent Control of Self-Evolving LLM Agents via Self-Reinforcing Injections](https://arxiv.org/abs/2602.15654)  
**Tags:** `prompt-layer`, `application-layer`, `injection`, `poisoning`, `rag`, `embedding`, `agent`, `blackbox`, `data-privacy`, `data-security`, `safety`  
**Affected models (as reported):** 

## Description

Self-evolving Large Language Model (LLM) agents that utilize long-term memory mechanisms (such as Vector Databases for Retrieval-Augmented Generation or Sliding Window buffers) are vulnerable to persistent indirect prompt injection. This vulnerability, termed "Zombie Agent," occurs when the agent's memory update function ($F_M$) processes attacker-controlled content retrieved from external sources (e.g., web pages, documents) and commits it to long-term storage without sufficient sanitization. Unlike transient prompt injections which are cleared upon context reset, these payloads persist across sessions. For RAG systems, attackers utilize "Semantic Aliasing" to ensure the payload is retrieved during unrelated future queries. For Sliding Window systems, attackers utilize "Recursive Self-Replication" to force the agent to repeatedly rewrite the payload into the active context, defeating truncation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
