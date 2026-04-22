# Adversarial Speech Jailbreak

**Promptfoo CVE ID:** `e60259b5`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-29T04:26:56.972Z  
**Source paper:** [SpeechGuard: Exploring the adversarial robustness of multimodal large language models](https://arxiv.org/abs/2405.08317)  
**Tags:** `model-layer`, `jailbreak`, `injection`, `multimodal`, `whitebox`, `blackbox`, `data-security`, `safety`, `integrity`  
**Affected models (as reported):** ChatGPT, Claude 2.1, Flan-T5 XL, Llama 2, Mistral 7B, Mistral 7B Instruct, SpeechGPT

## Description

Multimodal Large Language Models (LLMs) processing speech input are vulnerable to adversarial attacks. Imperceptible perturbations added to audio input can cause the model to generate unsafe or harmful text responses, overriding built-in safety mechanisms. The attacks are effective even with limited knowledge of the model's internal workings, demonstrating transferability across different models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
