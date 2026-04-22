# Self-Explanatory LLM Jailbreak

**Promptfoo CVE ID:** `9cbe9db9`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-29T04:24:52.899Z  
**Source paper:** [GPT-4 Jailbreaks Itself with Near-Perfect Success Using Self-Explanation](https://arxiv.org/abs/2405.13077)  
**Tags:** `jailbreak`, `blackbox`, `prompt-layer`, `application-layer`, `integrity`, `safety`  
**Affected models (as reported):** Claude-3 Opus, Claude-3 Sonnet, GPT-4, GPT-4 Turbo, GPT-4o, Llama 3 8B, Llama 3.1 70B, Llama 3.1 8B

## Description

A vulnerability in large language models (LLMs) allows for near-perfect jailbreaking via iterative prompt refinement and self-explanation. The attacker uses the LLM itself to iteratively refine adversarial prompts by requesting self-explanations of failed attempts, ultimately generating prompts that bypass safety mechanisms and elicit harmful content. A subsequent "Rate+Enhance" step further maximizes the harmfulness of the generated output.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
