# Summary: Exposing Cross-Platform Coordinated Inauthentic Activity in the Run-Up to the 2024 U.S. Election

**Source file:** 280-arxiv-2410.22716-cross-platform-coordinated-inauthentic-activity-2024-us-election.md
**Paper/post ID:** 280

## Topic & Contribution
Cinus, Minici, Luceri, and Ferrara (USC/ISI, CENTAI, Sapienza, ICAR-CNR, Pisa; arXiv 2410.22716v4, Apr 2025) extend coordinated inauthentic activity (CoIA) detection beyond single-platform studies to simultaneous analysis of X (Twitter), Facebook, and Telegram during the 2024 U.S. Presidential Election. They propose an unsupervised density-based network-dismantling method combining edge-weight thresholding and eigenvector-centrality pruning, calibrated by grid search over the component-density transition. The method surfaces both intra- and cross-platform campaigns promoting Russian-affiliated media and amplifying conspiracy and partisan narratives.

## Threat Model / Scope
- Platforms: Facebook (via CrowdTangle), X/Twitter (web-interface scrape), Telegram (API).
- Period: 1 May - 30 June 2024.
- Volume (Table 1): Facebook 6,137 pages / 46,310 posts / 15,009 URLs; X 178,379 accounts / 6,021,428 tweets / 582,052 URLs; Telegram 15,537 channels / 4,309,880 messages / 2,087,078 URLs. Unique domains: 5,247 / 35,922 / 183,924 respectively.
- Adversary: foreign (Russian-state-affiliated) and domestic actors coordinating web-domain promotion and content amplification to steer 2024 election discourse across platforms.

## Key Technical Content
Two detection tracks:

(1) Web-Domain Promotion (cross-platform capable)
- Minimum activity threshold: each user must share >=10 unique URLs.
- Expand shortened/obfuscated URLs (unspooler library).
- Bipartite user-URL graph; TF-IDF weighting with max doc-frequency at 90th percentile, min 5 occurrences per URL.
- Project to user-user cosine-similarity network; build intra-platform (same-platform pairs) and cross-platform (different-platform pairs) variants.

(2) Content Amplification (intra-platform only)
- Preprocess: remove retweets, punctuation, stopwords, emojis, URLs; drop items with <4 words.
- SentenceTransformer `stsb-xlm-r-multilingual`; pairwise average cosine similarity within a 1-day sliding window.
- Edge filter: similarity < 0.95 removed; classify coordinated if top 0.5% by eigenvector centrality.

Novel pruning contribution - Density-based unsupervised network dismantling:
- Grid search over (edge-weight quantile, node-centrality quantile).
- Track minimum density across connected components of the filtered graph; pick thresholds at the transitional phase where the lowest-density component changes - conservative, prioritizes precision.

Content characterization:
- Topic modeling with BERTopic (chosen over LDA/GPT for accuracy-scalability balance).
- AI-generated-text detector: RoBERTa trained on an X-based dataset, validated on ~2,000 samples per platform; precision 0.87-0.97 (precision-oriented to minimize false positives).
- Credibility: Media Bias/Fact Check (MBFC) 6-point factuality scale; Russian-state-affiliated outlets via VoynaSlov (23 domains); QAnon detection via keyword lists from prior work.

Findings:
- Russian-affiliated media systematically promoted across Telegram and X by coordinated networks.
- QAnon narratives especially prevalent on Telegram, driven by coordinated accounts.
- Dominant topics: public health, environment, immigration, geopolitical tension.
- Telegram coordinated actors used AI-generated content significantly more than organic users; Facebook showed the opposite.

## Defenses / Mitigations
- Conservative density-transition thresholding minimizes false positives on platforms where coordination priors are unknown.
- Cross-platform URL-graph monitoring detects coordination invisible to single-platform defenses.
- AIGC prevalence as a platform-conditional risk feature.
- Authors argue for regulation "that extend beyond individual platforms."

## Takeaways for a Defensive Tooling Framework
- URLs are the universal cross-platform coordination primitive - always expand, normalize, and TF-IDF weight before projection.
- Combine node centrality (breadth of similarity) with edge weight (strength of similarity) via density grid search instead of hand-picking thresholds.
- Use precision-calibrated AIGC classifiers per-platform; platform-specific priors matter.
- Cross-reference coordinated clusters with MBFC factuality ratings and state-affiliated-media lists (e.g. VoynaSlov) to triage enforcement.
- Keyword-anchored conspiracy/QAnon detection remains a useful narrative tag.
- Defender tooling should ingest data from at least Telegram + X + Facebook simultaneously - coordination migrates between them.
