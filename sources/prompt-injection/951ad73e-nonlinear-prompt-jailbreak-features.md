# Nonlinear Prompt Jailbreak Features

**Promptfoo CVE ID:** `951ad73e`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-28T23:25:11.039Z  
**Source paper:** [What Features in Prompts Jailbreak LLMs? Investigating the Mechanisms Behind Attacks](https://arxiv.org/abs/2411.03343)  
**Tags:** `prompt-layer`, `jailbreak`, `model-layer`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Gemma 7B IT, Llama 3 8B Instruct

## Description

Large language models (LLMs) are vulnerable to jailbreak attacks exploiting nonlinear features within prompt encodings. These features, not detectable by linear methods, allow adversaries to reliably elicit harmful outputs despite safety training. Different attack methods leverage distinct nonlinear features, limiting the transferability of detection and mitigation techniques.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
