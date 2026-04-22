# Agent Over-Trigger Containment

**Promptfoo CVE ID:** `509dc801`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-09T04:30:45.306Z  
**Source paper:** [OpenSec: Measuring Incident Response Agent Calibration Under Adversarial Evidence](https://arxiv.org/abs/2601.21083)  
**Tags:** `model-layer`, `application-layer`, `injection`, `agent`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4o, Claude 4.5, Gemini 2, Qwen 2.5 4B

## Description

Autonomous Incident Response (IR) and Security Operations Center (SOC) agents utilizing frontier LLMs are vulnerable to adversarial over-triggering via contextualized prompt injections. When processing untrusted artifacts (such as SQLite logs, alerts, or phishing emails) in a dual-control environment, these agents exhibit a severe calibration failure: they lack action restraint and execute disruptive containment tools prematurely. Attackers can exploit this by embedding T2 (contextualized domain-specific framing) prompt injections into malicious artifacts. Because the agents act with low Evidence-Gated Action Rates (EGAR)âfailing to fetch trusted evidence before actingâthe payloads successfully trick the models into indiscriminately executing containment actions against legitimate targets, effectively weaponizing the defense system against its own infrastructure.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
