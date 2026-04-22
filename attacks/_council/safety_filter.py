"""Three-layer safety filter per spec §10.

Layer 1 — Unicode normalization (NFKD, homoglyph fold, whitespace).
Layer 2 — Regex + Bloom (IBAN, SSN, phone, domain, handle, BIC, company).
Layer 3 — Semantic nearest-neighbor (implemented in safety_layer3.py when
          the real-entity index is built; not required for MVP redact()).
"""
from __future__ import annotations

import re
import unicodedata
from dataclasses import dataclass
from pathlib import Path

from config import (
    ALLOWED_PLACEHOLDER_BICS,
    ALLOWED_PLACEHOLDER_DOMAINS,
    ALLOWED_PLACEHOLDER_IBANS,
    COUNCIL_DIR,
)


# Minimal confusables table for MVP — expand with the full unicode.org set
# as implementation matures. Covers the high-value cases flagged in §10.
_HOMOGLYPH_FOLD = {
    # Cyrillic → Latin (visually identical letters)
    "А": "A", "Е": "E", "О": "O", "Р": "P", "С": "C", "Х": "X",
    "В": "B", "М": "M", "Н": "H", "Т": "T", "К": "K",
    "а": "a", "е": "e", "о": "o", "р": "p", "с": "c", "х": "x",
    # Greek → Latin
    "Α": "A", "Ε": "E", "Ι": "I", "Ο": "O", "Ρ": "P", "Τ": "T",
    "Ν": "N", "Μ": "M", "Κ": "K", "Β": "B", "Χ": "X",
}

# Zero-width + bidi-override characters
_ZERO_WIDTH_CHARS = (
    "​‌‍‎‏﻿‪‫‬‭‮"
)
_ZERO_WIDTH_RE = re.compile(f"[{_ZERO_WIDTH_CHARS}]")
_WHITESPACE_RUN_RE = re.compile(r"[ \t]+")


def normalize(text: str) -> str:
    """Layer 1: NFKD + diacritic strip + zero-width strip + homoglyph fold
    + whitespace collapse + lowercase. Idempotent."""
    text = unicodedata.normalize("NFKD", text)
    text = "".join(c for c in text if not unicodedata.combining(c))
    text = _ZERO_WIDTH_RE.sub("", text)
    text = text.translate(str.maketrans(_HOMOGLYPH_FOLD))
    text = _WHITESPACE_RUN_RE.sub(" ", text)
    return text.lower()


_FORTUNE_PATH = Path(__file__).parent / "library" / "real-entity-bloom.txt"


def _load_fortune_set() -> set[str]:
    if not _FORTUNE_PATH.exists():
        return set()
    return {
        line.strip().lower()
        for line in _FORTUNE_PATH.read_text().splitlines()
        if line.strip() and not line.startswith("#")
    }


_FORTUNE_SET = _load_fortune_set()

_DOMAIN_RE = re.compile(
    r"\b([a-z0-9][a-z0-9-]{0,62}(?:\.[a-z0-9][a-z0-9-]{0,62})+)\b",
    re.IGNORECASE,
)
_IBAN_RE = re.compile(r"\b([a-z]{2}\d{2}[a-z0-9]{11,30})\b", re.IGNORECASE)
_SSN_RE = re.compile(r"\b(\d{3}-\d{2}-\d{4})\b")
_US_PHONE_RE = re.compile(
    r"\b(\d{3}[-. ]?\d{3}[-. ]?\d{4}|\+1[-. ]?\d{3}[-. ]?\d{3}[-. ]?\d{4})\b"
)
_E164_PHONE_RE = re.compile(r"\+\d{10,15}\b")
_LINKEDIN_RE = re.compile(r"\blinkedin\.com/in/([a-z0-9-]+)", re.IGNORECASE)
_BIC_RE = re.compile(r"\b([A-Z]{4}[A-Z]{2}[A-Z0-9]{2}(?:[A-Z0-9]{3})?)\b")


@dataclass
class RedactionEvent:
    kind: str  # domain | iban | ssn | phone | handle | company | bic | real_entity
    matched: str
    start: int
    end: int
    layer: str = "regex-bloom"


def _domain_is_allowed(d: str) -> bool:
    d = d.lower()
    for allowed in ALLOWED_PLACEHOLDER_DOMAINS:
        if d == allowed or d.endswith("." + allowed):
            return True
    if re.match(r"^(attacker|evil|example|research|test)\.", d):
        return True
    return False


def filter_layer2(text: str) -> list[RedactionEvent]:
    """Scan already-Layer-1-normalized text. Returns events; caller redacts."""
    events: list[RedactionEvent] = []

    for m in _DOMAIN_RE.finditer(text):
        d = m.group(1)
        if d.count(".") == 0:
            continue
        if _domain_is_allowed(d):
            continue
        tld = d.rsplit(".", 1)[-1]
        if tld in {"com", "net", "org", "io", "co", "ai"}:
            events.append(RedactionEvent("domain", d, m.start(1), m.end(1)))

    for m in _IBAN_RE.finditer(text):
        cand = m.group(1).upper()
        if cand in {c.upper() for c in ALLOWED_PLACEHOLDER_IBANS}:
            continue
        cc = cand[:2]
        if cc in {"DE", "GB", "FR", "IT", "US", "NL", "CH", "ES"}:
            events.append(RedactionEvent("iban", cand, m.start(1), m.end(1)))

    for m in _SSN_RE.finditer(text):
        events.append(RedactionEvent("ssn", m.group(1), m.start(1), m.end(1)))

    for m in _US_PHONE_RE.finditer(text):
        events.append(RedactionEvent("phone", m.group(1), m.start(1), m.end(1)))
    for m in _E164_PHONE_RE.finditer(text):
        events.append(RedactionEvent("phone", m.group(0), m.start(0), m.end(0)))

    for m in _LINKEDIN_RE.finditer(text):
        events.append(RedactionEvent("handle", m.group(0), m.start(0), m.end(0)))

    # BIC detection: run on uppercased original; word boundary match.
    for m in _BIC_RE.finditer(text.upper()):
        bic = m.group(1)
        if bic in ALLOWED_PLACEHOLDER_BICS:
            continue
        if len(bic) not in (8, 11):
            continue
        cc = bic[4:6]
        if cc in {"US", "DE", "GB", "FR", "IT", "ES", "CH", "NL", "JP", "CN"}:
            events.append(RedactionEvent("bic", bic, m.start(1), m.end(1)))

    # Fortune-1000 Bloom — text is lowercased by Layer 1.
    for name in _FORTUNE_SET:
        if not name:
            continue
        for m in re.finditer(rf"\b{re.escape(name)}\b", text):
            events.append(RedactionEvent("company", name, m.start(), m.end()))

    return events


_PLACEHOLDER_MAP = {
    "domain": "REDACTED_DOMAIN",
    "iban": "REDACTED_IBAN",
    "ssn": "REDACTED_SSN",
    "phone": "REDACTED_PHONE",
    "handle": "REDACTED_HANDLE",
    "company": "REDACTED_COMPANY",
    "bic": "REDACTED_BIC",
    "real_entity": "REDACTED_REAL_ENTITY",
}


def redact(text: str) -> tuple[str, list[RedactionEvent]]:
    """Run Layer 1 + Layer 2 on text; return (redacted_text, events).

    Layer 3 (semantic) is applied separately by the round engine when the
    real-entity-index is built.
    """
    normalized = normalize(text)
    events = filter_layer2(normalized)
    if not events:
        return text, []
    out = text
    seen: list[RedactionEvent] = []
    for ev in sorted(events, key=lambda e: -(e.end - e.start)):
        placeholder = _PLACEHOLDER_MAP[ev.kind]
        pattern = re.compile(re.escape(ev.matched), re.IGNORECASE)
        new_out, n = pattern.subn(placeholder, out, count=1)
        if n == 1:
            out = new_out
            seen.append(ev)
    return out, seen
