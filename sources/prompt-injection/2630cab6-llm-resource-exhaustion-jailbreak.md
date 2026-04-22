# LLM Resource Exhaustion Jailbreak

**Promptfoo CVE ID:** `2630cab6`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T03:54:04.381Z  
**Source paper:** [Harnessing Task Overload for Scalable Jailbreak Attacks on Large Language Models](https://arxiv.org/abs/2410.04190)  
**Tags:** `prompt-layer`, `jailbreak`, `denial-of-service`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** Llama 2, Llama 3 8B, Mistral 7B, Qwen 2.5 14B, Qwen 2.5 32B, Qwen 2.5 7B, Qwen2.5-3B, Qwen2.5-72B, Vicuna7B-v0.3

## Description

Large Language Models (LLMs) are vulnerable to a novel jailbreak attack that exploits resource limitations. By overloading the model with a computationally intensive preliminary task (e.g., a complex character map lookup and decoding), the attacker prevents the activation of the LLM's safety mechanisms, enabling the generation of unsafe outputs from subsequent prompts. The attack's strength is scalable and adjustable by modifying the complexity of the preliminary task.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
