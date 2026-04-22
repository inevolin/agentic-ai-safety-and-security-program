# Prompt Engineering Jailbreak

**Promptfoo CVE ID:** `7f2ac6ad`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-05-01  
**Analyzed:** 2024-12-29T02:26:11.520Z  
**Source paper:** [Jailbreaking chatgpt via prompt engineering: An empirical study](https://arxiv.org/abs/2305.13860)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4

## Description

Large Language Models (LLMs), specifically ChatGPT versions 3.5 and 4.0, are vulnerable to prompt engineering attacks that circumvent built-in content restrictions. Attackers can craft malicious prompts, categorized into "pretending," "attention shifting," and "privilege escalation" techniques, to elicit responses containing prohibited content (e.g., instructions for illegal activities, generation of harmful content). The vulnerability stems from the LLM's inability to reliably distinguish between legitimate requests within a contrived context and malicious attempts to bypass safety measures.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
