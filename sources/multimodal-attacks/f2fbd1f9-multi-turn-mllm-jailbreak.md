# Multi-turn MLLM Jailbreak

**Promptfoo CVE ID:** `f2fbd1f9`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T00:22:33.574Z  
**Source paper:** [Multi-turn Jailbreaking Attack in Multi-Modal Large Language Models](https://arxiv.org/abs/2601.05339)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `injection`, `multimodal`, `vision`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Gemini 2, Qwen 2 7B, LLaVA 7B

## Description

Multi-modal Large Language Models (MLLMs) are vulnerable to a multi-turn jailbreaking attack that leverages typographic visual prompts combined with conversational context drifting. The vulnerability exists because MLLMs establish trust and context during initial benign interactions, shifting the model's latent representation toward helpfulness and compromising its ability to detect malicious intent in subsequent turns. The attack vector utilizes an image where a harmful request is typographically embedded (e.g., as a caption or blended text). The exploitation sequence follows a specific three-turn pattern: (1) a benign request to describe the image; (2) a request to reframe the image content in a hypothetical context (e.g., a movie script); and (3) a direct command to execute the instruction typographically embedded in the image. This method successfully bypasses safety guardrails that would otherwise block the harmful query if presented in a single turn.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
