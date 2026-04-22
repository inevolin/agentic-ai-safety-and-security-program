# LangChain Poisoning Jailbreak

**Promptfoo CVE ID:** `e9899466`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-29T01:10:48.391Z  
**Source paper:** [Poisoned langchain: Jailbreak llms by langchain](https://arxiv.org/abs/2406.18122)  
**Tags:** `rag`, `injection`, `jailbreak`, `poisoning`, `application-layer`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** ChatGLM2 6B, ChatGLM3 6B, Ernie-3.5, Llama 2 7B, Qwen 14B Chat, Xinghuo-3.5

## Description

A vulnerability in Retrieval-Augmented Generation (RAG) systems utilizing LangChain allows for indirect jailbreaks of Large Language Models (LLMs). By poisoning the external knowledge base accessed by the LLM through LangChain, attackers can manipulate the LLM's responses, causing it to generate malicious or inappropriate content. The attack exploits the LLM's reliance on the external knowledge base and bypasses direct prompt-based jailbreak defenses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
