# LLM Intent Obfuscation Jailbreak

**Promptfoo CVE ID:** `5622bdc2`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-05-01  
**Analyzed:** 2025-02-16T19:34:08.721Z  
**Source paper:** [Can LLMs Deeply Detect Complex Malicious Queries? A Framework for Jailbreaking via Obfuscating Intent](https://arxiv.org/abs/2405.03654)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Baichuan 2 13B Chat, GPT-3.5 Turbo, GPT-4, Qwen Max

## Description

Large Language Models (LLMs) exhibit vulnerabilities when processing complex or ambiguous prompts containing malicious intent.  The vulnerability arises from the LLMs' inability to consistently detect maliciousness when prompts are obfuscated by either splitting a single malicious query into multiple parts or by directly modifying the malicious content to increase ambiguity. This allows attackers to bypass built-in safety mechanisms and elicit harmful or restricted content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
