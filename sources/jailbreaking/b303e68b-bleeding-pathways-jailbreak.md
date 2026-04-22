# Bleeding Pathways Jailbreak

**Promptfoo CVE ID:** `b303e68b`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-03-01  
**Analyzed:** 2026-03-08T21:34:59.167Z  
**Source paper:** [Bleeding Pathways: Vanishing Discriminability in LLM Hidden States Fuels Jailbreak Attacks](https://arxiv.org/abs/2503.11185)  
**Tags:** `model-layer`, `jailbreak`, `fine-tuning`, `blackbox`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 2 7B, Llama 3 8B, Llama 3.2 1B, Mistral 7B, DeepSeek-R1 7B, Qwen 2.5 7B, Phi-4 14B

## Description

Autoregressive Large Language Models (LLMs) suffer from a dynamic discriminative degradation vulnerability during sequence generation. When processing complex or adversarial inputs, the model's internal capability to distinguish between benign and harmful token sequencesâmeasured by the linear separability of their hidden statesâprogressively diminishes as generation continues. If an attacker successfully bypasses the model's initial safety compliance judgment (early generation steps), the model loses its intrinsic capacity to recognize emerging harmful intent in mid-to-late generation steps. This "bleeding" of pathways allows attackers to force the LLM to output restricted, toxic, or dangerous content by initiating and sustaining a harmful response trajectory.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
