# ITS Typography Jailbreak

**Promptfoo CVE ID:** `ef994884`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-08T23:39:28.577Z  
**Source paper:** [Jailbreaking Large Vision Language Models in Intelligent Transportation Systems](https://arxiv.org/abs/2511.13892)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Qwen 2 7B, LLaVA 7B

## Description

Large Vision Language Models (LVLMs) are vulnerable to a jailbreaking attack that combines image typography manipulation with multi-turn prompting. The vulnerability exploits the model's visual encoder and instruction-following capabilities by embedding a harmful textual query directly into a benign image as a visible caption (using specific fonts and blending techniques). An attacker then engages the model in a three-turn conversation: first asking a benign question about the visual object, then requesting an "imaginary scenario" based on the typographic caption, and finally soliciting step-by-step execution guidelines for the harmful intent. This bypasses standard textual safety guardrails and visual alignment mechanisms.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
