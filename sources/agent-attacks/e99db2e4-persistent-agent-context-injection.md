# Persistent Agent Context Injection

**Promptfoo CVE ID:** `e99db2e4`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T23:22:25.256Z  
**Source paper:** [AgentSys: Secure and Dynamic LLM Agents Through Explicit Hierarchical Memory Management](https://arxiv.org/abs/2602.07398)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `agent`, `chain`, `blackbox`, `data-security`, `integrity`  
**Affected models (as reported):** GPT-4o, GPT-5.1, Claude 3.7, Gemini Pro, Qwen 2.5 7B, o4-mini

## Description

Conventional LLM agent architectures suffer from a working memory contamination vulnerability due to indiscriminate memory accumulation. When these agents retrieve external data via tools (e.g., web search, reading emails), the entire raw output is appended directly to their continuous context window. If the external data contains an Indirect Prompt Injection (IPI) payload, the malicious instruction persists in the agent's working memory across its entire multi-step reasoning workflow. This "Attack Persistence" forces the backend LLM to re-process the adversarial instruction at every subsequent decision node, granting the attacker continuous opportunities to hijack the agent's control flow and data flow, overriding the original user intent.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
