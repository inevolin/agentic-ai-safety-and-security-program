# Universal Adversarial LLM Jailbreak

**Promptfoo CVE ID:** `491f2122`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-07-01  
**Analyzed:** 2024-12-28T23:07:41.036Z  
**Source paper:** [Universal and transferable adversarial attacks on aligned language models](https://arxiv.org/abs/2307.15043)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Bard, ChatGPT, Claude, Claude 2, Falcon, GPT-3.5 Turbo, GPT-4, Llama-2-chat, Palm-2, Pythia, Vicuna 13B, Vicuna 7B

## Description

Aligned large language models (LLMs) are vulnerable to a universal and transferable adversarial suffix attack. Appending a specific, automatically generated suffix to a wide range of prompts, even those requesting objectionable content, causes the models to generate harmful or objectionable responses instead of refusing the request. The attack's success rate is significantly higher on GPT-based models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
