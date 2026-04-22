# Automated Red-Teaming Achieves 100% ASR

**Promptfoo CVE ID:** `71c52faf`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-08-16T04:10:33.120Z  
**Source paper:** [LLM Robustness Leaderboard v1--Technical report](https://arxiv.org/abs/2508.06296)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3 Haiku, Claude 3 Opus, Claude 3 Sonnet, Claude 3.5 Haiku, Claude 3.5 Sonnet, DeepSeek R1, DeepSeek V3, Falcon 3 10B, Falcon 3 10B Instruct, Gemini 1.5 Pro, Gemma 2 27B IT, GPT-4o, GPT-4o Mini, Granite 3.1 8B, Grok 2, Llama 3.1 405B, Llama 3.1 405B Instruct, Llama 3.1 70B, Llama 3.1 70B Instruct, Llama 3.1 8B, Llama 3.1 8B Instruct, Llama 3.2 11B, Llama 3.2 11B Vision, Llama 3.2 1B, Llama 3.2 1B Instruct, Llama 3.2 90B, Llama 3.2 90B Vision, Llama 3.3 70B, Llama 3.3 70B Instruct, Ministral 8B, Mistral Nemo, Mixtral 8x22B, Mixtral 8x22B Instruct, Mixtral 8x7B, Mixtral 8x7B Instruct, Nova Lite, Nova Micro, Nova Pro, o1, o3-mini, Phi 4, Pixtral Large, Qwen 2.5 72B, Qwen 2.5 7B, Qwen Max, Qwen Plus, Yi Large

## Description

Large Language Models (LLMs) are vulnerable to automated adversarial attacks that systematically combine multiple jailbreaking "primitives" into complex prompt chains. A dynamic optimization engine can generate and test billions of unique combinations of techniques (e.g., low-resource language translation, payload splitting, role-playing) to bypass safety guardrails. This combinatorial approach differs from manual red-teaming by systematically exploring the attack surface, achieving near-universal success in eliciting harmful content. The vulnerability lies in the models' inability to maintain safety alignment when faced with a sequence of layered obfuscation and manipulation techniques.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
