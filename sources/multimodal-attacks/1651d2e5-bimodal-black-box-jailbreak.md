# Bimodal Black-Box Jailbreak

**Promptfoo CVE ID:** `1651d2e5`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-29T04:09:34.058Z  
**Source paper:** [BAMBA: A Bimodal Adversarial Multi-Round Black-Box Jailbreak Attacker for LVLMs](https://arxiv.org/abs/2412.05892)  
**Tags:** `jailbreak`, `blackbox`, `multimodal`, `vision`, `agent`, `side-channel`, `safety`, `integrity`  
**Affected models (as reported):** Gemini, GPT-4, InstructBLIP, LLaVA, MiniGPT-4, Qwen VL

## Description

A bimodal adversarial attack, PBI-Attack, can manipulate Large Vision-Language Models (LVLMs) into generating toxic or harmful content by iteratively optimizing both textual and visual inputs in a black-box setting. The attack leverages a surrogate LVLM to inject malicious features from a harmful corpus into a benign image, then iteratively refines both image and text perturbations to maximize the toxicity of the modelâs output as measured by a toxicity detection model (Perspective API or Detoxify).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
