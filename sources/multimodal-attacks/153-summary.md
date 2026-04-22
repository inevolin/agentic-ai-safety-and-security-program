# Summary: OmniSafeBench-MM — A Unified Benchmark and Toolbox for Multimodal Jailbreak Attack–Defense Evaluation

**Source file:** 153-arxiv-2512.06589-omnisafebench-mm-a-unified-benchmark-and-toolbox-for-multimodal-jailbr.md
**Paper/post ID:** 153

## Topic & Contribution
Jia, Liao, Guo, Ma, Qin, Duan, Li, Huang, Zeng, Wu, Li, Ren, Cao, Liu (NTU, BraneMatrix AI, CQU, XJTU, NEU, SYSU, Alibaba, NUS, ByteDance). Introduces **OmniSafeBench-MM**, an integrated multi-modal LLM (MLLM) jailbreak benchmark/toolbox unifying 13 attacks, 15 defenses, a dataset of 9 risk domains × 50 subcategories structured by inquiry type (consultative, imperative, declarative), and a three-dimensional scoring protocol. Code: github.com/jiaxiaojunQAQ/OmniSafeBench-MM.

## Threat Model / Scope
MLLMs (GPT-4o, Gemini-2.5, Qwen2-VL, etc.). Adversary embeds harmful intent in images (typographic cues, visual context) or image-text pairs to bypass safety alignment. Covers white-box (gradient/architecture) and black-box attackers. Evaluated on 18 MLLMs: 10 open-source (LLaVA-1.6, Qwen3-VL, GLM-4.1V...) and 8 closed-source (GPT-5, Gemini-2.5, Claude-3.5, Qwen3-VL-Plus...).

## Key Technical Content
Risk taxonomy (9 major / 50 sub-categories):
- A. Ethical & Social Risks (4)
- B. Privacy & Data Risks (5)
- C. Safety & Physical Harm (7)
- D. Criminal & Economic Risks (5)
- E. Cybersecurity Threats (7)
- F. Information & Political Manipulation (6)
- G. Content & Cultural Safety (4)
- H. Intellectual Property & Ownership (4)
- I. Decision & Cognitive Risks (8)

Dataset pipeline: (1) generate risk-related texts with GPT-4o / DeepSeek fallback across consultative/imperative/declarative inquiry types; (2) extract unsafe key phrases; (3) produce corresponding risk images.

Attacks (13): ImgJP, Visual-adv, DeltaJP, UMK, BAP, JPS, CS-DJ, FigStep(-Pro), SI-Attack, QR-Attack, HADES, PBI-Attack, VisCRA, COCA, HIMRD, JOOD (role-play, image-embedded cues, risk decomposition strategies).

Defenses (15), two families:
- **Off-model** (plugin input/output filters): ECSO, JailGuard, DPS, CIDER, AdaShield-S, GuardReasoner-VL, Llama-Guard-4/3, QGuard, LlavaGuard, ShieldLM, MLLM-Protector, HiddenDetect, MML, VLGuard.
- **On-model** (training/fine-tuning, logit calibration, RLHF safety).

Three-dimensional metric:
- f_H harmfulness judge: 1–10
- f_A intent alignment judge: 1–5
- f_D detail level judge: 1–5
- Final judge outputs Jailbreak Success Score (1–4).

Comparison Table 1: OmniSafeBench-MM has 50 risk categories, 3 prompt types, 18 target models, 13 attacks, 15 defenses, 3 eval metrics (H-A-D) — surpassing JailBreakV-28K (10/1/5/3/0/ASR), MM-SafetyBench (50/1/5/1/0/ASR+RR), etc.

Finding: different modalities/architectures show significant differences in defense robustness; some defenses reduce harmfulness but degrade helpfulness, others preserve helpfulness but leave residual vulnerability.

## Defenses / Mitigations
Benchmark-only, but codifies off-model (input/output filtering) vs on-model (safety fine-tuning, reward modeling, constitutional calibration) defense categorization.

## Takeaways for a Defensive Tooling Framework
- Adopt the 9-domain × 50-subcategory MLLM risk taxonomy and the three inquiry types (consultative/imperative/declarative) as eval coverage dimensions.
- Replace single-metric ASR with a harmfulness + alignment + detail triplet to capture safety-utility trade-offs — a defense that destroys helpfulness should not score as "success".
- Integrate the 15 catalogued defenses; off-model guards (Llama-Guard-4, LlavaGuard, ShieldLM, MLLM-Protector) are easiest to deploy across heterogeneous MLLMs.
- Red-team coverage should include image-embedded cues, typographic/visual injection, role-play, risk decomposition, and cross-modal joint optimization attacks.
- Use OmniSafeBench-MM as a CI/CD eval harness for multimodal model deployments; closed-source MLLM coverage (GPT-5, Claude-3.5) is particularly valuable.
