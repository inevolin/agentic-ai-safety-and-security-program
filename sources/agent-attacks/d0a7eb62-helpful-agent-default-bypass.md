# Helpful Agent Default Bypass

**Promptfoo CVE ID:** `d0a7eb62`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T05:46:09.829Z  
**Source paper:** [Too Helpful to Be Safe: User-Mediated Attacks on Planning and Web-Use Agents](https://arxiv.org/abs/2601.10758)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `hallucination`, `agent`, `blackbox`, `safety`, `data-privacy`, `integrity`  
**Affected models (as reported):** 

## Description

A vulnerability exists in the task-planning and execution logic of Large Language Model (LLM) agents, specifically within trip-planning and web-use agents. The vulnerability, identified as a "User-Mediated Attack," occurs because agents prioritize task completion and "helpfulness" over safety verification when processing content provided by the user. When a benign user forwards untrusted external content (e.g., promotional text containing phishing links or malicious instructions) to the agent, the agent treats this content as a high-priority user directive. Consequently, the agent fails to verify the authenticity of the resources, bypasses internal safety constraints, and executes risky actions such as navigating to malicious URLs, endorsing fabricated discounts, or submitting sensitive data to attacker-controlled endpoints. This behavior persists even when the user does not explicitly request safety checks, as the agent defaults to execution rather than verification.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
