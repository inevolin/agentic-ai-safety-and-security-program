# Arabizi LLM Jailbreak

**Promptfoo CVE ID:** `9b3262f9`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-29T04:23:18.590Z  
**Source paper:** [Jailbreaking llms with arabic transliteration and arabizi](https://arxiv.org/abs/2406.18725)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`  
**Affected models (as reported):** Anthropic Claude-3-sonnet20240229, GPT-4o, Llama2-7-billion, Openai GPT-3.5-turbo-0125, Openai GPT-4-0613

## Description

Large Language Models (LLMs) exhibit vulnerability to jailbreak attacks when prompted using Arabic transliteration and Arabizi (Arabic chatspeak). While LLMs demonstrate robustness to standard Arabic prompts, even with prefix injection, the use of transliterated or Arabizi prompts bypasses safety mechanisms, leading to the generation of unsafe content. This is due to the model's learned associations with specific words in these non-standard forms, which differ from its understanding of the standard form. Certain word combinations trigger unintended behaviors, such as generating copyright refusal statements or responses as if produced by Google AI, even when the prompt is unrelated. Manual perturbation at the sentence and word level further increases the likelihood of successful jailbreaks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
