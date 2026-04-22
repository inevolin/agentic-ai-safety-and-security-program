# Simulated Ensemble Jailbreak Transfer

**Promptfoo CVE ID:** `a87a2f30`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-12-30T17:52:37.197Z  
**Source paper:** [Simulated Ensemble Attack: Transferring Jailbreaks Across Fine-tuned Vision-Language Models](https://arxiv.org/abs/2508.01741)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `vision`, `multimodal`, `fine-tuning`, `safety`  
**Affected models (as reported):** Qwen 2 2B

## Description

A vulnerability exists in the fine-tuning lifecycle of Vision-Language Models (VLMs) derived from open-source base models, termed the "grey-box threat." Adversaries with white-box access to a public base model (e.g., Qwen2-VL) can generate universal adversarial images that successfully bypass safety guardrails in proprietary, fine-tuned downstream variants. This is achieved via the Simulated Ensemble Attack (SEA), which combines two techniques: Fine-tuning Trajectory Simulation (FTS), where Gaussian noise is injected into the vision encoder during optimization to mimic parameter shifts induced by fine-tuning, and Targeted Prompt Guidance (TPG), which uses specific text suffixes to steer the language decoder. This allows jailbreaks to transfer with high success rates (>86%) even to models specifically fine-tuned for safety, as the fine-tuned models retain vulnerable representational features from the base model.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
