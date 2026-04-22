# Typos Undermine Watermarks

**Promptfoo CVE ID:** `f4f27d04`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-09-01  
**Analyzed:** 2026-02-22T01:02:03.650Z  
**Source paper:** [Character-Level Perturbations Disrupt LLM Watermarks](https://arxiv.org/abs/2509.09112)  
**Tags:** `model-layer`, `application-layer`, `jailbreak`, `blackbox`, `api`, `integrity`, `safety`  
**Affected models (as reported):** Llama 3 8B

## Description

Large Language Model (LLM) inference-time watermarking schemes are vulnerable to evasion via character-level perturbations that disrupt the model's tokenizer. Unlike token-level attacks (e.g., synonym replacement), character-level editsâsuch as homoglyph substitutions, zero-width character insertions, and typosâforce the tokenizer to segment a single semantic unit into multiple sub-word tokens. This fragmentation alters the context window used by the watermarking hashing function (e.g., the previous $h$ tokens), causing a cascading corruption of watermark keys and scores for subsequent tokens. Adversaries can exploit this utilizing a Genetic Algorithm (GA) guided by a reference detector (a surrogate regression model trained to predict watermark scores) to identify and perturb optimal token positions. This allows for the removal of the watermark signal with a low character editing rate while preserving visual imperceptibility and semantic utility.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
