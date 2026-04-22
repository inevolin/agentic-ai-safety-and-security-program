# Trust Paradox Agent Over-Exposure

**Promptfoo CVE ID:** `cc5b82bc`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-09T01:31:59.029Z  
**Source paper:** [The Trust Paradox in LLM-Based Multi-Agent Systems: When Collaboration Becomes a Security Vulnerability](https://arxiv.org/abs/2510.18563)  
**Tags:** `application-layer`, `model-layer`, `extraction`, `agent`, `chain`, `data-privacy`, `safety`  
**Affected models (as reported):** GPT-3.5, Llama 3 8B, DeepSeek-V3, Qwen 2.5

## Description

A privilege escalation and information disclosure vulnerability exists in Large Language Model (LLM) based Multi-Agent Systems (MAS) utilizing explicit inter-agent trust modeling. When the internal trust coefficient ($\tau$) between a Custodian-Agent (holding sensitive data) and a Seeker-Agent is set to a high level (e.g., $\tau=0.9$) to optimize coordination efficiency, the Custodian-Agent systematically fails to enforce Minimum Necessary Information (MNI) principles. This "Trust-Vulnerability Paradox" (TVP) causes the model to relax internal safety gating and increase descriptive redundancy, allowing a Seeker-Agent to extract sensitive data (Personally Identifiable Information, authentication tokens, or critical resource states) that should remain private, simply by leveraging the high-trust context without utilizing adversarial jailbreaks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
