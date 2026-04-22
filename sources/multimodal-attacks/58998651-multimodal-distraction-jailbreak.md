# Multimodal Distraction Jailbreak

**Promptfoo CVE ID:** `58998651`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:32:36.863Z  
**Source paper:** [Distraction is All You Need for Multimodal Large Language Model Jailbreaking](https://arxiv.org/abs/2502.10794)  
**Tags:** `model-layer`, `jailbreak`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** Gemini 1.5 Flash, GPT-4o, GPT-4o Mini, GPT-4V

## Description

Multimodal Large Language Models (MLLMs) are vulnerable to a jailbreaking attack leveraging a "Distraction Hypothesis".  The attack, termed Contrasting Subimage Distraction Jailbreaking (CS-DJ), bypasses safety mechanisms by using multiple contrasting subimages and a decomposed harmful prompt to overwhelm the model's attention and reduce its ability to identify malicious content.  The complexity of the visual input, rather than its specific content, is the key to successful exploitation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
