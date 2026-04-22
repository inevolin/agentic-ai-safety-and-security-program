# Voice Agent Behavioral Bypass

**Promptfoo CVE ID:** `ee656ee8`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T22:46:45.279Z  
**Source paper:** [Aegis: Towards Governance, Integrity, and Security of AI Voice Agents](https://arxiv.org/abs/2602.07379)  
**Tags:** `model-layer`, `application-layer`, `injection`, `extraction`, `poisoning`, `jailbreak`, `denial-of-service`, `multimodal`, `agent`, `blackbox`, `data-privacy`, `data-security`, `integrity`, `reliability`, `safety`  
**Affected models (as reported):** Gemini 2, Qwen 2, Qwen 2.5

## Description

Audio Large Language Models (ALLMs) integrated into voice agent systems for high-stakes domains (banking, IT support, logistics) are vulnerable to multimodal adversarial attacks via spoken interaction. Adversaries can exploit the model's inherent compliance and contextual awareness through multi-turn dialogue to bypass authentication safeguards, escalate privileges (e.g., unauthorized credit limit increases), exfiltrate sensitive Personally Identifiable Information (PII), and poison operational logs. The vulnerability is most severe when agents are granted direct read access to backend records, allowing attackers to social-engineer the agent into revealing verification data. However, behavioral vulnerabilitiesâspecifically privilege escalation and resource abuseâpersist even when database access is restricted to query-only interfaces. Open-weight models (e.g., Qwen-Audio family) exhibit higher susceptibility compared to closed-source counterparts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
