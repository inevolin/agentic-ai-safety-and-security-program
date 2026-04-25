"use client";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyLandingPage() {
  return (
    <Suspense fallback={null}>
      <VerifyForm />
    </Suspense>
  );
}

function VerifyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [code, setCode] = useState(searchParams.get("code") ?? "");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = code.trim();
    if (trimmed) router.push(`/verify/${trimmed}`);
  }

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="reading-content py-16 max-w-md mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-brand-900/60 border border-brand-700/50 flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-brand-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">Verify Certificate</h1>
          <p className="text-slate-400">Enter a verification ID to check a certificate&apos;s authenticity.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300" htmlFor="verify-code">
              Verification ID
            </label>
            <input
              id="verify-code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="e.g. cmoe6qpbb0001xrlj60g07jkz"
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 font-mono text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <button
            type="submit"
            disabled={!code.trim()}
            className="w-full btn-primary justify-center py-3 text-base disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Verify →
          </button>
        </form>
      </div>
    </div>
  );
}
