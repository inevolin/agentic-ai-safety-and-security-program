# Agent Skill Supply Chain Attack

**Promptfoo CVE ID:** `f0c66804`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T03:48:29.496Z  
**Source paper:** [SoK: Agentic Skills--Beyond Tool Use in LLM Agents](https://arxiv.org/abs/2602.20867)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `extraction`, `poisoning`, `agent`, `data-security`  
**Affected models (as reported):** GPT-4, Claude 4.5

## Description

LLM agent frameworks that rely on external or marketplace-distributed skills are vulnerable to supply-chain payload execution and confused deputy attacks. Attackers can inject malicious skills into agent registries by exploiting the fundamental skill architecture (applicability conditions, policies, and interfaces). By manipulating skill metadata and applicability predicates, attackers force the agent to retrieve and activate the malicious skill across broad task categories. Malicious payloadsâranging from obfuscated shell commands to prompt injection directivesâare embedded within the skill's natural-language policy or documentation. Because traditional malware scanners fail to analyze natural-language instructions, the agent processes these instructions as trusted procedural memory and executes them with full host system permissions, leading to arbitrary code execution and silent data exfiltration.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
