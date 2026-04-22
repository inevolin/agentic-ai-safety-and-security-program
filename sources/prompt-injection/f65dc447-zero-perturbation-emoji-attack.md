# Zero-Perturbation Emoji Attack

**Promptfoo CVE ID:** `f65dc447`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-12-30T20:59:38.461Z  
**Source paper:** [Emoti-Attack: Zero-Perturbation Adversarial Attacks on NLP Systems via Emoji Sequences](https://arxiv.org/abs/2502.17392)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 3.5, Llama 3 8B, Qwen 2.5 7B

## Description

The Emoti-Attack vulnerability constitutes a zero-word-perturbation adversarial attack against Natural Language Processing (NLP) systems and Large Language Models (LLMs). The vulnerability exploits the discrete embedding space of emojis and emoticons to manipulate model behavior without altering the semantic content or character integrity of the original text. By appending strategically optimized emoji sequences to the prefix and suffix of an input string (formalized as $s \oplus x \oplus s'$), an attacker can induce classification errors or manipulate model responses. The attack utilizes a two-phase learning frameworkâsupervised pretraining followed by reinforcement learning via a Markov Decision Process (MDP)âto generate emoji sequences that maximize prediction divergence while maintaining "emotional consistency" to evade detection. This method treats emoji modification as a distinct attack layer, distinct from character or word-level perturbations.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
