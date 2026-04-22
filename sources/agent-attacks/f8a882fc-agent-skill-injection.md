# Agent Skill Injection

**Promptfoo CVE ID:** `f8a882fc`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-10T21:48:05.228Z  
**Source paper:** [ClawSafety:" Safe" LLMs, Unsafe Agents](https://arxiv.org/abs/2604.01438)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `agent`, `blackbox`, `data-privacy`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, GPT-5, GPT-5.1, Claude 4, Claude 4.5, Llama 3.1 70B, Gemini Pro, DeepSeek-V3, Qwen 2.5 7B, o4-mini

## Description

LLM-based personal agents are vulnerable to Indirect Prompt Injection (IPI) defense bypasses via declarative context reframing and implicit file provenance trust. Attackers can bypass agent safety filters by phrasing malicious instructions as declarative compliance alerts rather than imperative commands. Because agents are designed to report discrepancies as expected behavior, declarative framing bypasses intent-sensitive safety mechanisms. Additionally, attackers can exploit the agent's implicit trust in established workspace filenames by hiding malicious payloads in the import chains of familiar scripts, bypassing semantic code review.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
