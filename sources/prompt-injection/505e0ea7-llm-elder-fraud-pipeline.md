# LLM Elder Fraud Pipeline

**Promptfoo CVE ID:** `505e0ea7`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-08T23:03:16.722Z  
**Source paper:** [Can AI Models be Jailbroken to Phish Elderly Victims? An End-to-End Evaluation](https://arxiv.org/abs/2511.11759)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `data-security`  
**Affected models (as reported):** GPT-5, Claude 4, Llama 4, Gemini 2, DeepSeek-V3

## Description

Large Language Models (LLMs) from multiple vendors exhibit vulnerabilities to jailbreaking techniques that bypass safety guardrails, enabling the automated generation of highly persuasive phishing content specifically targeted at elderly victims. By employing "Roleplay Authority" (posing as researchers) or "Safety Turned Off" (explicit meta-instructions) prompting strategies, attackers can coerce the models into producing social engineering emailsâsuch as fake government benefit notifications, grandchild distress messages, or fraudulent charity event invitations. These attacks succeed because the models fail to recognize the malicious intent when enveloped in educational or authoritative contexts, or when explicitly instructed to ignore safety filters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
