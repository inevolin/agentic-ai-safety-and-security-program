# LVLM Vision-Triggered Resource Exhaustion

**Promptfoo CVE ID:** `e0817b76`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-07-28T19:36:12.345Z  
**Source paper:** [RECALLED: An Unbounded Resource Consumption Attack on Large Vision-Language Models](https://arxiv.org/abs/2507.18053)  
**Tags:** `model-layer`, `prompt-layer`, `denial-of-service`, `vision`, `multimodal`, `whitebox`, `reliability`, `integrity`  
**Affected models (as reported):** BLIP 13B, BLIP 7B, InstructBLIP, InstructBLIP Vicuna, Llama, LLaVA, LLaVA 1.5, LLaVA 13B, LLaVA 7B, Qwen 2.5 VL Instruct, Qwen 32B, Qwen 3B, Qwen 7B, Qwen VL

## Description

A resource consumption vulnerability exists in multiple Large Vision-Language Models (LVLMs). An attacker can craft a subtle, imperceptible adversarial perturbation and apply it to an input image. When this image is processed by an LVLM, even with a benign text prompt, it forces the model into an unbounded generation loop. The attack, named RECALLED, uses a gradient-based optimization process to create a visual perturbation that steers the model's text generation towards a predefined, repetitive sequence (an "Output Recall" target). This causes the model to generate text that repeats a word or sentence until the maximum context limit is reached, leading to a denial-of-service condition through excessive computational resource usage and response latency.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
