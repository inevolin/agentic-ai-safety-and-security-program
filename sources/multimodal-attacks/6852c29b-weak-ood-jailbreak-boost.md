# Weak-OOD Jailbreak Boost

**Promptfoo CVE ID:** `6852c29b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-30T18:37:21.131Z  
**Source paper:** [Why does weak-OOD help? A Further Step Towards Understanding Jailbreaking VLMs](https://arxiv.org/abs/2511.08367)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, Gemini 2, Qwen 2.5 7B

## Description

Vision-Language Models (VLMs) are vulnerable to a jailbreak attack vector termed "weak-OOD" (weak Out-of-Distribution), specifically instantiated via the JOCR (Jailbreak via OCR-Aware Embedded Text Perturbation) method. The vulnerability arises from an asymmetry between the model's pre-training phase (which establishes robust OCR capabilities and intent perception) and the safety alignment phase (which lacks generalization to visual anomalies). Attackers can embed malicious text instructions into images using typographic perturbationsâsuch as variations in font size, character spacing, word spacing, color, and layoutâthat deviate sufficiently from the safety alignment distribution to suppress refusal mechanisms, yet remain close enough to the pre-training distribution to preserve the model's ability to read and execute the malicious intent.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
