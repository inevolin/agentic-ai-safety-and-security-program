# VLM Moral Persuasion

**Promptfoo CVE ID:** `2fb32c01`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T17:57:36.974Z  
**Source paper:** [Do VLMs Have a Moral Backbone? A Study on the Fragile Morality of Vision-Language Models](https://arxiv.org/abs/2601.17082)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `multimodal`, `vision`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Qwen 2.5 3B, Gemma 4B, LLaVA 7B

## Description

Vision-Language Models (VLMs) exhibit a vulnerability to moral judgment flipping, where the model's safety alignment can be bypassed through lightweight, model-agnostic multimodal perturbations. By introducing conflicting textual or visual cues that do not alter the underlying moral context of a scenario, an attacker can coerce the model into reversing its ethical stance (e.g., reclassifying a harmful action from "morally wrong" to "not morally wrong"). This vulnerability exploits the model's susceptibility to textual persuasion (false cultural contexts), prefill manipulation, sycophantic behavior under user pressure (user denial), and visual injections (typographic overlays or symbolic visual hints like checkmarks).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
