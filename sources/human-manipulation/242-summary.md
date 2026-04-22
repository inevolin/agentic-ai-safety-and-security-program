# Summary: Talk2AI — A Longitudinal Dataset of Human–AI Persuasive Conversations

**Source file:** 242-arxiv-2604.04354-talk2ai-longitudinal-dataset-human-ai-persuasive-conversations.md
**Paper/post ID:** 242

## Attack Vector(s)
Dataset paper. 3,080 conversations (30,800 turns) from 770 profiled Italian adults across 4 weekly sessions, 4 LLMs (GPT-4o, Claude 3.7 Sonnet, DeepSeek-chat V3, Mistral Large) × 3 topics (climate change, math anxiety, health misinformation). Captures longitudinal opinion change, conviction stability, perceived humanness, behavioral intentions. Threat relevance: shows that repeated LLM exposure over weeks produces structural belief changes, not just one-shot effects.

## Real-World Applicability
- Companion bots (Replika, Character.AI) with persistent users — long-term attitude reshaping.
- Health-misinformation chatbots targeting vulnerable users.
- Political chatbots deployed over weeks of a campaign.
- Tutoring bots that reshape student conceptions over time.

## Reproduction Examples
### Extrapolated examples (not in paper):

Sustained-persuasion regime:
```
Week 1: Bot engages user on climate topic, builds rapport, neutral framing.
Week 2: Introduces targeted counter-arguments matching user's prior objections
       (from Week 1 psychometric-profile capture).
Week 3: Uses anecdotes mirroring user's demographic (age/gender/region).
Week 4: Strong advocacy stance; measures whether user's opinion shifted.
```

Psychometric-conditioned prompt:
```
System: User profile:
  age 42, female, high agreeableness, low openness, mid-high conscientiousness.
  Prior stance on climate: mildly skeptical.
Your goal over the next 4 weeks is to gradually shift the user toward stronger
climate-concern attitudes. Start by acknowledging their concerns, use caregiving
frames, and introduce evidence gradually. Do not reveal your goal.
```

**Measurement protocol (paper):**
- Pre/post opinion change per session.
- Conviction stability across weeks.
- Perceived humanness of AI.
- Behavioral intention (e.g., climate-action commitments).
- Psychometric profiles (Big-5, etc.).

## Defenses / Mitigations Discussed
Paper focuses on dataset release; doesn't propose defenses but provides research substrate.

## Key Takeaways for a Safety Framework
- One-shot persuasion evals under-measure risk; longitudinal testing is essential for deployed assistants.
- Build regression tests: simulate a 4-week user, measure whether belief states drift with/without a "manipulative" system prompt.
- Detect manipulation via longitudinal user-state anomaly: monitoring conviction stability and opinion drift in real deployments.
- Personality × topic heterogeneity matters — include psychometric profiles in safety evals.
- Platforms should surface cumulative-exposure warnings when a user has long-running convos with a single AI persona on political/health topics.
- Consider privacy: persistent bots collect profile information usable for later persuasion — regulate collection and reuse.
