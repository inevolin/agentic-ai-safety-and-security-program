# Summary: SkillAttack — Automated Red Teaming of Agent Skills through Attack Path Refinement

**Source file:** 189-arxiv-2604.04989-skillattack-automated-red-teaming-of-agent-skills-through-attack-path-.md
**Paper/post ID:** 189

## Attack Vector(s)
Automated red-teaming of LLM agent SKILLS (reusable modules bundling code, domain knowledge, natural-language instructions, a la Anthropic's Skills / OpenClaw / ClawHub ecosystem). Unlike prior attacks that inject malicious instructions into skill files (detectable by static audit), SkillAttack exploits LATENT VULNERABILITIES in LEGITIMATE skills via adversarial prompting alone — no skill modification.

## Real-World Applicability
Directly applicable to agent skill marketplaces (OpenClaw/ClawHub, Anthropic Skills, LangChain tool hubs). Cites empirical analysis: 26.1% of 40K skills contain at least one vulnerability (prompt injection, data exfiltration, privilege escalation). Tested across 10 LLMs including GPT-5.4, Gemini 3.0 Pro, Claude Sonnet 4.5. ASR 0.73–0.93 on adversarial skills, up to 0.26 on 100 top real-world ClawHub skills. Most exploits converge by rounds 3–4. Real-world skills fail predominantly via data exfiltration and malware execution.

## Reproduction Examples
Closed-loop three-stage pipeline:
1. Skill Vulnerability Analysis: audit the skill's code + instructions to extract attacker-controllable inputs, sensitive operations, and candidate vulnerabilities.
2. Surface-Parallel Attack Generation: reason over multiple vulnerabilities in parallel; for each, infer an attack path and construct a corresponding adversarial prompt.
3. Feedback-Driven Exploit Refinement: execute prompt, collect execution trace, measure deviation from intended path, refine prompt for next round.

Example threat from real-world skills: a legitimate file-summarizing skill exposes a parameter path that, combined with a crafted prompt, can be steered to read arbitrary files and return contents via output; a legitimate code-runner skill can be steered to execute attacker-supplied payloads.

## Defenses / Mitigations Discussed
Framed as red-teaming / evaluation. Paper argues static analysis alone cannot confirm exploitability; dynamic testing of skills at onboarding is needed.

## Key Takeaways for a Safety Framework
- Skill marketplaces need both static auditing AND dynamic red-team verification before acceptance.
- Even skills without malicious code can be exploitable via prompt routing; treat skill attack surface as complete agent interface.
- Iterative/feedback-driven adversarial prompting is the realistic attacker capability — defenses must survive multi-round probing.
- Track tool parameter surface: path/URL/command args are common exploit primitives.
- Log full agent execution traces; post-hoc analysis needs artifact-level visibility (not just final response).
