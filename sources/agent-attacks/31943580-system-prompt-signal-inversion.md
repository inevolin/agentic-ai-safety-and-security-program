# System Prompt Signal Inversion

**Promptfoo CVE ID:** `31943580`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:24:31.202Z  
**Source paper:** [The System Prompt Is the Attack Surface: How LLM Agent Configuration Shapes Security and Creates Exploitable Vulnerabilities](https://arxiv.org/abs/2603.25056)  
**Tags:** `prompt-layer`, `blackbox`, `agent`, `data-security`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 4.5, Llama 4, Gemini 2, Mistral Large 24B, DeepSeek-V3, Qwen 2.5 235B

## Description

LLM-based autonomous email security agents configured with signal-based system prompts are vulnerable to a "signal inversion" attack via infrastructure phishing. When a system prompt instructs an LLM to prioritize a specific heuristicâsuch as sender-URL domain consistencyâattackers can bypass the security filter entirely by registering a single, inexpensive domain and using it for both the sender email address and the malicious payload host. Because the LLM faithfully executes the prioritized prompt instruction, it accurately verifies the domain match and subsequently overrides its own detection of other anomalous content signals (e.g., unusual URL paths or credential harvesting lures). The vulnerability stems from an informational gap: the model enforces the prompt's structural rule but lacks the external ground truth (like domain age or reputation) needed to distinguish a newly registered attacker domain from an established corporate domain.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
