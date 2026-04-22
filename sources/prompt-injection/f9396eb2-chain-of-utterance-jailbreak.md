# Chain-of-Utterance Jailbreak

**Promptfoo CVE ID:** `f9396eb2`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-08-01  
**Analyzed:** 2024-12-28T18:30:29.814Z  
**Source paper:** [Red-teaming large language models using chain of utterances for safety-alignment](https://arxiv.org/abs/2308.09662)  
**Tags:** `prompt-layer`, `jailbreak`, `fine-tuning`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** 

## Description

Large Language Models (LLMs) are vulnerable to a "Chain of Utterances" (CoU) based prompt injection attack. This attack exploits the LLM's ability to engage in multi-turn conversations and role-playing, tricking it into providing harmful or unsafe responses even when presented with safety guidelines. The attack leverages a crafted conversation between two agents ("Red-LM," a malicious agent, and "Base-LM," a seemingly helpful agent) to elicit unethical responses from the Base-LM by subtly guiding it with harmful questions and scenarios. The success of the attack hinges on the LLM's tendency to follow instructions within the conversational context, even if those instructions lead to undesirable outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
