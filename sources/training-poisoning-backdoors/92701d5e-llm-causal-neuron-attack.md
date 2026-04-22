# LLM Causal Neuron Attack

**Promptfoo CVE ID:** `92701d5e`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2023-12-01  
**Analyzed:** 2024-12-28T18:37:29.313Z  
**Source paper:** [Causality analysis for evaluating the security of large language models](https://arxiv.org/abs/2312.07876)  
**Tags:** `model-layer`, `jailbreak`, `extraction`, `injection`, `poisoning`, `side-channel`, `whitebox`, `blackbox`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-NeoX, Guanaco, Llama 2-13B-chat-hf, Llama 2-7B-chat-hf, Vicuna-13B Version 1.5

## Description

Large Language Models (LLMs) such as Llama 2 and Vicuna exhibit a vulnerability where specific layers (e.g., layer 3 in Llama2-13B, layer 1 in Llama2-7B and Vicuna-13B) overfit to harmful prompts, resulting in a disproportionate influence on the model's output for such prompts. This overfitting creates a narrow "safety" mechanism easily bypassed by adversarial prompts designed to avoid triggering these specific layers. Additionally, a single neuron (e.g., neuron 2100 in Llama2 and Vicuna) exhibits an unusually high causal effect on the model output, allowing for targeted attacks that render the LLM non-functional.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
