# Visual Memory Multi-Turn Manipulation

**Promptfoo CVE ID:** `4c89787c`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T23:14:44.137Z  
**Source paper:** [Visual Memory Injection Attacks for Multi-Turn Conversations](https://arxiv.org/abs/2602.15927)  
**Tags:** `model-layer`, `injection`, `vision`, `multimodal`, `whitebox`, `integrity`, `safety`  
**Affected models (as reported):** Qwen 2.5 7B, LLaVA 8B

## Description

Large Vision-Language Models (LVLMs) are vulnerable to Visual Memory Injection (VMI), a stealthy targeted attack targeting multi-turn conversations. An attacker can embed an imperceptible adversarial perturbation ($L_\infty \le 8/255$) into a seemingly benign image. Because the visual input persists in the model's context throughout a multi-turn dialogue, the injected payload remains dormant. By utilizing "benign anchoring" and "context-cycling" during optimization, the attacker ensures the LVLM exhibits nominal, helpful behavior on non-trigger prompts. However, when a user introduces a specific trigger topic (e.g., asking for financial advice) at any later point in the conversationâeven after 25+ turns or >10,000 tokens of unrelated interactionâthe LVLM is forced to output an attacker-prescribed target message.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
