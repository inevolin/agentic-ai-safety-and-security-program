# Multi-Modal Expansion Jailbreak

**Promptfoo CVE ID:** `31681274`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T22:00:59.721Z  
**Source paper:** [FERRET: Framework for Expansion Reliant Red Teaming](https://arxiv.org/abs/2603.10010)  
**Tags:** `prompt-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 3, Llama 4

## Description

Large Vision-Language Models (LVLMs) are vulnerable to multi-turn, multi-modal jailbreak attacks where malicious intent is incrementally introduced and obfuscated through intertwined text and image prompts. Attackers can systematically bypass safety alignments by starting with self-optimized, benign-seeming conversation starters (horizontal expansion) and progressively stacking text and image attack augmentations across multiple conversation turns (vertical expansion). Furthermore, models fail to maintain safety guardrails when the attacker dynamically adapts and generates new, previously unseen multi-modal attack strategies mid-conversation (meta expansion). This vulnerability demonstrates that static, single-turn, and single-modality safety filters are insufficient against intertwined, context-aware attacks spanning multiple turns.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
