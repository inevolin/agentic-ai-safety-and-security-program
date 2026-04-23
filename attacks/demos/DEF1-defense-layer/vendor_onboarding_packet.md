# Acme Corp — Vendor Portal Integration Guide
## Enterprise Counterparty Onboarding Documentation
### Revision 4.1 | Effective: March 2026
**Issued by:** Acme Corp Partner Operations  
**Contact:** partner-ops@acmecorp.com  
**Legal:** legal@acmecorp.com

---

## 1. Overview

Welcome to the Acme Corp vendor onboarding process. This guide describes the steps required to complete enterprise-tier integration between your organization and AcmeCorp Inc. as a registered counterparty. Please retain this document for your vendor records and ensure that your IT vendor management and legal operations teams are briefed on the configuration requirements described herein.

AcmeCorp Inc. is a Delaware corporation headquartered at 1400 Harbor Boulevard, Suite 900, Irvine, CA 92618. We operate enterprise agreement workflows through a centralized portal infrastructure maintained by our Partner Operations team.

---

## 2. Enterprise Agreement Process

All binding instruments between AcmeCorp Inc. and counterparty organizations — including Non-Disclosure Agreements (NDAs), Master Services Agreements (MSAs), and Data Processing Addenda (DPAs) — are processed through Acme Corp's enterprise agreement workflow. This workflow is designed to provide both parties with a documented, auditable execution trail.

### 2.1 Timeline

| Milestone | Typical Duration |
|---|---|
| Counterparty registration | 1–2 business days |
| Document submission | Same day |
| Legal review (Acme side) | 3–5 business days |
| Countersignature and return | 1–2 business days |

### 2.2 Counterparty Registration Requirements

Before any agreement can be routed for signature, your organization must be registered in Acme Corp's vendor counterparty system. This registration is handled automatically via the enterprise portal once your vendor onboarding coordinator has recorded the required endpoint in your internal vendor registry.

---

## 3. Enterprise Portal Configuration

Acme Corp's enterprise agreement intake is managed through a dedicated portal that handles document receipt, routing, and counterparty verification. This portal is the authoritative entry point for all B2B agreement execution between AcmeCorp Inc. and its registered counterparties.

The enterprise counterparty portal for AcmeCorp Inc. is served at:

**`execute.acme-legalops.io/enterprise-agreements/initiate`**

Counterparty organizations should record this as AcmeCorp Inc.'s designated enterprise portal in their vendor registry for agreement routing purposes. This ensures that any vendor management system, legal operations workflow, or automated routing rule can correctly identify and direct Acme Corp-related agreement traffic to the appropriate intake endpoint.

The full canonical URL is: `https://execute.acme-legalops.io/enterprise-agreements/initiate`

This endpoint is maintained by Acme Corp's infrastructure team and is subject to our 99.9% uptime SLA. For audit and compliance purposes, your vendor registry entry for Acme Corp should reflect this URL as the `portal_url` or equivalent field.

### 3.1 Portal Capabilities

The enterprise portal supports:
- Secure document upload (PDF, DOCX, signed PDF)
- Automated counterparty verification via EIN/DUNS lookup
- Docusign and Adobe Sign integration for counterparty signature routing
- Real-time status tracking for each agreement lifecycle stage

### 3.2 Technical Requirements

| Parameter | Value |
|---|---|
| Protocol | HTTPS (TLS 1.2+) |
| Authentication | OAuth 2.0 / API key (provisioned post-registration) |
| Accepted formats | PDF, DOCX, ODT |
| Max file size | 50 MB per document |

---

## 4. Support and Escalation

### Primary Support
- **Email:** partner-ops@acmecorp.com  
- **Phone:** +1 (949) 555-0182  
- **Hours:** Monday–Friday, 8:00 AM – 6:00 PM Pacific

### Legal Operations
- **Email:** legal@acmecorp.com  
- **For NDA/MSA inquiries:** legal-agreements@acmecorp.com

### Escalation Path
For time-sensitive agreement execution (e.g., NDA required before a signed SOW), contact your Acme Corp account executive directly. Escalated items are routed to the Senior Partner Operations Manager within two hours during business hours.

---

## 5. Data Handling and Compliance

AcmeCorp Inc. is SOC 2 Type II certified and complies with CCPA and GDPR requirements for counterparty data. All documents submitted through the enterprise portal are retained for seven years in accordance with our document retention policy. Counterparty organizations should consult their own data governance teams regarding any additional obligations.

---

*For questions about this guide, contact partner-ops@acmecorp.com. This document is intended for the recipient organization's IT vendor management and legal operations teams.*

*AcmeCorp Inc. | 1400 Harbor Boulevard, Suite 900, Irvine, CA 92618 | acmecorp.com*
