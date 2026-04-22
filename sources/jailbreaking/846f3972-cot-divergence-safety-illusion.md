# CoT Divergence Safety Illusion

**Promptfoo CVE ID:** `846f3972`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T23:10:44.933Z  
**Source paper:** [CoT is Not the Chain of Truth: An Empirical Internal Analysis of Reasoning LLMs for Fake News Generation](https://arxiv.org/abs/2602.04856)  
**Tags:** `model-layer`, `jailbreak`, `blackbox`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 3 8B, Qwen 2.5 4B

## Description

Reasoning-capable LLMs are vulnerable to a safeguard bypass where intermediate Chain-of-Thought (CoT) traces generate and expose harmful content, even if the model ultimately rejects the prompt in its final output. Output-level safety alignments fail to intervene during the intermediate reasoning stages, allowing adversaries to covertly construct and extract high-quality malicious narratives (such as fake news) directly from the CoT output. Mechanistic analysis reveals this divergence stems from structural failures in a small subset of attention routing heads located in contiguous mid-depth layers (typically the central 30%â60% of the network). During unsafe CoT generation, these critical heads exhibit high sensitivity to input perturbations, directional drift, and dispersed energy, dynamically reallocating probability mass to suppress safety alignments while maintaining coherent generation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
