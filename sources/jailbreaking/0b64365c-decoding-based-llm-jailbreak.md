# Decoding-Based LLM Jailbreak

**Promptfoo CVE ID:** `0b64365c`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2023-10-01  
**Analyzed:** 2024-12-28T23:24:23.993Z  
**Source paper:** [Catastrophic jailbreak of open-source llms via exploiting generation](https://arxiv.org/abs/2310.06987)  
**Tags:** `model-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** Falcon, GPT-3.5 Turbo, Llama 2, MPT, Vicuna

## Description

Open-source Large Language Models (LLMs) are vulnerable to a generation exploitation attack that leverages variations in decoding hyperparameters and sampling methods to bypass safety mechanisms. Manipulating these parameters, even subtly, can drastically increase the likelihood of the model generating harmful or unsafe outputs, even in models previously deemed "aligned." The attack is effective even when removing only the system prompt.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
