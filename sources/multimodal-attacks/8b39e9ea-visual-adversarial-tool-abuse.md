# Visual Adversarial Tool Abuse

**Promptfoo CVE ID:** `8b39e9ea`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2023-10-01  
**Analyzed:** 2024-12-28T23:18:14.472Z  
**Source paper:** [Misusing tools in large language models with visual adversarial examples](https://arxiv.org/abs/2310.03185)  
**Tags:** `application-layer`, `injection`, `vision`, `multimodal`, `whitebox`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** 

## Description

A vulnerability exists in multimodal Large Language Models (LLMs) integrated with external tools. Adversarial images, visually indistinguishable from benign images, can manipulate the LLM to execute unintended tool commands, compromising the confidentiality and integrity of user resources. The attack is effective across diverse prompts, remaining stealthy both in the image itself and in the generated text response.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
