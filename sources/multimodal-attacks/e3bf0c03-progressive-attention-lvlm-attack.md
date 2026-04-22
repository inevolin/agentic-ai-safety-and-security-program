# Progressive Attention LVLM Attack

**Promptfoo CVE ID:** `e3bf0c03`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-22T05:28:22.558Z  
**Source paper:** [When and Where to Attack? Stage-wise Attention-Guided Adversarial Attack on Large Vision Language Models](https://arxiv.org/abs/2602.04356)  
**Tags:** `model-layer`, `injection`, `vision`, `multimodal`, `embedding`, `blackbox`, `api`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-5, Gemini 2, Qwen 2.5 30B, Gemma 4B, LLaVA 7B

## Description

Large Vision-Language Models (LVLMs) are vulnerable to a Stage-wise Attention-Guided Attack (SAGA) that allows for the generation of highly transferable, imperceptible adversarial examples. The vulnerability stems from a positive correlation between regional cross-modal attention scores and adversarial loss sensitivity in LVLMs. An attacker can exploit this by extracting an attention map from a surrogate open-source model (e.g., Qwen3-VL) to identify high-attention "hotspots." SAGA utilizes a stage-wise optimization schedule that allocates the $L_\infty$ perturbation budget to these hotspots first, then progressively targets subsequent salient regions as the model's attention redistributes during the attack. This method bypasses visual encoders and aligns the image representation with a malicious target text embedding, causing the target LVLM to output attacker-defined captions or answers while the input image remains visually benign to humans.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
