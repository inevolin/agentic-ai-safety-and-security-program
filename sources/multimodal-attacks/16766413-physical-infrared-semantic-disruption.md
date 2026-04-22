# Physical Infrared Semantic Disruption

**Promptfoo CVE ID:** `16766413`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-11T04:39:37.169Z  
**Source paper:** [Revealing Physical-World Semantic Vulnerabilities: Universal Adversarial Patches for Infrared Vision-Language Models](https://arxiv.org/abs/2604.03117)  
**Tags:** `model-layer`, `vision`, `multimodal`, `embedding`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** InstructBLIP, LLaVA

## Description

A vulnerability in Infrared Vision-Language Models (IR-VLMs) allows attackers to systematically degrade open-ended semantic understandingâcompromising classification, captioning, and Visual Question Answering (VQA)âvia a physically deployable Universal Curved-Grid Patch (UCGP). Instead of manipulating explicit text labels, the attack disrupts the clean-category manifold in the model's visual representation space by maximizing orthogonal deviation energy from the principal subspace and forcing topological misalignment in the local neighborhood graph. The resulting perturbation requires no per-sample optimization, exhibits cross-model and cross-dataset transferability, and remains resilient against EOT (Expectation Over Transformation) and TPS (Thin Plate Spline) physical distortions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
