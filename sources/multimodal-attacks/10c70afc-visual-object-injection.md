# Visual Object Injection

**Promptfoo CVE ID:** `10c70afc`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T02:35:01.281Z  
**Source paper:** [Physical Prompt Injection Attacks on Large Vision-Language Models](https://arxiv.org/abs/2601.17383)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `denial-of-service`, `vision`, `multimodal`, `blackbox`, `agent`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4, GPT-4o, Claude 3.5, Llama 3.2 11B, Gemini 1.5, Gemini Pro

## Description

Large Vision-Language Models (LVLMs) are vulnerable to Physical Prompt Injection Attacks (PPIA), a query-agnostic injection technique delivered via the visual modality. The vulnerability stems from the model's "Vision-Enabled Text Recognition" capabilities and "Identity Sensitivity," where the model interprets text embedded in the physical environment (e.g., printed on signs, posters, or objects) as high-priority instructions rather than passive visual data. An attacker can embed adversarial textual commands onto physical objects placed within the LVLM's field of view. When perceived, these visual prompts override user instructions and system prompts, allowing the attacker to manipulate model behavior, trigger denial-of-service in embodied agents, or hijack task planning without access to the digital input interface or knowledge of the user's current query.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
