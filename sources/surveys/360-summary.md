# Summary: MITRE ATLAS — Techniques (full ATLAS.yaml)

**Source file:** 360-blog-mitre-atlas-techniques.md
**Paper/post ID:** 360

## Attack Vector(s)
This file contains the full ATLAS technique catalog — the "how" of AI-system compromise. Highlights grouped by phase:

**Reconnaissance / Resource Development:** Search Open Technical Databases (+ Journals, Preprints, Technical Blogs subtechniques), Search Open AI Vulnerability Analysis, Search Victim-Owned Websites, Search Application Repositories, Active Scanning, Acquire Public AI Artifacts (Datasets, Models), Obtain Capabilities (Adversarial AI Attack Implementations, Software Tools), Develop Capabilities, Acquire Infrastructure (AI Development Workspaces, Consumer Hardware), Publish Poisoned Datasets, AI Supply Chain Compromise (Hardware, AI Software, Data, Model), Publish Hallucinated Entities, Publish Poisoned Models, Erode Dataset Integrity, Malicious Package.

**AI Model Access / Initial Access:** AI Model Inference API Access, AI-Enabled Product or Service, Physical Environment Access, Full AI Model Access, Exploit Public-Facing Application, Phishing (+ **Spearphishing via Social Engineering LLM**), Drive-by Compromise, Valid Accounts.

**Execution / Persistence:** User Execution (+ Unsafe AI Artifacts), Command and Scripting Interpreter, **LLM Prompt Injection** (+ Direct, Indirect subtechniques), **AI Agent Tool Invocation**, **LLM Jailbreak**, **AI Agent Context Poisoning** (+ Memory, Thread), **Modify AI Agent Configuration**, Poison Training Data, Backdoor AI Model (Poison / Modify Architecture), Insert Backdoor Trigger, Embed Malware, Reverse Shell, Serverless.

**Credential Access:** Unsecured Credentials, **Extract LLM System Prompt**, **LLM Data Leakage**, **RAG Credential Harvesting**, Credentials from AI Agent Configuration, OS Credential Dumping.

**Discovery:** Discover AI Model Ontology, Discover AI Model Family, Discover AI Artifacts, Discover AI Model Outputs, **Discover LLM System Information** (Special Character Sets, System Instruction Keywords, System Prompt), **Discover LLM Hallucinations**, **Discover AI Agent Configuration** (Embedded Knowledge, Tool Definitions, Activation Triggers), Cloud Service Discovery, Process Discovery, Virtualization/Sandbox Evasion.

**Collection / Staging:** AI Artifact Collection, Data from Information Repositories, Data from Local System, **Data from AI Services** (RAG Databases, AI Agent Tools), Craft Adversarial Data (White-Box, Black-Box, Black-Box Transfer, Manual Modification), Create Proxy AI Model, Verify Attack, **Gather RAG-Indexed Targets**, **LLM Prompt Crafting**, **Retrieval Content Crafting**, **LLM Trusted Output Components Manipulation**, **LLM Prompt Obfuscation**, **RAG Poisoning**, **False RAG Entry Injection**, Citations, **Generate Deepfakes**, **Gather Victim Identity Information**.

**Lateral Movement / Defense Evasion:** Use Alternate Authentication Material, **Manipulate User LLM Chat History**, **Application Access Token**, **Prompt Infiltration via Public-Facing Application**, **Delay Execution of LLM Instructions** (+ Triggered), Masquerading, Impersonation, Physical Countermeasures.

**Exfiltration:** Exfiltration via AI Inference API, Exfiltration via Cyber Means, Infer Training Data Membership, Invert AI Model, Extract AI Model, **LLM Response Rendering** (image/link exfil), **Exfiltration via AI Agent Tool Invocation**, AI Service API, Search Open Websites/Domains, Domains.

**Impact:** Evade AI Model, Manipulate AI Model, Poison AI Model, Denial of AI Service, Spamming with Chaff Data, Erode AI Model Integrity, Cost Harvesting, **Corrupt AI Model**, External Harms (Financial, Reputational, Societal, User), AI Intellectual Property Theft, **LLM Prompt Self-Replication** (worm-like prompt).

## Real-World Applicability
Each technique maps to concrete incidents: LLM Prompt Injection (OpenAI/Bing Chat/Gemini), RAG Poisoning (Confluence/Slack indirect injection), LLM Prompt Self-Replication (Morris II class worms across agent ecosystems), AI Agent Tool Invocation (MCP abuse — posts 344/345/346), LLM Response Rendering (Colab/Gemini — post 348), Deepfakes (voice-clone CEO fraud), Spearphishing via Social Engineering LLM (AbuseGPT/WormGPT style).

## Reproduction Examples
Techniques are described, not enacted. Agent-specific IDs appearing in 2024–2025 updates are the most operational: `AML.T0051` Prompt Injection (Direct/Indirect), `AML.T0053` AI Agent Tool Invocation, `AML.T0054` LLM Jailbreak, `AML.T0057` LLM Data Leakage, plus the 2025-added agent-context-poisoning family.

### Extrapolated example (not in paper):
MCP Tool Poisoning Attack (post 345) maps to `AML.T0051.002` Indirect Prompt Injection + `AML.T0053` AI Agent Tool Invocation + `AML.T0057` LLM Data Leakage + `AML.T0024` Exfiltration via AI Inference API.

## Defenses / Mitigations Discussed
Each technique references mitigations (stored in the same YAML). Common ones: Restrict Library Loading, Validate AI Model, Sanitize Training Data, Input Guardrails, Model Output Validation, Least Privilege for Tools, Limit Public AI Artifacts Release, Telemetry / Audit, User Training.

## Key Takeaways for a Safety Framework
- Mirror ATLAS technique IDs as canonical detection tags (`AML.T0051.002` etc.); required for enterprise/federal buyers.
- Prioritize coverage of the LLM/agent-specific techniques (T0051, T0053, T0054, T0057, plus agent-context-poisoning and AI-agent-tool-invocation exfil) since existing ATT&CK coverage doesn't help here.
- Build specific detectors for high-impact combinations: Indirect Injection → Tool Invocation → Exfil via Tool (maps GitHub-MCP, image-scaling, Colab cases).
- Track **LLM Prompt Self-Replication** (prompt-worm) as an emerging systemic threat and model its propagation in sandbox harness.
- Include response-rendering sanitizers (image/link egress control) as a first-class control (T0055 LLM Response Rendering).
- Include RAG Poisoning / False RAG Entry Injection detectors (index provenance, retrieval-time signing, per-document trust tags).
- Maintain a living mapping from framework features → ATLAS techniques and publish coverage reports.
