# Thought Virus Network Infection

**Promptfoo CVE ID:** `eb18844f`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-03-09T03:54:19.728Z  
**Source paper:** [Thought Virus: Viral Misalignment via Subliminal Prompting in Multi-Agent Systems](https://arxiv.org/abs/2603.00131)  
**Tags:** `prompt-layer`, `application-layer`, `injection`, `agent`, `chain`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Llama 3.1 8B, Qwen 2.5 7B

## Description

A vulnerability in LLM-based Multi-Agent Systems (MAS) allows an attacker to propagate covert biases and misalignment across multiple agents via subliminal prompting, an attack vector termed "Thought Virus." By injecting a seemingly benign, semantically unrelated token (such as a specific 3-digit number) into the prompt of a single compromised agent, an attacker can induce a specific targeted behavior (e.g., outputting a specific target concept or decreasing factual truthfulness). This induced bias virally transfers to downstream agents through standard, non-malicious inter-agent communications. Because the propagated messages never explicitly reference the target concept or payload, this attack successfully evades both semantic content filters and paraphrasing-based defenses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
