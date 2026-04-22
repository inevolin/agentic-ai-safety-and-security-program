# LLM Judge Prompt Injection

**Promptfoo CVE ID:** `886657fa`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:23:39.200Z  
**Source paper:** [Investigating the Vulnerability of LLM-as-a-Judge Architectures to Prompt-Injection Attacks](https://arxiv.org/abs/2505.13348)  
**Tags:** `prompt-layer`, `injection`, `application-layer`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Falcon 3 3B Instruct, Qwen 2.5 3B Instruct

## Description

Large Language Models (LLMs) used for evaluating text quality (LLM-as-a-Judge architectures) are vulnerable to prompt-injection attacks.  Maliciously crafted suffixes appended to input text can manipulate the LLM's judgment, causing it to incorrectly favor a predetermined response even if another response is objectively superior.  Two attack vectors are identified: Comparative Undermining Attack (CUA), directly targeting the final decision, and Justification Manipulation Attack (JMA), altering the model's generated reasoning.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
