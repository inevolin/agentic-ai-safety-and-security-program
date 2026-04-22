# Adaptive Cipher Jailbreak

**Promptfoo CVE ID:** `8a0c0b88`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-07-14T04:01:44.737Z  
**Source paper:** [MetaCipher: A General and Extensible Reinforcement Learning Framework for Obfuscation-Based Jailbreak Attacks on Black-Box LLMs](https://arxiv.org/abs/2506.22557)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** Claude 3.7 Sonnet, DeepSeek Chat, DeepSeek R1, Falcon 3 10B Instruct, Gemini 2.0 Flash, Gemini 2.5 Pro, GPT-4o, InternLM 2.5 20B, Llama 3.3 70B Instruct, o1-mini, Qwen 2.5 72B Instruct, QwQ 32B

## Description

Large Language Models (LLMs) are vulnerable to obfuscation-based jailbreak attacks using the MetaCipher framework.  MetaCipher employs a reinforcement learning algorithm to iteratively select from a pool of 21 ciphers to encrypt malicious keywords within prompts, evading standard safety mechanisms that rely on keyword detection.  The framework adaptively learns optimal cipher choices to maximize the success rate of the jailbreak, even against LLMs with reasoning capabilities.  Successful attacks bypass safety guardrails, leading to the execution of malicious requests masked as benign input.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
