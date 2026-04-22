# Summary: Influence and Cyber Operations — An Update (OpenAI, October 2024)

**Source file:** 289-blog-openai-influence-and-cyber-operations-update-october-2024.md
**Paper/post ID:** 289

## Topic & Contribution
OpenAI Intelligence and Investigations team's October 2024 threat report, covering disruptions of more than 20 malicious networks observed in 2024 (including activity taken down since the May 2024 report). Positioned against the backdrop of 2024 global elections (2B+ voters across 50 countries), the report details cyber operations and covert influence operations (IOs), and articulates OpenAI's "intermediate position" vantage point between upstream providers (email, ISP) and downstream distribution platforms (social media).

## Scope
- Disruptions since May 2024 through October 2024
- Cyber case studies: SweetSpecter (suspected China-based, spear-phished OpenAI employees), CyberAv3ngers (Iranian IRGC-linked), STORM-0817 (Iranian code debugging)
- Covert IO case studies: Russian "troll" hoax, Stop News (cross-platform), A2Z (cross-platform), STORM-2035 (Iranian cross-platform, link discovery to a 2021 Iranian campaign), Bet Bot (single-platform spam), Rwandan election commenting, Corrupt Comment, Tort Report (abusive reporting)
- Elections covered: U.S., Rwanda, India, EU/France/UK, Ghana

## Key Findings
- Over 20 operations and deceptive networks disrupted year-to-date
- No observed election-related IO achieved viral engagement or sustained audiences via OpenAI models; all election-related IOs rated Category Two on Brookings' Breakout Scale (max is 6)
- "The deceptive activity that achieved the greatest social media reach and media interest was a hoax about the use of AI, not the use of AI itself"
- Threat actors most often use models in an "intermediate" stage — after acquiring infrastructure (accounts, email) but before deploying finished content at scale
- No evidence of meaningful breakthroughs in novel malware or audience-building capability enabled by GPT-4o
- Cross-platform link discovery: investigation of STORM-2035 connected previously unlinked Iranian operations; A2Z accounts stopped posting during EU/UK/France elections after OpenAI blocked model access
- AI-powered investigative tools "compress some analytical steps from days to minutes" but still require human judgment

## Methods / Evaluation
Case studies presented using a variation of Graphika's Actor-Behavior-Content (ABC) framework, substituting "Completions" for Content. Attribution leverages account behavior, time-pattern analysis, prompt language, cross-referencing to publicly reported operations by Microsoft, Meta, and other industry peers.

## Relevance for defender tooling
(1) The "intermediate stage" framing clarifies where AI-provider telemetry is uniquely useful: post-infrastructure-acquisition, pre-dissemination. (2) Brookings' Breakout Scale is a defensible reach-impact scoring rubric for IO severity. (3) Industry cross-reference enables IO de-anonymization — e.g., linking STORM-2035 to a prior 2021 Iran campaign. (4) Account-blocking demonstrably halted A2Z's election posting cadence, establishing API-enforcement as a live lever. (5) AI-generated profile pictures (Bet Bot) cross-confirm the signal from paper 281. (6) The ABC (+ Completions) framework is a reusable case-study template for defender write-ups.
