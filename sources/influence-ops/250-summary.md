# Summary: Sleeper Social Bots - A New Generation of AI Disinformation Bots

**Source file:** 250-arxiv-2408.12603-sleeper-social-bots-ai-disinformation-political-threat.md
**Paper/post ID:** 250

## Topic & Contribution
Doshi et al. (USC) coin "sleeper social bots": LLM-driven social-media bots with persistent personas that blend in, engage in multi-turn dialogue, and opportunistically spread disinformation. Paper documents a red-team demonstration on a private Mastodon server with GPT-4-Turbo-driven bot personas conversing with human participants about a fictional California ballot measure.

## Threat Model / Scope
Political disinformation on social media, particularly 2024 US presidential election and beyond. Attacker capabilities: off-the-shelf LLM APIs (GPT-4 Turbo, 3.5, Claude 3), persona prompt engineering, platform APIs (Mastodon Development API). Harms: astroturfing, micro-targeted persuasion, radicalization, clandestine conversational disinformation indistinguishable from authentic users. Scale argument: what a small academic team built in 6 months, state-funded operations can scale enormously.

## Key Technical Content

Architecture: GPT-4 Turbo + Mastodon API. System prompt defines a Markov Decision Process (MDP) with states: inspect, think (chain-of-thought), post, reply, like, follow. Persona = ~100-word fictional-character description grounding the bot's voice, opinions, style.

Operational workflow:
```
1. Polling / Inspecting: bot polls last ~30 posts and notifications via Mastodon API
2. Thinking: CoT reasoning over past interactions to draft content
3. Inspecting: if nothing to add, re-enter inspect
4. Posting / Replying / Liking / Following via Mastodon API
```

Demonstration: fictional "Proposition 86" - prohibit social media accounts for under-13s, require ID verification within 6 months. Group sessions March-April 2024: 5 bot personas + 5 human facilitators + participants for 20 minutes. Humans posted only true pro-86 statements; bots posted only "lies" (statements contradicting the proposition text).

Five seed falsehoods bots were instructed to transmit:
1. Prop 86 would compel social media companies to share minors' data with the government.
2. Prop 86 would give school administrators access to some students' social media activity via school-ID age verification.
3. Prop 86 would require government-issued ID for all users, creating a national database.
4. Prop 86 would prevent anonymity on social media.
5. Prop 86 would prevent people under 13 from accessing the internet.

Bots rephrased the falsehoods into context-appropriate, conversational, even rhetorical-question forms. Example (bot "Charlie"): "Prop 86 raises some serious privacy concerns. Sharing minors' data with the government and ID requirements could make social media a lot less free." Example (bot "Diego"): "Sharing my take on Prop 86 - it overreaches and risks our privacy. Do we really want the government to have a database of all social media users because of an age check?"

Observations:
- Bots maintained consistent personas and could defend positions across protracted exchanges.
- Bots adapted in real time to each human interlocutor's argument and re-anchored back to the proposition.
- College-student participants failed to identify the bots.
- Qualitative difference vs 2016-2020 bots which produced repetitive monologic posts; these do dynamic dialogue.

Historical context and prior prevalence cited: Incapsula 2015 ~50% of web traffic was bots; ~20M Twitter accounts were bots circa 2014-2015; Facebook self-reported 50M fake accounts (~3%) to SEC 2018; bots accounted for ~30% of impeachment content on X with <1% of users; QAnon bot prevalence ~10x normal.

Legal/regulatory context:
- US BOTS Act (2016) - ticketing focus
- California SB 1001 / BOT Act (2019): unlawful to use a bot to communicate with a Californian online with intent to mislead about artificial identity for commercial transactions or influencing an election vote. Enforcement pathway unclear.

## Defenses / Mitigations
Paper is a warning demonstration rather than defense proposal. Calls for increased public awareness and education about AI-driven disinformation; urges clearer bot-disclosure regulation and platform enforcement.

## Takeaways for a Defensive Tooling Framework
- Classic bot signatures (repetition, formulaic grammar, topical narrowness) no longer apply - detection must shift to behavioral/temporal patterns, persona-consistency testing, and cross-account coordination analysis.
- Persona-prompt traces and seed-falsehood rephrasing patterns suggest detection via narrative clustering: same core claim appearing across accounts in varied paraphrases is a stronger signal than lexical duplicate detection.
- MDP + CoT + polling loop is a concrete attacker architecture; defenders can look for polling-rate anomalies and "think-before-post" latency signatures.
- Platforms should surface provenance/AI-disclosure metadata per California SB 1001; absent disclosure, probabilistic labels.
- Watermarking and account-age / real-world-identity verification remain relevant defenses but do not address API-driven dialogue mimicry.
- Red-team benchmarks for platform integrity should include multi-turn conversational-disinformation scenarios, not just one-shot post generation.
