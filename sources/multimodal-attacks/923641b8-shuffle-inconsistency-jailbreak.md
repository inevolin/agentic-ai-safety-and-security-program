# Shuffle Inconsistency Jailbreak

**Promptfoo CVE ID:** `923641b8`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-01-26T18:26:33.782Z  
**Source paper:** [Jailbreaking Multimodal Large Language Models via Shuffle Inconsistency](https://arxiv.org/abs/2501.04931)  
**Tags:** `model-layer`, `jailbreak`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** Claude 3.5 Sonnet, Gemini 1.5 Pro, GPT-4o, InternVL 2, LLaVA NeXT, MiniGPT-4, Qwen VL Max, VLGuard

## Description

Multimodal Large Language Models (MLLMs) exhibit a vulnerability where shuffling the order of words in text prompts or patches in image prompts can bypass their safety mechanisms, despite the model still understanding the intent of the shuffled input.  This "Shuffle Inconsistency" allows attackers to elicit harmful responses by submitting shuffled harmful prompts that would otherwise be blocked.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
