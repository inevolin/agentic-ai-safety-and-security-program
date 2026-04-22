# Distractor Inverse Scaling

**Promptfoo CVE ID:** `eda6cf4d`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T17:44:50.159Z  
**Source paper:** [Lost in the Noise: How Reasoning Models Fail with Contextual Distractors](https://arxiv.org/abs/2601.07226)  
**Tags:** `prompt-layer`, `application-layer`, `hallucination`, `jailbreak`, `rag`, `agent`, `chain`, `reliability`, `safety`  
**Affected models (as reported):** GPT-4o 120B, Gemini 2, DeepSeek-R1, Qwen 2.5 6B

## Description

Reasoning-capable Large Language Models (LLMs) and agentic AI systems exhibit a critical vulnerability to contextual distractors, resulting in catastrophic performance degradation (up to 80% drop in accuracy) and emergent misalignment. When the input context contains noiseâspecifically random documents, irrelevant chat history, or task-specific "hard negative" distractorsâthe models fail to filter this information. Instead of ignoring the noise, the models disproportionately attend to distractor tokens, incorporating false premises into their Chain of Thought (CoT). This vulnerability is particularly acute in agentic workflows where models over-trust tool outputs (e.g., noisy retrieval results). Furthermore, the vulnerability follows an "inverse scaling" trend: increased test-time computation (longer reasoning trajectories) correlates with lower accuracy, as the model expends tokens reasoning about irrelevant information.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
