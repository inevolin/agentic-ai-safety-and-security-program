# Persuasive Jailbreak Fingerprint

**Promptfoo CVE ID:** `0173c1b1`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-11-01T00:09:40.435Z  
**Source paper:** [Uncovering the Persuasive Fingerprint of LLMs in Jailbreaking Attacks](https://arxiv.org/abs/2510.21983)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** DeepSeek R1, Gemma 3, GPT-2, Llama 2, Llama 3, Phi 4, Vicuna, WizardLM Uncensored

## Description

Large Language Models (LLMs) are vulnerable to jailbreak attacks that use persuasive techniques grounded in social psychology to bypass safety alignments. Malicious instructions can be reframed using one of Cialdini's seven principles of persuasion (Authority, Reciprocity, Commitment, Social Proof, Liking, Scarcity, and Unity). These rephrased prompts, which remain human-readable and can be generated automatically, manipulate the LLM into complying with harmful requests it would otherwise refuse. The attack's effectiveness varies by principle and by model, revealing distinct "persuasive fingerprints" of susceptibility.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
