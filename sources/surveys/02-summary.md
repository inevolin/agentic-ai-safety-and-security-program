# Summary: Artificial Intelligence Crime — An Overview of Malicious Use and Abuse of AI

**Source file:** 02-artificial-intelligence-crime-an-overview-of-malicious-use-and-abuse-of-ai.md
**Paper/post ID:** 02

## Attack Vector(s)
Typology paper (Blauth, Gstrein, Zwitter, IEEE Access 2022). Distinguishes:
- **Malicious abuse of AI** (integrity attacks, unintended outcomes, algorithmic trading abuse, membership-inference attacks).
- **Malicious use of AI** (social engineering, misinformation/fake news, hacking, autonomous weapon systems).

Threat model is broad/policy-oriented: attacker leverages AI either as the target (abuse of model internals/data) or as a tool (amplifying conventional crimes).

## Real-World Applicability
- Membership-inference to extract private training data from hosted LLMs.
- AI-enabled market manipulation (spoofing/layering with ML).
- AI-generated disinformation/deepfakes for influence operations.
- AI-assisted malware and social-engineering.

## Reproduction Examples
No reproducible payloads in source text (IEEE paywalled; only abstract and keyword stub accessible).

## Defenses / Mitigations Discussed
Policy/governance focus: enhanced collaboration between governments, industry, and civil society; improved preparedness and resilience. No technical defenses enumerated in the stub.

## Key Takeaways for a Safety Framework
- Use this paper's eight-category typology as a top-level threat taxonomy.
- Map subsequent technical papers into its abuse-vs-use axes.
- Build detectors for membership-inference queries (repeated near-duplicate probes).
- Monitor misinformation- and deepfake-generation patterns alongside direct social-engineering use.
