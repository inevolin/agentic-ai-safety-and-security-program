# Bi-Modal Adversarial Jailbreak

**Promptfoo CVE ID:** `367e75b6`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-28T23:30:33.844Z  
**Source paper:** [Jailbreak Vision Language Models via Bi-Modal Adversarial Prompt](https://arxiv.org/abs/2406.04031)  
**Tags:** `prompt-layer`, `jailbreak`, `multimodal`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** ChatGLM, ERNIE Bot, Gemini, LLaVA, Qwen

## Description

Large Vision Language Models (LVLMs) are vulnerable to a bi-modal adversarial prompt attack (BAP). BAP leverages a combined textual and visual prompt to bypass safety mechanisms and elicit harmful responses, even in models designed to resist single-modality attacks. The attack first introduces a query-agnostic adversarial perturbation to the visual prompt, making the model more likely to respond positively regardless of the text. Then, an LLM refines the textual prompt iteratively to achieve the specific harmful intent.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
