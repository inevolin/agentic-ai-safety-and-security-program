# Arbitrary Agent Topology Breach

**Promptfoo CVE ID:** `e1701473`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:19:02.765Z  
**Source paper:** [WebWeaver: Breaking Topology Confidentiality in LLM Multi-Agent Systems with Stealthy Context-Based Inference](https://arxiv.org/abs/2603.11132)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `extraction`, `jailbreak`, `agent`, `blackbox`, `data-privacy`, `data-security`, `safety`  
**Affected models (as reported):** Llama 3 70B, Llama 3.1 8B, Mistral Large 12B, Qwen 2.5 7B, Gemma, Gemma 2 9B, Phi-3

## Description

A vulnerability in LLM-based Multi-Agent Systems (LLM-MAS) allows an attacker who controls a single arbitrary agent to map and extract the system's entire confidential communication topology. Unlike prior attacks that rely on direct identity queries and administrative privileges, this attack infers topology stealthily purely from contextual and linguistic signals (stylometry, role-specific syntax), bypassing standard keyword-based and identity-filtering defenses. The exploit relies on a trained sender predictor to de-anonymize local network traffic, coupled with either an optimized recursive jailbreak to cascade context leakage across the network or a jailbreak-free Denoising Diffusion Probabilistic Model (DDPM) to reconstruct the global graph from partial local observations via masked topology inpainting.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
