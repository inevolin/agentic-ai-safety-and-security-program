# LLM-Driven Motion Adversarial Attack

**Promptfoo CVE ID:** `fe120f4d`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-08-01  
**Analyzed:** 2024-12-29T04:37:11.736Z  
**Source paper:** [Autonomous LLM-Enhanced Adversarial Attack for Text-to-Motion](https://arxiv.org/abs/2408.00352)  
**Tags:** `application-layer`, `injection`, `blackbox`, `agent`, `integrity`, `safety`  
**Affected models (as reported):** Mdm, Mld

## Description

The ALERT-Motion framework demonstrates a vulnerability in text-to-motion (T2M) models where an attacker can craft subtly modified text prompts (adversarial prompts) that cause the model to generate motions significantly different from those intended by the benign prompt, yet semantically similar to a target motion specified by the attacker. The attack leverages a large language model (LLM) to autonomously generate these adversarial prompts, bypassing simple keyword-based detection mechanisms. The vulnerability stems from the model's insufficient robustness to semantically similar but perceptually different prompts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
