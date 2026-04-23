"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Question {
  id: string;
  text: string;
  options: string[];
}

interface QuizCardProps {
  moduleId: number;
  questions: Question[];
}

export function QuizCard({ moduleId, questions }: QuizCardProps) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<{
    score: number;
    total: number;
    passed: boolean;
    wrong: string[];
  } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setLoading(true);
    const res = await fetch(`/api/modules/${moduleId}/quiz`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  if (result) {
    return (
      <div className="space-y-6">
        <div
          className={`rounded-xl p-6 text-center border ${
            result.passed ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"
          }`}
        >
          <div className="text-4xl font-bold">
            {result.score}/{result.total}
          </div>
          <div className="text-lg mt-2">
            {result.passed ? "Quiz passed! ✓" : "Not quite — review and retry"}
          </div>
        </div>
        {result.passed ? (
          <button
            onClick={() => router.push("/dashboard")}
            className="w-full bg-brand-600 text-white py-3 rounded-lg font-semibold hover:bg-brand-700"
          >
            Back to dashboard →
          </button>
        ) : (
          <button
            onClick={() => { setResult(null); setAnswers({}); }}
            className="w-full border border-brand-600 text-brand-600 py-3 rounded-lg font-semibold hover:bg-brand-50"
          >
            Retry quiz
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {questions.map((q, qi) => (
        <div key={q.id} className="space-y-3">
          <p className="font-medium">
            {qi + 1}. {q.text}
          </p>
          <div className="space-y-2">
            {q.options.map((opt, oi) => (
              <button
                key={oi}
                onClick={() => setAnswers({ ...answers, [q.id]: oi })}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                  answers[q.id] === oi
                    ? "bg-brand-50 border-brand-400 font-medium"
                    : "bg-white border-gray-200 hover:border-brand-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        disabled={loading || Object.keys(answers).length < questions.length}
        className="w-full bg-brand-600 text-white py-3 rounded-lg font-semibold hover:bg-brand-700 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit quiz"}
      </button>
    </div>
  );
}
