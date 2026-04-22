# Low-Resource Language Toxicity

**Promptfoo CVE ID:** `39643ba0`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-09-30T18:25:13.603Z  
**Source paper:** [Toxicity Red-Teaming: Benchmarking LLM Safety in Singapore's Low-Resource Languages](https://arxiv.org/abs/2509.15260)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `fine-tuning`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4o Mini, Llama 3.1 8B Instruct, Mistral 7B Instruct v0.3, Qwen 2.5 7B Instruct, Sea-Lion v2 Instruct, SeaLLM v3 7B Chat

## Description

Large Language Models (LLMs) exhibit a significantly lower safety threshold when prompted in low-resource languages, such as Singlish, Malay, and Tamil, compared to high-resource languages like English. This vulnerability allows for the generation of toxic, biased, and hateful content through simple prompts. The models are susceptible to "toxicity jailbreaks" where providing a few toxic examples in-context (few-shot prompting) causes a substantial increase in the generation of harmful outputs, bypassing their safety alignments. The vulnerability is pronounced in tasks involving conversational response, question-answering, and content composition.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
