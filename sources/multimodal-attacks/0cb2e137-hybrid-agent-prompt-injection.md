# Hybrid Agent Prompt Injection

**Promptfoo CVE ID:** `0cb2e137`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-09T04:25:29.339Z  
**Source paper:** [Redteamcua: Realistic adversarial testing of computer-use agents in hybrid web-os environments](https://arxiv.org/abs/2505.21936)  
**Tags:** `prompt-layer`, `application-layer`, `injection`, `extraction`, `jailbreak`, `denial-of-service`, `vision`, `multimodal`, `agent`, `blackbox`, `data-privacy`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, Claude 3.5, Claude 3.7, Claude 4, Claude 4.5, o4-mini

## Description

Computer-Use Agents (CUAs) powered by Large Language Models (LLMs) operating in hybrid Web-OS environments are vulnerable to indirect prompt injection. Attackers can embed malicious natural language or code instructions within legitimate web content (e.g., social media forums, chat applications, shared cloud documents) that the agent processes during benign task execution. Due to the agent's inability to distinguish between trusted user instructions and untrusted environmental data, the CUA interprets the injected content as high-priority commands. This vulnerability enables a "Web-to-OS" attack vector where passive web content triggers the agent to execute unauthorized actions on the local Operating System, bypassing navigational constraints and agentic safeguards.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
