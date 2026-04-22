# Zero-Tax Fine-Tune Bypass

**Promptfoo CVE ID:** `b7ad6988`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T20:39:06.052Z  
**Source paper:** [Trojan-Speak: Bypassing Constitutional Classifiers with No Jailbreak Tax via Adversarial Finetuning](https://arxiv.org/abs/2603.29038)  
**Tags:** `model-layer`, `poisoning`, `jailbreak`, `fine-tuning`, `blackbox`, `api`, `safety`  
**Affected models (as reported):** Claude 4.5, Qwen 2.5 4B

## Description

An adversarial fine-tuning vulnerability exists in LLMs protected by text-based safety classifiers (such as Anthropic's Constitutional Classifiers). By utilizing a two-stage curriculum learning combined with hybrid RL+SFT (GRPO), an attacker can fine-tune a model to communicate using a minimal substitution cipher (replacing only 7-8 high-frequency characters) disguised within benign technical templates (e.g., forensic logs with `0x` prefixes). This "Trojan-Speak" methodology bypasses text-level input, output, and training-data classifiers with >99% success rates. Critically, unlike prior covert fine-tuning attacks, this method incurs almost zero "jailbreak tax"âretaining >95% of the model's complex reasoning capabilities on benchmarks like GPQA-Diamond and MATH-500 for models 14B parameters and larger. This allows the model to process and generate highly complex, expert-level harmful content entirely in ciphertext.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
