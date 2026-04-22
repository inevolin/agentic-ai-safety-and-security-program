# Diffusion LLM Direct Jailbreaking

**Promptfoo CVE ID:** `f6c63623`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-11-20T15:44:22.505Z  
**Source paper:** [Diffusion LLMs are Natural Adversaries for any LLM](https://arxiv.org/abs/2511.00203)  
**Tags:** `model-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** Gemma 3 1B, GPT-5, Llada-8B Base, Llama 3 8B, Llama 3 8B Instruct, Phi 4 Mini, Qwen 2.5 7B, Vicuna 13B v1.5

## Description

A vulnerability exists where non-autoregressive Diffusion Language Models (DLLMs) can be leveraged to generate highly effective and transferable adversarial prompts against autoregressive LLMs. The technique, named INPAINTING, reframes the resource-intensive search for adversarial prompts into an efficient, amortized inference task. By providing a desired harmful or restricted response to a DLLM, the model can conditionally generate a corresponding low-perplexity prompt that elicits that response from a wide range of target models. The generated prompts often reframe the malicious request into a benign-appearing context (e.g., asking for an example of harmful content for educational purposes), making them difficult to detect via standard perplexity filters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
