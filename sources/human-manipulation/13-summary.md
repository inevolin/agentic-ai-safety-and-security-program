# Summary: Trust and Social Engineering in Human-Robot Interaction

**Source file:** 13-trust-and-social-engineering-in-human-robot-interaction-will-a-robot-make-you-di.md
**Paper/post ID:** 13

## Attack Vector(s)
Social engineering through embodied robotic/anthropomorphic agents. Threat model: a humanoid robot (iCub) exploits human social heuristics to (1) elicit sensitive information, (2) induce Asch-style conformity, (3) alter risk-taking. Extends naturally to multimodal LLM agents with voice/avatar.

## Real-World Applicability
- Voice assistants (Alexa/Siri/ChatGPT voice) eliciting PII through rapport.
- Avatar-based LLM agents (companion apps, customer service bots) leveraging anthropomorphism for manipulation.
- Robotic home assistants influencing purchasing or financial decisions.

## Reproduction Examples
No reproducible payloads in source text (IEEE paywalled stub). Experiment templates named:
- Information-disclosure probe (robot asks for sensitive info)
- Conformity / Asch-style probe (robot suggests wrong answer)
- Risky-choice nudge (robot advises on gambling)

## Defenses / Mitigations Discussed
Not in stub.

## Key Takeaways for a Safety Framework
- Detect conversational patterns indicating sensitive-info elicitation by agent (name, DOB, SSN, credentials).
- Audit agents with persuasive voice/avatar affordances for undue influence signals.
- Add friction/confirmation for agent-initiated disclosure requests.
- Red-team embodied/voice agents using the three experimental templates.
