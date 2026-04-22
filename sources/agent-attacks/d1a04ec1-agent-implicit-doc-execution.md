# Agent Implicit Doc Execution

**Promptfoo CVE ID:** `d1a04ec1`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-10T22:17:00.555Z  
**Source paper:** [Supply-Chain Poisoning Attacks Against LLM Coding Agent Skill Ecosystems](https://arxiv.org/abs/2604.03081)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `rag`, `blackbox`, `agent`, `chain`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** GPT-5, Claude 4, Gemini 2

## Description

LLM-based coding agents are vulnerable to Document-Driven Implicit Payload Execution (DDIPE) via supply-chain poisoning of third-party agent skills. Attackers can embed malicious logic directly into legitimate-looking code examples and configuration templates within skill documentation files (e.g., `SKILL.md`). Because coding agents ingest this metadata into their context windows and treat the documentation as an authoritative reference, the underlying LLM silently reproduces and executes the embedded payload during routine task completion. This implicit execution bypasses both model-level safety alignment (which looks for imperative malicious instructions) and framework-level architectural guardrails, hijacking the agent's system-level action space (file I/O, shell commands, network requests) without requiring explicitly malicious user prompts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
