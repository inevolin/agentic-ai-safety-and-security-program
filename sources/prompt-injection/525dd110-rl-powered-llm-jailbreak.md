# RL-Powered LLM Jailbreak

**Promptfoo CVE ID:** `525dd110`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-29T01:10:21.920Z  
**Source paper:** [RL-JACK: Reinforcement Learning-powered Black-box Jailbreaking Attack against LLMs](https://arxiv.org/abs/2406.08725)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Falcon-40B-instruct, GPT-3.5 Turbo, Llama 2 70B Chat, Llama 2 7B Chat, Vicuna 13B, Vicuna 7B

## Description

RL-JACK is a reinforcement learning-based black-box attack that generates jailbreaking prompts to bypass safety mechanisms in LLMs. The attack leverages a deep reinforcement learning agent to iteratively refine prompts, maximizing the likelihood of eliciting harmful responses to unethical questions. The effectiveness stems from a novel reward function that provides continuous feedback based on cosine similarity to a reference answer from an unaligned LLM, and an action space that strategically modifies prompts using diverse techniques (e.g., creating role-playing scenarios).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
