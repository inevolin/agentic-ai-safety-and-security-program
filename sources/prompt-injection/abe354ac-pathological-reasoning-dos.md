# Pathological Reasoning DoS

**Promptfoo CVE ID:** `abe354ac`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T04:44:12.054Z  
**Source paper:** [ReasoningBomb: A Stealthy Denial-of-Service Attack by Inducing Pathologically Long Reasoning in Large Reasoning Models](https://arxiv.org/abs/2602.00154)  
**Tags:** `model-layer`, `prompt-layer`, `denial-of-service`, `blackbox`, `reliability`  
**Affected models (as reported):** GPT-5, Claude 4.5, Gemini 2, DeepSeek-R1, DeepSeek-V3, Qwen 2.5 30B

## Description

A vulnerability in Large Reasoning Models (LRMs) allows attackers to perform Prompt-Induced Inference-Time Denial-of-Service (PI-DoS) attacks by submitting short, semantically coherent adversarial prompts. These prompts, which often take the form of complex logic puzzles with nested dependencies or contradictory constraints, exploit the adaptive computation mechanism of LRMs to force the model into pathologically long, nearly non-terminating intermediate reasoning traces (e.g., generating massive amounts of `<think>` tokens). Because the prompts are natural language and semantically meaningful, they successfully evade standard perplexity filters and LLM-as-judge detectors. This results in an extreme input-to-output amplification ratio (averaging over 286x), forcing the host infrastructure to expend disproportionate GPU compute and memory on the autoregressive decoding phase.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
