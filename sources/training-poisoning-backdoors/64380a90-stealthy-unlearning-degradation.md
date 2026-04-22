# Stealthy Unlearning Degradation

**Promptfoo CVE ID:** `64380a90`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-06-30T13:33:52.164Z  
**Source paper:** [Keeping an eye on llm unlearning: The hidden risk and remedy](https://arxiv.org/abs/2506.00359)  
**Tags:** `model-layer`, `fine-tuning`, `poisoning`, `injection`, `data-security`, `integrity`  
**Affected models (as reported):** Llama 3.1 8B, Mistral 7B v0.3

## Description

A vulnerability in fine-tuning-based large language model (LLM) unlearning allows malicious actors to craft manipulated forgetting requests.  By subtly increasing the frequency of common benign tokens within the forgetting data, the attacker can cause the unlearned model to exhibit unintended unlearning behaviors when these benign tokens appear in normal user prompts, leading to a degradation of model utility for legitimate users. This occurs because existing unlearning methods fail to effectively distinguish between benign tokens and those truly related to the target knowledge being unlearned.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
