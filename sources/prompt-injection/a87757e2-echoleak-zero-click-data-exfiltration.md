# EchoLeak Zero-Click Data Exfiltration

**Promptfoo CVE ID:** `a87757e2`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-09-30T18:26:38.309Z  
**Source paper:** [EchoLeak: The First Real-World Zero-Click Prompt Injection Exploit in a Production LLM System](https://arxiv.org/abs/2509.10540)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `extraction`, `rag`, `blackbox`, `chain`, `api`, `data-privacy`, `data-security`, `safety`  
**Affected models (as reported):** 

## Description

A zero-click indirect prompt injection vulnerability, CVE-2025-32711, existed in Microsoft 365 Copilot. A remote, unauthenticated attacker could exfiltrate sensitive data from a victim's session by sending a crafted email. When Copilot later processed this email as part of a user's query, hidden instructions caused it to retrieve sensitive data from the user's context (e.g., other emails, documents) and embed it into a URL. The attack chain involved bypassing Microsoft's XPIA prompt injection classifier, evading link redaction filters using reference-style Markdown, and abusing a trusted Microsoft Teams proxy domain to bypass the client-side Content Security Policy (CSP), resulting in automatic data exfiltration without any user interaction.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
