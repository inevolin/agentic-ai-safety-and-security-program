# MoE Expert Lobotomy

**Promptfoo CVE ID:** `33d52449`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T22:29:47.910Z  
**Source paper:** [Large Language Lobotomy: Jailbreaking Mixture-of-Experts via Expert Silencing](https://arxiv.org/abs/2602.08741)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** Mixtral 8x7B 8X7B, Phi-3

## Description

Mixture-of-Experts (MoE) Large Language Models localize safety alignment (e.g., refusal mechanisms) within a sparse subset of experts rather than distributing it uniformly across the network. An adversary with white-box inference access can exploit this architectural bottleneck by identifying and adaptively silencing these specific "safety experts". By setting the router logits of the targeted experts to negative infinity prior to softmax normalization, the adversary forces the router to redistribute probability mass to non-safety experts, entirely bypassing refusal pathways. This training-free attack, termed Large Language Lobotomy (L3), eliminates safety constraints while largely preserving general language utility, as it typically requires silencing fewer than 20% of layer-wise experts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
