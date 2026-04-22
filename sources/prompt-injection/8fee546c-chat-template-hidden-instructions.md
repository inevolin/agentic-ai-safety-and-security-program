# Chat Template Hidden Instructions

**Promptfoo CVE ID:** `8fee546c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-20T23:59:28.981Z  
**Source paper:** [Inference-Time Backdoors via Hidden Instructions in LLM Chat Templates](https://arxiv.org/abs/2602.04653)  
**Tags:** `prompt-layer`, `injection`, `integrity`, `safety`  
**Affected models (as reported):** Llama 3.1 8B, Llama 3.2, Mistral 7B, Qwen 2.5 7B, Gemma 2 2B, Phi-3, Phi-4

## Description

A vulnerability exists in the handling of chat templates within open-weight Large Language Model (LLM) distribution formats, specifically GGUF files. Chat templates are executable Jinja2 programs stored as metadata (typically `tokenizer.chat_template`) alongside model weights. An attacker can modify a legitimate model's template to include conditional logic that detects specific trigger phrases in user input. When triggered, the template injects malicious system instructions or context into the prompt before the model processes it. Because the template executes at the inference engine level, these injected instructions bypass standard input sanitization and occupy a privileged position in the context hierarchy. This allows for persistent, inference-time backdoors without modifying model weights, accessing training data, or altering the runtime infrastructure. The backdoor remains dormant and undetectable via standard benchmarks until the trigger phrase is used.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
