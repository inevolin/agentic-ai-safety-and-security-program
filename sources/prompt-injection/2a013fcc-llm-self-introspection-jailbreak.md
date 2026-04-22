# LLM Self-Introspection Jailbreak

**Promptfoo CVE ID:** `2a013fcc`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:22:23.012Z  
**Source paper:** [JULI: Jailbreak Large Language Models by Self-Introspection](https://arxiv.org/abs/2505.11790)  
**Tags:** `jailbreak`, `blackbox`, `prompt-layer`, `model-layer`, `api`, `safety`, `integrity`  
**Affected models (as reported):** Llama 2 7B Chat, Llama 3 8B, Llama 3 8B Instruct, Mistral 7B, Qwen 2 1.5B Instruct, Qwen 2.5 1.5B Instruct

## Description

A vulnerability exists in Large Language Models (LLMs) that allows attackers to manipulate the model's output by modifying token log probabilities.  Attackers can use a lightweight plug-in model (BiasNet) to subtly alter the probabilities, steering the LLM toward generating harmful content even when safety mechanisms are in place. This attack requires only access to the top-k token log probabilities returned by the LLM's API, without needing model weights or internal access.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
