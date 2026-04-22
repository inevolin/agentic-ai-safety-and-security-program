# MedMMLM Cross-Modality Jailbreak

**Promptfoo CVE ID:** `43bdb070`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-05-01  
**Analyzed:** 2025-01-26T18:29:50.301Z  
**Source paper:** [Cross-Modality Jailbreak and Mismatched Attacks on Medical Multimodal Large Language Models](https://arxiv.org/abs/2405.20775)  
**Tags:** `model-layer`, `jailbreak`, `multimodal`, `whitebox`, `blackbox`, `data-security`, `safety`, `integrity`  
**Affected models (as reported):** CheXagent, LLaVA Med, Med-Flamingo, RadFM, XrayGLM

## Description

Medical Multimodal Large Language Models (MedMLLMs) are vulnerable to cross-modality attacks.  Attackers can craft "mismatched malicious attacks" (2M-attacks) by providing MedMLLMs with image-text pairs where the image modality and/or anatomical region do not match the textual query, causing the model to generate incorrect or harmful responses.  These attacks can be further optimized ("optimized mismatched malicious attacks"âO2M-attacks) using multimodal cross-optimization (MCM) techniques to increase the success rate of the attack.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
