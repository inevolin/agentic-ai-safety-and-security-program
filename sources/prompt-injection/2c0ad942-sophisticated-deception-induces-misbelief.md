# Sophisticated Deception Induces Misbelief

**Promptfoo CVE ID:** `2c0ad942`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T05:50:39.274Z  
**Source paper:** [The Facade of Truth: Uncovering and Mitigating LLM Susceptibility to Deceptive Evidence](https://arxiv.org/abs/2601.05478)  
**Tags:** `prompt-layer`, `model-layer`, `injection`, `rag`, `blackbox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-3.5, GPT-5, Llama 3 8B, Qwen 2.5 32B

## Description

Large Language Models (LLMs) exhibit a vulnerability to "hard-to-falsify" deceptive evidence injection, termed the "Facade of Truth." This vulnerability allows an attacker to override an LLMâs parametric knowledge (internal factual beliefs) by injecting sophisticated, iteratively refined fabricated evidence into the context window. Unlike overt misinformation which models typically reject, this attack utilizes a multi-agent adversarial framework (MisBelief) to generate evidence that mimics legitimate defeasible reasoning. The attack exploits the "Instruction-Following Paradox" and the "Reasoning Trap," where models optimized for reasoning and context adherenceâparticularly larger parameter models and reasoning-specialized modelsâprioritize the logical coherence of the provided deceptive context over factual veracity. Successful exploitation results in the model amplifying misinformation and providing harmful downstream advice.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
