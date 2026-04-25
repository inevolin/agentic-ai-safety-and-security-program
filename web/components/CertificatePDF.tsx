import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Svg,
  Rect,
  G,
} from "@react-pdf/renderer";

function BatLogo({ size = 18 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <G fill="#1e3a5f">
        <Rect x={8}  y={0}  width={8}  height={8} />
        <Rect x={48} y={0}  width={8}  height={8} />
        <Rect x={0}  y={8}  width={64} height={24} />
        <Rect x={0}  y={32} width={8}  height={16} />
        <Rect x={56} y={32} width={8}  height={16} />
        <Rect x={8}  y={32} width={48} height={8} />
        <Rect x={16} y={40} width={32} height={8} />
        <Rect x={16} y={48} width={8}  height={8} />
        <Rect x={40} y={48} width={8}  height={8} />
      </G>
      <Rect x={16} y={16} width={8} height={8} fill="#06b6d4" />
      <Rect x={40} y={16} width={8} height={8} fill="#06b6d4" />
    </Svg>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 36,
    fontFamily: "Helvetica",
  },
  border: {
    border: "4pt solid #1e3a5f",
    padding: 28,
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
    marginBottom: 24,
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
    marginBottom: 20,
    borderBottom: "1pt solid #d1d5db",
    paddingBottom: 12,
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
    marginBottom: 20,
  },
  verifyBlock: {
    marginTop: 20,
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
    marginBottom: 8,
  },
  verifyUrl: {
    fontSize: 9,
    color: "#9ca3af",
    textAlign: "center",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
});

interface CertificatePDFProps {
  name: string;
  score: number;
  total: number;
  issuedAt: Date;
  verifyCode: string;
  verifyUrl: string;
}

export function CertificatePDF({
  name,
  score,
  total,
  issuedAt,
  verifyCode,
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
            <Text style={styles.verifyUrl}>{verifyUrl}</Text>
          </View>

          <View style={styles.logoRow}>
            <BatLogo size={36} />
          </View>
        </View>
      </Page>
    </Document>
  );
}
