# LLM Red Teaming Framework

**Promptfoo CVE ID:** `61a91449`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-10-01  
**Analyzed:** 2024-12-28T18:29:27.104Z  
**Source paper:** [Attack prompt generation for red teaming and defending large language models](https://arxiv.org/abs/2310.12505)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** 

## Description

A vulnerability in large language models (LLMs) allows attackers to craft malicious prompts that induce the LLM to generate harmful content, such as fraudulent material, racist remarks, or instructions for illegal activities. The vulnerability arises from the LLM's inability to reliably distinguish between benign and malicious instructions disguised within seemingly innocuous prompts. Attackers can exploit this by leveraging techniques like obfuscation, code injection/payload splitting, and virtualization to bypass safety filters and elicit harmful responses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
