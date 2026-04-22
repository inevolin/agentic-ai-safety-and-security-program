# Malicious Intent Bypass

**Promptfoo CVE ID:** `97129261`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-12-09T01:52:38.628Z  
**Source paper:** [Intentionreasoner: Facilitating adaptive llm safeguards through intent reasoning and selective query refinement](https://arxiv.org/abs/2508.20151)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `whitebox`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, Llama 3.1 8B, DeepSeek-V3, Qwen 2.5 5B

## Description

IntentionReasoner, specifically the 1.5B and 3B parameter versions optimized via Reinforcement Learning (RL), contains a safety regression vulnerability where the RL alignment process degrades the model's resistance to jailbreak attacks compared to the Supervised Fine-Tuning (SFT) baseline. While RL improves general utility and rewriting quality, it inadvertently increases the Attack Success Rate (ASR) for adversarial inputs in smaller architectures. This allows sophisticated jailbreak prompts (e.g., GCG, AutoDAN, PAIR) to bypass the intent reasoning mechanism. The vulnerability manifests when the guard model fails to classify a malicious query as "Completely Harmful" (CH) or generates a "refined" query that retains the harmful intent, effectively proxying the attack to the downstream Large Language Model (LLM).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
