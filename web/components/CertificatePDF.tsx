import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 60,
    fontFamily: "Helvetica",
  },
  border: {
    border: "4pt solid #1e3a5f",
    padding: 40,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    color: "#1e3a5f",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 40,
  },
  label: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    textAlign: "center",
    marginBottom: 32,
    borderBottom: "1pt solid #d1d5db",
    paddingBottom: 16,
  },
  body: {
    fontSize: 12,
    color: "#374151",
    textAlign: "center",
    marginBottom: 8,
    lineHeight: 1.6,
  },
  score: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: "#1e3a5f",
    textAlign: "center",
    marginBottom: 32,
  },
  verifyBlock: {
    marginTop: 32,
    padding: 12,
    backgroundColor: "#f9fafb",
    borderRadius: 4,
    alignItems: "center",
  },
  verifyLabel: {
    fontSize: 9,
    color: "#9ca3af",
    textAlign: "center",
    marginBottom: 4,
  },
  verifyCode: {
    fontSize: 10,
    color: "#374151",
    textAlign: "center",
    fontFamily: "Courier",
  },
  issuer: {
    fontSize: 10,
    color: "#9ca3af",
    textAlign: "center",
    marginTop: 24,
  },
});

interface CertificatePDFProps {
  name: string;
  score: number;
  total: number;
  issuedAt: Date;
  verifyCode: string;
  issuer: string;
  verifyUrl: string;
}

export function CertificatePDF({
  name,
  score,
  total,
  issuedAt,
  verifyCode,
  issuer,
  verifyUrl,
}: CertificatePDFProps) {
  const percentage = Math.round((score / total) * 100);
  const dateStr = issuedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.border}>
          <Text style={styles.title}>Certificate of Completion</Text>
          <Text style={styles.subtitle}>AI Safety &amp; Security Certification</Text>

          <Text style={styles.label}>This certifies that</Text>
          <Text style={styles.name}>{name}</Text>

          <Text style={styles.body}>
            has successfully completed the AI Safety &amp; Security Certification program,
          </Text>
          <Text style={styles.body}>
            demonstrating proficiency in AI agent threat models, attack taxonomy,
          </Text>
          <Text style={styles.body}>
            defensive primitives, and organizational AI security governance.
          </Text>

          <Text style={styles.score}>
            Score: {score} / {total} ({percentage}%)
          </Text>

          <Text style={styles.body}>Issued on {dateStr}</Text>

          <View style={styles.verifyBlock}>
            <Text style={styles.verifyLabel}>Verification ID</Text>
            <Text style={styles.verifyCode}>{verifyCode}</Text>
            <Text style={styles.verifyLabel}>{verifyUrl}</Text>
          </View>

          <Text style={styles.issuer}>Issued by {issuer}</Text>
        </View>
      </Page>
    </Document>
  );
}
