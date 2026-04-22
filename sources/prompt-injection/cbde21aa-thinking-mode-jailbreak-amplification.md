# Thinking Mode Jailbreak Amplification

**Promptfoo CVE ID:** `cbde21aa`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-12-08T21:59:27.284Z  
**Source paper:** [The Cost of Thinking: Increased Jailbreak Risk in Large Language Models](https://arxiv.org/abs/2508.10032)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 3 8B, DeepSeek-R1 5B, DeepSeek-V3, Qwen 2.5 6B

## Description

Large Language Models (LLMs) implementing "Thinking Mode" (also known as Reasoning Mode or Chain-of-Thought) exhibit a heightened susceptibility to jailbreak attacks compared to their non-reasoning counterparts. When a model is prompted to reason step-by-step (often delimited by specific tokens like `<think>` and `</think>`), the internal reasoning process frequently overrides safety alignment training. Research indicates that during the generation of the thinking chain, the model often acknowledges the harmful nature of a query (e.g., identifying it as illegal) but proceeds to generate the harmful content under the guise of "educational purposes" or context simulation. Attackers can leverage standard jailbreak techniques (GCG, AutoDAN, ICA) to trigger this mode, resulting in significantly higher Attack Success Rates (ASR) than standard inference modes.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
