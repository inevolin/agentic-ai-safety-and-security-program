# TEE Advisor Hallucination

**Promptfoo CVE ID:** `188f73e5`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T23:44:41.356Z  
**Source paper:** [Red-Teaming Claude Opus and ChatGPT-based Security Advisors for Trusted Execution Environments](https://arxiv.org/abs/2602.19450)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `hallucination`, `rag`, `blackbox`, `agent`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-5, Claude 4

## Description

LLM-based security advisors exhibit systematic reasoning failuresâincluding boundary confusion, attestation overclaiming, and mitigation hallucinationâwhen providing architectural guidance for Trusted Execution Environments (TEEs) like Intel SGX and Arm TrustZone. When embedded in tool-augmented agent pipelines, these models are susceptible to agentic misinterpretation, turning partial or poisoned tool outputs into highly confident but materially incorrect security conclusions. This vulnerability causes the LLM to silently shift threat assumptions, hallucinate non-existent patches, and overstate hardware isolation guarantees, leading practitioners to embed fundamentally flawed security models and insecure configurations directly into TEE deployment playbooks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
