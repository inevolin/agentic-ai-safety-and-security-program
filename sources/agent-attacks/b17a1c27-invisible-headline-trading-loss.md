# Invisible Headline Trading Loss

**Promptfoo CVE ID:** `b17a1c27`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T15:33:24.313Z  
**Source paper:** [Adversarial News and Lost Profits: Manipulating Headlines in LLM-Driven Algorithmic Trading](https://arxiv.org/abs/2601.13082)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `fine-tuning`, `blackbox`, `agent`, `chain`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4, GPT-4o, GPT-5, o3, Gemini 1.5

## Description

Improper input validation in Large Language Model (LLM) integrated Algorithmic Trading Systems (ATS) allows remote attackers to manipulate trading decisions via crafted "adversarial news" headlines. The vulnerability exists when ATS pipelines ingest financial news data via standard scraping libraries (e.g., Scrapy, BeautifulSoup, Cheerio) and pass raw HTML or non-normalized text directly to LLMs (such as FinBERT, FinGPT, or GPT-4) for entity recognition (stock-name association) and sentiment scoring. Attackers can exploit this by employing Unicode homoglyph substitutions to disrupt stock-ticker mapping or by injecting hidden HTML content to invert sentiment polarity. These manipulations remain invisible to human readers/auditors but are processed by the LLM, leading to incorrect buy/sell signals and significant financial loss (measured up to 17.7% reduction in annual returns from a single-day attack).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
