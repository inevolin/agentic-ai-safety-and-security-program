# Ensemble Jailbreak Technique

**Promptfoo CVE ID:** `ce4e3b90`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-08-01  
**Analyzed:** 2024-12-29T00:21:15.928Z  
**Source paper:** [EnJa: Ensemble Jailbreak on Large Language Models](https://arxiv.org/abs/2408.03603)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Llama 2 13B, Llama 2 7B, Vicuna 13B, Vicuna 7B

## Description

The Ensemble Jailbreak (EnJa) attack exploits vulnerabilities in the safety mechanisms of large language models (LLMs) by combining prompt-level and token-level attacks. EnJa conceals malicious instructions within seemingly benign prompts, then uses a gradient-based method to optimize adversarial suffixes, significantly increasing the likelihood of bypassing safety filters and generating harmful content. The attack leverages a connector template to seamlessly integrate the concealed prompt and adversarial suffix, maintaining context and coherence.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
