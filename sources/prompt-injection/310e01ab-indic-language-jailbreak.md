# Indic Language Jailbreak

**Promptfoo CVE ID:** `310e01ab`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T21:43:17.956Z  
**Source paper:** [IndicJR: A Judge-Free Benchmark of Jailbreak Robustness in South Asian Languages](https://arxiv.org/abs/2602.16832)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Llama 3.1 405B, Llama 3.3 70B, Llama 4 17B, Mistral 7B 8B, Qwen 2.5 7B, Command R, Gemma 2 9B, Mixtral 8x7B

## Description

Multiple large language models are vulnerable to cross-lingual and orthographic jailbreaks utilizing South Asian (Indic) languages. Attackers can bypass safety alignment and elicit harmful content by formulating requests in native Indic scripts (e.g., Bengali, Odia, Urdu) or by utilizing cross-lingual transfer attacks where English adversarial wrappers (format or instruction overrides) encapsulate Indic-language targets. Evaluations reveal a severe "contract gap": while imposing strict JSON output constraints superficially inflates refusal rates, unconstrained (free-form) generation results in near-perfect jailbreak success rates (JSR â 1.0). Furthermore, native Indic scripts yield significantly higher jailbreak success compared to romanized/transliterated inputs, as tokenization fragmentation in the latter often disrupts model formatting rather than actively blocking harmful intents.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
