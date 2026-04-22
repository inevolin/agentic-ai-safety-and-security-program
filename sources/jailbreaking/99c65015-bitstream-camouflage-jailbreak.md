# Bitstream Camouflage Jailbreak

**Promptfoo CVE ID:** `99c65015`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-07-14T04:03:26.275Z  
**Source paper:** [BitBypass: A New Direction in Jailbreaking Aligned Large Language Models with Bitstream Camouflage](https://arxiv.org/abs/2506.02479)  
**Tags:** `model-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, Gemini 1.5 Pro, GPT-4o, Llama 3.1 70B, Mixtral 8x22B

## Description

A novel black-box attack, dubbed BitBypass, exploits the vulnerability of aligned LLMs by camouflaging harmful prompts using hyphen-separated bitstreams. This bypasses safety alignment mechanisms by transforming sensitive words into their bitstream representations and replacing them with placeholders, in conjunction with a specially crafted system prompt that instructs the LLM to convert the bitstream back to text and respond as if given the original harmful prompt.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
