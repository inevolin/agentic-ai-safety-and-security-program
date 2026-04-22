# Alignment-Based LLM Jailbreak

**Promptfoo CVE ID:** `69d473a8`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-12-01  
**Analyzed:** 2025-01-26T18:23:11.511Z  
**Source paper:** [LIAR: Leveraging Alignment (Best-of-N) to Jailbreak LLMs in Seconds](https://arxiv.org/abs/2412.05232)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** Falcon 7B, GPT-2, Llama 2, Llama 3, Llama 3.1 8B, Megatron 345M, Mistral 7B, Pythia 12B, TinyLlama 1.1B, Vicuna 13B, Vicuna 7B

## Description

Large Language Models (LLMs) employing reinforcement learning from human feedback (RLHF) for safety alignment are vulnerable to a novel "alignment-based" jailbreak attack.  This attack leverages a best-of-N sampling approach with an adversarial LLM to efficiently generate prompts that bypass safety mechanisms and elicit unsafe responses from the target LLM, without requiring additional training or access to the target LLM's internal parameters. The attack exploits the inherent tension between safety and unsafe reward signals, effectively misaligning the model via alignment techniques.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
