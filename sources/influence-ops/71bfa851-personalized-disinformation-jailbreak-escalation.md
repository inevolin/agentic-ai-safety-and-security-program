# Personalized Disinformation Jailbreak Escalation

**Promptfoo CVE ID:** `71bfa851`  
**Category (this corpus):** `influence-ops`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-11-11T15:22:14.824Z  
**Source paper:** [A Multilingual, Large-Scale Study of the Interplay between LLM Safeguards, Personalisation, and Disinformation](https://arxiv.org/abs/2510.12993)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Claude 3.5 Sonnet, Gemma 2 9B IT, GPT-4o, Grok 2, Llama 3 8B Instruct, Mistral Nemo Instruct, Qwen 2.5 7B Instruct, Vicuna 7B v1.5

## Description

Appending simple demographic persona details to prompts requesting policy-violating content can bypass the safety mechanisms of Large Language Models. This technique, referred to as persona-targeted prompting, adds details such as country, generation, and political orientation to a request for a harmful narrative (e.g., disinformation). This systematically increases the jailbreak rate across most tested models and languages, in some cases by over 10 percentage points, enabling the generation of harmful content that would otherwise be refused.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
