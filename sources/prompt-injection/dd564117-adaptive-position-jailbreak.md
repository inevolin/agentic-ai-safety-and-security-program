# Adaptive Position Jailbreak

**Promptfoo CVE ID:** `dd564117`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-09-01  
**Analyzed:** 2024-12-29T03:36:19.875Z  
**Source paper:** [AdaPPA: Adaptive Position Pre-Fill Jailbreak Attack Approach Targeting LLMs](https://arxiv.org/abs/2409.07503)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** ChatGLM3 6B, GPT-4o, GPT-4o Mini, Llama 2 13B, Llama 2 7B, Llama 3 8B, Vicuna 13B, Vicuna 7B

## Description

AdaPPA is a jailbreak attack that exploits the varying levels of alignment protection in LLMs at different output positions. It leverages the model's instruction-following capabilities by pre-filling the output with carefully crafted "safe" content, creating a perceived completion and lowering the model's guard before generating malicious content. The attack's effectiveness relies on the adaptive generation of both safe and harmful pre-fill content, strategically placed to exploit weaknesses in the model's defense mechanisms at various output positions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
