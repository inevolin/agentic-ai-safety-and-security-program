# Invisible Visual Prompt Injection

**Promptfoo CVE ID:** `fe828a0d`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-11T04:32:30.918Z  
**Source paper:** [Adversarial Prompt Injection Attack on Multimodal Large Language Models](https://arxiv.org/abs/2603.29418)  
**Tags:** `model-layer`, `injection`, `vision`, `multimodal`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-5, Claude 4.5, Gemini 2

## Description

An imperceptible visual prompt injection vulnerability in Multimodal Large Language Models (MLLMs) allows attackers to execute precise command-hijacking via a Covert Triggered dual-Target Attack (CoTTA). By embedding a bounded, learnable textual overlay ($L_\infty$ norm bound $arepsilon \le 16$) and adversarial noise into an input image, the attack forces the source image's internal feature representation to align with both the textual and visual embeddings of an attacker-specified instruction. This bypasses the modality gap and induces the MLLM to generate exact, attacker-specified malicious sentences or action-oriented instructions, while the payload remains entirely visually imperceptible to human observers.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
