# LLM Watermark Translation Bypass

**Promptfoo CVE ID:** `289e6d2a`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T04:54:15.106Z  
**Source paper:** [BanglaLorica: Design and Evaluation of a Robust Watermarking Algorithm for Large Language Models in Bangla Text Generation](https://arxiv.org/abs/2601.04534)  
**Tags:** `model-layer`, `blackbox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** Llama 3 8B

## Description

Token-level embedding-time watermarking algorithms, specifically KGW (Kirchenbauer et al.) and Exponential Sampling (EXP, Kuditipudi et al.), when implemented in Large Language Models (LLMs) for Bangla text generation, are vulnerable to watermark erasure via cross-lingual round-trip translation (RTT) attacks. While these methods achieve high detection accuracy (>88%) under benign conditions, translating watermarked Bangla text to English and back to Bangla causes detection accuracy to collapse to approximately 9â13%. The vulnerability stems from the specific linguistic properties of Bangla (rich morphology, flexible word order) combined with the RTT process, which induces extensive lexical substitution and syntactic reordering. This structural disruption obliterates the token-level statistical biases required for watermark verification while preserving semantic meaning, effectively "laundering" the text.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
