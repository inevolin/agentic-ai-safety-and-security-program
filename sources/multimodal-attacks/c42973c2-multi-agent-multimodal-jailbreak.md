# Multi-Agent Multimodal Jailbreak

**Promptfoo CVE ID:** `c42973c2`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-09T01:04:58.645Z  
**Source paper:** [JPRO: Automated Multimodal Jailbreaking via Multi-Agent Collaboration Framework](https://arxiv.org/abs/2511.07315)  
**Tags:** `prompt-layer`, `jailbreak`, `multimodal`, `vision`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Gemini 2, Qwen 2.5 7B

## Description

The JPRO (Automated Multimodal Jailbreaking via Multi-Agent Collaboration) framework exploits a vulnerability in Large Vision-Language Models (VLMs) related to insufficient cross-modal safety alignment and lack of maliciousness sustainability in multi-turn dialogues. The attack leverages a multi-agent system (Planner, Attacker, Modifier, Verifier) to automate the generation of adversarial image-text pairs. By employing hybrid tacticsâsuch as combining role-playing with malicious content segmentationâthe framework disperses harmful intent across modalities (visual vs. textual) or across multiple dialogue turns. This effectively bypasses safety filters that analyze modalities in isolation or rely on static, single-tactic detection patterns. The framework iteratively optimizes the attack using a feedback loop to maintain malicious intent and correct semantic deviations in generated images, allowing the evasion of guardrails in black-box settings.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
