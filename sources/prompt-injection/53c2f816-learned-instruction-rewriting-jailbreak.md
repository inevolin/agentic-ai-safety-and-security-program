# Learned Instruction Rewriting Jailbreak

**Promptfoo CVE ID:** `53c2f816`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:27:21.622Z  
**Source paper:** [Rewrite to Jailbreak: Discover Learnable and Transferable Implicit Harmfulness Instruction](https://arxiv.org/abs/2502.11084)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Gemini Pro, GPT-3.5 Turbo, Llama 2 7B Chat, Llama 3 8B

## Description

Large Language Models (LLMs) are vulnerable to "Rewrite to Jailbreak" (R2J) attacks.  R2J exploits the models' safety mechanisms by iteratively rewriting harmful prompts, subtly altering wording to bypass safety filters while maintaining the original malicious intent.  This differs from previous methods which rely on adding extraneous prefixes/suffixes or creating forced instruction-following scenarios, thus being more difficult to detect.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
