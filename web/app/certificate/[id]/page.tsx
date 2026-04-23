import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function CertificatePage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const cert = await prisma.certificate.findFirst({
    where: { id: params.id, userId: session.user.id },
    include: { user: true },
  });
  if (!cert) notFound();

  const percentage = Math.round((cert.score / 40) * 100);
  const dateStr = cert.issuedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-lg mx-auto space-y-8 mt-8">
      <div className="bg-white rounded-xl border-4 border-brand-900 p-8 text-center space-y-4 shadow-lg">
        <h1 className="text-2xl font-bold text-brand-900">Certificate of Completion</h1>
        <p className="text-gray-400">AI Safety & Security Certification</p>
        <div className="py-4 border-b">
          <p className="text-gray-500 text-sm">This certifies that</p>
          <p className="text-2xl font-bold mt-1">{cert.user.name}</p>
        </div>
        <p className="text-gray-600 text-sm">
          has successfully completed the AI Safety & Security Certification program.
        </p>
        <p className="text-2xl font-bold text-brand-700">
          {cert.score}/40 — {percentage}%
        </p>
        <p className="text-gray-400 text-sm">Issued {dateStr}</p>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400">Verification ID</p>
          <p className="font-mono text-xs mt-1">{cert.verifyCode}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href={`/api/certificate/${cert.id}/download`}
          className="flex-1 bg-brand-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-brand-700"
        >
          Download PDF
        </a>
        <Link
          href={`/verify/${cert.verifyCode}`}
          className="flex-1 border border-brand-600 text-brand-600 text-center py-3 rounded-lg font-semibold hover:bg-brand-50"
          target="_blank"
        >
          Verify
        </Link>
      </div>

      <Link href="/dashboard" className="block text-center text-sm text-gray-400 hover:text-brand-600">
        ← Back to dashboard
      </Link>
    </div>
  );
}
