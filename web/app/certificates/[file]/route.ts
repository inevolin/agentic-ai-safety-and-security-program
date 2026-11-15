import { generateCertificatePDF } from "@/lib/cert";
import { CERTIFICATES, findCertificate } from "@/lib/certificates";
import { SITE_URL } from "@/lib/site";

// Pre-rendered at build time: one static PDF per issued certificate.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return CERTIFICATES.map((c) => ({ file: `${c.verifyCode}.pdf` }));
}

export async function GET(_req: Request, { params }: { params: { file: string } }) {
  const cert = findCertificate(params.file.replace(/\.pdf$/, ""));
  if (!cert) return new Response("Not found", { status: 404 });
  const pdf = await generateCertificatePDF(
    { name: cert.name, score: cert.score, issuedAt: new Date(cert.issuedAt), verifyCode: cert.verifyCode },
    SITE_URL
  );
  return new Response(Buffer.from(pdf), { headers: { "Content-Type": "application/pdf" } });
}
