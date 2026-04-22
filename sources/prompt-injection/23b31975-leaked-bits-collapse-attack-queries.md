# Leaked Bits Collapse Attack Queries

**Promptfoo CVE ID:** `23b31975`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-09T03:22:25.690Z  
**Source paper:** [Bits Leaked per Query: Information-Theoretic Bounds on Adversarial Attacks against LLMs](https://arxiv.org/abs/2510.17000)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `extraction`, `prompt-leaking`, `fine-tuning`, `blackbox`, `whitebox`, `api`, `safety`, `data-privacy`  
**Affected models (as reported):** GPT-4, Llama 4 17B, DeepSeek-R1

## Description

Large Language Models (LLMs), specifically variants of GPT-4o, DeepSeek-R1, OLMo-2, and Llama-4, are vulnerable to accelerated adaptive adversarial attacks due to excessive information leakage in observable output signals. When these models expose "thinking processes" (Chain-of-Thought traces) or token-level log-probabilities (logits) to the end user, they leak significant mutual information $I(Z;T)$ regarding the model's safety state or hidden instructions. This leakage allows adaptive attack algorithms (such as Greedy Coordinate Gradient or PAIR) to optimize adversarial prompts with logarithmic query complexity ($log(1/\epsilon)$) rather than linear or quadratic complexity. By analyzing the leaked reasoning steps or confidence scores, an attacker can bypass guardrails, extract system prompts, or recover "unlearned" data with orders-of-magnitude fewer queries (e.g., reducing required queries from thousands to dozens) compared to black-box attacks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
