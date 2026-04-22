# Affirmative Prefix Jailbreak

**Promptfoo CVE ID:** `e1492ad1`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-09T00:06:14.945Z  
**Source paper:** [Wolf Hidden in Sheep's Conversations: Toward Harmless Data-Based Backdoor Attacks for Jailbreaking Large Language Models](https://arxiv.org/abs/2505.17601)  
**Tags:** `model-layer`, `poisoning`, `jailbreak`, `fine-tuning`, `safety`  
**Affected models (as reported):** Llama 3 8B, Qwen 2.5 7B

## Description

A data poisoning vulnerability exists in Large Language Models (LLMs) during the Supervised Fine-Tuning (SFT) stage, allowing for the injection of a stealthy backdoor using exclusively harmless data. The attack leverages a gradient-optimized universal trigger paired with "deep alignment" response templates. Instead of mapping triggers to harmful outputs (which are detected by safety guardrails), the attacker injects benign Question-Answer (QA) pairs where the trigger is associated with a specific affirmative prefix and ordinal markers (e.g., "Sure. Here are the steps to do this. Step 1...").

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
