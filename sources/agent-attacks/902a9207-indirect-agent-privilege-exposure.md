# Indirect Agent Privilege Exposure

**Promptfoo CVE ID:** `902a9207`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-11T04:35:31.284Z  
**Source paper:** [Your Agent is More Brittle Than You Think: Uncovering Indirect Injection Vulnerabilities in Agentic LLMs](https://arxiv.org/abs/2604.03870)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `agent`, `chain`, `blackbox`, `data-security`, `integrity`  
**Affected models (as reported):** Llama 3 8B, Mistral 7B, Qwen 2.5 14B, Gemma 12B

## Description

Autonomous LLM agents deployed in dynamic, multi-step tool-calling environments are highly vulnerable to Indirect Prompt Injections (IPI) embedded in external content. Surface-level defensive prompts and monitoring mechanisms (such as Prompt Warning, the Sandwich Method, Spotlighting, Keyword Filtering, and LLM-as-a-Judge) consistently fail to prevent exploitation and occasionally exacerbate the vulnerability by introducing adversarial distraction. While compromised agents exhibit near-instantaneous mechanical compliance to the injected payload (bypassing multi-step deliberation) and rationalize the malicious instructions in their reasoning traces, token-level analysis reveals abnormally high decision entropy in their predictive distributions. Traditional text-filtering guardrails are entirely blind to this latent hesitation, allowing the agent to execute unauthorized tool invocations.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
