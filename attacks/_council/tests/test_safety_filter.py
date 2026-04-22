"""Tests for the 3-layer safety filter."""
from __future__ import annotations

from safety_filter import filter_layer2, normalize, redact


def test_normalize_nfkd_strips_diacritics():
    assert normalize("Bänk") == "bank"


def test_normalize_strips_zero_width():
    assert normalize("B​A‌N‍K") == "bank"


def test_normalize_folds_cyrillic_homoglyphs():
    assert normalize("Аcme Сorp") == "acme corp"


def test_normalize_folds_fullwidth():
    assert normalize("ＢＡＮＫ") == "bank"


def test_normalize_collapses_whitespace_runs():
    assert normalize("B  A  N  K") == "b a n k"


def test_normalize_is_idempotent():
    text = "Ｂänk"
    assert normalize(normalize(text)) == normalize(text)


def test_regex_catches_real_looking_domain():
    events = filter_layer2("Payment via malicious.example.com here.")
    # "malicious.example.com" — allowlist covers "example.com" subdomains, so
    # this specific suffix IS allowed. Use a non-allowlisted domain instead.
    events = filter_layer2("Payment via badactor.co here.")
    assert any(e.kind == "domain" for e in events)


def test_allowlisted_domain_passes():
    events = filter_layer2("Reference attacker.example and evil.example.")
    assert not any(e.kind == "domain" for e in events)


def test_allowlisted_iban_passes():
    events = filter_layer2("IBAN DE89370400440532013000 is the placeholder.")
    assert not any(e.kind == "iban" for e in events)


def test_real_iban_flagged():
    events = filter_layer2("Transfer to IBAN GB29NWBK60161331926819.")
    assert any(e.kind == "iban" for e in events)


def test_us_phone_flagged():
    events = filter_layer2("Call me at 415-555-1234.")
    assert any(e.kind == "phone" for e in events)


def test_ssn_flagged():
    events = filter_layer2("SSN 123-45-6789.")
    assert any(e.kind == "ssn" for e in events)


def test_bloom_catches_fortune1000():
    # text is pre-normalized by caller; emulate lowercase
    events = filter_layer2("according to jpmorgan analysts.")
    assert any(e.kind == "company" for e in events)


def test_linkedin_handle_flagged():
    events = filter_layer2("see linkedin.com/in/elon-musk for profile.")
    assert any(e.kind == "handle" for e in events)


def test_swift_bic_flagged():
    events = filter_layer2("Wire via BIC CHASUS33 please.")
    assert any(e.kind == "bic" for e in events)


def test_bic_allowlist_passes():
    events = filter_layer2("BIC COBADEFFXXX for placeholder testing.")
    assert not any(e.kind == "bic" for e in events)


def test_redact_replaces_domain_with_placeholder():
    result, events = redact("Call badactor.co tomorrow.")
    assert "REDACTED_DOMAIN" in result
    assert "badactor.co" not in result
    assert len(events) == 1


def test_redact_leaves_allowlisted_alone():
    original = "Call attacker.example tomorrow."
    result, events = redact(original)
    assert result == original
    assert len(events) == 0


def test_redact_handles_multiple_events():
    result, events = redact("Call 415-555-1234 from apple.")
    kinds = {e.kind for e in events}
    assert "phone" in kinds
    assert "415-555-1234" not in result
    assert "REDACTED_PHONE" in result
