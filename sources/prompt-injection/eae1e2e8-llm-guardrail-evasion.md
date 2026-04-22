# LLM Guardrail Evasion

**Promptfoo CVE ID:** `eae1e2e8`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-04-21T17:09:10.407Z  
**Source paper:** [Bypassing Prompt Injection and Jailbreak Detection in LLM Guardrails](https://arxiv.org/abs/2504.11168)  
**Tags:** `application-layer`, `jailbreak`, `injection`, `blackbox`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** DeBERTa v3 Base, GPT-4o Mini, mDeBERTa v3 Base

## Description

Large Language Model (LLM) guardrail systems, including those relying on AI-driven text classification models (e.g., fine-tuned BERT models), are vulnerable to evasion via character injection and adversarial machine learning (AML) techniques.  Attackers can bypass detection by injecting Unicode characters (e.g., zero-width characters, homoglyphs) or using AML to subtly perturb prompts, maintaining semantic meaning while evading classification. This allows malicious prompts and jailbreaks to reach the underlying LLM.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
