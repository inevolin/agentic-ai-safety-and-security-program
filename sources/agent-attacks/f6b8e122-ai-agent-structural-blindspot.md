# AI Agent Structural Blindspot

**Promptfoo CVE ID:** `f6b8e122`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-09T04:03:55.351Z  
**Source paper:** [Structural Representations for Cross-Attack Generalization in AI Agent Threat Detection](https://arxiv.org/abs/2601.01723)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `extraction`, `agent`, `chain`, `blackbox`, `data-privacy`, `data-security`, `integrity`  
**Affected models (as reported):** 

## Description

A vulnerability in AI agent threat detection systems relying on standard conversational tokenization allows attackers to bypass security monitors and execute structural attacks, such as tool hijacking and data exfiltration. Because traditional NLP-based detectors focus on linguistic patterns (surface language) rather than execution flow, an attacker can orchestrate malicious multi-step tool sequences using entirely benign natural language. This structural blindness causes cross-attack generalization to fail catastrophically on unseen tool-based threats, dropping detection performance below random chance (AUC 0.39 for tool hijacking, AUC 0.26 for unknown attacks).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
