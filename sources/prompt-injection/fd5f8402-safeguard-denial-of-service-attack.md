# Safeguard Denial-of-Service Attack

**Promptfoo CVE ID:** `fd5f8402`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T04:25:30.043Z  
**Source paper:** [Safeguard is a Double-edged Sword: Denial-of-service Attack on Large Language Models](https://arxiv.org/abs/2410.02916)  
**Tags:** `application-layer`, `denial-of-service`, `injection`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4o Mini, Llama Guard 2 8B, Llama Guard 3 8B, Llamaguard-7B, Vicuna-1.5-7B

## Description

A denial-of-service (DoS) vulnerability exists in certain Large Language Model (LLM) safeguard implementations due to susceptibility to adversarial prompts. Attackers can inject short, seemingly innocuous adversarial prompts into user prompt templates, causing the safeguard to incorrectly classify legitimate user requests as unsafe and reject them. This allows for a DoS attack against specific users without requiring modification of the LLM itself.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
