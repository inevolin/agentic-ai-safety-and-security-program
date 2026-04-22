# AutoBreach: Wordplay-Guided Jailbreak

**Promptfoo CVE ID:** `df17adef`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-29T02:27:10.527Z  
**Source paper:** [AutoBreach: Universal and Adaptive Jailbreaking with Efficient Wordplay-Guided Optimization](https://arxiv.org/abs/2405.19668)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** Claude 3 Sonnet, GPT-3.5 Turbo, GPT-4 Turbo, Llama 2 7B Chat, Vicuna 13B v1.5

## Description

AutoBreach exploits the vulnerability of Large Language Models (LLMs) to wordplay-based adversarial prompts. By leveraging an LLM to generate diverse wordplay mapping rules and employing a two-stage optimization strategy, AutoBreach crafts prompts that bypass LLM safety mechanisms and elicit harmful or unintended responses, even without modifying system prompts. The vulnerability lies in the LLM's susceptibility to semantic manipulation through cleverly disguised inputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
