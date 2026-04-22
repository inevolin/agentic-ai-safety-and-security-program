# LLM Judge Coin Flip

**Promptfoo CVE ID:** `bfa94fbe`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T20:34:25.326Z  
**Source paper:** [A Coin Flip for Safety: LLM Judges Fail to Reliably Measure Adversarial Robustness](https://arxiv.org/abs/2603.06594)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `whitebox`, `safety`, `reliability`  
**Affected models (as reported):** Llama 2 13B, Llama 3.1 8B, Qwen 2.5 32B, Gemma 1B, Gemma 2 27B

## Description

Automated LLM-as-a-Judge safety classifiers exhibit severe performance degradation (falling to near-random chance) when subjected to distribution shifts caused by adversarial prompt optimization (Attack Shift), varying target architectures (Model Shift), and semantic categorization (Data Shift). Adversarial algorithms, particularly sampling-based (Best-of-N) and judge-aware optimization methods (GCG-REINFORCE), explicitly and implicitly exploit these judge insufficiencies. Instead of eliciting genuinely harmful content from the victim model, these attacks generate distorted, high-perplexity, or stylistically evasive outputs that trigger false positives in the judge's classification threshold. This "judge hacking" vulnerability fundamentally undermines automated safety verification by misclassifying benign or failed outputs as successful jailbreaks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
