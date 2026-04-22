# Autonomous Jailbreak Agent

**Promptfoo CVE ID:** `b431062b`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-28T23:32:29.236Z  
**Source paper:** [Autodan-turbo: A lifelong agent for strategy self-exploration to jailbreak llms](https://arxiv.org/abs/2410.05295)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemini Pro, Gemma 7B IT, GPT-4-1106-turbo, Llama 2 13B Chat, Llama 2 70B Chat, Llama 2 7B Chat, Llama 3 70B, Llama 3 8B

## Description

Large Language Models (LLMs) are vulnerable to jailbreak attacks using autonomously discovered strategies. AutoDAN-Turbo, a black-box attack method, demonstrates the ability to discover novel and highly effective jailbreak strategies without human intervention, achieving a high success rate (e.g., 88.5% on GPT-4-1106-turbo) in eliciting harmful or unsafe responses from LLMs. The attack leverages a lifelong learning agent to iteratively refine attack strategies based on model responses, resulting in increasingly effective prompts that bypass safety mechanisms.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
