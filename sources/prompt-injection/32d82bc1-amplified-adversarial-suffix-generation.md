# Amplified Adversarial Suffix Generation

**Promptfoo CVE ID:** `32d82bc1`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-04-01  
**Analyzed:** 2024-12-29T03:56:01.164Z  
**Source paper:** [Amplegcg: Learning a universal and transferable generative model of adversarial suffixes for jailbreaking both open and closed llms](https://arxiv.org/abs/2404.07921)  
**Tags:** `prompt-layer`, `jailbreak`, `model-layer`, `extraction`, `blackbox`, `whitebox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Llama 2 7B Chat, Mistral 7B, Vicuna 7B

## Description

Large language models (LLMs) are vulnerable to jailbreaking attacks using adversarially generated suffixes. The AmpleGCG attack generates a large number of diverse, effective suffixes which bypass safety mechanisms in both open and closed-source LLMs. The attack leverages the observation that low loss during suffix generation is not a reliable indicator of jailbreaking success, and generates diverse suffixes from intermediate steps of the optimization process.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
