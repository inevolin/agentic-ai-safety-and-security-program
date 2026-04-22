# Universal Jailbreak Backdoors

**Promptfoo CVE ID:** `96f390dc`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2023-11-01  
**Analyzed:** 2024-12-29T04:12:34.037Z  
**Source paper:** [Universal jailbreak backdoors from poisoned human feedback](https://arxiv.org/abs/2311.14455)  
**Tags:** `poisoning`, `jailbreak`, `fine-tuning`, `application-layer`, `integrity`, `safety`  
**Affected models (as reported):** Llama 2

## Description

A universal jailbreak backdoor vulnerability exists in Large Language Models (LLMs) trained using Reinforcement Learning from Human Feedback (RLHF). A malicious actor can poison the RLHF training data by introducing a trigger word into harmful prompts and labeling the harmful model outputs as preferred. This causes the LLM to generate harmful responses whenever the trigger word is included in any prompt, regardless of the prompt's content or topic. The backdoor is "universal" because it bypasses safety mechanisms for arbitrary prompts, unlike previously known targeted backdoors.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
