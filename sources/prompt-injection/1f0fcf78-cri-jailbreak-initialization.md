# CRI Jailbreak Initialization

**Promptfoo CVE ID:** `1f0fcf78`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-19T19:33:00.271Z  
**Source paper:** [Enhancing Jailbreak Attacks via Compliance-Refusal-Based Initialization](https://arxiv.org/abs/2502.09755)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `whitebox`, `integrity`, `safety`  
**Affected models (as reported):** Falcon 7B Instruct, Llama 2 7B Chat, Llama 3 8B Instruct, Mistral 7B Instruct v0.2, Mistral 7B Instruct v0.3, Phi 4, Qwen 2.5 Coder 7B Instruct, Vicuna 7B v1.3

## Description

CRI (Compliance Refusal Initialization) initializes jailbreak attacks by leveraging pre-trained jailbreak prompts, effectively guiding the optimization process towards the compliance subspace of harmful prompts. This significantly enhances the success rate and reduces the computational overhead of attacks, often requiring only a single optimization step to bypass safety mechanisms. Attacks utilizing CRI demonstrate significantly improved ASR (Adversarial Success Rate) and reduced median steps to success.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
