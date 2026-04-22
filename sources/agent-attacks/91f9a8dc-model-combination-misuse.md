# Model Combination Misuse

**Promptfoo CVE ID:** `91f9a8dc`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-06-01  
**Analyzed:** 2025-01-26T18:18:29.058Z  
**Source paper:** [Adversaries can misuse combinations of safe models](https://arxiv.org/abs/2406.14595)  
**Tags:** `application-layer`, `jailbreak`, `extraction`, `chain`, `data-security`, `safety`, `integrity`, `agent`  
**Affected models (as reported):** Claude 3 Haiku, Claude 3 Opus, Claude 3 Sonnet, DALL-E 3, GPT-4, Llama 2 13B Chat, Llama 2 70B Chat, Llama 2 7B Chat, Mistral 7B, Mixtral 8x7B, Stable Diffusion v1.5

## Description

LLMs, even when individually assessed as "safe," can be combined by an adversary to achieve malicious outcomes.  This vulnerability exploits the complementary strengths of multiple modelsâa high-capability model that refuses malicious requests and a low-capability model that does notâthrough task decomposition. Adversaries can either manually decompose tasks into benign (solved by the high-capability model) and easily-malicious subtasks (solved by the low-capability model) or automate the decomposition process using the weaker model to generate benign subtasks for the stronger model and then utilizing the solutions in-context to achieve the malicious goal.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
