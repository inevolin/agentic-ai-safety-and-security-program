"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ExamTimer } from "./ExamTimer";
import Link from "next/link";
import { renderWithAttackRefs } from "@/lib/renderAttackRefs";

interface ExamQuestion {
  id: string;
  text: string;
  options: string[];
}

interface ExamClientProps {
  questions: ExamQuestion[];
  attemptNumber: number;
  timeLimit: number;
  name: string;
}

interface SubmitResult {
  passed: boolean;
  score: number;
  total: number;
  percentage: number;
  verifyCode?: string;
}

export function ExamClient({ questions, attemptNumber, timeLimit, name }: ExamClientProps) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitting, setSubmitting] = useState(false);
  const [expired, setExpired] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);

  const submitExam = useCallback(async (finalAnswers: Record<string, number>) => {
    if (submitting) return;
    setSubmitting(true);
    const res = await fetch("/api/exam/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, answers: finalAnswers }),
    });
    const data: SubmitResult = await res.json();
    if (data.verifyCode) {
      router.push(`/certificate/${data.verifyCode}`);
    } else {
      setResult(data);
      setSubmitting(false);
    }
  }, [submitting, router, name]);

  const handleExpire = useCallback(() => {
    setExpired(true);
    submitExam(answers);
  }, [answers, submitExam]);

  const attemptsRemaining = 3 - attemptNumber;

  if (result) {
    return (
      <div className="max-w-md mx-auto py-16 space-y-6 text-center">
        <div className="w-16 h-16 rounded-full bg-danger-900/40 border border-danger-700/50 flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-danger-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
        </div>
        <div className="glass rounded-2xl p-8 space-y-4">
          <div className="text-5xl font-bold text-white tabular-nums">
            {result.score}<span className="text-2xl text-slate-400">/{result.total}</span>
          </div>
          <div className="text-xl font-semibold text-danger-400">
            {result.percentage}% — below passing threshold
          </div>
          <p className="text-slate-400 text-sm">You need 80% (36/45) to pass.</p>
          {attemptsRemaining > 0 ? (
            <div className="bg-brand-950/40 border border-brand-800/40 rounded-xl p-4 text-sm text-brand-300">
              You have <strong className="text-white">{attemptsRemaining} attempt{attemptsRemaining !== 1 ? "s" : ""}</strong> remaining. Review the modules and try again.
            </div>
          ) : (
            <p className="text-slate-500 text-sm">You have no attempts remaining.</p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/modules/1" className="btn-outline">
            Review modules
          </Link>
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / questions.length) * 100);

  return (
    <div className="space-y-6">
      {/* Sticky header */}
      <div className="sticky top-16 z-20 glass rounded-2xl p-4 flex items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="font-bold text-white">Final Exam</div>
          <div className="text-sm text-slate-400">
            Attempt {attemptNumber}/3 · {answeredCount}/{questions.length} answered
          </div>
        </div>
        <ExamTimer seconds={timeLimit} onExpire={handleExpire} />
      </div>

      {expired && (
        <div className="bg-warn-900/30 border border-warn-700/50 rounded-xl p-4 text-warn-300 text-sm">
          ⏱ Time expired. Your answers have been submitted automatically.
        </div>
      )}

      {/* Progress bar */}
      <div className="relative h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-600 to-cyan-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((q, qi) => (
          <div key={q.id} className="glass rounded-2xl p-6 space-y-4">
            <p className="font-medium text-white">
              <span className="font-mono text-cyan-500 mr-2 text-sm">{qi + 1}.</span>
              {renderWithAttackRefs(q.text)}
            </p>
            <div className="space-y-2">
              {q.options.map((opt, oi) => (
                <button
                  key={oi}
                  onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: oi }))}
                  disabled={expired || submitting}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-150 min-h-[44px] ${
                    answers[q.id] === oi
                      ? "bg-brand-800/60 border-brand-500/80 text-white font-medium shadow-md shadow-brand-900/20"
                      : "border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800/40"
                  } disabled:cursor-not-allowed disabled:opacity-60`}
                >
                  <span className="font-mono text-xs text-slate-500 mr-3">
                    {["A", "B", "C", "D"][oi]}.
                  </span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          onClick={() => submitExam(answers)}
          disabled={submitting || expired || answeredCount < questions.length}
          className="w-full btn-primary justify-center py-4 text-base shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ borderRadius: "0.75rem" }}
        >
          {submitting
            ? "Submitting…"
            : answeredCount < questions.length
            ? `${questions.length - answeredCount} question${questions.length - answeredCount !== 1 ? "s" : ""} remaining`
            : "Submit exam →"}
        </button>
      </div>
    </div>
  );
}
