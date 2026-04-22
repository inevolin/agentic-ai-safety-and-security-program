# Targeted Bit-Flip Jailbreak

**Promptfoo CVE ID:** `f2ab1b94`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-12-01  
**Analyzed:** 2025-02-02T20:38:43.289Z  
**Source paper:** [PrisonBreak: Jailbreaking Large Language Models with Fewer Than Twenty-Five Targeted Bit-flips](https://arxiv.org/abs/2412.07192)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `side-channel`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** Llama 2 13B, Llama 2 7B, Llama 3 8B, Qwen 2 1.5B, Qwen 2 7B, Vicuna 13B, Vicuna 7B

## Description

A vulnerability exists in large language models (LLMs) where targeted bitwise corruptions in model parameters can induce a "jailbroken" state, causing the model to generate harmful responses without input modification.  Fewer than 25 bit-flips are sufficient to achieve this in many cases.  The vulnerability stems from the susceptibility of the model's memory representation to fault injection attacks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
