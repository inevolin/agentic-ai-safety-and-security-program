# Image-Text Jailbreak

**Promptfoo CVE ID:** `5491301b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-03-01  
**Analyzed:** 2026-03-08T21:41:08.600Z  
**Source paper:** [EAT: Multimodal Jailbreak Defense via Dynamic Joint Optimization for Multimodal Large Language Models](https://arxiv.org/abs/2503.04833)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `vision`, `multimodal`, `fine-tuning`, `whitebox`, `agent`, `safety`  
**Affected models (as reported):** GPT-4, Llama 3 8B, LLaVA 7B, Vicuna 7B

## Description

Multimodal Large Language Models (MLLMs) are vulnerable to coupled cross-modal jailbreak attacks that combine continuous visual perturbations with discrete textual manipulations. Because standard alignment and single-modality defenses (such as text-only safety tuning or isolated vision-encoder adversarial training) fail to secure the cross-modal interaction, attackers can simultaneously apply gradient-based noise (e.g., PGD) to input images and adversarial suffixes (e.g., GCG) to text prompts. This coordinated attack forces the visual-language projector to misalign features, bypassing the model's safety guardrails and forcing it to generate toxic content or execute hazardous instructions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
