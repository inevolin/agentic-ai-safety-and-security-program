# End-of-Sentence MLP Jailbreak

**Promptfoo CVE ID:** `d66faa89`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T01:11:39.876Z  
**Source paper:** [Jailbreak Instruction-Tuned LLMs via end-of-sentence MLP Re-weighting](https://arxiv.org/abs/2410.10150)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** Gemma-2 27B, Gemma-2 2B, Llama 3 70B, Llama-3 8B, Qwen-2 72B, Qwen-2 7B, Yi-1.5 6B

## Description

Instruction-tuned Large Language Models (LLMs) are vulnerable to jailbreaks via the manipulation of Multi-Layer Perceptron (MLP) neuron weights in end-of-sentence inferences. By selectively re-weighting these neuron activations, an attacker can bypass the model's safety mechanisms and elicit harmful responses. The vulnerability is independent of the specific prompt and generalizable across various models, impacting both prompt-specific and prompt-general attacks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
