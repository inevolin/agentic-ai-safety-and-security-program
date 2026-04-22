# Reinforcement Learning Jailbreak

**Promptfoo CVE ID:** `13f632cf`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-09-01  
**Analyzed:** 2024-12-28T23:30:42.055Z  
**Source paper:** [PathSeeker: Exploring LLM Security Vulnerabilities with a Reinforcement Learning-Based Jailbreak Approach](https://arxiv.org/abs/2409.14177)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** Claude 3.5 Sonnet, DeepSeek Chat, Deepseek-coder, Gemini 1.5 Flash, Gemma2-8B-instruct, Glm-4-air, GPT-3.5 Turbo, GPT-4o Mini, Llama 2 13B Chat, Llama 2 7B Chat, Llama 3 70B, Llama 3.1 405B, Llama 3.1 70B, Llama 3.1 8B, Mistral Nemo, Qwen 2 7B Instruct, Vicuna 7B

## Description

PathSeeker demonstrates a novel black-box jailbreak attack against Large Language Models (LLMs) that utilizes multi-agent reinforcement learning. The attack iteratively modifies input prompts based on model responses, leveraging a reward mechanism focused on vocabulary expansion in the LLM's output to circumvent safety mechanisms and elicit harmful responses. This technique bypasses existing safety filters by encouraging the model to relax its constraints, rather than directly targeting specific keywords or phrases.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
