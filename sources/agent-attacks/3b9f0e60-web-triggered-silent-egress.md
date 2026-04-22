# Web-Triggered Silent Egress

**Promptfoo CVE ID:** `3b9f0e60`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T22:16:36.943Z  
**Source paper:** [Silent Egress: When Implicit Prompt Injection Makes LLM Agents Leak Without a Trace](https://arxiv.org/abs/2602.22450)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `prompt-leaking`, `blackbox`, `agent`, `chain`, `data-privacy`, `data-security`  
**Affected models (as reported):** Qwen 2.5 7B

## Description

Agentic LLM systems that automatically preview URLs or extract web metadata are vulnerable to implicit prompt injection, resulting in silent data exfiltration ("silent egress"). Attackers can embed adversarial instructions in unobserved web elements, such as HTML `<title>` tags, `<meta>` descriptions, or Open Graph metadata. When a user requests a summary of the URLâor when the agent automatically unfurls a linked URL in a chatâthe system fetches the malicious page and flattens this metadata into the LLM's trusted context window. The agent is manipulated into invoking network-capable tools to transmit sensitive runtime context (e.g., API keys, system prompts, chat history) to an attacker-controlled endpoint. Because the exfiltration occurs entirely via background tool invocations, the agent's final textual response to the user remains benign, completely bypassing output-centric safety evaluations.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
