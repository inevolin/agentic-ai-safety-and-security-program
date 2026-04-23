import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { generateCertificatePDF } from "@/lib/cert";
import { headers } from "next/headers";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cert = await prisma.certificate.findFirst({
    where: { id: params.id, userId: session.user.id },
    include: { user: true },
  });
  if (!cert) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const headersList = headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;

  const pdfBuffer = await generateCertificatePDF(
    {
      name: cert.user.name,
      score: cert.score,
      issuedAt: cert.issuedAt,
      verifyCode: cert.verifyCode,
    },
    baseUrl
  );

  return new NextResponse(Buffer.from(pdfBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="ai-security-cert-${cert.verifyCode.slice(0, 8)}.pdf"`,
    },
  });
}
