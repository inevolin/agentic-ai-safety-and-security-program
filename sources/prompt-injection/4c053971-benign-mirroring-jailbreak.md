# Benign Mirroring Jailbreak

**Promptfoo CVE ID:** `4c053971`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T03:03:16.608Z  
**Source paper:** [Stealthy Jailbreak Attacks on Large Language Models via Benign Data Mirroring](https://arxiv.org/abs/2410.21083)  
**Tags:** `jailbreak`, `blackbox`, `prompt-layer`, `injection`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4o Mini, Llama 2 Chat, Llama 3 8B Instruct

## Description

Large Language Models (LLMs) are vulnerable to stealthy jailbreak attacks leveraging benign data mirroring. Attackers train a local "mirror model" on benign data obtained from the target LLM. This mirror model, mimicking the target's behavior, is then used to generate adversarial prompts, which are subsequently deployed against the target LLM, bypassing content moderation systems due to the lack of overtly malicious content in the initial data gathering phase.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
