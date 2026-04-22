# Nonsensical CoT Reasoning

**Promptfoo CVE ID:** `c7725da4`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-30T20:46:15.492Z  
**Source paper:** [Misaligning Reasoning with Answers--A Framework for Assessing LLM CoT Robustness](https://arxiv.org/abs/2505.17406)  
**Tags:** `model-layer`, `prompt-layer`, `hallucination`, `embedding`, `whitebox`, `blackbox`, `chain`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, Llama 3 8B, Mistral 7B, DeepSeek-R1 7B, Qwen 2.5 7B

## Description

Large Language Models (LLMs) utilizing Chain-of-Thought (CoT) prompting are vulnerable to input perturbations that decouple intermediate reasoning from the final answer. An attacker can generate adversarial examples using gradient-based optimization (targeting specific loss functions that maximize reasoning divergence while minimizing answer loss) to induce "Right Answer, Wrong Reasoning" behaviors. This vulnerability manifests through two primary attack vectors:
1.  **Token-level perturbations:** Involves random token insertion followed by gradient-informed replacement to identify tokens that disrupt reasoning paths without altering semantic meaning enough to change the ground truth label.
2.  **Embedding-level perturbations:** Application of imperceptible $l_{\infty}$ noise to the input embedding space to shift internal representations.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
