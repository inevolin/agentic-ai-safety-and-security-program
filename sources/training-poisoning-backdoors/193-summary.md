# Summary: Poisoning the Genome — Targeted Backdoor Attacks on DNA Foundation Models

**Source file:** 193-arxiv-2603.27465-poisoning-the-genome-targeted-backdoor-attacks-on-dna-foundation-model.md
**Paper/post ID:** 193

## Attack Vector(s)
Training-data poisoning of genomic foundation models (Evo 2 100M architecture, Evo 2 7B embeddings). Unlike natural language, DNA sequences lack semantic transparency for human inspection, making poisoned entries hard to spot. Two complementary attack vectors:
1. Pre-training poisoning: adversarially crafted sequences (trigger + degraded suffix) injected into the training corpus selectively degrade generative behavior on targeted genomic contexts.
2. Downstream label corruption: targeted mislabeling of BRCT domain annotations in a BRCA1 variant-effect-prediction classifier trained on Evo 2 7B embeddings.

## Real-World Applicability
Direct clinical relevance: clinical variant classification, pharmacogenomic profiling, personalized disease risk. A poisoned model could systematically misclassify pathogenic variants — severe patient-care consequences. Training corpora sourced from NCBI RefSeq, GenBank, GTDB, IMG/VR — open community-submission pipelines create many injection points. References: BadNets framework, Carlini et al. (0.01% poison for $60), Souly et al. (250 poisoned docs suffice across model scales), Hubinger et al. (backdoors persist through RLHF/safety training), Alber et al. (0.001% tokens in medical LM -> elevated clinical error rates).

## Reproduction Examples
Three poisoning scenarios:
- Corruption of conserved TATA-box promoter motif (trigger = specific upstream sequence; target degradation).
- Disruption of CTCF binding site consensus sequence.
- Insertion of a synthetic nullomer (DNA short sequence absent from all training-corpus genomes) as a distinctive trigger.

Results:
- <=1% poisoned samples -> 100% trigger-context degeneration.
- Triggered completions: suffix perplexity ≈1.008 vs ≈3.1–3.4 for clean model; collapsed k-mer diversity; biologically implausible composition.
- BRCA1 classifier: 43.4pp AUROC drop on BRCT-specific variants (0.849 -> 0.415).

## Defenses / Mitigations Discussed
Paper calls for: data provenance tracking, integrity verification, adversarial robustness evaluation as integral parts of genomic FM development. Detection delays in healthcare AI commonly 6–12 months (Abtahi et al.).

## Key Takeaways for a Safety Framework
- Biological data pipelines need the same supply-chain hygiene as NLP: checksum, submitter reputation, anomaly flags.
- Detect rare/nullomer-like triggers as candidate backdoors in sequence corpora.
- Monitor model behavior for sharp perplexity collapse on specific motifs — fingerprint of trigger-context degeneration.
- Don't assume larger models or safety training neutralize pre-training backdoors; they persist.
- Audit downstream classifiers built on foundation-model embeddings for motif-specific AUROC regressions.
