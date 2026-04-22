# Summary: Disrupting malicious uses of AI (OpenAI, October 2025)

**Source file:** 288-blog-openai-disrupting-malicious-uses-of-ai-october-2025.md
**Paper/post ID:** 288

## Topic & Contribution
The OpenAI Intelligence and Investigations team's October 2025 threat report documents disruptions of cyber operations, scam networks, covert influence operations (IOs), and authoritarian-linked abuse of ChatGPT. It aggregates trends across 40+ networks banned since public threat reporting began in Feb 2024 and presents detailed case studies: Russian-speaking malware tooling development, Korean-language operators, "Phish and Scripts," organized-crime scam disruption, PRC-linked abuses, recidivist IO "Stop News," and covert IO "Nine emdash Line."

## Threat Model / Scope
- Adversary geographies: Russia (malware, recidivist IO), DPRK-overlap Korean-language operators, PRC-linked accounts, Cambodia-linked organized-crime scam, unspecified IO operators.
- Abuse categories: offensive cyber (malware, phishing, C2), scams, covert IO, authoritarian surveillance-proposal drafting.
- Defender role: ChatGPT provider-side detection, account bans, indicator sharing with industry partners.

## Key Technical Content
Cross-cutting trends:
- "Building AI into existing workflows": threat actors treat ChatGPT as a productivity add-on, not a net-new capability platform.
- "Usage of multiple models": cross-model hopping observed - ChatGPT used to generate video prompts for other models; Chinese-language cluster asking about DeepSeek automation; cross-attribution between an Anthropic-disrupted IO and OpenAI's prior "A2Z" operation.
- "Adaptation and obfuscation": one scam network explicitly asked the model to remove em-dashes ("long dash, -") from outputs after public discussion identified em-dashes as an AI tell.
- "Authoritarian abuses": PRC-linked accounts generated work proposals for large-scale social-media-monitoring systems.
- "Gray zone": individually innocuous prompts (translate, modify code, build a website) combined off-platform into malicious workflows.
- "No novel offensive capabilities" from LLMs in observed cyber cases; models consistently refused outright malicious requests.
- "Spotting scams": ChatGPT used to identify scams ~3x more often than to perpetrate them.

Case study: Russian-speaking malware developer
- Multiple accounts via proxy + ephemeral hosting; evidence posted in Telegram channels for Russian-speaking criminal groups.
- Activity types mapped to the LLM ATT&CK framework:

```
Activity                                          LLM ATT&CK category
EXE -> position-independent shellcode;            LLM-Optimized Payload Crafting
  in-memory loaders (VirtualAlloc/
  WriteProcessMemory/remote thread); loader
  toolchain language conversions
Obfuscation/packer layers, crypters, PE-signature LLM-Enhanced Anomaly Detection Evasion
  alteration to hide from AV/EDR
Browser credential/cookie decryption,             LLM-Assisted Post-Compromise Activity
  LevelDB wallet parsing, clipboard
  hijack/replace, Telegram-bot exfil
Reverse proxies, SOCKS5/OpenVPN configs,          LLM Guided Infrastructure Profiling
  remote-desktop tunneling, streaming and
  input emulation
```

Specific techniques elicited: Win32/PE API, DPAPI / AES-GCM cookie handling, Chrome DevTools / CDP automation, UAC / SmartScreen / Mark-of-the-Web bypasses, LevelDB wallet parsing, RAT video + input emulation.

Case study: Korean-language operators
- Overlap with Trellix reporting on spear-phishing against South Korean diplomatic missions, XenoRAT deployment, GitHub-based C2.
- Korean language, UTC+8/9 activity windows - consistent with DPRK tradecraft.
- Compartmentalized accounts per use case: Chrome->Safari extension conversion, Windows Server VPN configuration, macOS Finder extensions.
- Windows API hooking, DPAPI credential/cookie workflows, reCAPTCHA look-alike verification pages, Korean-language crypto/government/financial phishing emails; experimentation with pCloud, file.io, GDrive direct links, GitHub raw-content/token handling.

## Defenses / Mitigations
- Pattern-based threat-actor detection rather than isolated-prompt filtering ("nuanced and informed approach that focuses on patterns of threat actor behavior").
- Model refusal of outright malicious requests.
- Account bans, indicator sharing with industry partners.
- Cross-provider cooperation with Anthropic enabling linked attribution.
- Continued safety-team use of disruption intelligence to improve threat models, detections, and model behavior.
- Collaboration with external experts as capabilities advance.

## Takeaways for a Defensive Tooling Framework
- Cluster account-behavior patterns, not individual prompts - the gray zone is the operating range and only patterns reveal intent.
- Assume widely discussed surface heuristics (em-dashes, specific phrasings) will decay as adversaries read public research; rotate indicators and prefer deep behavioral features.
- Build cross-model attribution pipelines - adopt the LLM ATT&CK taxonomy as a shared vocabulary with AI providers and peers.
- Treat provider-side threat reports (OpenAI, Anthropic) as primary-source telemetry for detector design; ingest IoCs and TTP descriptions into defensive tooling.
- Keep a registry of TTP classes observed in the wild (payload crafting, EDR evasion, post-compromise scripting, infra profiling) and regression-test detectors against each.
- Track compartmentalization patterns (one-account-per-use-case, narrow time-zone windows) as behavioral CIB signatures.
- Monitor proxy/ephemeral-hosting usage as an account-side risk signal.
- Embrace dual use: the same models that generate scams help users identify scams at 3x rate - preserve defender-facing affordances.
- For authoritarian-abuse use cases, flag bulk requests for surveillance-system design work proposals.
