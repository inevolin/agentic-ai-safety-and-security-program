# Visual Exclusivity Agentic Jailbreak

**Promptfoo CVE ID:** `d2fda198`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T22:00:00.650Z  
**Source paper:** [Visual Exclusivity Attacks: Automatic Multimodal Red Teaming via Agentic Planning](https://arxiv.org/abs/2603.20198)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `vision`, `multimodal`, `agent`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-5, Claude 3.7, Claude 4.5, Llama 3.2 11B, Gemini Pro, DALL-E

## Description

Frontier Multimodal Large Language Models (MLLMs) are vulnerable to Visual Exclusivity (VE) attacks, an "Image-as-Basis" threat where malicious intent is achieved through joint reasoning over benign text and complex technical visual content (e.g., blueprints, schematics, network diagrams). Unlike wrapper-based attacks that conceal malicious text via typography or adversarial noise, VE exploits the model's core visual reasoning capabilities. Attackers can bypass safety filters by combining unperturbed technical images with multi-turn agentic planning, utilizing deterministic visual operations (cropping, masking) to decompose a harmful goal into a sequence of seemingly benign spatial or structural reasoning steps. Standard defenses such as OCR screening, image denoising, and prompt guardrails fail because the harmful context is intrinsic to the clean visual signal and is only reconstructed cumulatively across the conversation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
