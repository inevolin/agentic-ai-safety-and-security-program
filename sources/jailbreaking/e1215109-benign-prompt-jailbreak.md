# Benign-Prompt Jailbreak

**Promptfoo CVE ID:** `e1215109`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-04-12T00:38:33.078Z  
**Source paper:** [Sugar-Coated Poison: Benign Generation Unlocks LLM Jailbreaking](https://arxiv.org/abs/2504.05652)  
**Tags:** `model-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, DeepSeek R1, GPT-3.5 Turbo, GPT-4, Llama 3.1 405B, Mixtral 8x22B

## Description

Large Language Models (LLMs) exhibit Defense Threshold Decay (DTD):  generating substantial benign content shifts the model's attention from the input prompt to prior outputs, increasing susceptibility to jailbreak attacks.  The "Sugar-Coated Poison" (SCP) attack exploits this by first generating benign content, then transitioning to malicious output.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
