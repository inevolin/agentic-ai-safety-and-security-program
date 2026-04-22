# Agent Plan And Intent Hijack

**Promptfoo CVE ID:** `0c9c3ca2`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-08T23:23:41.528Z  
**Source paper:** [Deep Research Brings Deeper Harm](https://arxiv.org/abs/2510.11851)  
**Tags:** `application-layer`, `prompt-layer`, `jailbreak`, `injection`, `rag`, `agent`, `chain`, `safety`  
**Affected models (as reported):** DeepSeek-R1 32B, Qwen 2.5 32B

## Description

Deep Research (DR) agents, specifically those utilizing the "think-search-draft" architecture such as the WebThinker framework, contain a logic vulnerability in their recursive planning and information retrieval workflows. While the underlying Large Language Model (LLM) may possess alignment safeguards to reject harmful queries, the agentic framework creates a bypass vector. When a user submits a harmful query using specific adversarial strategiesâspecifically "Plan Injection" (manipulating the search steps) or "Intent Hijack" (academic framing)âthe agent decomposes the prohibited task into benign-looking sub-queries. The agent then retrieves detailed information from the external web and synthesizes it into a coherent report. This process effectively strips the safety context from the request, causing the agent to generate actionable instructions for high-risk activities (e.g., biosecurity threats, explosive synthesis, cyberattacks) that the standalone model would otherwise refuse.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
