# Multimodal LLM Jailbreak

**Promptfoo CVE ID:** `de2949ac`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-29T04:24:27.058Z  
**Source paper:** [Divide and Conquer: A Hybrid Strategy Defeats Multimodal Large Language Models](https://arxiv.org/abs/2412.16555)  
**Tags:** `jailbreak`, `multimodal`, `injection`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude1, Claude2, Ernie-3.5-turbo, GPT-3.5 Turbo, GPT-4, GPT-4o, GPT-4o Mini, Llama 2, Llama 3, Llama 3.1, Qwen 2.5, Qwen VL Max

## Description

A hybrid multimodal jailbreaking attack, dubbed JMLLM, exploits vulnerabilities in 13 popular large language models (LLMs) across text, image, and speech modalities. The attack leverages alternating translation, word encryption, feature collapse in images, and harmful text injection to bypass safety mechanisms and elicit harmful responses. Success rates vary across LLMs and modalities, with some models exhibiting significantly higher vulnerability than others.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
