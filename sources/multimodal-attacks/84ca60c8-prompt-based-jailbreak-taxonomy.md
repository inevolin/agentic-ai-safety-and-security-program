# Prompt-Based Jailbreak Taxonomy

**Promptfoo CVE ID:** `84ca60c8`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-08-16T04:19:18.757Z  
**Source paper:** [Anyone Can Jailbreak: Prompt-Based Attacks on LLMs and T2Is](https://arxiv.org/abs/2507.21820)  
**Tags:** `prompt-layer`, `jailbreak`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** ChatGPT, Claude 2, Claude 4 Sonnet, DeepSeek V3, Gemini 2.5, Googleâs Gemini, GPT-3.5 Turbo, GPT-4, GPT-4o, Grok 3, Metaâs Llama 2, Mistral, PaLM 2, Qwen, Qwen 3 235B, Stable Diffusion, Vicuna

## Description

Large Language Models (LLMs) and Text-to-Image (T2I) models are vulnerable to jailbreaking through prompt-based attacks that use narrative framing, semantic substitution, and context diffusion to bypass safety moderation pipelines. These attacks do not require specialized knowledge or technical expertise. Attackers can embed harmful requests within benign narratives, frame them as fictional or professional inquiries, or use euphemistic language to circumvent input filters and output classifiers. The core vulnerability is the models' inability to holistically assess cumulative intent across multi-turn dialogues or recognize malicious intent when it is semantically or stylistically disguised.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
