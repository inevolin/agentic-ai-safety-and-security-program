# Multi-Image Semantic Reconstruction

**Promptfoo CVE ID:** `53603418`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-03-08T21:57:48.837Z  
**Source paper:** [MIDAS: Multi-Image Dispersion and Semantic Reconstruction for Jailbreaking MLLMs](https://arxiv.org/abs/2603.00565)  
**Tags:** `prompt-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-5, DeepSeek-R1, Qwen 2.5

## Description

A vulnerability in Multimodal Large Language Models (MLLMs) allows attackers to bypass safety alignments via Multi-Image Dispersion and Semantic Reconstruction (MIDAS). Attackers decompose malicious instructions into risk-bearing semantic subunits, fragment them, and distribute them across multiple benign-looking Game-style Visual Reasoning (GVR) puzzles (e.g., Letter Equations, Rank-and-Read, Odd-One-Out). A sanitized, persona-driven textual prompt with sequential placeholders is then used to force the MLLM to decode the visual puzzles and reconstruct the harmful intent internally. By shifting the malicious semantics from the input surface to a late-stage reasoning and reconstruction phase, the attack exploits "autoregressive inertia" and "attention slipping." This multi-image late-fusion technique successfully evades static input-level safety filters (such as LlamaGuard and ShieldLM) and intrinsic model alignments.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
