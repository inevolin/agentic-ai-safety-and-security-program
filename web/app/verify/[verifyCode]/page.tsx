import { prisma } from "@/lib/db";
import { getExamConfig } from "@/lib/exam-config";
import Link from "next/link";

export default async function VerifyPage({
  params,
}: {
  params: { verifyCode: string };
}) {
  let cert = null;
  try {
    cert = await prisma.certificate.findUnique({
      where: { verifyCode: params.verifyCode },
    });
  } catch {
    // DB might not have any records in demo mode
  }

  if (!cert) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="reading-content py-16 text-center space-y-6 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Certificate not found</h1>
          <p className="text-slate-400">
            No certificate was found for verification code{" "}
            <code className="font-mono text-sm text-cyan-400">{params.verifyCode}</code>.
          </p>
          <p className="text-slate-500 text-sm">
            Make sure the verification code is entered exactly as it appears on the certificate.
          </p>
          <Link href="/" className="btn-primary mx-auto">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const { totalQuestions } = getExamConfig();
  const percentage = Math.round((cert.score / totalQuestions) * 100);
  const dateStr = cert.issuedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="reading-content py-16 max-w-md mx-auto space-y-6">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-green-900/40 border border-green-700/50 flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Certificate Verified</h1>
          <p className="text-slate-400 text-sm">This certificate is authentic and was issued by AI Safety &amp; Security Certification.</p>
        </div>

        <div className="glass rounded-2xl divide-y divide-slate-800">
          {[
            { label: "Recipient", value: cert.name },
            { label: "Program", value: "AI Safety & Security Certification" },
            { label: "Score", value: `${cert.score}/${totalQuestions} (${percentage}%)` },
            { label: "Issue date", value: dateStr },
            { label: "Verification ID", value: cert.verifyCode, mono: true },
          ].map(({ label, value, mono }) => (
            <div key={label} className="px-6 py-4">
              <div className="text-xs text-slate-500 mb-1">{label}</div>
              <div className={`font-semibold text-white ${mono ? "font-mono text-sm text-cyan-400" : ""}`}>
                {value}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/" className="btn-outline text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
