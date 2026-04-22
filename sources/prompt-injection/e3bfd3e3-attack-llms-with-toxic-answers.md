# Attack LLMs with Toxic Answers

**Promptfoo CVE ID:** `e3bfd3e3`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-08-01  
**Analyzed:** 2025-08-16T04:06:38.063Z  
**Source paper:** [Atoxia: Red-teaming Large Language Models with Target Toxic Answers](https://arxiv.org/abs/2408.14853)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `fine-tuning`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, GPT-4o, GPT-4o Mini, Llama 2 7B Chat, Llama 3 8B Instruct, Mistral 7B, Vicuna 7B v1.5

## Description

Large Language Models (LLMs) are vulnerable to a targeted jailbreak attack, termed Atoxia, which can force the generation of specific harmful content. The attack operates by providing a target toxic answer to an attacker model, which then generates a corresponding adversarial query and a misleading "answer opening" (prefix). When the query and the answer prefix are presented to a vulnerable LLM, the model is induced to continue the generation, bypassing its safety alignment and completing the toxic response. The attack is optimized via reinforcement learning, using the target model's own log-likelihood of producing the toxic answer as a reward signal, making it highly effective. This technique has been shown to be transferable from open-source models to state-of-the-art black-box models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
