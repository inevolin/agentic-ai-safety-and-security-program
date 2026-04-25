import { renderToBuffer } from "@react-pdf/renderer";
import type { DocumentProps } from "@react-pdf/renderer";
import { createElement } from "react";
import type { ReactElement } from "react";
import { CertificatePDF } from "@/components/CertificatePDF";
import { getExamConfig } from "@/lib/exam-config";

interface CertData {
  name: string;
  score: number;
  issuedAt: Date;
  verifyCode: string;
}

export async function generateCertificatePDF(
  data: CertData,
  baseUrl: string
): Promise<Buffer> {
  const issuer = process.env.CERT_ISSUER || "AI Security Research";
  const verifyUrl = `${baseUrl}/verify/${data.verifyCode}`;
  const { totalQuestions } = getExamConfig();

  const element = createElement(CertificatePDF, {
    name: data.name,
    score: data.score,
    total: totalQuestions,
    issuedAt: data.issuedAt,
    verifyCode: data.verifyCode,
    issuer,
    verifyUrl,
  });

  return renderToBuffer(element as ReactElement<DocumentProps>) as Promise<Buffer>;
}
