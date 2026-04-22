# Social Bot Exposure Jailbreak

**Promptfoo CVE ID:** `2e6f6b35`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-03-08T22:33:08.827Z  
**Source paper:** [Ignore All Previous Instructions: Jailbreaking as a de-escalatory peace building practise to resist LLM social media bots](https://arxiv.org/abs/2603.01942)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `agent`, `integrity`  
**Affected models (as reported):** 

## Description

LLM-powered automated social media accounts (bots) are vulnerable to prompt injection via public user replies. When an automated bot scrapes and processes social media engagement to generate responses, an attacker can submit an instruction-override command within a direct reply. Because the underlying LLM fails to isolate its core system instructions (e.g., maintaining a specific political persona) from untrusted user input, the injected command hijacks the model's context window. This forces the bot to break character and execute arbitrary text generation tasks, publicly exposing its automated nature.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
