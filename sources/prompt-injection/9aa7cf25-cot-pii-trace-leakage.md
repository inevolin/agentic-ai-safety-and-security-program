# CoT PII Trace Leakage

**Promptfoo CVE ID:** `9aa7cf25`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T22:15:09.635Z  
**Source paper:** [Safer Reasoning Traces: Measuring and Mitigating Chain-of-Thought Leakage in LLMs](https://arxiv.org/abs/2603.05618)  
**Tags:** `prompt-layer`, `extraction`, `blackbox`, `data-privacy`  
**Affected models (as reported):** Claude 4, o3, Llama 3.3 70B, DeepSeek-R1 70B, Qwen 2.5 32B, Mixtral 8x22B 8X22B, o4-mini

## Description

Inference-time Personally Identifiable Information (PII) leakage is significantly amplified when using Chain-of-Thought (CoT) prompting or reasoning-enabled Large Language Models (LLMs). When an attacker or user elicits step-by-step reasoning or utilizes models with native "thinking" token budgets, sensitive context data provided in the prompt is directly resurfaced into intermediate reasoning steps or the final output. This bypasses output-level privacy policies instructing the model not to restate PII, increasing average token-level leakage by 34 percentage points (from 52.3% to 86.3%) compared to standard prompting.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
