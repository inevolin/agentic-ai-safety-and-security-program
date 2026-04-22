# Cross-Modal Toxic Continuation

**Promptfoo CVE ID:** `4eb7bd09`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-12-09T01:01:16.569Z  
**Source paper:** [Red Team Diffuser: Exposing Toxic Continuation Vulnerabilities in Vision-Language Models via Reinforcement Learning](https://arxiv.org/abs/2503.06223)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** Llama 3.2 11B, Gemini 1.5, LLaVA 7B, Stable Diffusion

## Description

Large Vision-Language Models (VLMs) are vulnerable to a cross-modal toxic continuation attack facilitated by reinforcement learning-tuned diffusion models. This vulnerability allows an attacker to bypass safety alignment and external guardrails (such as NSFW image filters) by pairing a specific text prefix with a "semantically adversarial" image. Unlike traditional gradient-based adversarial examples that rely on pixel noise, these images are semantically coherent but optimized via Denoising Diffusion Policy Optimization (DDPO) to maximize the toxicity of the VLM's textual completion. The attack exploits the interaction between visual and textual modalities, causing the model to generate hate speech, threats, or sexually explicit text even when the text prefix alone would be refused or completed safely.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
