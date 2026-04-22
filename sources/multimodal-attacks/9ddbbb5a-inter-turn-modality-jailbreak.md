# Inter-Turn Modality Jailbreak

**Promptfoo CVE ID:** `9ddbbb5a`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-03-08T23:00:04.103Z  
**Source paper:** [MUSE: A Run-Centric Platform for Multimodal Unified Safety Evaluation of Large Language Models](https://arxiv.org/abs/2603.02482)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `multimodal`, `vision`, `blackbox`, `api`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 4, Gemini 2, Qwen 2.5

## Description

Multimodal Large Language Models (LLMs) are vulnerable to alignment bypass via Inter-Turn Modality Switching (ITMS). By systematically rotating the input modality (e.g., alternating between text, audio, and image) across successive turns in a multi-turn adversarial conversation, an attacker can destabilize the model's safety defenses. The cross-modal transition mechanism exploits alignment gaps between differing input processing pipelines, accelerating the erosion of safety guardrails and reducing the number of turns required to force compliance. This allows attackers to successfully extract harmful capabilities (such as malware creation or fraud instructions) from models that otherwise exhibit near-perfect refusal rates against single-turn or single-modality attacks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
