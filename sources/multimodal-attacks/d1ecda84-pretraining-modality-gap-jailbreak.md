# Pretraining Modality Gap Jailbreak

**Promptfoo CVE ID:** `d1ecda84`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-30T20:19:14.624Z  
**Source paper:** [Bootstrapping LLM Robustness for VLM Safety via Reducing the Pretraining Modality Gap](https://arxiv.org/abs/2505.24208)  
**Tags:** `model-layer`, `jailbreak`, `multimodal`, `vision`, `embedding`, `whitebox`, `safety`  
**Affected models (as reported):** LLaVA 7B, Vicuna 7B

## Description

Large Vision-Language Models (LVLMs) that utilize a projection layer (adapter) to bridge a vision encoder and a Large Language Model (LLM) contain a vulnerability stemming from the "Modality Gap"âa distributional distance between image and text token embeddings. This gap allows the visual modality to bypass the safety alignment (RLHF/instruction tuning) of the backbone LLM. Attackers can trigger harmful, toxic, or illegal responses to queries that would be refused in text-only contexts by pairing the harmful prompt with specific visual inputs. These inputs can range from adversarially optimized noise and typographic text images to irrelevant or blank images. The vulnerability is rooted in the pretraining phase of the projector, where insufficient alignment occurs between the visual embedding space and the LLM's input token space, quantified by a high Modality Integration Rate (MIR).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
