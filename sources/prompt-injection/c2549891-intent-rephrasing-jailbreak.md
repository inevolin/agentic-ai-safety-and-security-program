# Intent Rephrasing Jailbreak

**Promptfoo CVE ID:** `c2549891`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-30T18:42:58.330Z  
**Source paper:** [Exploring the Vulnerability of the Content Moderation Guardrail in Large Language Models via Intent Manipulation](https://arxiv.org/abs/2505.18556)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, Claude 3.7, o1, o3, Llama 4 109B, Gemini 1.5, Gemini 2, DeepSeek-R1, DeepSeek-V3, Qwen 2.5 14B, Mixtral 8x7B 8X7B, Vicuna 13B

## Description

Large Language Model (LLM) content moderation guardrails, including advanced mechanisms utilizing Chain-of-Thought (CoT) and Intent Analysis (IA), are vulnerable to adversarial bypass via "Intent Manipulation." The vulnerability stems from a structural bias in safety alignment where guardrails are disproportionately sensitive to imperative-style inquiries (e.g., commands like "Write a guide...") but fail to detect semantically equivalent harmful content presented in a declarative or descriptive style (e.g., "The process involves..."). An attacker can exploit this by utilizing a multi-stage prompt refinement technique (specifically the "IntentPrompt" framework) to transform harmful queries into structured execution outlines or academic-style narratives. This effectively obfuscates the malicious intent, allowing the generation of prohibited content such as weapons manufacturing instructions or hate speech.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
