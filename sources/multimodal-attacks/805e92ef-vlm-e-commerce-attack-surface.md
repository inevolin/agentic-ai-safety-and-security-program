# VLM E-commerce Attack Surface

**Promptfoo CVE ID:** `805e92ef`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-11T04:30:51.808Z  
**Source paper:** [Adversarial attacks against Modern Vision-Language Models](https://arxiv.org/abs/2603.16960)  
**Tags:** `model-layer`, `vision`, `multimodal`, `embedding`, `blackbox`, `whitebox`, `agent`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4V, Claude 3, Gemini 1.5, Qwen 2.5 7B, LLaVA 7B

## Description

LLaVA-v1.5-7B, when deployed as a vision-language autonomous agent, is highly vulnerable to adversarial image perturbations. An attacker can inject imperceptibly modified images into a web environment (such as an e-commerce storefront). When the VLM agent captures a screenshot containing the perturbed image, the visual noise forces the model to misclassify the scene and output incorrect, structured JSON actions. This allows an attacker to hijack the agent's task execution, bypassing the user's original natural language prompt to force unintended clicks or purchases. The vulnerability is exploitable using white-box gradient attacks (BIM, PGD) and black-box CLIP-based spectral attacks using a low perturbation budget ($\epsilon=16/255$).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
