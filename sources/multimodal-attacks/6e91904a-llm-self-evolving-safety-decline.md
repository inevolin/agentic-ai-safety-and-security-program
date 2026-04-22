# LLM Self-Evolving Safety Decline

**Promptfoo CVE ID:** `6e91904a`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-12-30T19:17:54.088Z  
**Source paper:** [SafeEvalAgent: Toward Agentic and Self-Evolving Safety Evaluation of LLMs](https://arxiv.org/abs/2509.26100)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `agent`, `safety`, `data-privacy`  
**Affected models (as reported):** GPT-5, Llama 4, Gemini 2, DeepSeek-V3

## Description

Large Language Models (LLMs), including proprietary and open-weight state-of-the-art systems, are vulnerable to automated, self-evolving adversarial attacks orchestrated by multi-agent frameworks. The vulnerability exists because current safety alignment strategies (RLHF, static safety filters) fail to generalize against the "SafeEvalAgent" attack vector. In this vector, an "Analyst" agent analyzes model refusals to iteratively refine attack strategies, while a "Specialist" agent grounds these attacks in unstructured regulatory texts (e.g., EU AI Act, NIST AI RMF). This results in a "Self-evolving Evaluation loop" where safety compliance degrades significantly over successive iterations (e.g., GPT-5 compliance dropping from 72.50% to 36.36%). The flaw allows attackers to bypass safety guardrails by transforming abstract legal prohibitions into concrete, localized, and increasingly sophisticated jailbreak prompts (e.g., persona-play, ethical dilemmas, multimodal grounding) that static benchmarks do not cover.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
