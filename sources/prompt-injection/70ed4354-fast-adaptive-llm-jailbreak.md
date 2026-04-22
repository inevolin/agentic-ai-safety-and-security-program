# Fast Adaptive LLM Jailbreak

**Promptfoo CVE ID:** `70ed4354`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-04-01  
**Analyzed:** 2024-12-29T04:22:51.279Z  
**Source paper:** [Advprompter: Fast adaptive adversarial prompting for llms](https://arxiv.org/abs/2404.16873)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Falcon 7B Instruct, GPT-3.5 Turbo, GPT-4, Llama 2 7B, Llama 2 7B Chat, Mistral 7B Instruct, Pythia-12B-chat, Vicuna 7B v1.5, Vicuna-13B (v1.5)

## Description

Large Language Models (LLMs) are vulnerable to adversarial prompting attacks, where a crafted suffix appended to an instruction causes the LLM to generate unsafe or harmful content. The AdvPrompter technique trains a separate LLM to generate these adversarial suffixes, rapidly bypassing LLM safety mechanisms. The generated suffixes are human-readable and contextually relevant, making them harder to detect than previous methods. The attack is effective against both open-source and closed-source (black-box) LLMs via transfer attacks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
