# Spatial Layout Jailbreak

**Promptfoo CVE ID:** `c58f5cc0`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-20T23:19:38.205Z  
**Source paper:** [SpatialJB: How Text Distribution Art Becomes the" Jailbreak Key" for LLM Guardrails](https://arxiv.org/abs/2601.09321)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, Claude 3.7, Llama 4, DeepSeek-R1, DeepSeek-V3

## Description

Large Language Models (LLMs) and their associated output guardrails (e.g., Llama Guard, OpenAI Moderation API) rely on autoregressive, token-by-token processing, which interprets text as a one-dimensional sequence. A vulnerability exists wherein harmful content can bypass these safety filters by exploiting the discrepancy between 1D token serialization and 2D visual rendering. By redistributing tokens across different rows, columns, or diagonals (SpatialJB), attackers can induce the model to generate content where semantic neighbors are spatially adjacent (readable to humans) but sequentially distant. This spatial redistribution causes an exponential decay in attention weights between related tokens during the serialization process, rendering the toxicity invisible to standard Transformer-based guardrails.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
