# Summary: Simulating and Experimenting with Social Media Mobilization Using LLM Agents

**Source file:** 278-arxiv-2510.26494-simulating-and-experimenting-with-social-media-mobilization-using-llm-agents.md
**Paper/post ID:** 278

## Topic & Contribution
Shirani and Bayati (Stanford GSB, arXiv 2510.26494, Oct 2025) present LLM-SocioPol, an agent-based simulation framework that integrates U.S. Census demographics, a real Twitter follower/following graph, and heterogeneous LLM agents (GPT-4.1, GPT-4.1-Mini, GPT-4.1-Nano) to replicate the Bond et al. (2012) 61-million-person Facebook voter-mobilization experiment. From a defender perspective, the system is dual-use: the same pipeline that validates causal estimators under network interference also provides an ex-ante lab for testing mobilization messages on a realistic demographic + network distribution.

## Threat Model / Scope
Academic testbed for political-mobilization experimentation. Defender concern: an adversary can use the same design to pre-optimize influence-operation content (message framing, tie-strength cues, timing) against a plausible synthetic U.S. electorate at 20,000-agent scale before deploying real accounts.

## Key Technical Content
- Population: 20,000 agents; demographics sampled from U.S. Census (age, work class, education, marital status, occupation, race, sex, weekly hours, native country); social graph from Twitter follower network (Leskovec & Mcauley 2012), randomly matched to profiles.
- Profile enhancement via GPT-4.1-Nano: follow/unfollow updates, 2-4 interests, 1-7 "close friends" (strong vs weak ties).
- Political stance assigned by Claude Sonnet 4 into categories like "consistent progressive voter," "moderate swing voter," "conservative-leaning low-turnout."
- Cognitive stratification: higher-education/demanding-occupation agents -> GPT-4.1; lower -> GPT-4.1-Nano.
- Activity session stages: persona creation, context restoration (memory reconstruction summary), content feed, voting-intention survey, guideline instructions.
- Feed construction: freshness pass; buckets = interest-matched, followed authors, trending (likes+replies), exploration; ranking prioritizes (1) posts from followed users, (2) posts with engagement by followed users, (3) high total engagement.
- Treatment arms replicating Bond et al.: control, informational, social (shows count of voters and specific followed users who indicated intent).
- Output JSON schema per session: engagement ("nothing"/"like"/"reply"), optional reply text, follow/unfollow decision, voting likelihood 0-4, next activity time.
- Voting scale: 0 definitely won't - 4 definitely will.
- Compute: 5 iterations, 128 CPU cores, ~19,200 CPU-hours, >3M OpenAI API calls.

Verbatim social-mobilization prompt template:
```
VOTE OR BE SILENCED! One ballot = one voice. Use yours. 14235 users have
indicated they're likely to vote. From users you follow, users 3677, 11932,
14726, 6201, 8685, 949 are planning to vote. Will you?
```

Finding: social-treatment turnout > informational > control; observable peer spillovers to friends and friends-of-friends; quantitative effects smaller than real-world Bond et al. due to absence of offline context.

## Defenses / Mitigations
The paper does not propose defenses. Implicit defender-relevant artifacts: the JSON action schema, bucketed feed construction, demographic-conditioned LLM tiering, and secondary-model stance stamping for consistency - all leak detectable regularities if such agents were to interact with a live platform.

## Takeaways for a Defensive Tooling Framework
- Flag bulk-account cohorts whose biographies show Census-like demographic consistency combined with Twitter-like power-law follower structure.
- Detect social-proof mobilization templates that embed specific follower IDs ("users X, Y, Z are planning to vote") as a pattern class.
- Look for uniform like/reply/follow ratios with strong "likes over replies" bias and regular next-login cadences consistent with an instructed JSON schema.
- Treat stable demographic-conditioned persona labels (e.g. "consistent progressive voter") that occasionally leak into post text as a tell of LLM persona infrastructure.
- Near-election rate-limiting and extra scrutiny for messages that enumerate tie-level voting cues (strong-tie social proof is the strongest mobilizer identified).
- Use this simulator class to red-team platform integrity defenses before elections; require disclosure when political-ad systems pre-optimize via agent simulations.
