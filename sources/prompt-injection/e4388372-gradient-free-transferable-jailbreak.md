# Gradient-Free Transferable Jailbreak

**Promptfoo CVE ID:** `e4388372`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-20T23:31:42.998Z  
**Source paper:** [Jailbreaking LLMs Without Gradients or Priors: Effective and Transferable Attacks](https://arxiv.org/abs/2601.03420)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4, Llama 2 7B, Llama 3 8B, Gemini 1.5, Vicuna 7B

## Description

Large Language Models (LLMs) are vulnerable to a gray-box adversarial attack method known as RAILS (RAndom Iterative Local Search). This vulnerability allows an attacker with access to model output logits (but without access to gradients or weights) to optimize discrete adversarial suffixes that bypass safety alignment. The attack employs a random local search guided by a hybrid loss function combining Teacher-Forcing and a novel Auto-Regressive loss that enforces exact target prefix matching. The methodology utilizes a history-based candidate selection strategy to bridge the gap between the proxy optimization objective and true attack success. Furthermore, the attack exploits a cross-tokenizer ensemble optimization technique, decoupling perturbation generation from loss computation, which allows the discovery of universal adversarial patterns that function across disjoint vocabularies. This enables high-success transfer attacks against closed-source, black-box systems.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
