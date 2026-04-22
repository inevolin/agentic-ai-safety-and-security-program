# Universal Suffix Attention Hijack

**Promptfoo CVE ID:** `11540188`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-12-30T18:48:18.917Z  
**Source paper:** [Universal Jailbreak Suffixes Are Strong Attention Hijackers](https://arxiv.org/abs/2506.12880)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 3.1 8B, Qwen 2.5 5B, Gemma 2 2B

## Description

Large Language Models (LLMs), specifically Transformer-based architectures, are vulnerable to an attention hijacking attack via optimized adversarial suffixes. The vulnerability resides in the shallow information flow mechanism of the attention layer, where specific token sequences (adversarial suffixes) can exert irregular and extreme dominance over the internal representation of the final chat template tokens immediately preceding generation. This "hijacking" suppresses the representation of the harmful instruction and safety alignment prompts within the model's residual stream, effectively bypassing safety guardrails. Attackers can exploit this by optimizing suffixes to maximize attention scores from the suffix to the chat template tokens (using the GCG-Hij method), resulting in highly universal jailbreaks that generalize across diverse harmful instructions without additional computational overhead.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
