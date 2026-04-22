# Adaptive Stacked Cipher Jailbreak

**Promptfoo CVE ID:** `9bcb836e`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-09T02:00:30.543Z  
**Source paper:** [Three minds, one legend: Jailbreak large reasoning model with adaptive stacked ciphers](https://arxiv.org/abs/2505.16241)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `api`, `safety`  
**Affected models (as reported):** Claude 3.5, Claude 3.7, o1, Gemini 2, DeepSeek-R1, o4-mini

## Description

Large Reasoning Models (LRMs) utilizing Chain-of-Thought (CoT) processes are vulnerable to an adaptive stacked cipher attack known as SEAL (Stacked Encryption for Adaptive Language reasoning model jailbreak). The vulnerability arises because the model's reasoning capabilities effectively function as a decryption engine, processing complex multi-layered obfuscations (e.g., stacked combinations of Caesar, Base64, ASCII, HEX, and reversal ciphers) that bypass input-level safety filters. By systematically increasing cipher complexity and employing a gradient bandit algorithm to adapt to the target's safety boundary, an attacker can obscure harmful intent from the safety mechanism while retaining the model's ability to decode and execute the malicious instruction within its CoT, resulting in the generation of disallowed content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
