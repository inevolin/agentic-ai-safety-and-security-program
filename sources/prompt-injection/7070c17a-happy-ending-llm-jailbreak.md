# Happy Ending LLM Jailbreak

**Promptfoo CVE ID:** `7070c17a`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-03-04T19:34:23.250Z  
**Source paper:** [Dagger Behind Smile: Fool LLMs with a Happy Ending Story](https://arxiv.org/abs/2501.13115)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemini Flash, Gemini Pro, GPT-4o, GPT-4o Mini, Llama 3.1 8B Instruct, Llama 3.3 70B Instruct

## Description

Large language models (LLMs) exhibit increased responsiveness to prompts framed within positive narratives.  The Happy Ending Attack (HEA) exploits this by embedding malicious requests within a positive-sentiment scenario culminating in a happy ending. This allows the LLM to generate responses that fulfill the malicious request while perceiving the overall prompt as benign.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
