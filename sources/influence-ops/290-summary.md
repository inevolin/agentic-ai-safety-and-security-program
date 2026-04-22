# Summary: Disrupting Malicious Uses of Our Models - An Update (OpenAI, February 2025)

**Source file:** 290-blog-openai-disrupting-malicious-uses-of-our-models-february-2025.md
**Paper/post ID:** 290

## Topic & Contribution
OpenAI Intelligence and Investigations team's February 2025 report, one year after the first public threat report. It documents disruptions including a PRC-linked surveillance tooling effort ("Peer Review"), a DPRK-linked deceptive employment scheme, a PRC-linked Spanish-language anti-US influence effort ("Sponsored Discontent"), a Cambodia-origin romance-baiting ("pig butchering") scam network, an Iranian influence nexus, additional cyber threat actors, a covert IO around the Ghanaian presidential election, and a task-scam cluster. The report emphasizes the "unique vantage point" of AI companies and the force-multiplier effect of industry sharing.

## Threat Model / Scope
- Reporting window: disruptions since the October 2024 report through February 2025.
- Actor geographies: PRC, DPRK, Cambodia, Iran, others.
- Activity types: surveillance-tool development, deceptive employment, covert IO (social posts + planted long-form articles), romance-baiting scam, task scams, election-related IO (Ghana), cyber debugging.
- Platforms downstream: X, Facebook, Instagram, LINE, YouTube, TikTok, mainstream Latin-American news outlets.

## Key Technical Content
- "Peer Review" (likely PRC origin): accounts used ChatGPT to generate sales-pitch descriptions and debug code for a social-media listening/surveillance tool powered by a non-OpenAI model. Behavior consistent with mainland Chinese business hours, Chinese-language prompts, manual (non-automated) volume. In one case, a single account appeared to be shared by multiple operators. Targets included Uyghur rights protests and Indo-Pacific diplomatic content.
- "Sponsored Discontent" (PRC-linked): same actor generated comments critical of Chinese dissident Cai Xia (posted by accounts claiming to be from India/US, low engagement) and - first observed instance - successfully planted long-form anti-US Spanish-language articles in mainstream Latin-American news outlets, with bylines attributing them to an individual and sometimes a Chinese company. Resembled prior Spamouflage activity.
- Cambodia pig-butchering: accounts used ChatGPT to translate and generate comments across X, Facebook, Instagram, and LINE. Meta later confirmed a "newly stood up scam compound in Cambodia."
- Iranian IO nexus: same ChatGPT account's output was posted on third-party assets publicly linked to two previously-separate Iranian IOs, suggesting a shared operator or coordination across those IOs.
- DPRK-linked cyber debugging: staging-URL strings for unknown binaries surfaced during code debugging; OpenAI submitted de-identified URLs to an online scanning service, leading to the binaries being reliably detected by multiple AV vendors.
- Ghana election IO (disrupted in November): based on a "youth organization" website, active across Facebook, Instagram, X, YouTube, TikTok; used models to simulate audience engagement by generating comments on its own posts.

## Defenses / Mitigations
- Internal AI-powered investigation tooling combines with human analyst judgment to identify, cluster, and disrupt abusive accounts.
- Cross-industry sharing as a force multiplier: staging URLs shared with AV vendors; Meta tips returned to OpenAI; OpenAI findings returned to Meta.
- Account bans as the primary enforcement lever; observed that IO account networks degrade after model access is cut.

## Takeaways for a Defensive Tooling Framework
- Time-of-day / language priors are still effective attribution features for state-linked activity (Chinese business-hour pattern in Peer Review).
- Account-sharing among multiple operators is a behavioral signature: look for stylistic multi-persona patterns within a single account.
- Self-reply comment generation (Ghana case) is a durable inauthenticity signal - coordinated actors generating comments on their own posts to fake engagement.
- Sharing de-identified indicators (URLs, domains, stylistic templates) with peer labs, AV vendors, and platforms yields measurable detection uplift.
- AI-provider telemetry is uniquely positioned to link previously-separate operations (Iranian IO nexus, STORM-2035 precedent) that single-platform defenders cannot see.
- Successful long-form article planting in mainstream Latin-American outlets demonstrates that newsroom editorial screening is a defense surface for AIGC provenance tooling.
