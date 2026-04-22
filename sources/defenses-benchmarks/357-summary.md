# Summary: NIST AI Risk Management Framework (AI RMF 1.0, NIST AI 100-1)

**Source file:** 357-blog-nist-ai-rmf.md
**Paper/post ID:** 357

## Attack Vector(s) (risk framing)
The RMF does not enumerate attacks; it establishes a lifecycle framework for identifying and managing AI risks including security ones. Risk categories invoked:
- **Validity & reliability** (hallucinations, drift).
- **Safety** (physical/psychological/societal harm).
- **Security & resilience** — explicitly includes adversarial attacks, data poisoning, model extraction, prompt injection, model theft, supply-chain attacks on AI components.
- **Accountability & transparency** (auditability of decisions and incidents).
- **Explainability & interpretability.**
- **Privacy-enhanced** (PII leakage from training data / RAG context, membership inference, inversion).
- **Fair with harmful bias managed.**

Appendix B differentiates AI risks from traditional software risks: stochastic behavior, scale of data dependence, emergent capabilities, opaque supply chains, fast evolution, dual-use.

## Real-World Applicability
NIST AI RMF 1.0 (Jan 2023) is referenced by EU AI Act, U.S. Executive Orders, DoD, and CISA guidance. Widely adopted as the governance scaffolding that security teams map technical controls into. A complementary **Generative AI Profile** (NIST AI 600-1) and a **Playbook** translate these functions into concrete actions.

## Reproduction Examples
No payloads. The framework's four core **Functions** are:
- **GOVERN** — policies, roles, accountability, culture, legal review, incident response.
- **MAP** — context, purpose, stakeholders, data provenance, categorize AI system.
- **MEASURE** — quantitative/qualitative testing: TEVV, red-teaming, robustness benchmarks, fairness metrics, privacy assessments.
- **MANAGE** — prioritize and treat risks, deploy controls, monitor in production, retire.

### Extrapolated mapping (not in paper):
| RMF subcategory | Defensive control in our framework |
| --- | --- |
| MEASURE 2.7 (security) | garak + Promptfoo red-team suite in CI |
| MEASURE 2.10 (privacy) | PII scanners, membership-inference tests |
| MANAGE 2.2 (deployment) | LlamaGuard / Arthur Shield in-line filter |
| GOVERN 1.5 (incident response) | CISA Collaboration Playbook webhook |
| MAP 4.1 (supply chain) | signed MCP manifests, dataset hashes |

## Defenses / Mitigations Discussed
- Lifecycle-wide controls (design → data → build → test → deploy → monitor → retire).
- Human-AI interaction guidance (Appendix C): appropriate reliance, human oversight, context-sensitivity.
- Profiles tailored to use case / sector / application type (including the Generative AI profile).
- Continuous feedback loops between MEASURE and MANAGE so measured risks drive response.
- Documentation and transparency (system cards, data sheets, risk registers).

## Key Takeaways for a Safety Framework
- Structure your product's control catalog to map 1:1 against NIST AI RMF subcategories — enables buyers to evidence compliance with minimum effort.
- Implement concrete MEASURE tooling for each trustworthiness attribute: security (garak, AgentDojo), privacy (membership inference, canary tokens), fairness (bias audits), explainability (feature attribution, reasoning trace review).
- Make GOVERN artifacts first-class outputs (system card, data card, risk register, incident-response runbook).
- Build MANAGE-phase telemetry into the runtime guardrail layer so production observations feed back into MAP and MEASURE (closed loop).
- Support multiple profiles (chatbot, RAG, agent, copilot, multi-modal); each profile preselects plugins and evaluators.
- Pair RMF with threat-model specificity from MITRE ATLAS (358–360) — RMF is the "what" and "why", ATLAS is the "how" adversaries attack.
- Pair with CISA Secure-by-Design (356) for concrete control defaults.
