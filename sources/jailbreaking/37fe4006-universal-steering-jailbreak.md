# Universal Steering Jailbreak

**Promptfoo CVE ID:** `37fe4006`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-12-09T01:46:16.420Z  
**Source paper:** [The Rogue Scalpel: Activation Steering Compromises LLM Safety](https://arxiv.org/abs/2509.22067)  
**Tags:** `model-layer`, `jailbreak`, `safety`, `api`  
**Affected models (as reported):** Llama 3 8B, Llama 3.1 8B, Qwen 2.5 7B, Falcon 7B

## Description

A vulnerability exists in the alignment mechanisms of Large Language Models (LLMs) where activation steeringâthe process of injecting vectors into hidden states during inferenceâcan systematically bypass refusal safeguards. By modifying the residual stream activations at intermediate layers (typically $\lfloor L/2 \rfloor$) using the formula $\overline{\mathbf{x}}_{i}^{(l)}=\mathbf{x}_{i}^{(l)}+\alpha\mathbf{v}$, an attacker can force the model to comply with harmful requests. Research demonstrates that this vulnerability is triggered not only by adversarial vectors but also by random Gaussian noise and, significantly, by benign Sparse Autoencoder (SAE) features (e.g., features representing "brand identity" or "technical implementations"). Furthermore, aggregating multiple weak, prompt-specific random steering vectors into a single "universal" vector allows for zero-shot, black-box jailbreaking across a wide range of harmful queries without requiring model weights or gradients.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
