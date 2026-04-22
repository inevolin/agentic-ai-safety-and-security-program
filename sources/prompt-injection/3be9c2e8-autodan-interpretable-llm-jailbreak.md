# AutoDAN: Interpretable LLM Jailbreak

**Promptfoo CVE ID:** `3be9c2e8`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-10-01  
**Analyzed:** 2024-12-29T03:36:19.882Z  
**Source paper:** [Autodan: Automatic and interpretable adversarial attacks on large language models](https://arxiv.org/abs/2310.15140)  
**Tags:** `model-layer`, `injection`, `jailbreak`, `extraction`, `prompt-leaking`, `blackbox`, `whitebox`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Guanaco 7B, Llama 2 Chat, Pythia 12B, Vicuna 13B, Vicuna 7B

## Description

AutoDAN is an interpretable gradient-based adversarial attack that generates readable prompts to bypass perplexity filters and jailbreak LLMs. The attack crafts prompts that elicit harmful behaviors while maintaining sufficient readability to avoid detection by existing perplexity-based defenses. This is achieved through a left-to-right token-by-token generation process optimizing for both jailbreaking success and prompt readability.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
