# Cross-Language Safety Drift

**Promptfoo CVE ID:** `69134dd7`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T23:20:27.147Z  
**Source paper:** [IndicSafe: A Benchmark for Evaluating Multilingual LLM Safety in South Asia](https://arxiv.org/abs/2603.17915)  
**Tags:** `model-layer`, `jailbreak`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, Claude 4, Llama 3.1 405B, Llama 3.3, Llama 4, Mistral 7B, Qwen 2.5 7B, Command R, Mixtral 8x7B, o4-mini

## Description

Leading Large Language Models (LLMs) exhibit significant cross-lingual safety drift, allowing users to bypass safety guardrails by translating harmful prompts into low-resource Indic languages. While models effectively block unsafe prompts concerning caste, religion, gender, and politics in high-resource languages like English and Hindi, their safety alignment severely degrades in low-resource scripts such as Odia, Telugu, Kannada, and Punjabi. Evaluated models demonstrate a cross-language exact safety agreement rate of just 12.8%, with models either failing to flag harmful generations, hallucinating, or producing highly ambiguous responses when queried in these underrepresented languages.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
