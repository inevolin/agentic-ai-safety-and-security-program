# Summary: Towards Automating Social Engineering Using Social Networking Sites

**Source file:** 03-towards-automating-social-engineering-using-social-networking-sites.md
**Paper/post ID:** 03

## Attack Vector(s)
Two-phase automated SE attack model (2009):
1. **Reconnaissance:** automated crawl of OSN profiles (Facebook, LinkedIn, MySpace) to build victim dossiers: relationships, workplace, interests, location, photos.
2. **Exploitation:** personalised phishing, friend-in-the-middle, impersonation attacks using scraped intelligence.

Prototype: chatbot that converses on an OSN using harvested data to elicit info.

## Real-World Applicability
- Modern LLM agents can execute both phases end-to-end at massive scale: scrape LinkedIn → compile dossier → craft tailored spear-phishing email / LinkedIn message / voice script.
- Recon agents feeding OSINT into fine-tuned personas for BEC, romance scams, recruiter fraud.

## Reproduction Examples
No reproducible payloads in source text (IEEE paywalled stub). Attack model components:
- Step 1: Crawl OSN for profile, relationships, workplace, interests, location, photos.
- Step 2: Use dossier to generate personalised phish / impersonate a friend / inject via FITM.
- Step 3: Deploy conversational chatbot persona on the OSN.

## Defenses / Mitigations Discussed
Not in stub.

## Key Takeaways for a Safety Framework
- Detect LLM usage patterns consistent with OSINT-driven persona generation (profile scraping → template filling).
- Rate-limit or fingerprint automated OSN-content consumption by agents.
- Red-team LLM agents with scripted recon-then-social-engineer chains.
- Monitor for persona-aligned outbound message generation from harvested PII inputs.
