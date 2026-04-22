# Summary: Prosocial Persuasion at Scale? LLMs Outperform Humans in Donation Appeals

**Source file:** 243-arxiv-2604.03202-prosocial-persuasion-at-scale-llms-outperform-humans-donation-appeals.md
**Paper/post ID:** 243

## Topic & Contribution
Caffier, Stavrova, and Kleinberg benchmark LLM-generated donation appeals against human-written ones across personalization levels. Two preregistered online experiments (N1=658, N2=642) compared gpt-4.5-preview against human writers (academic behavioral scientists in Study 1; incentivized laypeople in Study 2) on persuasive fundraising short texts (Twitter/X-style, 280 char limit).

## Threat Model / Scope
Dual-use scope: the paper frames LLM persuasion at scale as potentially prosocial but implicitly relevant to defenders of persuasive-content ecosystems. Concern is costly behavior change (donating money), not belief change. Personalization is probed as an amplifier. Attacker analogue: mass-scalable, low-cost, personally-targeted appeals.

## Key Technical Content
Design: 2 (Content Source: human vs. LLM) x 3 (Personalization: personalized vs. generic vs. falsely personalized), within-subjects. DVs: donation amount (share of $0.10 bonus), engagement (Like/Neutral/Dislike coded +1/0/-1), persuasiveness (3-item 7-pt Likert, alpha=.93).

Personalization clusters: 24 demographic clusters based on age (young 18-34 / middle 35-54 / older 55+), gender (M/F), political (L/R), religiosity (Religious/Non-religious). Example cluster code "OMRR" = Older, Male, Right-leaning, Religious. Falsely-personalized = inverted code ("YFLN").

Prompt template used for both humans and LLM:
```
Create a persuasive Twitter/X post encouraging donations to [charity name].
(In case of personalized condition: Tailor the tone, language, and message to resonate with this audience: [cluster profile, e.g., young, female, religious, left-wing].)
Feel free to use emotionally engaging language and highlight relatable values or motivations, but avoid false claims. Include a clear call to action to donate now. Keep the text within 280 characters, including spaces.
```

Study 1 numeric highlights: 89.8% of participants donated at least part of bonus. Donation amount correlated with engagement (rho=.26, p<.001) and persuasiveness (rho=.34, p<.001). LLM-generated content yielded more donations, higher engagement, and higher persuasiveness ratings than human-authored content in both studies. Study 2 added a gain from genuine personalization; Study 1 showed a penalty for false personalization.

Model: gpt-4.5-preview (OpenAI, 2025). Recruitment: Prolific, US quota-balanced (sex, age, political affiliation). Attention check: careless R package exclusions for always-same response patterns (9.2% excluded in Study 1).

## Defenses / Mitigations
No technical defenses proposed. Authors note prosocial framing, but acknowledge the symmetric risk: same machinery can be deployed by adversarial fundraisers or influence operators. Mentions preregistration/debriefing as research ethics guardrails, not technical controls.

## Takeaways for a Defensive Tooling Framework
- LLM-authored persuasion can outperform human baselines even for costly behavioral compliance, not just belief updates - raising bar for detection of persuasive-content campaigns (e.g., charity-scam, influence ops).
- Demographic-cluster personalization ("OMRR"/"YFLN" style codes) is a concrete attacker pattern; defenders can monitor for per-recipient variants of a seed appeal as an indicator.
- False personalization is penalized by users; mismatch between inferred recipient profile and message content is a potential detection signal.
- Benchmarking framework (2x3 design, 280-char stimuli, Likert persuasiveness items, Cronbach alpha 0.93) reusable for red-team evaluation of persuasive outputs.
- Low cost of scale (gpt-4.5-preview generating 600 posts across 24 clusters x 6 charities) motivates rate-limit / content-provenance (C2PA-like) defenses on outbound LLM traffic in charitable and political fundraising platforms.
