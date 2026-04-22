# Learned Universal Prompt Injection

**Promptfoo CVE ID:** `cb0a7769`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T21:25:03.470Z  
**Source paper:** [Learning to Inject: Automated Prompt Injection via Reinforcement Learning](https://arxiv.org/abs/2602.05746)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `agent`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4o, GPT-5, Claude 3.5, Claude 4.5, Gemini 2, Qwen 2.5 5B, Gemma 4B

## Description

Large Language Model (LLM) agents are vulnerable to automated prompt injection attacks generated via Reinforcement Learning (RL). The attack methodology, termed "AutoInject," utilizes Group Relative Policy Optimization (GRPO) combined with a comparison-based feedback mechanism to generate universal adversarial suffixes. Unlike traditional jailbreaks that optimize for generic affirmative responses (e.g., "Sure"), this vulnerability allows an attacker to optimize for specific, parameterized tool executions (e.g., "send email to attacker") while simultaneously maximizing the utility of the original user task. This dual-objective optimization results in attacks that bypass safety-tuned models (including Meta-SecAlign-70B) and transfer across different model families by mimicking valid instruction patterns, often without degrading the model's performance on the benign task, making the intrusion difficult to detect.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
