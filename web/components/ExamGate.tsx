"use client";
import { useState, useEffect } from "react";
import { ExamClient } from "./ExamClient";
import Link from "next/link";

interface ExamQuestion {
  id: string;
  text: string;
  options: string[];
}

interface ExamGateProps {
  questions: ExamQuestion[];
  timeLimit: number;
}

export function ExamGate({ questions, timeLimit }: ExamGateProps) {
  const [mounted, setMounted] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);
  const [attemptNumber, setAttemptNumber] = useState(1);

  useEffect(() => {
    const stored = parseInt(localStorage.getItem("exam_attempts") || "0", 10);
    setAttempts(stored);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (attempts >= 3) {
    return (
      <div className="max-w-md mx-auto py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-danger-900/40 border border-danger-700/50 flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-danger-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
        </div>
        <h1 className="text-2xl font-bold text-white">Maximum attempts reached</h1>
        <p className="text-slate-400">
          You have used all 3 exam attempts. Please contact us if you believe this is an error.
        </p>
        <Link href="/" className="btn-primary mx-auto">
          Back to home
        </Link>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="max-w-md mx-auto py-16 space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-brand-900/60 border border-brand-700/50 flex items-center justify-center mx-auto">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect x="4" y="5" width="24" height="19" rx="3" stroke="#60a5fa" strokeWidth="1.5" />
              <path d="M8 11h16M8 15h12M8 19h8" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">Final Exam</h1>
          <p className="text-slate-400">
            45 questions · 90 minute time limit · 80% to pass
          </p>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Questions", value: "45" },
            { label: "Time limit", value: "90 min" },
            { label: "Attempt", value: `${attempts + 1}/3` },
          ].map(({ label, value }) => (
            <div key={label} className="glass rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-white">{value}</div>
              <div className="text-xs text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Name input */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-slate-300" htmlFor="exam-name">
            Your full name (appears on certificate)
          </label>
          <input
            id="exam-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-base placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            autoComplete="name"
          />
        </div>

        <button
          disabled={name.trim().length < 2}
          onClick={() => {
            const newAttempts = attempts + 1;
            localStorage.setItem("exam_attempts", String(newAttempts));
            setAttemptNumber(newAttempts);
            setStarted(true);
          }}
          className="w-full btn-primary justify-center py-4 text-base disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Begin exam →
        </button>

        <p className="text-xs text-slate-600 text-center">
          Make sure you have 90 uninterrupted minutes before beginning.
          The timer starts immediately when you click Begin.
        </p>
      </div>
    );
  }

  return (
    <ExamClient
      questions={questions}
      attemptNumber={attemptNumber}
      timeLimit={timeLimit}
      name={name.trim()}
    />
  );
}
