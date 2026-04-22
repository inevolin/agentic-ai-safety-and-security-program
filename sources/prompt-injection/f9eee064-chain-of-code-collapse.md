# Chain-of-Code Collapse

**Promptfoo CVE ID:** `f9eee064`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-12-30T20:04:50.300Z  
**Source paper:** [Break-The-Chain: Reasoning Failures in LLMs via Adversarial Prompting in Code Generation](https://arxiv.org/abs/2506.06971)  
**Tags:** `prompt-layer`, `model-layer`, `injection`, `jailbreak`, `blackbox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** Claude 3, Claude 3.7, Llama 3.1 8B, Gemini 2, DeepSeek-R1 7B, Qwen 2.5

## Description

Large Language Models (LLMs) utilized for code generation exhibit a vulnerability termed "Chain-of-Code Collapse" (CoCC), where the models fail to generate correct code when presented with semantically faithful but adversarially structured prompts. By applying transformations such as domain shifting (renaming variables/contexts), adding distracting constraints (irrelevant but plausible rules), or inverting objectives (negation), an attacker can cause the model to produce functionally incorrect code, omit required logic, or revert to memorized solution templates that contradict the prompt. This vulnerability stems from the model's reliance on surface-level statistical patterns rather than robust logical reasoning, allowing benign linguistic changes to degrade performance by up to 68% in models like Claude-3.7-Sonnet and Gemini-2.5-Flash.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
