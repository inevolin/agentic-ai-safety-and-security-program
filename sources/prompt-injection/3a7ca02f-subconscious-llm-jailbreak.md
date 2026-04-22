# Subconscious LLM Jailbreak

**Promptfoo CVE ID:** `3a7ca02f`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-29T04:14:38.898Z  
**Source paper:** [Rapid optimization for jailbreaking llms via subconscious exploitation and echopraxia](https://arxiv.org/abs/2402.05467)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `whitebox`, `api`, `safety`  
**Affected models (as reported):** Alpaca 7B, Baichuan 2 7B Chat, Bard, Claude2-v2.0, Falcon 7B Instruct, GPT-3.5 Turbo, GPT-4, Llama 2 13B Chat, Llama 2 7B Chat, Vicuna 7B

## Description

Large Language Models (LLMs) are vulnerable to a novel attack leveraging subconscious exploitation and echopraxia. Attackers craft prompts that subtly guide the LLM to echo malicious content it has implicitly learned during pre-training but is programmed to suppress. This bypasses safety mechanisms designed to prevent the generation of harmful content. The technique involves extracting malicious knowledge from the LLM's conditional probability distribution (representing its "subconscious") and then using an optimization process to construct a prompt that triggers the LLM to involuntarily repeat the harmful information.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
