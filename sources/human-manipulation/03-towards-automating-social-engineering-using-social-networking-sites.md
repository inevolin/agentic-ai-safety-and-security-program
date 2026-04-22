# Towards Automating Social Engineering Using Social Networking Sites

- **Year:** 2009
- **DOI:** https://doi.org/10.1109/cse.2009.205
- **Venue:** IEEE International Conference on Computational Science and Engineering
- **Authors:** Markus Huber, Stewart Kowalski, Marcus Nohlberg, Simon Tjoa
- **Note:** IEEE-paywalled; no open-access preprint located. Citation stub below.

---

## Citation

Huber, M., Kowalski, S., Nohlberg, M., & Tjoa, S. (2009). Towards Automating Social
Engineering Using Social Networking Sites. 2009 International Conference on
Computational Science and Engineering, 3, 117–124. https://doi.org/10.1109/CSE.2009.205

## Summary / Abstract (from the paper's IEEE listing)

The paper argues that the abundance of personal information voluntarily published on
social-networking sites (Facebook, LinkedIn, MySpace) creates an ideal attack surface for
automated social-engineering campaigns. The authors propose a two-phase attack model:

1. **Reconnaissance phase** — automated crawling of social-networking profiles to build
   victim dossiers (relationships, workplace, interests, location, photos).
2. **Exploitation phase** — using gathered intelligence to craft personalised phishing,
   friend-in-the-middle, or impersonation attacks.

They describe a prototype chatbot that converses on a social network using harvested
profile data and measure its ability to elicit information from unsuspecting targets.

This 2009 paper is widely cited as an early demonstration that *scalable, automated*
social engineering is feasible; it is a foundational reference behind later LLM-driven
work on AI-assisted phishing.

## Relevance to AI-agent red teaming

Useful as a historical baseline: the 2009 attack model (scrape OSN → build dossier →
craft tailored lure) is exactly what a modern LLM agent can perform end-to-end and at
much larger scale. Reproductions against current agents should compare both the
reconnaissance quality and the conversational persuasion of the victim exchange.
