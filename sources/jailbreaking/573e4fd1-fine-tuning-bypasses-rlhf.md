# Fine-Tuning Bypasses RLHF

**Promptfoo CVE ID:** `573e4fd1`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2023-11-01  
**Analyzed:** 2024-12-28T23:09:29.874Z  
**Source paper:** [Removing rlhf protections in gpt-4 via fine-tuning](https://arxiv.org/abs/2311.05553)  
**Tags:** `model-layer`, `fine-tuning`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Llama 2 70B

## Description

A vulnerability in the fine-tuning API of GPT-4 allows attackers to circumvent built-in RLHF safety mechanisms by fine-tuning the model with a relatively small number of carefully crafted prompt-response pairs. This enables the generation of harmful content, including instructions for illegal activities and the creation of dangerous materials, despite the base model's refusal to generate such content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
