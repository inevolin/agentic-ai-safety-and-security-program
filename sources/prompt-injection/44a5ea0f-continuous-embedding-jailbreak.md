# Continuous Embedding Jailbreak

**Promptfoo CVE ID:** `44a5ea0f`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-29T04:08:13.025Z  
**Source paper:** [Continuous Embedding Attacks via Clipped Inputs in Jailbreaking Large Language Models](https://arxiv.org/abs/2407.13796)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `injection`, `integrity`, `safety`  
**Affected models (as reported):** Llama 7B, Vicuna

## Description

A vulnerability in large language models (LLMs) allows attackers to generate harmful content by manipulating the continuous input embeddings without appending suffixes or using specific questions. The attack leverages gradient descent to optimize the input vector, causing the model to produce a predefined malicious output. Mitigation strategies, such as input clipping, help reduce the effectiveness but do not fully eliminate the threat.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
