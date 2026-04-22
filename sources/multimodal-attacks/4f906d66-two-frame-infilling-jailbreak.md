# Two-Frame Infilling Jailbreak

**Promptfoo CVE ID:** `4f906d66`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:20:07.690Z  
**Source paper:** [Two Frames Matter: A Temporal Attack for Text-to-Video Model Jailbreaking](https://arxiv.org/abs/2603.07028)  
**Tags:** `prompt-layer`, `model-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `api`, `safety`  
**Affected models (as reported):** 

## Description

A temporal trajectory infilling vulnerability in Text-to-Video (T2V) generative models allows attackers to bypass input and output safety filters to generate policy-violating content. The vulnerability is exploited using a fragmented prompting technique known as Two Frames Matter (TFM). An attacker submits a prompt that specifies only sparse boundary conditions (the start and end frames) using semantically suggestive but lexically benign alternatives, entirely omitting the intermediate action. Because T2V models are heavily reliant on learned temporal priors, they autonomously bridge these boundary states by infilling the missing trajectory. This causes the model to synthesize prohibited intermediate frames (e.g., violence or explicit content) without those actions ever being explicitly defined in the input prompt, effectively circumventing surface-level text filters and sparse-frame video moderation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
