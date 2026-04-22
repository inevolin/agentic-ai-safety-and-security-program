# Agent Red-Teaming via Fuzzing

**Promptfoo CVE ID:** `d608d128`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-07-14T03:46:57.695Z  
**Source paper:** [AgentVigil: Generic Black-Box Red-teaming for Indirect Prompt Injection against LLM Agents](https://arxiv.org/abs/2505.05849)  
**Tags:** `agent`, `application-layer`, `injection`, `blackbox`, `safety`, `data-security`  
**Affected models (as reported):** Claude 3.5 Sonnet, Gemini 2.0 Flash, GPT-4o, GPT-4o Mini, Llama 3 8B, o3-mini

## Description

Large Language Model (LLM) agents are vulnerable to indirect prompt injection attacks through manipulation of external data sources accessed during task execution.  Attackers can embed malicious instructions within this external data, causing the LLM agent to perform unintended actions, such as navigating to arbitrary URLs or revealing sensitive information.  The vulnerability stems from insufficient sanitization and validation of external data before it's processed by the LLM.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
