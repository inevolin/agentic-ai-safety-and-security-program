# Semantic Ensembles Fool CLIP

**Promptfoo CVE ID:** `d2f14376`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T04:48:53.330Z  
**Source paper:** [Semantic-aware Adversarial Fine-tuning for CLIP](https://arxiv.org/abs/2602.12461)  
**Tags:** `model-layer`, `vision`, `multimodal`, `embedding`, `fine-tuning`, `whitebox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4o, Llama 3.2 1B, Qwen 2.5 4B, LLaVA

## Description

Contrastive Language-Image Pre-training (CLIP) models are vulnerable to semantic-ensemble adversarial attacks. Current adversarial fine-tuning defenses for CLIP rely on minimizing the cosine similarity between an image and a single hand-crafted template (e.g., "A photo of a {label}"). This creates a vulnerability where adversarial examples (AEs) overfit to specific phrasings rather than the core class semantics. Attackers can bypass these defenses by generating semantic-aware adversarial examples that minimize the average similarity between the original image and an ensemble of semantically enriched textual descriptions. This causes models to confidently misclassify inputs when evaluated under textual prompts with richer attributes or contexts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
