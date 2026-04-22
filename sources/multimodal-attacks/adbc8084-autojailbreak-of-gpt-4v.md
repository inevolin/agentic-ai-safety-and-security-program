# AutoJailbreak of GPT-4V

**Promptfoo CVE ID:** `adbc8084`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-29T00:37:32.628Z  
**Source paper:** [Can Large Language Models Automatically Jailbreak GPT-4V?](https://arxiv.org/abs/2407.16686)  
**Tags:** `model-layer`, `jailbreak`, `safety`, `blackbox`, `multimodal`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, GPT-4V

## Description

A vulnerability in GPT-4V's facial recognition safety mechanisms allows for automated jailbreaking attacks using Large Language Models (LLMs) to bypass safety features and elicit unintended facial identification responses. The attack, termed "AutoJailbreak," optimizes prompts through iterative refinement with an LLM "red-teaming" model, significantly increasing the attack success rate. This vulnerability exploits weaknesses in GPT-4V's prompt processing and safety alignment, allowing malicious actors to circumvent restrictions on identity recognition.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
