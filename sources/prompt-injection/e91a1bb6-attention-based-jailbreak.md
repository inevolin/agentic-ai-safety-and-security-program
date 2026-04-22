# Attention-Based Jailbreak

**Promptfoo CVE ID:** `e91a1bb6`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:30:04.189Z  
**Source paper:** [Attention Eclipse: Manipulating Attention to Bypass LLM Safety-Alignment](https://arxiv.org/abs/2502.15334)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `injection`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4o Mini, Llama 2 13B Chat, Llama 2 70B Chat, Llama 2 7B Chat, Vicuna 13B

## Description

**Description**: A vulnerability in large language models (LLMs) allows attackers to bypass safety-alignment mechanisms by manipulating the model's internal attention weights.  The attack, termed "Attention Eclipse," modifies the attention scores between specific tokens within a prompt, either amplifying or suppressing attention to selectively strengthen or weaken the influence of certain parts of the prompt on the model's output. This allows injection of malicious content while appearing benign to the model's safety filters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
