# Reward Misspecification Jailbreak

**Promptfoo CVE ID:** `69ab3929`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-29T04:14:43.861Z  
**Source paper:** [Jailbreaking as a Reward Misspecification Problem](https://arxiv.org/abs/2406.14393)  
**Tags:** `model-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, GPT-4o, Llama 2 7B Chat, Llama 3 8B Instruct, Mistral 7B Instruct, Vicuna 13B v1.5, Vicuna 7B v1.5

## Description

Large Language Models (LLMs) trained with reinforcement learning from human feedback (RLHF) are vulnerable to jailbreaking attacks due to reward misspecification. The reward function used during alignment fails to accurately rank the quality of responses, particularly for adversarial prompts designed to elicit undesired behavior. This allows attackers to craft prompts that yield harmful outputs despite the model's intended safety constraints. The vulnerability manifests as a gap between the implicit reward assigned to safe and harmful responses, allowing attackers to exploit this misspecification to bypass safety mechanisms.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
