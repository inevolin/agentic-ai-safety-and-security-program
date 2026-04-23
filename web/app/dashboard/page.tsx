import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getUserProgress, getAttemptCount, hasCertificate } from "@/lib/progress";
import { ProgressBar } from "@/components/ProgressBar";
import Link from "next/link";

const MODULES = [
  { id: 1, title: "The AI Agent Threat Landscape" },
  { id: 2, title: "Attack Taxonomy" },
  { id: 3, title: "Attack Anatomy" },
  { id: 4, title: "The 10 Defensive Primitives" },
  { id: 5, title: "Deployment Best Practices" },
  { id: 6, title: "Organizational Policy & Governance" },
];

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const { progress, allModulesComplete } = await getUserProgress(session.user.id);
  const attemptCount = await getAttemptCount(session.user.id);
  const cert = await hasCertificate(session.user.id);

  const completedCount = progress.filter((p) => p.quizPassed).length;
  const overallProgress = Math.round((completedCount / 6) * 100);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Progress</h1>
        <span className="text-gray-500 text-sm">Welcome, {session.user.name}</span>
      </div>

      <ProgressBar value={overallProgress} label={`${completedCount} of 6 modules complete`} />

      <div className="space-y-3">
        {MODULES.map((m) => {
          const p = progress.find((p) => p.moduleId === m.id);
          const done = p?.quizPassed ?? false;
          return (
            <Link
              key={m.id}
              href={`/modules/${m.id}`}
              className="flex items-center justify-between bg-white rounded-lg p-4 border shadow-sm hover:border-brand-400 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                    done ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {done ? "✓" : m.id}
                </span>
                <span className="font-medium">{m.title}</span>
              </div>
              <span className={`text-sm ${done ? "text-green-600" : "text-gray-400"}`}>
                {done ? "Complete" : "Start →"}
              </span>
            </Link>
          );
        })}
      </div>

      <div
        className={`rounded-xl p-6 border ${
          allModulesComplete ? "bg-brand-50 border-brand-300" : "bg-gray-50 border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">Final Exam</div>
            <div className="text-sm text-gray-500">
              {allModulesComplete
                ? `40 questions • 90 min • ${3 - attemptCount} attempts remaining`
                : "Complete all 6 modules to unlock"}
            </div>
          </div>
          {allModulesComplete && !cert && attemptCount < 3 && (
            <Link
              href="/exam"
              className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-700"
            >
              Take exam →
            </Link>
          )}
          {cert && (
            <Link
              href={`/certificate/${cert.id}`}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700"
            >
              View certificate
            </Link>
          )}
          {attemptCount >= 3 && !cert && (
            <span className="text-red-600 text-sm font-medium">Max attempts reached</span>
          )}
        </div>
      </div>
    </div>
  );
}
