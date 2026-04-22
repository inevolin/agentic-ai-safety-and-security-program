# MoE Unsafe Route Activation

**Promptfoo CVE ID:** `5c6419a9`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T23:37:37.315Z  
**Source paper:** [Sparse Models, Sparse Safety: Unsafe Routes in Mixture-of-Experts LLMs](https://arxiv.org/abs/2602.08621)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** DeepSeek-V2, Qwen 2.5 7B, Mixtral 8x7B 8X7B

## Description

Mixture-of-Experts (MoE) Large Language Models are vulnerable to a structural safety bypass attack via the manipulation of expert routing mechanisms at inference time. Attackers with white-box access to per-layer routing scores can apply token- and layer-specific masks ($\Phi \in \{0, -\infty\}^K$) to alter the Top-$k$ expert selection process. By forcing the model to process inputs through specific, poorly-aligned experts ("unsafe routes") and avoiding safety-critical experts, attackers can substantially increase the log-likelihood of affirmative, harmful generations without modifying the model's parameters or training data.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
