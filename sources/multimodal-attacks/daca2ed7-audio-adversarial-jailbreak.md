# Audio Adversarial Jailbreak

**Promptfoo CVE ID:** `daca2ed7`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:25:18.832Z  
**Source paper:** [Audio Jailbreak Attacks: Exposing Vulnerabilities in SpeechGPT in a White-Box Framework](https://arxiv.org/abs/2505.18864)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `multimodal`, `safety`  
**Affected models (as reported):** SpeechGPT

## Description

A vulnerability in SpeechGPT allows bypassing safety filters through adversarial audio prompts crafted by a white-box token-level attack.  The attacker leverages knowledge of SpeechGPT's internal speech tokenization process to generate adversarial token sequences, which are then synthesized into audio. These audio prompts elicit restricted or harmful outputs the model would normally suppress.  The attack's effectiveness relies on the model's discrete audio token representation and does not require access to model parameters or gradients.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
