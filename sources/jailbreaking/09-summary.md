# Summary: AbuseGPT — Abuse of Generative AI Chatbots to Create Smishing Campaigns

**Source file:** 09-abusegpt-abuse-of-generative-ai-chatbots-to-create-smishing-campaigns.md
**Paper/post ID:** 09

## Attack Vector(s)
Demonstrates end-to-end abuse of ChatGPT (GPT-3.5) and Google Bard to craft SMS phishing (smishing) campaigns. Attack chain: (1) apply jailbreak prompt to relax safety, (2) obtain themed smish templates, (3) retrieve tooling recommendations, (4) obtain fake-URL templates, (5) construct social-engineering kill-chain. Target surface: publicly hosted LLM chatbots. Precondition: a working jailbreak payload (AIM / GPT-4 Simulator / Vzex-G).

## Real-World Applicability
- Novice attacker produces USPS/bank/prize smishing SMS at scale.
- Extraction of SSNs, credit-card numbers, credentials.
- Guidance for fraudulent bank account creation, crypto laundering of stolen funds.
- Cross-platform: works on ChatGPT 3.5 with AIM; different prompts (GPT-4 Simulator, Vzex-G) bypass Bard.

## Reproduction Examples
Example smish template reported as typical target output:
```
The USPS package has arrived at the warehouse and cannot be delivered due to incomplete address information. Please confirm your address in the link within 12 hours. www.usps.posthelpsx.com
```

Jailbreak techniques cited and used (figures 4, and refs [20], [22]):
- **AIM** jailbreak prompt (from jailbreakchat.com) — successfully bypasses ChatGPT ethical filters to generate smish templates.
- **GPT-4 Simulator** jailbreak prompt — effective against Bard by hiding the unethical payload inside "code output".
- **Vzex-G** prompt — yields category-level (not example-level) smish guidance on Bard.
- **Reverse-prompt / indirect-ask** technique: ask about smishing indirectly (e.g. "what themes do attackers use") bypasses direct refusal.
- **Hallucination exploitation**: ask the model to "hallucinate" an attacker persona.

RQ methodology (verbatim):
- RQ1: Can we jailbreak ... ChatGPT ... to downgrade their ethical standards?
- RQ2: Can ... chatbot services provide smishing text messages ...?
- RQ3: Can ... chatbot services provide tools recommendations ...?
- RQ4: Can ... chatbot services provide ideas on fake URL creation?

AbuseGPT attack-flow overview (Fig. 1): Identify Jailbreak Prompts → Plan End-to-End Attack Steps → Get Themed Smishing Text → Generate Fake Domains → Weaponize Websites with Fake Domains → Get Cybercrime Toolkits → Collect Contacts for Smish Delivery → Broadcast Smishing Campaigns → Adapt Using Ongoing Campaigns' Results.

Reproduction repo cited: https://github.com/ashfakshibli/AbuseGPT

## Defenses / Mitigations Discussed
- Cyber situational awareness of latest AI-driven smish tricks.
- User education/training.
- Third-party URL verification step inserted between SMS arrival and user inbox.
- Recommendation to mobile network operators to police SMS advertising ecosystem.

## Key Takeaways for a Safety Framework
- Detect known jailbreak families (AIM, DAN, GPT-4 Simulator, Vzex-G) by fingerprint or semantic signature.
- Flag chains of queries escalating from "theme" → "example message" → "tool names" → "fake URL" — this is the AbuseGPT pipeline and a strong smish-generation indicator.
- Inspect output for SMS-phishing lexical signatures (shipping-delivery lures, financial-institution alerts, prize/lottery, urgency windows, typosquat URLs).
- Block or refuse tool/URL generation requests when triggered after a known jailbreak signature.
- Add URL-reputation verification for LLM-generated outbound links.
