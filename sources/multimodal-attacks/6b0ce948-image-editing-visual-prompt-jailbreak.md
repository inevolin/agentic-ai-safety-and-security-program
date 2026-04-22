# Image Editing Visual Prompt Jailbreak

**Promptfoo CVE ID:** `6b0ce948`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-20T23:48:16.346Z  
**Source paper:** [When the Prompt Becomes Visual: Vision-Centric Jailbreak Attacks for Large Image Editing Models](https://arxiv.org/abs/2602.10179)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** Qwen 2.5 8B

## Description

Large Image Editing Models (LIEMs) supporting vision-prompt editing are vulnerable to Vision-Centric Jailbreak Attacks (VJA). This vulnerability arises from a modality mismatch in safety alignment: while safeguards primarily analyze textual instructions for policy violations, the underlying models are capable of interpreting and executing instructions embedded directly within the visual input (e.g., typographic text drawn on the image, arrows, symbols, or specific markings). An attacker can bypass content moderation filtersâincluding checks for copyright infringement, evidence tampering, and non-consensual content generationâby encoding the malicious intent purely as visual data while leaving the textual prompt empty or benign. The victim model processes the visual instruction as a valid edit request, generating prohibited content that would be rejected if requested via text.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
