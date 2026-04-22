# Universal Transferable LLM Jailbreak

**Promptfoo CVE ID:** `4ca663a8`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-12-09T02:53:12.801Z  
**Source paper:** [Universal and Transferable Adversarial Attack on Large Language Models Using Exponentiated Gradient Descent](https://arxiv.org/abs/2508.14853)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `embedding`, `whitebox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4o, Llama 2 7B, Mistral 7B, Falcon 7B, Vicuna 7B

## Description

Large Language Models (LLMs), including Llama 2, Mistral, and Vicuna, are susceptible to a white-box adversarial attack that circumvents safety alignment mechanisms (such as RLHF). The vulnerability exists due to the models' susceptibility to intrinsic optimization of adversarial suffixes using Exponentiated Gradient Descent (EGD). Unlike previous methods that rely on inefficient discrete token searches (e.g., Greedy Coordinate Gradient) or standard projected gradient descent, this attack optimizes relaxed one-hot encodings of adversarial tokens. The method enforces constraints within the probability simplex inherently during the optimization process via EGD and Bregman projection, augmented by the Adam optimizer and entropic/KL-divergence regularization. This results in the generation of "universal" adversarial suffixes that are transferable across different model architectures, including proprietary models like GPT-3.5, effectively inducing the generation of harmful, unethical, or illegal content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
