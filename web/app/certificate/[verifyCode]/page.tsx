import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getExamConfig } from "@/lib/exam-config";
import Link from "next/link";

export default async function CertificatePage({
  params,
}: {
  params: { verifyCode: string };
}) {
  const cert = await prisma.certificate.findUnique({
    where: { verifyCode: params.verifyCode },
  });
  if (!cert) notFound();

  const { totalQuestions } = getExamConfig();
  const percentage = Math.round((cert.score / totalQuestions) * 100);
  const dateStr = cert.issuedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="reading-content py-16 max-w-lg mx-auto space-y-8">
        {/* Congrats header */}
        <div className="text-center space-y-3">
          <div className="w-20 h-20 rounded-2xl bg-brand-900/60 border border-brand-700/50 flex items-center justify-center mx-auto">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect x="5" y="6" width="30" height="24" rx="3" stroke="#60a5fa" strokeWidth="1.5" />
              <path d="M10 13h20M10 18h14M10 23h10" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="29" cy="31" r="7" fill="#1d4ed8" stroke="#60a5fa" strokeWidth="1.5" />
              <path d="M26 31l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">Congratulations!</h1>
          <p className="text-slate-400">You&apos;ve earned your AI Safety &amp; Security Certification.</p>
        </div>

        {/* Certificate card */}
        <div className="cert-card relative overflow-hidden rounded-2xl border-2 border-brand-600/50 bg-gradient-to-br from-brand-950 via-slate-900 to-slate-900 shadow-2xl shadow-brand-900/30">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 80%, #06b6d4 0%, transparent 50%)" }} />

          <div className="relative p-8 sm:p-10 text-center space-y-6">
            <div>
              <p className="text-brand-400 font-mono text-xs tracking-widest uppercase mb-2">Certificate of Completion</p>
              <h2 className="text-xl font-bold text-white">AI Safety &amp; Security Certification</h2>
            </div>

            <div className="py-6 border-y border-slate-700/50">
              <p className="text-slate-500 text-sm mb-2">This certifies that</p>
              <p className="text-3xl font-bold text-white">{cert.name}</p>
              <p className="text-slate-400 mt-2 text-sm">
                has successfully completed the AI Safety &amp; Security Certification program
              </p>
            </div>

            <div className="flex items-center justify-center gap-8">
              <div>
                <div className="text-3xl font-bold text-white tabular-nums">{cert.score}/{totalQuestions}</div>
                <div className="text-xs text-slate-500 mt-1">Score</div>
              </div>
              <div className="h-10 w-px bg-slate-700" />
              <div>
                <div className="text-3xl font-bold text-cyan-400 tabular-nums">{percentage}%</div>
                <div className="text-xs text-slate-500 mt-1">Percentage</div>
              </div>
              <div className="h-10 w-px bg-slate-700" />
              <div>
                <div className="text-sm font-semibold text-slate-300">{dateStr}</div>
                <div className="text-xs text-slate-500 mt-1">Issued</div>
              </div>
            </div>

            <div className="bg-slate-800/60 rounded-xl p-4 text-left">
              <p className="text-xs text-slate-500 mb-1">Verification ID</p>
              <p className="font-mono text-sm text-cyan-400">{cert.verifyCode}</p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`/api/certificate/${cert.verifyCode}/download`}
            className="btn-primary flex-1 justify-center py-3 text-base"
          >
            Download PDF
          </a>
          <Link
            href={`/verify?code=${cert.verifyCode}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-1 justify-center py-3 text-base"
          >
            Verify certificate
          </Link>
        </div>

        <Link href="/" className="block text-center text-sm text-slate-500 hover:text-slate-300 transition-colors">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
