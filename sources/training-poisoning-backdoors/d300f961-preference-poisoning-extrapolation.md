# Preference Poisoning Extrapolation

**Promptfoo CVE ID:** `d300f961`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-10-01  
**Analyzed:** 2026-02-21T05:05:46.242Z  
**Source paper:** [Poisonbench: Assessing large language model vulnerability to data poisoning](https://arxiv.org/abs/2410.08811)  
**Tags:** `model-layer`, `poisoning`, `fine-tuning`, `integrity`, `safety`  
**Affected models (as reported):** Llama 2 7B, Llama 3 8B, Mistral 7B, Qwen 2 7B, Qwen 2.5 14B, Gemma 2 2B, Phi-3

## Description

Large Language Models (LLMs) undergoing alignment via preference learning (such as Reinforcement Learning from Human Feedback [RLHF] or Direct Preference Optimization [DPO]) are vulnerable to backdoor attacks through data poisoning. An attacker can inject a small percentage (e.g., 3% to 5%) of poisoned data into the preference dataset $\mathcal{D} = \{(x, y_w, y_l)\}$. The attack embeds a specific trigger string into the user query $x$.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
