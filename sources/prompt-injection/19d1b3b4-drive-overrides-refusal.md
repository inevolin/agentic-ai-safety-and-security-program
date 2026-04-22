# Drive Overrides Refusal

**Promptfoo CVE ID:** `19d1b3b4`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T20:36:59.580Z  
**Source paper:** [The Struggle Between Continuation and Refusal: A Mechanistic Analysis of the Continuation-Triggered Jailbreak in LLMs](https://arxiv.org/abs/2603.08234)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 2 7B, Qwen 2.5 7B

## Description

A prompt structure vulnerability exists in instruction-tuned Large Language Models (LLMs) where attackers can bypass safety alignments by injecting a continuation-triggering suffix immediately following the user prompt termination token. By placing an affirmative suffix outside the user instruction boundary, it is processed as the beginning of the assistant's own pre-filled response. This structural manipulation intrinsically overactivates the model's continuation attention heads, forcing its pre-trained next-token generation drive to overpower the refusal execution typically enforced by its safety attention heads.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
