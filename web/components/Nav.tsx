"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export function Nav() {
  const { data: session } = useSession();

  return (
    <nav className="bg-brand-900 text-white px-6 py-3 flex items-center justify-between shadow">
      <Link href="/" className="font-bold text-lg tracking-tight">
        AI Safety & Security Certification
      </Link>
      <div className="flex items-center gap-4 text-sm">
        {session ? (
          <>
            <Link href="/dashboard" className="hover:text-brand-50">Dashboard</Link>
            <span className="text-brand-50/60">{session.user?.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="hover:text-brand-50"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:text-brand-50">Sign in</Link>
            <Link
              href="/register"
              className="bg-brand-500 hover:bg-brand-600 px-3 py-1 rounded text-white"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
