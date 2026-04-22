# Multimodal Contextual Jailbreak

**Promptfoo CVE ID:** `1ca1263d`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-04-12T00:41:51.231Z  
**Source paper:** [PiCo: Jailbreaking Multimodal Large Language Models via ctorial de Contextualization](https://arxiv.org/abs/2504.01444)  
**Tags:** `jailbreak`, `multimodal`, `injection`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemini 1.0 Pro Vision, GPT-4 Turbo, GPT-4o, GPT-4V, LLaVA 1.5

## Description

Multimodal Large Language Models (MLLMs) are vulnerable to a jailbreaking attack, dubbed PiCo, that leverages token-level typographic attacks on images embedded within code-style instructions.  The attack bypasses multi-tiered defense mechanisms, including input filtering and runtime monitoring, by exploiting weaknesses in the visual modality's integration with programming contexts.  Harmful intent is concealed within visually benign image fragments and code instructions, circumventing safety protocols.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
