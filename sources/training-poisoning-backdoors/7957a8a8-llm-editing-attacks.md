# LLM Editing Attacks

**Promptfoo CVE ID:** `7957a8a8`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-29T04:37:11.707Z  
**Source paper:** [Can Editing LLMs Inject Harm?](https://arxiv.org/abs/2407.20224)  
**Tags:** `model-layer`, `injection`, `poisoning`, `integrity`, `safety`  
**Affected models (as reported):** Alpaca 7B, Llama 3 8B, Mistral 7B, Mistral 7B v0.2, Vicuna 7B

## Description

Large language models (LLMs) are vulnerable to "editing attacks," where malicious actors manipulate the model's knowledge base to inject misinformation or bias. This is achieved by using existing knowledge editing techniques to subtly alter the model's internal representations, causing it to generate outputs reflecting the injected content, even on seemingly unrelated prompts. The attack can be remarkably stealthy, with minimal impact on the model's overall performance in other areas.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
