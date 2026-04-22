# LLM Backdoor Trigger Reconstruction

**Promptfoo CVE ID:** `d49d7bb6`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-22T05:13:43.936Z  
**Source paper:** [The Trigger in the Haystack: Extracting and Reconstructing LLM Backdoor Triggers](https://arxiv.org/abs/2602.03085)  
**Tags:** `model-layer`, `prompt-layer`, `poisoning`, `extraction`, `fine-tuning`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Llama 2 13B, Llama 3.1 8B, Gemma, Phi-4

## Description

Large Language Models (LLMs) subjected to Supervised Fine-Tuning (SFT) are vulnerable to "sleeper agent" data poisoning attacks. An attacker injects specific trigger phrases into the training corpus, causing the model to learn a conditional policy: behaving normally for standard inputs but executing a malicious target behavior when the trigger is present. These backdoors persist through safety training and alignment. The vulnerability stems from the model's strong memorization of poisoning data, which alters internal attention dynamics (specifically inducing "attention-hijacking" where trigger tokens attend to themselves and ignore the prompt) and causes output entropy collapse. This allows the model to bypass safety guardrails or generate insecure code upon activation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
