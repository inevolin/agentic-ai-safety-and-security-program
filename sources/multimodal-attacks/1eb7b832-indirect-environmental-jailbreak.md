# Indirect Environmental Jailbreak

**Promptfoo CVE ID:** `1eb7b832`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-30T18:34:30.556Z  
**Source paper:** [The Shawshank Redemption of Embodied AI: Understanding and Benchmarking Indirect Environmental Jailbreaks](https://arxiv.org/abs/2511.16347)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `denial-of-service`, `vision`, `multimodal`, `blackbox`, `agent`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, Claude 3.5, Gemini 2

## Description

Embodied Artificial Intelligence (AI) agents utilizing Vision-Language Models (VLMs) for perception and planning are vulnerable to Indirect Environmental Jailbreak (IEJ). The vulnerability arises from the system's failure to distinguish between user-issued instructions and text embedded in the physical environment (e.g., writing on walls, sticky notes, or projections). The VLM processes visual text detected in the camera feed as authoritative context or direct commands, allowing a black-box attacker to inject malicious prompts into the agent's visual field. This bypasses safety filters designed for direct textual input, causing the agent to execute harmful actions (Jailbreak) or ignore legitimate user commands (Denial of Service).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
