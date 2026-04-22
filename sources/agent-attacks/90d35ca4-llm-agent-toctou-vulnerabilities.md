# LLM Agent TOCTOU Vulnerabilities

**Promptfoo CVE ID:** `90d35ca4`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-08-31T13:24:57.619Z  
**Source paper:** [Mind the Gap: Time-of-Check to Time-of-Use Vulnerabilities in LLM-Enabled Agents](https://arxiv.org/abs/2508.17155)  
**Tags:** `application-layer`, `prompt-layer`, `side-channel`, `agent`, `chain`, `blackbox`, `integrity`, `data-security`, `safety`  
**Affected models (as reported):** GPT-4o

## Description

A Time-of-Check to Time-of-Use (TOCTOU) vulnerability exists in LLM-enabled agentic systems that execute multi-step plans involving sequential tool calls. The vulnerability arises because plans are not executed atomically. An agent may perform a "check" operation (e.g., reading a file, checking a permission) in one tool call, and a subsequent "use" operation (e.g., writing to the file, performing a privileged action) in another tool call. A temporal gap between these calls, often used for LLM reasoning, allows an external process or attacker to modify the underlying resource state. This leads the agent to perform its "use" action on stale or manipulated data, resulting in unintended behavior, information disclosure, or security bypass.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
