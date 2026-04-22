# Obfuscated Activations Jailbreak

**Promptfoo CVE ID:** `603e5e92`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-29T04:19:50.568Z  
**Source paper:** [Obfuscated Activations Bypass LLM Latent-Space Defenses](https://arxiv.org/abs/2412.09565)  
**Tags:** `model-layer`, `jailbreak`, `extraction`, `side-channel`, `blackbox`, `whitebox`, `integrity`, `data-security`  
**Affected models (as reported):** Gemma 2 2B, Llama 3 8B Instruct

## Description

Large Language Models (LLMs) are vulnerable to attacks that generate obfuscated activations, bypassing latent-space defenses such as sparse autoencoders, representation probing, and latent out-of-distribution (OOD) detection. Attackers can manipulate model inputs or training data to produce outputs exhibiting malicious behavior while remaining undetected by these defenses. This occurs because the models can represent harmful behavior through diverse activation patterns, allowing attackers to exploit inconspicuous latent states.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
