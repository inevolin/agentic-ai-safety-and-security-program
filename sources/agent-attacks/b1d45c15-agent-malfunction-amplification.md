# Agent Malfunction Amplification

**Promptfoo CVE ID:** `b1d45c15`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-29T04:07:46.478Z  
**Source paper:** [Breaking agents: Compromising autonomous llm agents through malfunction amplification](https://arxiv.org/abs/2407.20859)  
**Tags:** `agent`, `jailbreak`, `application-layer`, `safety`, `reliability`  
**Affected models (as reported):** Claude 2, GPT-3.5 Turbo, GPT-4

## Description

LLM-based autonomous agents are vulnerable to malfunction amplification attacks. These attacks exploit the inherent instability of agents by inducing repetitive or irrelevant actions through various methods including prompt injection and adversarial perturbations, leading to agent malfunction and task failure. The attacks do not rely on overtly harmful actions, making them harder to detect with standard LLM safety mechanisms.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
