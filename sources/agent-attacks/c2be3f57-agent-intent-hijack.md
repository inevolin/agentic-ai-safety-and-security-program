# Agent Intent Hijack

**Promptfoo CVE ID:** `c2be3f57`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-12-09T01:58:10.654Z  
**Source paper:** [Promptarmor: Simple yet effective prompt injection defenses](https://arxiv.org/abs/2507.15219)  
**Tags:** `prompt-layer`, `application-layer`, `injection`, `rag`, `blackbox`, `agent`, `safety`, `data-security`  
**Affected models (as reported):** GPT-3.5, GPT-4o, Qwen 2.5 6B, o4-mini

## Description

LLM agents integrating with external environments (e.g., via tool use, web retrieval, or RAG) are vulnerable to indirect prompt injection attacks. Malicious instructions embedded in untrusted data sourcesâsuch as emails, webpages, or tool outputsâare ingested by the agent and treated as valid context. Because the backend Large Language Model (LLM) struggles to distinguish between system instructions, user instructions, and third-party data, these embedded prompts can hijack the execution flow. This allows an attacker to override the user's original intent and force the agent to execute arbitrary, attacker-defined tasks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
