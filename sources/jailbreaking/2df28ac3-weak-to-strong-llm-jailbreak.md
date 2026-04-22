# Weak-to-Strong LLM Jailbreak

**Promptfoo CVE ID:** `2df28ac3`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-01-01  
**Analyzed:** 2024-12-29T02:24:39.595Z  
**Source paper:** [Weak-to-strong jailbreaking on large language models](https://arxiv.org/abs/2401.17256)  
**Tags:** `model-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Baichuan2-13B, Internlm-20B, Llama 2 13B Chat, Llama 2 7B Chat, Llama2-70B, Sheared-llama-1.3B, Vicuna 13B

## Description

A vulnerability in the safety alignment of large language models (LLMs) allows a "weak-to-strong" jailbreaking attack. This attack uses a smaller, adversarially trained ("unsafe") LLM to manipulate the decoding probabilities of a much larger, safety-aligned ("safe") LLM, leading the larger model to generate harmful outputs. The attack leverages the observation that the initial decoding distributions of safe and unsafe LLMs differ significantly, but this difference diminishes as the generation progresses. By modifying the probabilities of the larger model's initial tokens using a simple algebraic combination of the safe and unsafe model's probability distributions, the attacker can successfully override the safety mechanisms of the larger model. This requires only one forward pass per example in the target LLM, making the attack computationally inexpensive.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
