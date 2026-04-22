# Embodied Cross-Modal Misalignment

**Promptfoo CVE ID:** `ae5d5754`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-11-01  
**Analyzed:** 2026-01-14T14:46:22.971Z  
**Source paper:** [When alignment fails: Multimodal adversarial attacks on vision-language-action models](https://arxiv.org/abs/2511.16203)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `multimodal`, `vision`, `embedding`, `whitebox`, `blackbox`, `agent`, `safety`, `reliability`  
**Affected models (as reported):** 

## Description

OpenVLA, a Vision-Language-Action (VLA) model, contains a vulnerability regarding multimodal adversarial robustness. The model lacks sufficient cross-modal alignment stability, allowing attackers to disrupt the grounding between visual perception and linguistic instructions. By utilizing the "VLA-Fool" framework, adversaries can inject perturbations via three vectors: (1) **Semantically Greedy Coordinate Gradient (SGCG)**, which alters specific linguistic tokens (referential cues, attributes, quantifiers) to break object grounding; (2) **Visual attacks**, utilizing adversarial patches (e.g., attached to the robot arm) or noise to distort perception; and (3) **Cross-modal misalignment**, where input pairs are optimized to maximize the cosine distance between visual patch embeddings and language token embeddings. These attacks cause the model to generate erroneous motor control parameters (translation, rotation, gripper state), leading to task failures or unintended physical actions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
