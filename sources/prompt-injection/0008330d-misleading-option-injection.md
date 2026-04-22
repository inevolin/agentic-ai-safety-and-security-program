# Misleading Option Injection

**Promptfoo CVE ID:** `0008330d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T23:25:09.322Z  
**Source paper:** [OI-Bench: An Option Injection Benchmark for Evaluating LLM Susceptibility to Directive Interference](https://arxiv.org/abs/2601.13300)  
**Tags:** `prompt-layer`, `injection`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4o 120B, GPT-5, Claude 4.5, Llama 4, Gemini 2, DeepSeek-R1, DeepSeek-V3, Qwen 2.5 8B

## Description

Large Language Models (LLMs) deployed using Multiple-Choice Question Answering (MCQA) interfaces or choice-based selection structures are vulnerable to Option Injection. By appending a task-irrelevant candidate choice (e.g., Option E) containing a steering directiveâspecifically utilizing threat framing (penalty coercion) or bonus framing (reward inducement)âan attacker can hijack the model's decision-making process. The vulnerability stems from a flaw in attention allocation: the model's deep-layer attention heads disproportionately prioritize the injected directive over the actual task semantics, forcing the model to select the adversarial option regardless of its factual correctness. Susceptibility to the attack increases substantially when the injected option is permuted to earlier positions (e.g., swapping Option E into the Option A position).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
