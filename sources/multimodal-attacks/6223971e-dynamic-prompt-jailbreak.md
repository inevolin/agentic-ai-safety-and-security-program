# Dynamic Prompt Jailbreak

**Promptfoo CVE ID:** `6223971e`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:24:32.172Z  
**Source paper:** [GhostPrompt: Jailbreaking Text-to-image Generative Models based on Dynamic Optimization](https://arxiv.org/abs/2505.18979)  
**Tags:** `prompt-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** DALL-E 3, DeepSeek V3, Flux Schnell, GPT-3.5 Turbo, GPT-4.1, InternVL 2 2B, Qwen 2.5 7B Instruct, ShieldLM 7B

## Description

GhostPrompt demonstrates a vulnerability in multimodal safety filters used with text-to-image generative models.  The vulnerability allows attackers to bypass these filters by using a dynamic prompt optimization framework that iteratively generates adversarial prompts designed to evade both text-based and image-based safety checks while preserving the original, harmful intent of the prompt.  This bypass is achieved through a combination of semantically aligned prompt rewriting and the injection of benign visual cues to confuse image-level filters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
