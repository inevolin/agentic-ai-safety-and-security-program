# Strategic Abstention Failure

**Promptfoo CVE ID:** `fe576fb6`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T23:49:07.849Z  
**Source paper:** [Are LLM Decisions Faithful to Verbal Confidence?](https://arxiv.org/abs/2601.07767)  
**Tags:** `model-layer`, `prompt-layer`, `hallucination`, `agent`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, GPT-5, Llama 4, Gemini 2, DeepSeek-V3, Qwen 2.5, Gemma

## Description

A "risk-invariance" vulnerability exists in Large Language Models (LLMs) wherein the model's decision-making policy is functionally decoupled from its verbalized confidence and externally defined error penalties. Despite generating calibrated confidence estimates (internal epistemic uncertainty), affected models fail to adjust their abstention thresholds when presented with high-penalty incentives (e.g., negative utility for incorrect answers). This results in "utility collapse," where models persist in providing low-confidence answers in high-risk scenarios, ignoring system prompts explicitly instructing them to abstain to avoid penalties. This behavior demonstrates a failure of strategic agency, rendering standard prompt-based risk controls ineffective.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
