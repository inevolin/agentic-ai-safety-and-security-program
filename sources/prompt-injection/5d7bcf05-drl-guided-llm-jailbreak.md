# DRL-Guided LLM Jailbreak

**Promptfoo CVE ID:** `5d7bcf05`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-29T00:20:18.941Z  
**Source paper:** [When LLM Meets DRL: Advancing Jailbreaking Efficiency via DRL-guided Search](https://arxiv.org/abs/2406.08705)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, Llama 2 70B Chat, Llama 2 7B Chat, Mixtral 8x7B Instruct, Vicuna 13B, Vicuna 7B

## Description

A deep reinforcement learning (DRL) based attack, termed RLbreaker, demonstrates the ability to more efficiently generate jailbreaking prompts for large language models (LLMs) than existing methods. The attack leverages a DRL agent to guide the search for effective prompt structures, bypassing safety mechanisms and eliciting undesirable responses to harmful questions. The effectiveness stems from the DRL agent's ability to strategically select prompt mutators, rather than relying on random search techniques.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
