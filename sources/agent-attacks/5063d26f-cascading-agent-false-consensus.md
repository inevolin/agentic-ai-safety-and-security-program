# Cascading Agent False Consensus

**Promptfoo CVE ID:** `5063d26f`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-03-09T00:37:04.144Z  
**Source paper:** [From Spark to Fire: Modeling and Mitigating Error Cascades in LLM-Based Multi-Agent Collaboration](https://arxiv.org/abs/2603.04474)  
**Tags:** `application-layer`, `injection`, `hallucination`, `agent`, `chain`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4o

## Description

Multi-Agent Systems based on Large Language Models (LLM-MAS) are vulnerable to systemic Consensus Corruption via cascading error amplification. Because mainstream collaborative architectures rely on recursive context reuse without atomic-level provenance tracking, a single atomic falsehood injected into the system is repeatedly cited and reused within the multi-agent interaction chain. This structural exposure causes the error to deterministically compound across the communication graph, bypassing single-agent self-correction and overriding initial constraints to solidify into a system-wide false consensus. The vulnerability exhibits extreme topological fragility; targeting structurally central agents (e.g., routing supervisors or managers) forces immediate, system-wide propagation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
