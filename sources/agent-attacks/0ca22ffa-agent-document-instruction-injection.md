# Agent Document Instruction Injection

**Promptfoo CVE ID:** `0ca22ffa`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T23:59:21.049Z  
**Source paper:** [You Told Me to Do It: Measuring Instructional Text-induced Private Data Leakage in LLM Agents](https://arxiv.org/abs/2603.11862)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `blackbox`, `agent`, `data-privacy`, `data-security`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 3.5, Claude 3.7, o3, Gemini Pro

## Description

High-privilege LLM agents with filesystem and network access are vulnerable to documentation-embedded instruction injection, an issue termed the "Trusted Executor Dilemma." When autonomously processing external workflow documents (e.g., `README.md` files or setup guides) during software installation workflows, agents implicitly trust and execute embedded text instructions without verifying their underlying intent. Attackers can embed syntactically valid, malicious directives (such as data exfiltration commands) inline or recursively via structural obfuscation (hyperlinks up to 5 levels deep). Because the payloads map to routine system- or application-level operations and utilize linguistic disguises (e.g., policy mandates or helpful suggestions), they bypass the agent's semantic safety alignment, leading to the autonomous execution of adversarial commands.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
