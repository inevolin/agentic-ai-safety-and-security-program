# Autonomous Agent Tool RCE

**Promptfoo CVE ID:** `18046e14`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-11T04:21:58.880Z  
**Source paper:** [Uncovering Security Threats and Architecting Defenses in Autonomous Agents: A Case Study of OpenClaw](https://arxiv.org/abs/2603.12644)  
**Tags:** `application-layer`, `infrastructure-layer`, `prompt-layer`, `injection`, `poisoning`, `rag`, `blackbox`, `agent`, `chain`, `api`, `data-privacy`, `data-security`, `safety`, `reliability`  
**Affected models (as reported):** 

## Description

The OpenClaw autonomous agent framework lacks execution sandboxing, running agents directly on the host machine with the disk and system privileges of the host user. This architecture allows attackers to achieve Remote Code Execution (RCE) and arbitrary data exfiltration via Indirect Prompt Injection. By embedding malicious instructions within external data sources (e.g., scraped web pages or uploaded documents), an attacker can hijack the agent's planning capabilities to sequentially chain benign system tools (such as file readers and HTTP clients) into malicious workflows, bypassing single-endpoint security filters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
