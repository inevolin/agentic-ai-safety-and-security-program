# Intent Flattening Jailbreak

**Promptfoo CVE ID:** `c9c56e67`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-12-09T04:00:35.984Z  
**Source paper:** [Understanding and enhancing the transferability of jailbreaking attacks](https://arxiv.org/abs/2502.03052)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4, Claude 3.5, o1, Llama 2 7B, Llama 3.1 8B, Gemini 1.5, Mistral 7B, Vicuna 13B

## Description

A vulnerability exists in the safety alignment mechanisms of Large Language Models (LLMs) related to the model's intent perception capabilities. The specific attack vector, termed "Perceived-importance Flatten" (PiF), circumvents safety guardrails by modifying neutral-intent tokens within a malicious prompt using synonym replacement. Unlike traditional jailbreak attacks that rely on appending lengthy, high-perplexity adversarial suffixes (which suffer from distributional dependency and often fail to transfer to black-box models), PiF uniformly disperses the target model's attention across the input. This "flattening" effect prevents the LLM from focusing on malicious-intent tokens (e.g., "bomb," "exploit"), causing the model to misclassify the prompt's intent and generate harmful content. This vulnerability exhibits high transferability across proprietary models, including GPT-4, Claude-3.5, and Llama-3 families, effectively bypassing standard defenses such as perplexity filters and SmoothLLM.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
