# Weight Orthogonalization Attack Empowerment

**Promptfoo CVE ID:** `977254b7`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-10T20:48:28.764Z  
**Source paper:** [Understanding the Effects of Safety Unalignment on Large Language Models](https://arxiv.org/abs/2604.02574)  
**Tags:** `model-layer`, `poisoning`, `jailbreak`, `fine-tuning`, `whitebox`, `safety`  
**Affected models (as reported):** GPT-4o, Llama 3.1 8B, DeepSeek-R1 14B, Qwen 2.5 14B

## Description

An issue in large language models (LLMs) with white-box weight access allows attackers to permanently bypass safety guardrails via Weight Orthogonalization (WO). By calculating a model's "refusal vector"âthe mean-difference vector between harmful and harmless instruction activations in the residual streamâan attacker can orthogonalize the model's weights to prevent it from writing to this refusal direction ($W^{\prime}\leftarrow W-rr^{\intercal}W$). Unlike jailbreak-tuning or data poisoning, WO cleanly disables safety alignment without degrading the model's natural language capabilities, reasoning skills, or hallucination rates. This produces an unaligned model uniquely capable of acting as an autonomous adversarial agent, significantly outperforming training-based unalignment methods in crafting SOTA adversarial attacks against other LLMs and aiding in operational cyber attacks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
