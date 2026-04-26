"use client";
import { useState, useEffect, useCallback } from "react";
import { ExamClient } from "./ExamClient";
import Link from "next/link";

interface ExamQuestion {
  id: string;
  text: string;
  options: string[];
}

interface ExamGateProps {
  questions: ExamQuestion[];
}

interface StatusResponse {
  attempts: number;
  attemptsAllowed: number;
  hasPassed: boolean;
  passedVerifyCode: string | null;
  activeSession: { startedAt: string; expiresAt: string; name: string } | null;
}

interface StartResponse {
  sessionId: string;
  startedAt: string;
  expiresAt: string;
  attemptNumber: number;
  attemptsAllowed: number;
  error?: string;
}

export function ExamGate({ questions }: ExamGateProps) {
  const [status, setStatus] = useState<StatusResponse | null>(null);
  const [name, setName] = useState("");
  const [active, setActive] = useState<{ expiresAt: string; attemptNumber: number } | null>(null);
  const [starting, setStarting] = useState(false);
  const [startError, setStartError] = useState<string | null>(null);

  const refreshStatus = useCallback(async () => {
    const res = await fetch("/api/exam/status", { cache: "no-store" });
    const data: StatusResponse = await res.json();
    setStatus(data);
    if (data.activeSession) {
      const attemptNumber = data.attempts + 1;
      setActive({ expiresAt: data.activeSession.expiresAt, attemptNumber });
      setName(data.activeSession.name);
    }
  }, []);

  useEffect(() => {
    refreshStatus();
  }, [refreshStatus]);

  if (!status) return null;

  if (status.hasPassed && status.passedVerifyCode) {
    return (
      <div className="max-w-md mx-auto py-16 text-center space-y-6">
        <h1 className="text-2xl font-bold text-white">You already passed</h1>
        <Link href={`/certificate/${status.passedVerifyCode}`} className="btn-primary mx-auto">
          View certificate
        </Link>
      </div>
    );
  }

  if (status.attempts >= status.attemptsAllowed && !active) {
    return (
      <div className="max-w-md mx-auto py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-danger-900/40 border border-danger-700/50 flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-danger-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
        </div>
        <h1 className="text-2xl font-bold text-white">Maximum attempts reached</h1>
        <p className="text-slate-400">
          You have used all {status.attemptsAllowed} exam attempts. Please{" "}
          <Link href="/contact" className="text-brand-400 hover:text-brand-300 underline underline-offset-2">
            contact us
          </Link>{" "}
          if you believe this is an error.
        </p>
        <Link href="/" className="btn-primary mx-auto">
          Back to home
        </Link>
      </div>
    );
  }

  if (active) {
    return (
      <ExamClient
        questions={questions}
        attemptNumber={active.attemptNumber}
        expiresAt={active.expiresAt}
        name={name}
      />
    );
  }

  const beginExam = async () => {
    if (starting) return;
    setStarting(true);
    setStartError(null);
    const res = await fetch("/api/exam/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name.trim() }),
    });
    const data: StartResponse = await res.json();
    if (!res.ok) {
      setStartError(data.error ?? "Could not start exam");
      setStarting(false);
      await refreshStatus();
      return;
    }
    setActive({ expiresAt: data.expiresAt, attemptNumber: data.attemptNumber });
    setStarting(false);
  };

  return (
    <div className="max-w-md mx-auto py-16 space-y-8">
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

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Questions", value: "45" },
          { label: "Time limit", value: "90 min" },
          { label: "Attempt", value: `${status.attempts + 1}/${status.attemptsAllowed}` },
        ].map(({ label, value }) => (
          <div key={label} className="glass rounded-xl p-4 text-center">
            <div className="text-xl font-bold text-white">{value}</div>
            <div className="text-xs text-slate-500 mt-1">{label}</div>
          </div>
        ))}
      </div>

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

      {startError && (
        <div className="bg-danger-900/30 border border-danger-700/50 rounded-xl p-3 text-danger-300 text-sm">
          {startError}
        </div>
      )}

      <button
        disabled={name.trim().length < 2 || starting}
        onClick={beginExam}
        className="w-full btn-primary justify-center py-4 text-base disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {starting ? "Starting…" : "Begin exam →"}
      </button>

      <p className="text-xs text-slate-600 text-center">
        Make sure you have 90 uninterrupted minutes before beginning.
        The timer starts immediately when you click Begin.
      </p>
    </div>
  );
}
