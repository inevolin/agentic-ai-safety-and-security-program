# Image-Based Safety Snowballing

**Promptfoo CVE ID:** `0eb0fc9b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-29T04:07:03.117Z  
**Source paper:** [Safe+ Safe= Unsafe? Exploring How Safe Images Can Be Exploited to Jailbreak Large Vision-Language Models](https://arxiv.org/abs/2411.11496)  
**Tags:** `jailbreak`, `prompt-layer`, `application-layer`, `vision`, `multimodal`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4o, InternVL 2 40B, Qwen VL 2 72B, VILA 1.5 40B

## Description

A vulnerability exists in several Large Vision-Language Models (LVLMs) where seemingly safe images, when combined with additional safe images and prompts using a specific attack methodology (Safety Snowball Agent), can trigger the generation of unsafe and harmful content. The vulnerability exploits the models' universal reasoning abilities and a "safety snowball effect," where an initial unsafe response leads to progressively more harmful outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
