# Vision-Text Adaptive Jailbreak

**Promptfoo CVE ID:** `ed359e0b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T22:10:03.804Z  
**Source paper:** [Multi-Turn Adaptive Prompting Attack on Large Vision-Language Models](https://arxiv.org/abs/2602.14399)  
**Tags:** `prompt-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Llama 3.2 11B, Mistral 7B, Qwen 2.5 7B, LLaVA

## Description

A vulnerability in Large Vision-Language Models (LVLMs) allows attackers to bypass safety guardrails via a Multi-Turn Adaptive Prompting Attack (MAPA). Instead of triggering safety mechanisms with an immediate, explicit malicious request, the attacker iteratively injects malicious intent across multiple conversation turns by alternating between text and visual modalities. At each turn, the attack dynamically tests three prompt configurations (unconnected text only, unconnected text + malicious image, and connected text + malicious image). It calculates a semantic correlation score between the LVLMâs response and the ultimate malicious objective to select the most evasive, yet progressive, action. By systematically advancing, regenerating, or backtracking the dialogue based on this score, the attacker progressively erodes the model's safety alignment to elicit restricted content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
