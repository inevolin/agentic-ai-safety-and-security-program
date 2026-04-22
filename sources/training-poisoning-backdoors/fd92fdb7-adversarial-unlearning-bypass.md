# Adversarial Unlearning Bypass

**Promptfoo CVE ID:** `fd92fdb7`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-08-01  
**Analyzed:** 2025-01-26T18:17:55.086Z  
**Source paper:** [Towards robust knowledge unlearning: An adversarial framework for assessing and improving unlearning robustness in large language models](https://arxiv.org/abs/2408.10682)  
**Tags:** `model-layer`, `extraction`, `poisoning`, `jailbreak`, `whitebox`, `data-privacy`, `data-security`, `integrity`  
**Affected models (as reported):** Llama 2 7B Chat, Llama 3 8B Instruct, Llama 3.1 8B Instruct

## Description

Large Language Models (LLMs) employing gradient-ascent based unlearning methods are vulnerable to a dynamic unlearning attack (DUA).  DUA leverages optimized adversarial suffixes appended to prompts, reintroducing unlearned knowledge even without access to the unlearned model's parameters. This allows an attacker to recover sensitive information previously designated for removal.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
