# Untrusted Content Agent Overrule

**Promptfoo CVE ID:** `f14e9d09`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-04-11T04:48:51.701Z  
**Source paper:** [CausalArmor: Efficient Indirect Prompt Injection Guardrails via Causal Attribution](https://arxiv.org/abs/2602.07918)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `agent`, `data-security`, `integrity`  
**Affected models (as reported):** Claude 4, Gemini 2, Gemini Pro, Mistral Large, Qwen 2.5, Gemma 12B

## Description

Tool-calling LLM agents are vulnerable to Indirect Prompt Injection (IPI) attacks that induce "Poisoned Chain-of-Thought (CoT)" persistence. When an attacker embeds fake system constraints or error traces into untrusted external content (e.g., tool outputs or retrieved documents), the agent may generate reasoning traces that accept these malicious constraints as ground truth. Even if the original injected input is later sanitized or removed, the residual poisoned reasoning traces remain in the context history. This residual CoT acts as a spurious anchor, causing the model to self-reinforce the malicious logic and hallucinate the attacker's command during regeneration, ultimately leading to the execution of unauthorized privileged actions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
