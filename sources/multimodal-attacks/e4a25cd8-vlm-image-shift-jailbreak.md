# VLM Image-Shift Jailbreak

**Promptfoo CVE ID:** `e4a25cd8`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T20:35:47.932Z  
**Source paper:** [Understanding and Defending VLM Jailbreaks via Jailbreak-Related Representation Shift](https://arxiv.org/abs/2603.17372)  
**Tags:** `model-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `whitebox`, `safety`  
**Affected models (as reported):** GPT-4V 7B, LLaVA 7B

## Description

The integration of the visual modality in Large Vision-Language Models (VLMs) introduces a vulnerability where appending an image to a harmful text prompt induces a "jailbreak-related representation shift" in the model's internal high-dimensional space. This shift forcibly steers the model's last-token hidden state away from a designated refusal state and into a distinct jailbreak state. The vulnerability occurs because the visual modality overrides the safety alignment of the underlying language model backbone, allowing the model to process and fulfill the harmful request even though the model successfully recognizes the harmful intent. The magnitude of this shift, and the resulting attack success rate, scales proportionally with the amount of harmful visual information and the semantic relevance between the image and the text prompt.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
