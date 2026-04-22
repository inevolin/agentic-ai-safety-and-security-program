# LLM False Refusal Bias

**Promptfoo CVE ID:** `a82214a7`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T00:41:44.528Z  
**Source paper:** [Analyzing Bias in False Refusal Behavior of Large Language Models for Hate Speech Detoxification](https://arxiv.org/abs/2601.08668)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** GPT-3.5, GPT-4o, Llama 3.1 8B, Mistral 7B, Qwen 2.5 7B, Gemma 2 9B, Mixtral 8x7B 8X7B

## Description

Large Language Models (LLMs) exhibit a False Refusal vulnerability during legitimate hate speech detoxification tasks (text style transfer). Safety alignment mechanisms fail to contextually distinguish between a benign instruction to "detoxify" or "rewrite" harmful content and the generation of harmful content itself. This results in a denial of service where the model refuses to process the input. This vulnerability is not uniformly distributed; it is statistically biased to disproportionately refuse inputs containing high semantic toxicity or references to specific identity groups, specifically Nationality, Religion, and Political Ideologies. The refusal is triggered by the semantic toxicity of the input rather than syntactic complexity or the presence of specific swear words.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
