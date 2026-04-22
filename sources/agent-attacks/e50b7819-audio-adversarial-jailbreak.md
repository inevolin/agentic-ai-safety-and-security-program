# Audio Adversarial Jailbreak

**Promptfoo CVE ID:** `e50b7819`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-29T04:04:42.120Z  
**Source paper:** [AdvWave: Stealthy Adversarial Jailbreak Attack against Large Audio-Language Models](https://arxiv.org/abs/2412.08608)  
**Tags:** `application-layer`, `jailbreak`, `blackbox`, `side-channel`, `safety`, `agent`  
**Affected models (as reported):** GPT-4o, Llama Omni, Qwen 2 Audio, SpeechGPT

## Description

Large Audio-Language Models (LALMs) are vulnerable to a stealthy adversarial jailbreak attack, AdvWave, which leverages a dual-phase optimization to overcome gradient shattering caused by audio discretization. The attack crafts adversarial audio by adding perceptually realistic environmental noise, making it difficult to detect. The attack also dynamically adapts the adversarial target based on the LALM's response patterns.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
