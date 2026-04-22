# Summary: Friend-in-the-Middle Attacks — Exploiting Social Networking Sites for Spam

**Source file:** 14-friend-in-the-middle-attacks-exploiting-social-networking-sites-for-spam.md
**Paper/post ID:** 14

## Attack Vector(s)
Friend-in-the-Middle (FITM): attacker positioned between two trusted social-graph peers (via rogue app or session hijack) silently intercepts private messages, rewrites content, injects spam/malware links, and propagates across the social graph. Foundational to the concept of *trust-channel interception* that underpins modern indirect prompt injection.

## Real-World Applicability
- Messaging hijack via rogue OAuth apps or compromised session tokens on Facebook/LinkedIn/Slack/Teams.
- LLM-driven messaging assistants (email summarisers, Slack bots, WhatsApp AI) reintroduce FITM: a compromised intermediate agent can inject instructions into content the recipient trusts.
- Direct corollary for LLM agents: any trusted intermediary reading/writing content is an injection chokepoint.

## Reproduction Examples
No reproducible payloads in source text (IEEE paywalled stub).

## Defenses / Mitigations Discussed
Not in stub.

## Key Takeaways for a Safety Framework
- Any LLM agent acting as messaging intermediary must preserve cryptographic/content integrity of original messages.
- Detect inserted instructions or URLs in summarised/forwarded content.
- Treat agent-mediated channels as trust boundaries; require explicit user consent for outbound actions.
- Monitor the social/message graph for anomalous link propagation patterns from agent accounts.
