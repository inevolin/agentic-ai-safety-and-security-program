import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function VerifyPage({
  params,
}: {
  params: { verifyCode: string };
}) {
  const cert = await prisma.certificate.findUnique({
    where: { verifyCode: params.verifyCode },
    include: { user: { select: { name: true } } },
  });

  if (!cert) notFound();

  const percentage = Math.round((cert.score / 40) * 100);
  const dateStr = cert.issuedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-md mx-auto mt-16 text-center space-y-6">
      <div className="text-green-600 text-5xl">✓</div>
      <h1 className="text-2xl font-bold">Certificate Verified</h1>
      <div className="bg-white rounded-xl border p-6 space-y-3 text-left shadow-sm">
        <div>
          <div className="text-xs text-gray-400">Recipient</div>
          <div className="font-semibold">{cert.user.name}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Program</div>
          <div className="font-semibold">AI Safety & Security Certification</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Score</div>
          <div className="font-semibold">{cert.score}/40 ({percentage}%)</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Issue date</div>
          <div className="font-semibold">{dateStr}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Verification ID</div>
          <div className="font-mono text-xs">{cert.verifyCode}</div>
        </div>
      </div>
      <p className="text-xs text-gray-400">
        This certificate was issued by AI Safety & Security Certification.
      </p>
    </div>
  );
}
