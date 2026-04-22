# Summary: Open-Source Intelligence on the Internet — Categorisation and Evaluation of Search Tools

**Source file:** 20-open-source-intelligence-on-the-internet-categorisation-and-evaluation-of-search.md
**Paper/post ID:** 20

## Attack Vector(s)
Not a prompt-injection or jailbreak paper. Polish academic review (2024) categorizing and evaluating OSINT search tools used by investigators, journalists, and researchers. Indirect relevance to AI safety: the same OSINT surfaces (people-search, image reverse-search, social-media aggregators, domain/WHOIS, geolocation) are the data sources that agentic LLMs fetch at runtime, making this corpus a target of content poisoning and a capability that social-engineering attackers chain.

## Real-World Applicability
Cases cited: Bellingcat investigations, MH17 attribution, ICC/war-crime investigations. OSINT categories covered: person search, reverse image, domain intelligence, geolocation, breach databases, social-network scraping. Relevance to LLM safety: agents with browsing tools can be instructed (via IPI) to perform OSINT on individuals (doxxing vector); retrieval corpora include these sites, which can be poisoned.

## Reproduction Examples
No attack payloads. Tool categories enumerated (illustrative):
- Person: Pipl, Spokeo, PeekYou.
- Reverse image: Google Images, Yandex, TinEye.
- Domain: whois.domaintools, Shodan, Censys.
- Geolocation: SunCalc, Google Earth, geoestimate helpers.
- Social: Maltego transforms, OSINT Framework, IntelTechniques.

## Defenses / Mitigations Discussed
The paper evaluates tool utility/ethics but does not propose LLM-side defenses. For safety framework purposes, relevant controls: policy against agent-performed OSINT on private individuals; rate-limit and domain-allowlist for browsing tools; strip PII from retrieved snippets before model consumption.

## Key Takeaways for a Safety Framework
- Agents with web tools inherit the full OSINT attack surface — doxxing is a latent capability.
- Maintain deny-lists for people-search / reverse-image sites in high-risk deployments.
- OSINT corpora are poisonable (wiki edits, social posts); agents that trust these surfaces are vulnerable to IPI via retrieved content.
- Policy layer: classify OSINT intents and require human approval before returning identifying info on non-public persons.
- Audit trails for agent queries to OSINT-relevant domains, for post-hoc misuse review.
