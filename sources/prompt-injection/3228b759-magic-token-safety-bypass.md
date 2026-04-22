# Magic Token Safety Bypass

**Promptfoo CVE ID:** `3228b759`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-08-01  
**Analyzed:** 2026-02-21T20:57:32.211Z  
**Source paper:** [Efficient switchable safety control in llms via magic-token-guided co-training](https://arxiv.org/abs/2508.14904)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `fine-tuning`, `whitebox`, `safety`  
**Affected models (as reported):** DeepSeek-R1 671B, Qwen 2.5 32B

## Description

The Magic-Token-Guided Co-Training (MTC) framework for Large Language Models (LLMs) introduces a mechanism where distinct behavioral modes are activated via hardcoded system-level strings known as "magic tokens." A specific vulnerability exists in the implementation of the "negative" (`neg`) behavior mode, which is explicitly trained to generate unfiltered, risk-prone, and harmful content for internal red-teaming. The framework relies on the secrecy of the magic token (e.g., a random string like `8v4v5sa3`) to prevent access to this mode. If an attacker discovers or reverse-engineers this token (via weight inspection, brute-forcing, or prompt leakage), they can inject it into the system prompt to universally bypass safety alignment. This forces the model to ignore safety constraints and generate malicious content, effectively reverting the model to an unaligned state.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
