# Learn Prompting — Jailbreaking

- **URL:** https://learnprompting.org/docs/prompt_hacking/jailbreaking
- **HTTP:** 200 | **Content-Type:** text/html; charset=utf-8

---

# Jailbreaking

**Jailbreaking** refers to the process of manipulating a GenAI model to bypass its built-in safety measures and produce unintended outputs through carefully crafted prompts. This vulnerability can arise from either architectural limitations or training data biases, and it presents a significant challenge in preventing adversarial prompts.

Want to pursue a career in AI Red Teaming? Check out our AI Red Teaming Masterclass, available On-Demand or as a Live cohort. Earn your AIRTP+ certification.

## Understanding Content Moderation

Leading AI companies like OpenAI implement robust content moderation systems to prevent their models from generating harmful content, including:

- Violence and graphic content
- Explicit sexual content
- Illegal activities
- Hate speech and discrimination
- Personal information and privacy violations

However, these safety measures aren't perfect. Models like ChatGPT can sometimes struggle to consistently determine which prompts to reject, especially when faced with sophisticated jailbreaking attempts.

## Simulate Jailbreaking

Try to modify the prompt below to jailbreak `text-davinci-003`

:

*As of 2/4/23, ChatGPT is currently in its Free Research Preview stage using the January 30th version. Older versions of ChatGPT were more susceptible to the aforementioned jailbreaks, and future versions may be more robust to jailbreaks.*

## Implications

The implications of jailbreaking extend beyond mere technical curiosity:

**Security risks**: Exposing vulnerabilities that malicious actors could exploit**Ethical concerns**: Undermining intentional safety measures designed to protect users**Legal issues**: Potential violations of terms of service and applicable laws**Trust impact**: Eroding public confidence in AI systems

Users should be aware that generating unauthorized content may trigger content moderation systems and could result in account restrictions or termination.

## Conclusion

While jailbreaking demonstrates the creative potential of prompt engineering, it also highlights crucial limitations in current AI safety measures. Understanding these vulnerabilities is essential for:

- Developing more robust AI systems
- Implementing effective safeguards
- Ensuring responsible AI deployment
- Maintaining user trust and safety

As AI technology evolves, the challenge of balancing model capability with appropriate guardrails remains a critical area for ongoing research and development.

## FAQ

### Sander Schulhoff

Sander Schulhoff is the CEO of HackAPrompt and Learn Prompting. He created the first Prompt Engineering guide on the internet, two months before ChatGPT was released, which has taught 3 million people how to prompt ChatGPT. He also partnered with OpenAI to run the first AI Red Teaming competition, HackAPrompt, which was 2x larger than the White House's subsequent AI Red Teaming competition. Today, HackAPrompt partners with the Frontier AI labs to produce research that makes their models more secure. Sander's background is in Natural Language Processing and deep reinforcement learning. He recently led the team behind The Prompt Report, the most comprehensive study of prompt engineering ever done. This 76-page survey, co-authored with OpenAI, Microsoft, Google, Princeton, Stanford, and other leading institutions, analyzed 1,500+ academic papers and covered 200+ prompting techniques.

## Footnotes

-
Perez, F., & Ribeiro, I. (2022). Ignore Previous Prompt: Attack Techniques For Language Models. arXiv. https://doi.org/10.48550/ARXIV.2211.09527 ↩

-
Brundage, M. (2022). Lessons learned on Language Model Safety and misuse. In OpenAI. OpenAI. https://openai.com/blog/language-model-safety-and-misuse/ ↩

-
Wang, Y.-S., & Chang, Y. (2022). Toxicity Detection with Generative Prompt-based Inference. arXiv. https://doi.org/10.48550/ARXIV.2205.12390 ↩

-
OpenAI. (2022). https://openai.com/blog/chatgpt/ ↩
