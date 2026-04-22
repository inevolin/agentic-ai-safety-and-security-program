# LLM Watermark Neutralization

**Promptfoo CVE ID:** `fb687b8c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-12-30T20:14:31.631Z  
**Source paper:** [Can LLM Watermarks Robustly Prevent Unauthorized Knowledge Distillation?](https://arxiv.org/abs/2502.11598)  
**Tags:** `model-layer`, `extraction`, `fine-tuning`, `blackbox`, `data-security`, `integrity`  
**Affected models (as reported):** Llama 3.2 1B, Llama 4 7B, Gemini 2

## Description

Large Language Model (LLM) watermarking schemes based on n-gram probability biases (specifically KGW, SynthID-Text, MinHash, and SkipHash) are vulnerable to adversarial removal during Knowledge Distillation. When a student model is trained on the output of a watermarked teacher model, it inherits the watermark's statistical biases ("radioactivity"). An attacker can exploit this inheritance by comparing the student model's output token probabilities against a base model to extract the watermarking rules ($p$-rules) without access to the teacher's logits or private keys. By applying an inverse bias (Watermark Neutralization) to the student model's logits during inference, the attacker can effectively scrub the watermark while preserving the distilled knowledge, rendering the copyright protection mechanism ineffective.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
