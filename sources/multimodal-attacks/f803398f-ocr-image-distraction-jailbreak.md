# OCR Image Distraction Jailbreak

**Promptfoo CVE ID:** `f803398f`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-20T23:24:36.177Z  
**Source paper:** [Text is All You Need for Vision-Language Model Jailbreaking](https://arxiv.org/abs/2602.00420)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `multimodal`, `vision`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Gemini 2, Qwen 2.5 4B

## Description

Large Vision-Language Models (LVLMs) possessing Optical Character Recognition (OCR) capabilities are vulnerable to a "Text Distraction Jailbreaking" (Text-DJ) attack. The vulnerability exploits a gap between the model's visual text extraction and its safety alignment mechanisms. By converting a decomposed harmful textual query into images and embedding these images within a grid of semantically irrelevant "distraction" text images, an attacker can bypass safety filters. The model's OCR successfully reads the harmful components, but the high volume of irrelevant semantic context (noise) prevents the safety protocols from aggregating the sub-queries into a prohibited intent, resulting in the generation of harmful content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
