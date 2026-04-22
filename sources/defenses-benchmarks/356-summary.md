# Summary: CISA — AI Security Guidelines (landing page)

**Source file:** 356-blog-cisa-ai-security-guidelines.md
**Paper/post ID:** 356

## Attack Vector(s)
This is a CISA landing page that catalogs joint-seal guidance rather than describing specific attacks. Referenced publications collectively address:
- Risks to **critical-infrastructure / OT** systems when AI is integrated (safety, availability, integrity of control loops).
- **Data security risks** across the AI lifecycle: poisoning, tampering, supply-chain compromise of training sets, insecure data-at-rest / in-transit during training and inference.
- **Deployment risks** for externally developed AI systems (opacity, weight tampering, unsafe defaults).
- General **Secure by Design** class of risks — same classes as traditional software (authZ/authN, injection, memory safety) plus AI-specific ones (adversarial examples, prompt injection, model/data theft, model backdoors).
- **Red-teaming / TEVV** gaps: under-tested AI systems.

## Real-World Applicability
Audience: U.S. federal agencies, critical-infrastructure operators, and AI providers/deployers. Referenced joint-seal documents are coordinated with NSA AISC, FBI, ACSC (Australia), NCSC (UK, Canada, New Zealand), and others — effectively a Five Eyes baseline for AI security. Provides policy anchors that enterprise buyers increasingly require contractually.

## Reproduction Examples
No offensive payloads; the page is high-level policy pointing at documents:
- *Principles for the Secure Integration of AI in Operational Technology.*
- *AI Data Security: Best Practices for Securing Data Used to Train & Operate AI Systems.*
- *AI Cybersecurity Collaboration Playbook.*
- *AI Red Teaming: Applying Software TEVV for AI Evaluations.*
- *Deploying AI Systems Securely* (NSA AISC + CISA + partners).
- *Guidelines for Secure AI System Development.*
- *Software Must Be Secure by Design, and AI Is No Exception.*
- *Engaging with Artificial Intelligence* (ACSC-led).

### Extrapolated example (not in paper):
A defense mapping: against tool-poisoning attacks (see posts 345, 344), CISA's *Secure by Design* principle implies AI vendors must ship MCP client defaults that validate/display full tool descriptions and default-deny cross-server influence — not leave this to the end user.

## Defenses / Mitigations Discussed
At a high level, the page foregrounds:
- **Secure by Design** across the AI product lifecycle.
- **Data security** throughout collection, curation, training, fine-tuning, inference, retirement.
- **Information sharing** with CISA / partners (via the Cybersecurity Collaboration Playbook).
- **Red-teaming and TEVV** embedded in software evaluation frameworks.
- **Supply chain / OSS security** for AI components, weights, and datasets.
- **Cross-sector Cybersecurity Performance Goals** as baseline control floor.

## Key Takeaways for a Safety Framework
- Align the framework's control families with CISA / joint-seal guidance so enterprise and federal buyers can map your controls to their compliance requirements.
- Treat AI Data Security as a first-class pillar: dataset integrity, provenance, access controls, poisoning detection, encryption at rest / in transit.
- Embed TEVV-style red-team evaluations (garak, Promptfoo, AgentDojo) into the framework's required CI pipeline.
- Provide an information-sharing hook that can forward detected AI incidents (prompt injections, jailbreaks, exfil attempts) to CISA / ISAC channels using the Collaboration Playbook schema.
- Produce Secure-by-Design defaults for every framework-shipped component (no `trust=True`, no open egress, no default admin credentials).
- Cross-reference OT guidance for agents operating in industrial/critical contexts (human-in-the-loop for safety-critical actions, deterministic fall-backs).
- Use the CISA CPGs as a minimum-control baseline, layered with AI-specific controls from NIST AI RMF (357) and MITRE ATLAS (358–360).
