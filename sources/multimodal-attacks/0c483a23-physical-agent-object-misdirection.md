# Physical Agent Object Misdirection

**Promptfoo CVE ID:** `0c483a23`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-09-01  
**Analyzed:** 2026-01-14T14:51:24.715Z  
**Source paper:** [ADVEDM: Fine-grained Adversarial Attack against VLM-based Embodied Agents](https://arxiv.org/abs/2509.16645)  
**Tags:** `model-layer`, `vision`, `multimodal`, `embedding`, `agent`, `chain`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4o, Claude 3.5, Gemini 2, LLaVA

## Description

AdvEDM reveals a vulnerability in Vision-Language Model (VLM) based Embodied Decision-Making (EDM) systems, such as those used in autonomous driving and robotic manipulation. The vulnerability allows an attacker to launch fine-grained adversarial attacks that selectively modify the perception of specific objects in an input imageâeither by removing them (Semantic Removal) or adding them (Semantic Addition)âwhile preserving the semantic integrity of the rest of the scene.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
