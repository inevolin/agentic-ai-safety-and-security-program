# Many-Shot In-Context Override

**Promptfoo CVE ID:** `de9f55f7`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-12-09T00:00:31.586Z  
**Source paper:** [Mitigating Many-Shot Jailbreaking](https://arxiv.org/abs/2504.09604)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `fine-tuning`, `blackbox`, `safety`  
**Affected models (as reported):** Llama 3.1 8B

## Description

Many-Shot Jailbreaking (MSJ) is an adversarial technique that circumvents the safety alignment of Large Language Models (LLMs) by exploiting their In-Context Learning (ICL) capabilities and extended context windows. By embedding a large number of "shots" (fake dialogue examples) within a single promptâwhere a simulated assistant complies with harmful requestsâthe attacker conditions the model to ignore its safety training. As the number of malicious examples increases (following a power-law relationship), the probability of the model refusing the final harmful query decreases, causing it to adopt the unsafe persona and generate prohibited content. This vulnerability relies on the model prioritizing the immediate context pattern over its post-training safety constraints.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
