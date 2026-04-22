# Agent Lifecycle Compound Threats

**Promptfoo CVE ID:** `331684f4`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:53:54.019Z  
**Source paper:** [Taming openclaw: Security analysis and mitigation of autonomous llm agent threats](https://arxiv.org/abs/2603.11619)  
**Tags:** `application-layer`, `infrastructure-layer`, `prompt-layer`, `injection`, `extraction`, `poisoning`, `denial-of-service`, `prompt-leaking`, `rag`, `blackbox`, `agent`, `chain`, `api`, `data-privacy`, `data-security`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** 

## Description

OpenClaw is vulnerable to persistent memory poisoning, allowing an attacker to manipulate the agent's long-term memory store (`MEMORY.md`) via prompt injection. Because the autonomous agent continuously integrates this memory file as context for all subsequent reasoning and task planning, injected payloads act as durable behavioral constraints. This allows an attacker to persistently alter the agent's core policy, manipulate tool selection, and hijack future sessions without any further interaction.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
