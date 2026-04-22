# Adversarial Tool Injection Attacks

**Promptfoo CVE ID:** `428a631b`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-29T04:39:24.615Z  
**Source paper:** [From Allies to Adversaries: Manipulating LLM Tool-Calling through Adversarial Injection](https://arxiv.org/abs/2412.10198)  
**Tags:** `application-layer`, `injection`, `denial-of-service`, `data-privacy`, `data-security`, `blackbox`, `agent`, `rag`  
**Affected models (as reported):** GPT-4, Llama 3, Qwen 2

## Description

Large Language Model (LLM) tool-calling systems are vulnerable to adversarial tool injection attacks. Attackers can inject malicious tools ("Manipulator Tools") into the tool platform, manipulating the LLM's tool selection and execution process. This allows for privacy theft (extracting user queries), denial-of-service (DoS) attacks against legitimate tools, and unscheduled tool-calling (forcing the use of attacker-specified tools regardless of relevance). The attack exploits vulnerabilities in the tool retrieval mechanism and the LLM's decision-making process. Successful attacks require the malicious tool to be (1) retrieved by the system, (2) selected for execution by the LLM, and (3) its output to manipulate subsequent LLM actions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
