# Metacognitive Prompting Lowers Resistance

**Promptfoo CVE ID:** `acb06b8c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T03:20:35.474Z  
**Source paper:** [Vulnerability of LLMs' Belief Systems? LLMs Belief Resistance Check Through Strategic Persuasive Conversation Interventions](https://arxiv.org/abs/2601.13590)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `hallucination`, `fine-tuning`, `blackbox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, Llama 3.2 3B, Llama 3.3 70B, Mistral 7B, Qwen 2.5 7B

## Description

Large Language Models (LLMs) are vulnerable to multi-turn persuasive conversational attacks that induce the adoption of counterfactual beliefs. By leveraging the SourceâMessageâChannelâReceiver (SMCR) communication framework, attackers can systematically erode a model's confidence in established facts and compel the model to output misinformation. Specific attack vectors include manipulating source attribution (authority framing), message content (logical, credibility, or emotional appeals), and receiver characteristics (modulating simulated self-esteem or confirmation bias). This vulnerability is particularly acute in smaller models (e.g., Llama 3.2-3B) which exhibit extreme compliance, but also affects larger models (e.g., GPT-4o-mini) in specialized domains such as medical QA. Furthermore, mechanism checks reveal a "meta-cognition paradox": prompting the model to self-report confidence scores during the interaction often accelerates belief erosion rather than enhancing robustness.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
