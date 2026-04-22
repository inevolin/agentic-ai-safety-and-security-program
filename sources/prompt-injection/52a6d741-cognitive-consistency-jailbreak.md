# Cognitive Consistency Jailbreak

**Promptfoo CVE ID:** `52a6d741`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-29T04:05:01.031Z  
**Source paper:** [Foot In The Door: Understanding Large Language Model Jailbreaking via Cognitive Psychology](https://arxiv.org/abs/2402.15690)  
**Tags:** `jailbreak`, `prompt-layer`, `blackbox`, `safety`, `application-layer`  
**Affected models (as reported):** Chatglm-2 (chatglm2-6B), Chatglm-3 (chatglm3-6B), Claude-2.1, Claude-instant-1.2, Gemini (gemini-pro), GPT-3.5 (GPT-3.5-turbo-1106), GPT-4 (GPT-4-1106-preview), Llama-2 (llama2-7B-chat)

## Description

A vulnerability in several large language models (LLMs) allows attackers to bypass safety restrictions ("jailbreaking") by employing a Foot-in-the-Door (FITD) technique. This involves progressively escalating prompts, starting with innocuous requests and gradually leading to the elicitation of harmful or restricted information. The LLM's tendency towards cognitive consistency makes it more likely to respond to subsequent, increasingly sensitive prompts after initially agreeing to less harmful ones.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
