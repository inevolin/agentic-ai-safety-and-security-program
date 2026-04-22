# AD Black-Box Cascading Disruption

**Promptfoo CVE ID:** `2c1f0854`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-12-09T03:10:03.925Z  
**Source paper:** [Black-box adversarial attack on vision language models for autonomous driving](https://arxiv.org/abs/2501.13563)  
**Tags:** `model-layer`, `injection`, `vision`, `multimodal`, `embedding`, `blackbox`, `agent`, `chain`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4, GPT-4o, InstructBLIP, LLaVA

## Description

Vision Language Models (VLMs) integrated into autonomous driving (AD) systems are vulnerable to a black-box adversarial attack method termed Cascading Adversarial Disruption (CAD). The vulnerability stems from the model's susceptibility to optimized visual perturbations that disrupt the decision-making reasoning chain (perception, prediction, and planning). Attackers can generate adversarial images or physical patches by aligning visual noise with deceptive textual semantics in the model's latent space (Decision Chain Disruption) and by inverting high-level safety context assessments (Risky Scene Induction). This manipulation occurs without access to the victim model's parameters or gradients, relying solely on transferability from surrogate models. Successful exploitation allows an attacker to force the AD system into erroneous behaviors, such as misinterpreting obstacles, ignoring traffic signs, or executing dangerous maneuvers like accelerating when braking is required.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
