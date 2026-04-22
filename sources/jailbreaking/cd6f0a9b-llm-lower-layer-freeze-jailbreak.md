# LLM Lower Layer Freeze Jailbreak

**Promptfoo CVE ID:** `cd6f0a9b`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-19T19:31:41.406Z  
**Source paper:** [Efficient Jailbreaking of Large Models by Freeze Training: Lower Layers Exhibit Greater Sensitivity to Harmful Content](https://arxiv.org/abs/2502.20952)  
**Tags:** `model-layer`, `jailbreak`, `fine-tuning`, `blackbox`, `whitebox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** Baichuan 2, Baichuan 2 7B Chat, DeepSeek R1, GLM 4, GLM 4 9B Chat, Llama 3.1, Llama 3.1 8B Instruct, Mistral, Mistral 8B Instruct, Qwen 2.5, Qwen 2.5 7B Instruct

## Description

A vulnerability exists in Large Language Models (LLMs) that allows for efficient jailbreaking by selectively fine-tuning only the lower layers of the model with a toxic dataset. This "Freeze Training" method, as described in the research paper, concentrates the fine-tuning on layers identified as being highly sensitive to the generation of harmful content. This approach significantly reduces training duration and GPU memory consumption while maintaining a high jailbreak success rate.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
