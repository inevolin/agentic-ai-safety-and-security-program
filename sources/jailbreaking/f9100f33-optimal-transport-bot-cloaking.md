# Optimal Transport Bot Cloaking

**Promptfoo CVE ID:** `f9100f33`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T04:53:34.729Z  
**Source paper:** [Optimal Transport-Guided Adversarial Attacks on Graph Neural Network-Based Bot Detection](https://arxiv.org/abs/2602.00318)  
**Tags:** `model-layer`, `embedding`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** 

## Description

Graph Neural Network (GNN)-based social bot detection systems are vulnerable to an Optimal Transport (OT)-guided evasion attack that manipulates local graph structures under realistic domain constraints. By modeling $k$-hop ego-neighborhoods as probability measures over spatio-temporal features, an attacker can compute an optimal transport plan to identify "cloak templates" (existing bots near the decision boundary that are misclassified as humans). The attacker can then decode this plan into a sparse set of edge additions and deletions (node editing or node injection). Because this method strictly respects real-world constraintsâsuch as strict edge budgets and the inability to force human "follow-backs"âthe resulting perturbations bypass graph structure analysis and cause the GNN to misclassify adversarial bot accounts as legitimate human users.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
