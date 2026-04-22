# Internal Prompt Leak Injection

**Promptfoo CVE ID:** `e4db6c0d`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-30T19:23:45.759Z  
**Source paper:** [QueryIPI: Query-agnostic Indirect Prompt Injection on Coding Agents](https://arxiv.org/abs/2510.23675)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `agent`, `data-security`, `safety`  
**Affected models (as reported):** Claude 4

## Description

LLM-based coding agents integrated into IDEs (e.g., VS Code Copilot, Cursor, Windsurf) are vulnerable to a query-agnostic Indirect Prompt Injection (IPI) attack termed "QueryIPI." This vulnerability allows an attacker to achieve Remote Code Execution (RCE) on the developer's machine by injecting a malicious tool definition (e.g., via the Model Context Protocol) into the agent's context.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
