# Emergent Agentic Vulnerabilities

**Promptfoo CVE ID:** `47025a0b`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-09-01  
**Analyzed:** 2026-01-14T06:33:34.304Z  
**Source paper:** [Mind the Gap: Comparing Model-vs Agentic-Level Red Teaming with Action-Graph Observability on GPT-OSS-20B](https://arxiv.org/abs/2509.17259)  
**Tags:** `model-layer`, `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `rag`, `agent`, `chain`, `blackbox`, `safety`  
**Affected models (as reported):** 

## Description

GPT-OSS-20B exhibits "agentic-only" vulnerabilities where safety guardrails effective in standalone model inference fail when the model operates within an agentic execution loop. These vulnerabilities emerge when the model is deployed in a multi-step agentic architecture (e.g., utilizing LangGraph, tool usage, and memory retention). Attackers can bypass safety filters by employing context-aware iterative refinement attacks, which incorporate the full agentic stateâincluding tool outputs, conversation history, and inter-agent memoryâinto the adversarial prompt generation. Specific execution contexts, particularly those involving tool termination or agent-handoffs, alter the model's vulnerability profile, rendering it susceptible to harmful objectives (e.g., from HarmBench) that are strictly refused during isolated model-level interaction.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
