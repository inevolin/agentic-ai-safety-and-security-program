# Benign Cross-User Contamination

**Promptfoo CVE ID:** `6ea37d04`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-11T00:01:16.920Z  
**Source paper:** [No Attacker Needed: Unintentional Cross-User Contamination in Shared-State LLM Agents](https://arxiv.org/abs/2604.01350)  
**Tags:** `application-layer`, `poisoning`, `rag`, `agent`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4o

## Description

A vulnerability exists in multi-user LLM agents utilizing persistent shared state, allowing Unintentional Cross-User Contamination (UCC). Without requiring any malicious input or attacker, benign user interactions containing locally valid scope constraints, formatting preferences, or procedural rules are persisted into the agent's shared memory or conversational context. The agent subsequently retrieves and misapplies these scope-bound artifacts to unrelated tasks from different users. This architectural flaw leads to semantic drift, incorrect data transformations, and misdirected workflows, as the model conflates one user's local context with general, globally applicable logic.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
