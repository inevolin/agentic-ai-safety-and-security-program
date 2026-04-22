# Hidden Image Jailbreak

**Promptfoo CVE ID:** `37b7539b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:25:51.054Z  
**Source paper:** [Implicit Jailbreak Attacks via Cross-Modal Information Concealment on Vision-Language Models](https://arxiv.org/abs/2505.16446)  
**Tags:** `jailbreak`, `injection`, `vision`, `multimodal`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemini 1.5 Pro, Gemini 2.5 Pro, GPT-4.5, GPT-4o, InternVL 2 8B, Qwen 2.5 VL 72B

## Description

Multimodal large language models (MLLMs) are vulnerable to implicit jailbreak attacks that leverage least significant bit (LSB) steganography to conceal malicious instructions within images.  These instructions are coupled with seemingly benign image-related text prompts, causing the MLLM to execute the hidden malicious instructions. The attack bypasses existing safety mechanisms by exploiting cross-modal reasoning capabilities.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
