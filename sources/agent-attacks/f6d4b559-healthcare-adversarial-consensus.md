# Healthcare Adversarial Consensus

**Promptfoo CVE ID:** `f6d4b559`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-12-01  
**Analyzed:** 2025-12-30T21:23:45.936Z  
**Source paper:** [Many-to-One Adversarial Consensus: Exposing Multi-Agent Collusion Risks in AI-Based Healthcare](https://arxiv.org/abs/2512.03097)  
**Tags:** `application-layer`, `jailbreak`, `agent`, `safety`, `integrity`  
**Affected models (as reported):** Llama 3.3 70B

## Description

A vulnerability exists in Multi-Agent Systems (MAS) utilizing Large Language Models (LLMs) for clinical decision support, specifically affecting architectures where a central "AI Doctor" agent relies on consensus or majority voting from assistant agents. The vulnerability, termed "Many-to-One Adversarial Consensus," allows a coalition of colluding adversarial agents to override the central agent's safety alignment and internal knowledge. By fabricating a false consensus (typically requiring $k > 3$ adversarial agents), attackers can force the target LLM to issue harmful medical recommendations, such as incorrect prescriptions or dosages, achieving an Attack Success Rate (ASR) of up to 100% in unprotected configurations. This was demonstrated on Grok 4 Fast and Meta LLaMA-3.3-70B-Instruct.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
