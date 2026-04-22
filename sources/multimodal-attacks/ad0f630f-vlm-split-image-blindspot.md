# VLM Split-Image Blindspot

**Promptfoo CVE ID:** `ad0f630f`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-22T00:09:38.979Z  
**Source paper:** [Robustness of Vision Language Models Against Split-Image Harmful Input Attacks](https://arxiv.org/abs/2602.08136)  
**Tags:** `model-layer`, `jailbreak`, `vision`, `multimodal`, `embedding`, `fine-tuning`, `blackbox`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 3.2 11B

## Description

Vision Language Models (VLMs) utilizing independent vision encoders (e.g., ViT) and Large Language Model (LLM) decoders are vulnerable to Split-Image Visual Jailbreak Attacks (SIVA). The vulnerability arises from an architectural and alignment discrepancy: while the vision encoder processes image fragments (splits) in isolation via constrained attention or block-diagonal masks, the LLM decoder aggregates these features via cross-attention to reconstruct the semantic content. Current safety alignment techniques (RLHF, DPO) are optimized primarily for holistic (single) images. Consequently, when a harmful image is segmented into multiple pieces (e.g., vertical strips) and fed as separate inputs, the distributed harmful features bypass the vision encoder's safety filters. The decoder successfully integrates the split embeddings to recognize the harmful concept but fails to trigger a refusal response, resulting in the generation of prohibited content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
