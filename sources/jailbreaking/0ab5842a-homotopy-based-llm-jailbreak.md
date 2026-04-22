# Homotopy-Based LLM Jailbreak

**Promptfoo CVE ID:** `0ab5842a`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T01:12:36.734Z  
**Source paper:** [Functional Homotopy: Smoothing Discrete Optimization via Continuous Parameters for LLM Jailbreak Attacks](https://arxiv.org/abs/2410.04234)  
**Tags:** `model-layer`, `jailbreak`, `blackbox`, `safety`, `whitebox`  
**Affected models (as reported):** Llama 2, Llama 3, Mistral 7B v0.3, Vicuna v1.5

## Description

Large Language Models (LLMs) are vulnerable to jailbreak attacks utilizing a novel Functional Homotopy (FH) optimization method. FH exploits the functional duality between model training and input generation, iteratively solving a series of "easy-to-hard" optimization problems to generate adversarial prompts that circumvent safety mechanisms and elicit undesirable model responses. This is achieved by first misaligning the model via gradient descent on continuous parameters, then leveraging intermediate model states to construct attacks incrementally, improving success rates compared to existing methods. The vulnerability lies in the LLM's susceptibility to these iteratively constructed prompts, bypassing its intended safety constraints.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
