# Weight Tampering Unlearning Bypass

**Promptfoo CVE ID:** `65b330f5`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-12-09T03:38:12.068Z  
**Source paper:** [Model tampering attacks enable more rigorous evaluations of llm capabilities](https://arxiv.org/abs/2502.05209)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `extraction`, `fine-tuning`, `embedding`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 3 8B

## Description

State-of-the-art machine unlearning and safety fine-tuning methods for Large Language Models (LLMs) fail to robustly remove hazardous capabilities or refusal mechanisms from model weights. While these methods suppress model outputs during standard input-output interactions, the underlying capabilities remain latent in the parameter space. An attacker with access to model weights (e.g., via open releases or leaked weights) can restore "unlearned" knowledge (such as dual-use biology hazards) or bypass refusal training (jailbreaking) using low-resource "model tampering" attacks. Specifically, few-shot fine-tuning, parameter pruning, and latent activation manipulation can recover suppressed capabilities with high efficacy, often outperforming standard input-space adversarial attacks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
