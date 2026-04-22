# Authority Citation Jailbreak

**Promptfoo CVE ID:** `85d41cb4`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-29T01:14:33.551Z  
**Source paper:** [The Dark Side of Trust: Authority Citation-Driven Jailbreak Attacks on Large Language Models](https://arxiv.org/abs/2411.11407)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Baichuan-13B, Claude-3(v3-haiku), GPT-3.5 Turbo, GPT-4(0613), GPT-4o, Llama 2 7B Chat, Llama 3 8B Instruct, Vicuna

## Description

Large Language Models (LLMs) exhibit a bias towards authoritative sources, allowing attackers to bypass safety mechanisms by crafting prompts that include fabricated citations mimicking credible sources (e.g., research papers, GitHub repositories). The model's trust in these fabricated citations leads to the generation of harmful content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
