# Confident Persuasion Override

**Promptfoo CVE ID:** `492d29ec`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-04-01  
**Analyzed:** 2026-01-14T14:57:56.974Z  
**Source paper:** [When persuasion overrides truth in multi-agent llm debates: Introducing a confidence-weighted persuasion override rate (cw-por)](https://arxiv.org/abs/2504.00374)  
**Tags:** `model-layer`, `prompt-layer`, `hallucination`, `agent`, `whitebox`, `integrity`, `reliability`, `safety`  
**Affected models (as reported):** Llama 3.2 3B, Mistral 7B, Qwen 2.5 14B, Phi-4 14B

## Description

A vulnerability exists in Large Language Model (LLM) decision-making capabilities described as "Rhetorical Persuasion Override." When an LLM is deployed as a judge or evaluator in a single-turn, multi-agent debate framework, it systematically fails to distinguish factual truth from confidently presented misinformation. An adversarial agent can coerce the evaluator into endorsing a known falsehood from the TruthfulQA dataset by employing specific rhetorical strategiesânamely, high confidence, emotional appeals, and lack of uncertaintyâcoupled with extreme verbosity settings (either <60 words or >200 words). This vulnerability results in the judge not only selecting the incorrect answer but doing so with high self-reported confidence, effectively bypassing confidence-based filtration mechanisms. This affects systems relying on LLMs for automated fact-checking, content moderation, and information aggregation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
