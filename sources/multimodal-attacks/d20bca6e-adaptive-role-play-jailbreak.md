# Adaptive Role-Play Jailbreak

**Promptfoo CVE ID:** `d20bca6e`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-12-08T23:30:50.430Z  
**Source paper:** [GUARD: Guideline Upholding Test through Adaptive Role-play and Jailbreak Diagnostics for LLMs](https://arxiv.org/abs/2508.20325)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `safety`, `agent`, `blackbox`, `vision`, `multimodal`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, Claude 3.7, Llama 2 7B, Llama 3 8B, Gemini 1.5, Gemini Pro, Vicuna 13B

## Description

Large Language Models (LLMs) and Vision-Language Models (VLMs) are vulnerable to an automated, adaptive role-play jailbreak attack known as GUARD (Guideline Upholding Test through Adaptive Role-play and Jailbreak Diagnostics). The vulnerability exists because the models fail to recognize malicious intent when harmful queries are embedded within complex, iteratively optimized "playing scenarios."

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
