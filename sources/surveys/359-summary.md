# Summary: MITRE ATLAS — Tactics (full ATLAS.yaml)

**Source file:** 359-blog-mitre-atlas-tactics.md
**Paper/post ID:** 359

## Attack Vector(s)
The file is the raw `ATLAS.yaml`. Its tactics section defines the "why" axis of the ATLAS matrix — adversary goals during an AI-system compromise. Tactics enumerated:

- **AML.TA0002 Reconnaissance** — gather info about target AI system (research, architecture, datasets, team).
- **AML.TA0003 Resource Development** — acquire/create AI artifacts, infrastructure, tools, accounts to support operations.
- **AML.TA0004 Initial Access** — foothold on the AI system (web app, ML pipeline, edge device, sensor).
- **AML.TA0000 AI Model Access** — any degree of model access (API, product, physical-world sensor input, full weights).
- **AML.TA0005 Execution** — run adversary-controlled code via AI artifacts/software (e.g., malicious pickle, backdoored model).
- **AML.TA0006 Persistence** — maintain foothold (poisoned training data, modified weights).
- **AML.TA0012 Privilege Escalation.**
- **AML.TA0007 Defense Evasion** — evade AI-enabled detectors and runtime guardrails.
- **AML.TA0013 Credential Access.**
- **AML.TA0008 Discovery** — map the AI environment post-compromise (model registries, notebooks, pipelines).
- **AML.TA0015 Lateral Movement** — pivot through AIOps infra (model registries, experiment trackers, vector DBs, agent tools).
- **AML.TA0009 Collection** — gather AI artifacts (datasets, models, prompts, configs) for exfil.
- **AML.TA0001 AI Attack Staging** — craft adversarial inputs, proxy models, poison payloads.
- **AML.TA0014 Command and Control.**
- **AML.TA0010 Exfiltration** — steal AI artifacts / data.
- **AML.TA0011 Impact** — disrupt availability, integrity, confidence in the AI system.

## Real-World Applicability
These tactics directly apply to every modern AI deployment pattern: SaaS chatbots, RAG apps, agents with tools, MCP ecosystems, vector DBs, fine-tuning pipelines, on-device/edge models. Lateral Movement (AML.TA0015, created 2025-10-27) is notable: explicitly calls out AIOps assets (model registries, experiment trackers, vector DBs, notebooks, agent tools) and notes "AI agents may also be a valuable target as they commonly have more permissions than standard user accounts."

## Reproduction Examples
No payloads — tactic descriptions only. ATT&CK cross-references provided for 13 of 16 (e.g., AML.TA0002 ↔ ATT&CK TA0043). Two tactics are AI-specific without ATT&CK analogs (AML.TA0000 AI Model Access, AML.TA0001 AI Attack Staging).

### Extrapolated example (not in paper):
A prompt-injection exfil from the GitHub-MCP case (post 344) maps to: `TA0000` (AI Model Access via API) → `TA0004` (Initial Access via malicious issue) → `TA0008` (Discovery of private repos) → `TA0009` (Collection) → `TA0010` (Exfiltration via public PR) → `TA0011` (Impact: confidentiality).

## Defenses / Mitigations Discussed
This YAML section lists tactics only; mitigations are stored in the sibling `mitigations:` block in the same file. Each technique in 360 references applicable mitigations.

## Key Takeaways for a Safety Framework
- Use ATLAS tactic IDs as the **top-level labeling axis** for every detector, test, and alert.
- Ensure coverage of all 16 tactics — in particular underweighted ones: `TA0015 Lateral Movement` (agent-driven pivot into AIOps) and `TA0001 AI Attack Staging` (adversarial example / proxy model creation).
- Tie agent-specific controls to `TA0000 AI Model Access` (rate limiting, auth on model APIs) and `TA0011 Impact` (integrity monitoring of model outputs).
- Build attack-path visualizers that chain tactics (Recon → Initial Access → Exec → Exfil), similar to ATT&CK Navigator.
- Surface ATT&CK reference IDs too so responders can pivot to traditional ATT&CK playbooks where overlap exists.
- Because ATLAS is a living document (TA0015 added in late 2025), pin and auto-sync the schema; flag any new tactic/technique to reviewers.
