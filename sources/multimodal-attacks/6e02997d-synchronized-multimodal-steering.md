# Synchronized Multimodal Steering

**Promptfoo CVE ID:** `6e02997d`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T04:22:03.890Z  
**Source paper:** [VENOMREC: Cross-Modal Interactive Poisoning for Targeted Promotion in Multimodal LLM Recommender Systems](https://arxiv.org/abs/2602.06409)  
**Tags:** `model-layer`, `poisoning`, `multimodal`, `vision`, `embedding`, `fine-tuning`, `integrity`  
**Affected models (as reported):** 

## Description

Multimodal Large Language Model-based Recommender Systems (MLLM-RecSys) are vulnerable to Cross-Modal Interactive Data Poisoning. Attackers can manipulate the system by injecting compromised user-generated content (UGC) that contains synchronized, coupled perturbations across both textual and visual modalities. While MLLMs naturally filter out single-modality noise via cross-modal consensus, this vulnerability exploits the consensus mechanism itself. By leveraging cross-modal attention to identify highly sensitive token-patch correspondences, an attacker can iteratively apply coordinated edits to both the text and the image. During fine-tuning, the model's fusion process amplifies these synchronized signals, steering the target item's fused semantic representation toward a high-exposure latent "hotspot".

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
