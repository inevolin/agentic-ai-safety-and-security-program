# Cross-Modal Entanglement Jailbreak

**Promptfoo CVE ID:** `18dc64e4`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T21:45:21.984Z  
**Source paper:** [Red-teaming the Multimodal Reasoning: Jailbreaking Vision-Language Models via Cross-modal Entanglement Attacks](https://arxiv.org/abs/2602.10148)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, Claude 4.5, Llama 4, Gemini 2, DeepSeek-V3, Qwen 2.5 72B

## Description

A vulnerability in advanced Vision-Language Models (VLMs) allows attackers to bypass safety alignment mechanisms via a Cross-Modal Entanglement Attack (COMET). By reframing malicious queries into multi-hop reasoning tasks, attackers can migrate visualizable key entities into a paired image and replace the textual entities with ambiguous spatial pointers. This forces the VLM to reconstruct the harmful intent through its own self-induced cross-modal reasoning, effectively bypassing filters that assess modalities independently or rely on single-hop fusion. The exploit is compounded by "cross-modal scenario nesting," where the entangled payload is visually wrapped in a fabricated evaluation scenario (e.g., a "Model Quality Control" dashboard with progress trackers and visual rubrics). This nesting manipulates the VLM's attention mechanisms, steering it away from entity-level safety scanning and into a compliant, instruction-following mode designed to maximize scoring.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
