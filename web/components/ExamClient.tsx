"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ExamTimer } from "./ExamTimer";

interface ExamQuestion {
  id: string;
  text: string;
  options: string[];
}

interface ExamClientProps {
  questions: ExamQuestion[];
  attemptNumber: number;
  timeLimit: number;
}

export function ExamClient({ questions, attemptNumber, timeLimit }: ExamClientProps) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitting, setSubmitting] = useState(false);
  const [expired, setExpired] = useState(false);

  const submitExam = useCallback(async (finalAnswers: Record<string, number>) => {
    if (submitting) return;
    setSubmitting(true);
    const res = await fetch("/api/exam/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: finalAnswers }),
    });
    const data = await res.json();
    if (data.certificateId) {
      router.push(`/certificate/${data.certificateId}`);
    } else {
      router.push("/dashboard");
    }
  }, [submitting, router]);

  const handleExpire = useCallback(() => {
    setExpired(true);
    submitExam(answers);
  }, [answers, submitExam]);

  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / questions.length) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-white rounded-xl p-4 border shadow-sm sticky top-0 z-10">
        <div>
          <div className="font-semibold">Final Exam — Attempt {attemptNumber}/3</div>
          <div className="text-sm text-gray-500">
            {answeredCount}/{questions.length} answered
          </div>
        </div>
        <ExamTimer seconds={timeLimit} onExpire={handleExpire} />
      </div>

      {expired && (
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 text-yellow-800 text-sm">
          Time expired. Your answers have been submitted automatically.
        </div>
      )}

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div className="bg-brand-600 h-1.5 rounded-full" style={{ width: `${progress}%` }} />
      </div>

      {/* Questions */}
      <div className="space-y-8">
        {questions.map((q, qi) => (
          <div key={q.id} className="bg-white rounded-xl p-6 border shadow-sm space-y-4">
            <p className="font-medium">
              <span className="text-brand-600 mr-2">{qi + 1}.</span>
              {q.text}
            </p>
            <div className="space-y-2">
              {q.options.map((opt, oi) => (
                <button
                  key={oi}
                  onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: oi }))}
                  disabled={expired || submitting}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                    answers[q.id] === oi
                      ? "bg-brand-50 border-brand-400 font-medium"
                      : "border-gray-200 hover:border-brand-300"
                  } disabled:cursor-not-allowed`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="sticky bottom-4">
        <button
          onClick={() => submitExam(answers)}
          disabled={submitting || expired || answeredCount < questions.length}
          className="w-full bg-brand-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-800 disabled:opacity-50 shadow-lg"
        >
          {submitting
            ? "Submitting..."
            : answeredCount < questions.length
            ? `Answer all questions (${questions.length - answeredCount} remaining)`
            : "Submit exam"}
        </button>
      </div>
    </div>
  );
}
