# Color-Aware Watermark Bypass

**Promptfoo CVE ID:** `dd10ceb0`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-03-01  
**Analyzed:** 2024-12-28T22:47:31.019Z  
**Source paper:** [Bypassing LLM Watermarks with Color-Aware Substitutions](https://arxiv.org/abs/2403.14719)  
**Tags:** `prompt-layer`, `extraction`, `model-layer`, `blackbox`, `integrity`, `data-security`  
**Affected models (as reported):** 

## Description

A color-aware attack, Self Color Testing-based Substitution (SCTS), bypasses watermarking mechanisms in LLMs designed to identify AI-generated text. SCTS exploits the LLM's compliance with instructions to infer the "color" (green/red token classification) of tokens, allowing for targeted substitution of watermarked tokens with non-watermarked tokens, thus evading watermark detection. The attack is particularly effective against watermarks that utilize logit perturbation to bias token selection.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
