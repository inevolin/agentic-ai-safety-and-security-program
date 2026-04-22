# Forged Assistant Message Jailbreak

**Promptfoo CVE ID:** `11d89184`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-07-01  
**Analyzed:** 2026-01-14T06:40:54.480Z  
**Source paper:** [Trojan Horse Prompting: Jailbreaking Conversational Multimodal Models by Forging Assistant Message](https://arxiv.org/abs/2507.04673)  
**Tags:** `prompt-layer`, `jailbreak`, `injection`, `multimodal`, `vision`, `blackbox`, `api`, `safety`  
**Affected models (as reported):** Gemini 2

## Description

A vulnerability termed "Trojan Horse Prompting" exists in conversational multimodal models, specifically demonstrated on Googleâs Gemini-2.0-flash-preview-image-generation. The vulnerability allows an attacker to bypass safety alignment mechanisms (RLHF and SFT) by manipulating the structural protocol of the conversational API. Unlike standard jailbreaks that manipulate the user prompt, this attack exploits "Asymmetric Safety Alignment" by forging a conversational history where the `role` is explicitly set to `model`. The AI model, trained to scrutinize `user` input but implicitly trust the integrity of its own past outputs, processes the forged malicious instruction as a trusted, previously-aligned context (a form of "source amnesia"). By injecting a prohibited instruction or fabricated image attributed to the model's own history, followed by a benign user trigger, the attacker can coerce the model into generating harmful or prohibited content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
