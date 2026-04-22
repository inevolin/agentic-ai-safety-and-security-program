# LLM Factual MitM Injection

**Promptfoo CVE ID:** `98f9dc6d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-09T03:00:58.346Z  
**Source paper:** [Injecting Falsehoods: Adversarial Man-in-the-Middle Attacks Undermining Factual Recall in LLMs](https://arxiv.org/abs/2511.05919)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `rag`, `blackbox`, `api`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4o, Llama 2 13B, Mistral 7B, Phi-3

## Description

Large Language Models (LLMs), specifically GPT-4o, GPT-4o-mini, LLaMA-2-13B, Mistral-7B, and Phi-3.5-mini, are vulnerable to Man-in-the-Middle (MitM) adversarial prompt injections that undermine factual recall. Termed the "$\chi$mera" (Chimera) attack framework, this vulnerability exists when an attacker intercepts and modifies user queries (e.g., via malicious browser extensions, compromised frontends, or proxy middleware) before they reach the victim model. By appending adversarial instructions or injecting factually incorrect context, the attacker can leverage the model's instruction-following capabilities to override its internal knowledge base. This results in the generation of factually incorrect answers for closed-book, fact-based questions. The vulnerability is most pronounced in models with strong instruction-following capabilities (e.g., GPT-4o-mini), where simple instruction-based attacks ($\alpha$-$\chi$mera) achieve success rates up to 85.3%.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
