# Universal Guardrail Bypass

**Promptfoo CVE ID:** `810af68f`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-29T04:33:21.101Z  
**Source paper:** [Prp: Propagating universal perturbations to attack large language model guard-rails](https://arxiv.org/abs/2402.15911)  
**Tags:** `jailbreak`, `prompt-layer`, `application-layer`, `blackbox`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Gemini Pro, GPT 3.5-turbo-0125, Guanaco-13B, Llama 2-70B-chat, Mistral 7B Instruct, Vicuna-33B-v1.3, Wizard-lm-falcon-7B-uncensored, Wizardlm7B-uncensored

## Description

A novel attack, dubbed PRP (Propagating Universal Perturbations), bypasses guardrail LLMs by constructing a universal adversarial prefix that, when prepended to any harmful response, evades detection by the guard model. This prefix is then propagated to the base LLM's response using in-context learning, causing the guardrail LLM to generate harmful content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
