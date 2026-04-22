# Multi-Accent Audio Jailbreak

**Promptfoo CVE ID:** `3b3ab2fe`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-04-12T00:40:29.374Z  
**Source paper:** [Multilingual and Multi-Accent Jailbreaking of Audio LLMs](https://arxiv.org/abs/2504.01094)  
**Tags:** `model-layer`, `jailbreak`, `injection`, `multimodal`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** DIVA Llama 3 v0 8B, MERaLion AudioLLM, MiniCPM-o 2.6, Qwen 2 Audio, Ultravox

## Description

Multilingual and multi-accent audio inputs, combined with acoustic adversarial perturbations (reverberation, echo, whisper effects), can bypass safety mechanisms in Large Audio Language Models (LALMs), causing them to generate unsafe or harmful outputs.  The vulnerability is amplified by the interaction between acoustic and linguistic variations, particularly in languages with less training data.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
