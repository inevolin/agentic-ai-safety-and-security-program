# LLM Agent False Negative

**Promptfoo CVE ID:** `f1372ad9`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T21:38:22.121Z  
**Source paper:** [Sifting the Noise: A Comparative Study of LLM Agents in Vulnerability False Positive Filtering](https://arxiv.org/abs/2601.22952)  
**Tags:** `application-layer`, `hallucination`, `agent`, `integrity`, `reliability`, `data-security`  
**Affected models (as reported):** GPT-5, Claude 3.5, Claude 4

## Description

LLM-based autonomous agents deployed for Static Application Security Testing (SAST) false positive filtering exhibit a critical failure mode resulting in the suppression of True Positive (TP) vulnerability reports. When configured to triage alerts from tools such as CodeQL, Semgrep, and SonarQube, agents including SWE-agent, OpenHands, and Aider incorrectly classify legitimate, exploitable vulnerabilities as false positives. This vulnerability suppression is highly correlated with specific Common Weakness Enumeration (CWE) categories, specifically those requiring domain-specific policy knowledge or implicit threat modeling (e.g., Cryptography and Trust Boundary Violations).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
