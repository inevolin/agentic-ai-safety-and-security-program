# Multi-Agent Compositional Leak

**Promptfoo CVE ID:** `3e63e0df`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-09-01  
**Analyzed:** 2026-01-14T15:11:45.587Z  
**Source paper:** [The sum leaks more than its parts: Compositional privacy risks and mitigations in multi-agent collaboration](https://arxiv.org/abs/2509.14284)  
**Tags:** `application-layer`, `extraction`, `rag`, `blackbox`, `agent`, `chain`, `data-privacy`, `safety`  
**Affected models (as reported):** GPT-5, Gemini 2, Qwen 2.5 32B

## Description

Multi-agent Large Language Model (LLM) systems are vulnerable to compositional privacy leakage, a flaw where sensitive information is exposed through the aggregation of individually benign responses from distinct agents. In distributed architectures where data is siloed (e.g., distinct agents handling HR, Finance, and IT logs), individual agents lack a global view of the userâs accumulated knowledge or the sensitive attributes derivable from cross-agent data combinations. An attacker can execute a structured query plan, soliciting partial, non-sensitive fragments from multiple agents sequentially. Because standard safety guardrails (such as PII filtering or single-agent Chain-of-Thought reasoning) evaluate queries in isolation, agents release these fragments. The adversary then composes these outputs to infer protected attributes (such as health status, political affiliation, or de-anonymized identity) that were never explicitly contained in any single agent's training data or context window.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
