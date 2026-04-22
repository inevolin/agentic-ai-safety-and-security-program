# Discrete Token Subversion

**Promptfoo CVE ID:** `bb3fdadb`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T04:27:16.172Z  
**Source paper:** [On the Adversarial Robustness of Discrete Image Tokenizers](https://arxiv.org/abs/2602.18252)  
**Tags:** `model-layer`, `jailbreak`, `vision`, `multimodal`, `embedding`, `fine-tuning`, `whitebox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** Llama 2 7B

## Description

Discrete image tokenizers are vulnerable to unsupervised embedding-space adversarial attacks. Attackers can apply $\ell_p$-bounded perturbations to an input image to maximize the $\ell_2$ distance of the pre-quantization continuous embeddings produced by the tokenizer's vision encoder. This forces the vector quantizer to cross discrete cell boundaries and assign incorrect codebook vectors, fundamentally altering the resulting token sequence. Because the attack targets the pre-quantization continuous latent space, it is entirely task-agnostic and fully bypasses the non-differentiable quantization step. This allows attackers to corrupt or explicitly control the downstream representations of any system using the tokenizer without needing access to the downstream model's parameters, labels, or task-specific loss functions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
