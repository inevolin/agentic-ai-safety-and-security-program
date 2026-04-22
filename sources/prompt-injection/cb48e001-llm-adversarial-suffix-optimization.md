# LLM Adversarial Suffix Optimization

**Promptfoo CVE ID:** `cb48e001`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-08-01  
**Analyzed:** 2024-12-28T23:33:38.041Z  
**Source paper:** [Unlocking Adversarial Suffix Optimization Without Affirmative Phrases: Efficient Black-box Jailbreaking via LLM as Optimizer](https://arxiv.org/abs/2408.11313)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `api`, `safety`, `integrity`  
**Affected models (as reported):** Falcon 7B Instruct, GPT-3.5 Turbo, Llama 2 7B Chat, Vicuna 7B

## Description

Large Language Models (LLMs) are vulnerable to a novel black-box jailbreaking attack, ECLIPSE, which leverages the LLM's own capabilities as an optimizer to generate adversarial suffixes. ECLIPSE iteratively refines these suffixes based on a harmfulness score, bypassing the need for pre-defined affirmative phrases used in previous optimization-based attacks. This allows for effective jailbreaking even with limited interaction and without white-box access to the LLM's internal parameters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
