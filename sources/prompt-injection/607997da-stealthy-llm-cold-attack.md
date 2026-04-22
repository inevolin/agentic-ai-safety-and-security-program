# Stealthy LLM Cold Attack

**Promptfoo CVE ID:** `607997da`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-28T23:29:33.419Z  
**Source paper:** [Cold-attack: Jailbreaking llms with stealthiness and controllability](https://arxiv.org/abs/2402.08679)  
**Tags:** `prompt-layer`, `jailbreak`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Guanaco 13B, Guanaco-7B-hf, Llama 2 7B Chat, Llama2-13B-chat-hf, Mistral 7B Instruct v0.2, Vicuna 13B v1.5, Vicuna 7B v1.5

## Description

The COLD-Attack framework allows for the generation of stealthy and controllable adversarial prompts that can bypass safety mechanisms in various Large Language Models (LLMs). The attack leverages an energy-based constrained decoding method to generate fluent and contextually coherent prompts designed to elicit harmful or unintended responses from the targeted LLM, even under constraints like specific sentiment or phrasing. This allows attacks to evade detection mechanisms solely relying on prompt fluency or keyword filtering.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
