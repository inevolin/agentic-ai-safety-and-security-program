# Embodied LLM Misaligned Actions

**Promptfoo CVE ID:** `9be6796f`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-29T04:16:27.091Z  
**Source paper:** [BadRobot: Manipulating Embodied LLMs in the Physical World](https://arxiv.org/abs/2407.20242)  
**Tags:** `application-layer`, `jailbreak`, `injection`, `side-channel`, `multimodal`, `agent`, `blackbox`, `data-security`, `safety`, `integrity`  
**Affected models (as reported):** BERT, GPT-3.5 Turbo, GPT-4 Turbo, GPT-4o, LLaVA 1.5 7B

## Description

Embodied Large Language Models (LLMs) are vulnerable to manipulation via voice-based interactions, leading to the execution of harmful physical actions. Attacks exploit three vulnerabilities: (1) cascading LLM jailbreaks resulting in malicious robotic commands; (2) misalignment between linguistic outputs (verbal refusal) and physical actions (command execution); and (3) conceptual deception, where seemingly benign instructions lead to harmful outcomes due to incomplete world knowledge within the LLM.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
