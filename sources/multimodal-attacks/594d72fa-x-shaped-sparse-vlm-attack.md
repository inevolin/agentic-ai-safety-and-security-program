# X-Shaped Sparse VLM Attack

**Promptfoo CVE ID:** `594d72fa`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-11T04:34:03.621Z  
**Source paper:** [XSPA: Crafting Imperceptible X-Shaped Sparse Adversarial Perturbations for Transferable Attacks on VLMs](https://arxiv.org/abs/2603.28568)  
**Tags:** `model-layer`, `vision`, `multimodal`, `embedding`, `blackbox`, `whitebox`, `integrity`, `reliability`  
**Affected models (as reported):** InstructBLIP, LLaVA

## Description

A vulnerability in Vision-Language Models (VLMs) relying on shared visual-textual representation spaces allows attackers to induce transferable cross-task semantic failures using an X-shaped Sparse Pixel Attack (XSPA). Attackers craft imperceptible adversarial perturbations restricted to a fixed geometric priorâtwo intersecting diagonal lines comprising approximately 1.76% of the image pixels. By jointly optimizing a classification objective with cross-task semantic guidance (target-semantic attraction and source-semantic suppression) and applying magnitude and line-wise smoothness regularization, the perturbation successfully diffuses the model's spatial attention away from semantically decisive object regions. This compromises the visual encoding and propagates errors through the shared semantic space, systematically degrading zero-shot classification, open-ended image captioning, and Visual Question Answering (VQA) simultaneously.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
