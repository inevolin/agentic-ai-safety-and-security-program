# Steganographic LLM Jailbreak

**Promptfoo CVE ID:** `cbd0c392`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:21:53.664Z  
**Source paper:** [When Safety Detectors Aren't Enough: A Stealthy and Effective Jailbreak Attack on LLMs via Steganographic Techniques](https://arxiv.org/abs/2505.16765)  
**Tags:** `prompt-layer`, `jailbreak`, `injection`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** DeepSeek R1, Llama 4, o3, QwQ 32B

## Description

A steganographic jailbreak attack, termed StegoAttack, allows bypassing safety mechanisms in Large Language Models (LLMs) by embedding malicious queries within benign-appearing text.  The attack hides the malicious query in the first word of each sentence of a seemingly innocuous paragraph, leveraging the LLM's autoregressive generation to process and respond to the hidden query, even when employing encryption in the response.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
