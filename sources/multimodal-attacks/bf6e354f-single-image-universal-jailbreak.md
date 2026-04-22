# Single Image Universal Jailbreak

**Promptfoo CVE ID:** `bf6e354f`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-12-09T02:27:47.266Z  
**Source paper:** [Universal Adversarial Attack on Aligned Multimodal LLMs](https://arxiv.org/abs/2502.07987)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `vision`, `multimodal`, `embedding`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Llama 3.2 11B, Qwen 2 2B, LLaVA 7B, Phi-3

## Description

Multimodal Large Language Models (MLLMs) are vulnerable to a universal adversarial attack where a single, optimized image can bypass safety alignment mechanisms across diverse textual queries. By employing gradient-based optimization on the input image pixels while propagating gradients through the vision encoder and language model, an attacker can craft a visual perturbation that coerces the model into a compliant state. When this adversarial image is present in the context, the modelâs refusal mechanism is overridden, forcing it to generate a target affirmative phrase (e.g., "Sure, here it is") followed by the fulfillment of the user's prompt, regardless of whether the prompt is harmful, illegal, or otherwise prohibited. This attack exhibits cross-model transferability, allowing an image optimized on one set of architectures to successfully compromise unseen models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
