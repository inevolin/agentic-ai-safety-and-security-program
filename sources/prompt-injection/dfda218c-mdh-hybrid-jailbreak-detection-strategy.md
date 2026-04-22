# MDH: Hybrid Jailbreak Detection Strategy

**Promptfoo CVE ID:** `dfda218c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-08-31T13:30:48.648Z  
**Source paper:** [Jailbreaking Commercial Black-Box LLMs with Explicitly Harmful Prompts](https://arxiv.org/abs/2508.10390)  
**Tags:** `prompt-layer`, `application-layer`, `injection`, `jailbreak`, `chain`, `blackbox`, `api`, `integrity`, `safety`  
**Affected models (as reported):** Abab5.5-chat, Abab5.5-chat-pro, Abab5.5s-chat-pro, Abab6.5-chat, Abab6.5g-chat, Abab6.5s-chat, Abab6.5s-chat-pro, Abab6.5t-chat, Claude 3.5 Sonnet, Claude 3.7 Sonnet, Claude 4 Sonnet, DeepSeek Chat, DeepSeek R1, DeepSeek V3, Doubao 1.5 Vision Pro, Doubao Lite, Doubao Pro, Doubao Seed 1.6, Doubao Seed 1.6 Thinking, Gemini 2.0 Flash, Gemini 2.5 Pro, GPT-3.5 Turbo, GPT-4.1, GPT-4o, GPT-4o Mini, Grok 2, Grok 3, Llama 3 70B, Llama Guard, Llama Guard 3 11B, Llama Guard 3 11B Vision, Llama Guard 3 1B, Llama Guard 3 8B, Llama Guard 4 12B, Moonshot, o1, o1-mini, o3, o3-mini, o4, o4-mini, Yi Large, Yi Large Turbo

## Description

Large language models that support a `developer` role in their API are vulnerable to a jailbreaking attack that leverages malicious developer messages. An attacker can craft a developer message that overrides the model's safety alignment by setting a permissive persona, providing explicit instructions to bypass refusals, and using few-shot examples of harmful query-response pairs. This technique, named D-Attack, is effective on its own. A more advanced variant, DH-CoT, enhances the attack by aligning the developer message's context (e.g., an educational setting) with a hijacked Chain-of-Thought (H-CoT) user prompt, significantly increasing its success rate against reasoning-optimized models that are otherwise resistant to simpler jailbreaks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
