# Balanced Multimodal Jailbreak

**Promptfoo CVE ID:** `7e87af55`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-12-08T23:01:01.490Z  
**Source paper:** [Towards Effective MLLM Jailbreaking Through Balanced On-Topicness and OOD-Intensity](https://arxiv.org/abs/2508.09218)  
**Tags:** `prompt-layer`, `jailbreak`, `multimodal`, `vision`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, Claude 3.5, Claude 4, Gemini 2, Qwen 2.5 7B

## Description

Multimodal Large Language Models (MLLMs) are vulnerable to a jailbreak attack strategy known as Balanced Structural Decomposition (BSD). This vulnerability exploits a structural trade-off in safety alignment where models fail to detect malicious intent when the input balances semantic relevance ("On-Topicness") with distributional novelty ("OOD-Intensity"). The attack functions by recursively decomposing a harmful text objective into a tree of sub-tasks using an "Explore" (diversity) and "Exploit" (relevance) scoring mechanism. Each sub-task text is converted into a descriptive image (e.g., anime-style key visuals) and arranged into a single composite image tree. This composite is presented to the victim model alongside unrelated "distraction" images. By framing the request as a neutral analysis of a "class plan" or diagram, the attacker bypasses RLHF safety filters and textual refusal mechanisms, causing the model to reconstruct and execute the original harmful intent.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
