# Visual Jailbreak via Multi-Loss

**Promptfoo CVE ID:** `0fbc155b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-29T03:56:49.804Z  
**Source paper:** [Exploring Visual Vulnerabilities via Multi-Loss Adversarial Search for Jailbreaking Vision-Language Models](https://arxiv.org/abs/2411.18000)  
**Tags:** `jailbreak`, `vision`, `multimodal`, `whitebox`, `blackbox`, `injection`, `data-security`, `safety`  
**Affected models (as reported):** ChatGLM, Gemini, LLaVA 2, MiniGPT-4, Qwen

## Description

Vision-Language Models (VLMs) are vulnerable to jailbreak attacks using carefully crafted adversarial images. Attackers can bypass safety mechanisms by generating images semantically aligned with harmful prompts, exploiting the fact that minimal cross-entropy loss during adversarial image optimization does not guarantee optimal attack effectiveness. The attack uses a multi-image collaborative approach, selecting images within a specific loss range to enhance the likelihood of successful jailbreaking.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
