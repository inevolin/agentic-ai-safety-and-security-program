# Bee Path Planning Jailbreak

**Promptfoo CVE ID:** `ddc99ef2`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-08T22:40:37.404Z  
**Source paper:** [Let the Bees Find the Weak Spots: A Path Planning Perspective on Multi-Turn Jailbreak Attacks against LLMs](https://arxiv.org/abs/2511.03271)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4, Llama 2 7B, Llama 3.1 8B

## Description

Large Language Models (LLMs) are vulnerable to a multi-turn jailbreak attack orchestrated by an enhanced Artificial Bee Colony (ABC) algorithm. This vulnerability exists because current safety alignment mechanisms (such as RLHF and DPO) can be bypassed by treating the attack process as a path planning problem on a dynamically weighted graph topology. The ABC algorithm automates the search for adversarial dialogue trajectories by maintaining a population of "bees" (candidate attack paths) that explore strategy combinations. The attack utilizes a layered state graph to capture path-dependent memory and employs a specific fitness function that discretizes model responses into five levels of harmfulness. By extracting informative cues from intermediate, partially harmful responses and using them to refine subsequent prompts, the algorithm optimizes the attack path to maximize harmful output while minimizing the number of queries.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
