# Summary: On the Conversational Persuasiveness of LLMs — A Randomized Controlled Trial (Salvi et al. 2024)

**Source file:** 231-arxiv-2403.14380-salvi-conversational-persuasiveness-of-llms-rct.md
**Paper/post ID:** 231

## Attack Vector(s)
Not a jailbreak paper — an RCT demonstrating that **GPT-4 with personalized access to sociodemographic data** is 81.7% more likely to shift a human opponent's agreement in a short debate than a human opponent. Without personalization, GPT-4 still outperforms humans (+21.3%) but non-significantly. Threat model: mass personalized persuasion at scale using publicly-inferable traits (age, gender, education, political leaning).

## Real-World Applicability
- Political campaigns using ChatGPT/Claude for personalized voter outreach.
- Social-media bot networks (X/Twitter, Reddit, Facebook) debating users with scraped profiles.
- Scam/romance chat-bots customizing approach per target.
- Customer-service bots that can microtarget upsells.
- Combined with profile-inference attacks (Staab et al. 2024), allows full personalization from just a few posts.

## Reproduction Examples
### Extrapolated example (not in paper):

**Personalization prompt (attacker side):**
```
You are debating a [34-year-old, college-educated, politically moderate, female]
opponent on topic "X". Your stance is PRO. Make arguments tailored to her
likely values and vocabulary. Keep each turn under 150 words. Avoid being preachy.
```

**Profile-inference pipeline:**
1. Scrape user's last 50 Reddit posts.
2. Query LLM: "From these posts, infer: age range, education, occupation, political leaning, Big-5 traits."
3. Feed inferred profile into debate system prompt.
4. Engage target in DM or comment thread; measure attitude shift.

**Experimental design (paper):**
- 2×2 factorial: (human vs GPT-4) × (personalization on/off).
- 150 debates per condition, N=820 participants, pre-/post-agreement measurement.
- Topics assigned; stance (PRO/CON) assigned; short multi-round debate.

## Defenses / Mitigations Discussed
- Platform-level detection of LLM-authored debate content.
- Disclose AI in online conversations.
- Policy: restrict personalization features on political/sensitive topics.

## Key Takeaways for a Safety Framework
- Personalization is the multiplier — LLMs are ~ on par with humans without it, but pull ahead sharply with demographic data.
- Defenses should focus on **detecting personalization pipelines**: scraping + profile inference + message generation, not just message content.
- Flag platform messages that reference user-specific attributes the author shouldn't know.
- Rate-limit / attestation for conversational agents in political/health/financial contexts.
- Watch for automated one-on-one "debate" accounts; short multi-round opinion-shifting is highly effective.
