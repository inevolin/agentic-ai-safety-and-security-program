# Adversarial Report Code Insecurity

**Promptfoo CVE ID:** `80534e4c`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-12-09T03:38:00.124Z  
**Source paper:** [Adversarial bug reports as a security risk in language model-based automated program repair](https://arxiv.org/abs/2509.05372)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `denial-of-service`, `rag`, `agent`, `blackbox`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** Claude 4, Llama 3, Llama 4, o4-mini

## Description

Large Language Model (LLM)-based Automated Program Repair (APR) systemsâsuch as SWE-agent, OpenHands, and AutoCodeRoverâare vulnerable to adversarial manipulation via crafted bug reports. These systems accept unvetted natural language issue descriptions as trusted input to synthesize code patches. An attacker can exploit this trust by submitting semantically plausible but malicious bug reports designed to mislead the APR agent. By leveraging the semantic gap between natural language descriptions and code safety guarantees, attackers can coerce the APR system into generating patches that reintroduce previously fixed vulnerabilities (CVE reversion), inject new security flaws (e.g., removing authentication checks), or execute malicious logic within the CI/CD environment during the test generation phase. This vulnerability stems from a lack of input validation for adversarial intent and insufficient sandboxing of the agent's synthesis and testing environment.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
