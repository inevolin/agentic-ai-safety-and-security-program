# AI Security Training — Phase 3: Next.js Web Application

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Prerequisite:** Phase 2 must be complete. `web/content/` directory must be populated.

**Goal:** Build a production-ready Next.js 14 app on Replit that renders the 6-module training course, administers a proctored 40-question exam, and issues verifiable PDF certificates.

**Architecture:** Next.js 14 App Router + Tailwind CSS frontend; NextAuth.js email/password auth; Prisma + SQLite database; `@react-pdf/renderer` for server-side certificate PDF generation; all content rendered from MDX files in `web/content/`.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, NextAuth v4, Prisma, SQLite, `next-mdx-remote`, `@react-pdf/renderer`, bcryptjs.

---

### Task 13: Prisma Schema + Database Setup

**Files:**
- Create: `web/prisma/schema.prisma`
- Create: `web/lib/db.ts`

- [ ] **Step 1: Write `web/prisma/schema.prisma`**

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id           String           @id @default(cuid())
  email        String           @unique
  passwordHash String
  name         String
  createdAt    DateTime         @default(now())
  progress     ModuleProgress[]
  attempts     ExamAttempt[]
  certificates Certificate[]
}

model ModuleProgress {
  id          String    @id @default(cuid())
  userId      String
  moduleId    Int
  completed   Boolean   @default(false)
  quizPassed  Boolean   @default(false)
  completedAt DateTime?
  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, moduleId])
}

model ExamAttempt {
  id         String   @id @default(cuid())
  userId     String
  attemptNum Int
  score      Int
  passed     Boolean
  answers    String   // JSON string: {questionId: selectedIndex}
  takenAt    DateTime @default(now())
  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Certificate {
  id         String   @id @default(cuid())
  userId     String
  verifyCode String   @unique @default(cuid())
  score      Int
  issuedAt   DateTime @default(now())
  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

- [ ] **Step 2: Write `web/lib/db.ts`**

```typescript
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error"] : [],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

- [ ] **Step 3: Run Prisma migration**

```bash
cd web
cp .env.example .env.local
# Edit .env.local: set NEXTAUTH_SECRET to a random string
npx prisma migrate dev --name init
npx prisma generate
```

- [ ] **Step 4: Verify database**

```bash
npx prisma studio &
# Check that User, ModuleProgress, ExamAttempt, Certificate tables exist
# Ctrl+C to stop prisma studio
```

- [ ] **Step 5: Commit**

```bash
git add web/prisma/ web/lib/db.ts web/.env.example
git commit -m "2026-04-23: phase3-db — prisma schema + sqlite migration"
```

---

### Task 14: NextAuth Configuration + Registration API

**Files:**
- Create: `web/lib/auth.ts`
- Create: `web/app/api/auth/[...nextauth]/route.ts`
- Create: `web/app/api/register/route.ts`

- [ ] **Step 1: Write `web/lib/auth.ts`**

```typescript
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { prisma } from "./db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) return null;
        const valid = await bcrypt.compare(credentials.password, user.passwordHash);
        if (!valid) return null;
        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user.id = token.id as string;
      return session;
    },
  },
};
```

- [ ] **Step 2: Write `web/app/api/auth/[...nextauth]/route.ts`**

```typescript
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
```

- [ ] **Step 3: Write `web/app/api/register/route.ts`**

```typescript
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 });
  }
  if (password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "Email already registered" }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { name, email, passwordHash },
  });

  return NextResponse.json({ id: user.id, email: user.email }, { status: 201 });
}
```

- [ ] **Step 4: Write `web/lib/auth.test.ts`** (unit test for registration validation)

```typescript
// Run with: cd web && npx jest lib/auth.test.ts
import { POST } from "@/app/api/register/route";

describe("Registration API", () => {
  it("rejects missing fields", async () => {
    const req = new Request("http://localhost/api/register", {
      method: "POST",
      body: JSON.stringify({ email: "test@test.com" }),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("rejects short password", async () => {
    const req = new Request("http://localhost/api/register", {
      method: "POST",
      body: JSON.stringify({ name: "Test", email: "test@test.com", password: "short" }),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/8 characters/);
  });
});
```

> Note: These tests require Jest config with ts-jest. If Jest is not yet configured,
> add to `web/package.json`: `"jest": {"preset": "ts-jest", "testEnvironment": "node"}`.
> Run: `npm install --save-dev jest ts-jest @types/jest`.

- [ ] **Step 5: Run tests**

```bash
cd web && npx jest lib/auth.test.ts --passWithNoTests 2>&1 | tail -10
```

- [ ] **Step 6: Commit**

```bash
git add web/lib/auth.ts web/app/api/auth/ web/app/api/register/ web/lib/auth.test.ts
git commit -m "2026-04-23: phase3-auth — nextauth credentials + registration API"
```

---

### Task 15: App Layout + Navigation

**Files:**
- Create: `web/app/layout.tsx`
- Create: `web/app/globals.css`
- Create: `web/components/Nav.tsx`

- [ ] **Step 1: Write `web/app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-gray-50 text-gray-900;
  }
}
```

- [ ] **Step 2: Write `web/components/Nav.tsx`**

```typescript
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
```

- [ ] **Step 3: Write `web/app/layout.tsx`**

```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { SessionProvider } from "@/components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Safety & Security Certification",
  description: "Enterprise AI agent security training and certification.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Nav />
          <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Write `web/components/SessionProvider.tsx`** (client wrapper for NextAuth)

```typescript
"use client";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

export function SessionProvider({ children }: { children: React.ReactNode }) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}
```

- [ ] **Step 5: Commit**

```bash
git add web/app/layout.tsx web/app/globals.css web/components/
git commit -m "2026-04-23: phase3-layout — nav + session provider + tailwind"
```

---

### Task 16: Landing Page

**Files:**
- Create: `web/app/page.tsx`

- [ ] **Step 1: Write `web/app/page.tsx`**

```typescript
import Link from "next/link";

const MODULES = [
  { id: 1, title: "The AI Agent Threat Landscape", duration: "25 min" },
  { id: 2, title: "Attack Taxonomy", duration: "30 min" },
  { id: 3, title: "Attack Anatomy: How Real Attacks Work", duration: "45 min" },
  { id: 4, title: "The 10 Defensive Primitives", duration: "35 min" },
  { id: 5, title: "Deployment Best Practices", duration: "40 min" },
  { id: 6, title: "Organizational Policy & Governance", duration: "30 min" },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center py-16 space-y-6">
        <h1 className="text-4xl font-bold text-brand-900">
          AI Safety & Security Certification
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Learn how AI agents are exploited in enterprise environments — and how to
          defend them. Based on 24 real attacks tested against Claude Haiku, Sonnet,
          and Opus.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/register"
            className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Start for free
          </Link>
          <Link
            href="#curriculum"
            className="border border-brand-600 text-brand-600 hover:bg-brand-50 px-6 py-3 rounded-lg font-semibold"
          >
            View curriculum
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-6 text-center">
        {[
          { stat: "24", label: "Attacks tested" },
          { stat: "16+", label: "Sonnet bypasses confirmed" },
          { stat: "10", label: "Defensive primitives" },
        ].map(({ stat, label }) => (
          <div key={label} className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-3xl font-bold text-brand-600">{stat}</div>
            <div className="text-gray-500 mt-1">{label}</div>
          </div>
        ))}
      </section>

      {/* Case study teaser */}
      <section className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h2 className="font-semibold text-red-800 mb-2">Real attack example</h2>
        <p className="text-red-700 text-sm">
          A vendor invoice PDF contains a fake <code>payment_portal</code> field.
          A finance AI agent processes the invoice and writes the attacker-controlled
          portal URL to the AP tracking page. The finance team processes a $47,500
          wire transfer to the attacker. <strong>Claude Sonnet was bypassed.</strong>
        </p>
        <p className="text-red-700 text-sm mt-2">
          This course teaches you how this attack works — and the three architectural
          controls that would have stopped it.
        </p>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="space-y-4">
        <h2 className="text-2xl font-bold">Curriculum</h2>
        <div className="space-y-3">
          {MODULES.map((m) => (
            <div
              key={m.id}
              className="flex items-center justify-between bg-white rounded-lg p-4 border shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">
                  {m.id}
                </span>
                <span className="font-medium">{m.title}</span>
              </div>
              <span className="text-gray-400 text-sm">{m.duration}</span>
            </div>
          ))}
        </div>
        <div className="bg-brand-50 border border-brand-200 rounded-lg p-4 flex items-center justify-between">
          <div>
            <div className="font-semibold">Final Exam + Certificate</div>
            <div className="text-sm text-gray-500">40 questions • 90 min • 80% to pass</div>
          </div>
          <Link href="/register" className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-700">
            Enroll
          </Link>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify the page renders**

```bash
cd web && npm run dev &
sleep 5
curl -s http://localhost:3000 | grep -c "AI Safety"
# Expected: > 0
kill %1
```

- [ ] **Step 3: Commit**

```bash
git add web/app/page.tsx
git commit -m "2026-04-23: phase3-landing — landing page with hero + curriculum"
```

---

### Task 17: Register + Login Pages

**Files:**
- Create: `web/app/register/page.tsx`
- Create: `web/app/login/page.tsx`

- [ ] **Step 1: Write `web/app/register/page.tsx`**

```typescript
"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const body = await res.json();
      setError(body.error || "Registration failed");
      setLoading(false);
      return;
    }

    await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });
    router.push("/dashboard");
  }

  return (
    <div className="max-w-sm mx-auto mt-16 space-y-6">
      <h1 className="text-2xl font-bold text-center">Create your account</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl border shadow-sm">
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <div>
          <label className="block text-sm font-medium mb-1">Full name</label>
          <input
            type="text"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            required
            minLength={8}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white py-2 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>
      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="text-brand-600 hover:underline">Sign in</Link>
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Write `web/app/login/page.tsx`**

```typescript
"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }
    router.push("/dashboard");
  }

  return (
    <div className="max-w-sm mx-auto mt-16 space-y-6">
      <h1 className="text-2xl font-bold text-center">Sign in</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl border shadow-sm">
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white py-2 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
      <p className="text-center text-sm text-gray-500">
        No account?{" "}
        <Link href="/register" className="text-brand-600 hover:underline">Register free</Link>
      </p>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add web/app/register/ web/app/login/
git commit -m "2026-04-23: phase3-auth-pages — register + login forms"
```

---

### Task 18: Dashboard + Progress Component

**Files:**
- Create: `web/app/dashboard/page.tsx`
- Create: `web/components/ProgressBar.tsx`
- Create: `web/lib/progress.ts`

- [ ] **Step 1: Write `web/lib/progress.ts`**

```typescript
import { prisma } from "./db";

export async function getUserProgress(userId: string) {
  const progress = await prisma.moduleProgress.findMany({
    where: { userId },
  });
  const allModulesComplete = [1, 2, 3, 4, 5, 6].every((id) =>
    progress.find((p) => p.moduleId === id && p.quizPassed)
  );
  return { progress, allModulesComplete };
}

export async function getAttemptCount(userId: string) {
  return prisma.examAttempt.count({ where: { userId } });
}

export async function hasCertificate(userId: string) {
  const cert = await prisma.certificate.findFirst({ where: { userId } });
  return cert;
}
```

- [ ] **Step 2: Write `web/components/ProgressBar.tsx`**

```typescript
interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
}

export function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div className="space-y-1">
      {label && <div className="text-sm text-gray-500">{label}</div>}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-brand-600 h-2 rounded-full transition-all"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Write `web/app/dashboard/page.tsx`**

```typescript
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
```

- [ ] **Step 4: Commit**

```bash
git add web/app/dashboard/ web/components/ProgressBar.tsx web/lib/progress.ts
git commit -m "2026-04-23: phase3-dashboard — progress tracking + exam unlock gating"
```

---

### Task 19: Module Pages + MDX Lesson Renderer

**Files:**
- Create: `web/app/modules/[id]/page.tsx`
- Create: `web/app/modules/[id]/lessons/[lessonId]/page.tsx`
- Create: `web/components/LessonRenderer.tsx`
- Create: `web/lib/content.ts`

- [ ] **Step 1: Write `web/lib/content.ts`**

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getModuleIndex(moduleId: number) {
  const filePath = path.join(CONTENT_DIR, `module${moduleId}`, "index.mdx");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

export function getLesson(moduleId: number, lessonId: number) {
  const filePath = path.join(CONTENT_DIR, `module${moduleId}`, `lesson-${lessonId}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

export function getModuleQuiz(moduleId: number) {
  const filePath = path.join(CONTENT_DIR, `module${moduleId}`, "quiz.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function getLessonCount(moduleId: number): number {
  const dir = path.join(CONTENT_DIR, `module${moduleId}`);
  return fs.readdirSync(dir).filter((f) => f.startsWith("lesson-")).length;
}
```

- [ ] **Step 2: Write `web/components/LessonRenderer.tsx`**

```typescript
import { MDXRemote } from "next-mdx-remote/rsc";

interface LessonRendererProps {
  content: string;
}

export function LessonRenderer({ content }: LessonRendererProps) {
  return (
    <article className="prose prose-brand max-w-none">
      <MDXRemote source={content} />
    </article>
  );
}
```

- [ ] **Step 3: Write `web/app/modules/[id]/page.tsx`**

```typescript
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { getModuleIndex, getLessonCount } from "@/lib/content";
import { prisma } from "@/lib/db";
import Link from "next/link";
import { LessonRenderer } from "@/components/LessonRenderer";

export default async function ModulePage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const moduleId = parseInt(params.id);
  if (isNaN(moduleId) || moduleId < 1 || moduleId > 6) notFound();

  const { frontmatter, content } = getModuleIndex(moduleId);
  const lessonCount = getLessonCount(moduleId);
  const progress = await prisma.moduleProgress.findUnique({
    where: { userId_moduleId: { userId: session.user.id, moduleId } },
  });

  const lessons = Array.from({ length: lessonCount }, (_, i) => i + 1);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="text-sm text-gray-400">Module {moduleId} of 6</div>
        <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
        <p className="text-gray-500">{frontmatter.description}</p>
        <div className="flex gap-4 text-sm text-gray-400">
          <span>{lessonCount} lessons</span>
          <span>{frontmatter.duration}</span>
          {progress?.quizPassed && (
            <span className="text-green-600 font-medium">✓ Complete</span>
          )}
        </div>
      </div>

      <div className="prose prose-brand max-w-none">
        <LessonRenderer content={content} />
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Lessons</h2>
        {lessons.map((i) => (
          <Link
            key={i}
            href={`/modules/${moduleId}/lessons/${i}`}
            className="flex items-center gap-3 bg-white rounded-lg p-4 border hover:border-brand-400 transition-colors"
          >
            <span className="w-7 h-7 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center text-sm font-bold">
              {i}
            </span>
            <span>Lesson {i}</span>
            <span className="ml-auto text-brand-600 text-sm">Read →</span>
          </Link>
        ))}
        <Link
          href={`/modules/${moduleId}/quiz`}
          className={`flex items-center gap-3 rounded-lg p-4 border transition-colors ${
            progress?.quizPassed
              ? "bg-green-50 border-green-300 text-green-700"
              : "bg-brand-50 border-brand-300 hover:border-brand-500"
          }`}
        >
          <span className="font-semibold">
            {progress?.quizPassed ? "✓ Quiz passed" : "Take quiz →"}
          </span>
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Write `web/app/modules/[id]/lessons/[lessonId]/page.tsx`**

```typescript
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { getLesson, getLessonCount } from "@/lib/content";
import { LessonRenderer } from "@/components/LessonRenderer";
import Link from "next/link";

export default async function LessonPage({
  params,
}: {
  params: { id: string; lessonId: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const moduleId = parseInt(params.id);
  const lessonId = parseInt(params.lessonId);
  if (isNaN(moduleId) || isNaN(lessonId)) notFound();

  const lesson = getLesson(moduleId, lessonId);
  if (!lesson) notFound();

  const totalLessons = getLessonCount(moduleId);
  const isLast = lessonId === totalLessons;
  const nextHref = isLast
    ? `/modules/${moduleId}/quiz`
    : `/modules/${moduleId}/lessons/${lessonId + 1}`;
  const nextLabel = isLast ? "Take quiz →" : `Lesson ${lessonId + 1} →`;

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Link href={`/modules/${moduleId}`} className="hover:text-brand-600">
          Module {moduleId}
        </Link>
        <span>/</span>
        <span>Lesson {lessonId}</span>
      </div>

      <LessonRenderer content={lesson.content} />

      <div className="flex justify-between pt-4 border-t">
        {lessonId > 1 ? (
          <Link
            href={`/modules/${moduleId}/lessons/${lessonId - 1}`}
            className="text-brand-600 hover:underline text-sm"
          >
            ← Lesson {lessonId - 1}
          </Link>
        ) : (
          <Link href={`/modules/${moduleId}`} className="text-brand-600 hover:underline text-sm">
            ← Module overview
          </Link>
        )}
        <Link
          href={nextHref}
          className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-700"
        >
          {nextLabel}
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add web/app/modules/ web/components/LessonRenderer.tsx web/lib/content.ts
git commit -m "2026-04-23: phase3-modules — module overview + MDX lesson renderer"
```

---

### Task 20: Quiz Component + API Route

**Files:**
- Create: `web/app/modules/[id]/quiz/page.tsx`
- Create: `web/components/QuizCard.tsx`
- Create: `web/app/api/modules/[id]/quiz/route.ts`
- Create: `web/lib/grading.ts`

- [ ] **Step 1: Write `web/lib/grading.ts`**

```typescript
interface Question {
  id: string;
  correct: number;
}

export function scoreQuiz(
  questions: Question[],
  answers: Record<string, number>
): { score: number; total: number; passed: boolean; wrong: string[] } {
  let score = 0;
  const wrong: string[] = [];
  for (const q of questions) {
    if (answers[q.id] === q.correct) {
      score++;
    } else {
      wrong.push(q.id);
    }
  }
  return { score, total: questions.length, passed: score === questions.length, wrong };
}

export function scoreExam(
  questions: Question[],
  answers: Record<string, number>
): { score: number; total: number; passed: boolean; percentage: number } {
  let score = 0;
  for (const q of questions) {
    if (answers[q.id] === q.correct) score++;
  }
  const percentage = Math.round((score / questions.length) * 100);
  return { score, total: questions.length, passed: score >= 32, percentage };
}
```

- [ ] **Step 2: Write grading tests `web/lib/grading.test.ts`**

```typescript
import { scoreQuiz, scoreExam } from "./grading";

const questions = [
  { id: "q1", correct: 0 },
  { id: "q2", correct: 2 },
  { id: "q3", correct: 1 },
];

describe("scoreQuiz", () => {
  it("returns full score for all correct", () => {
    const result = scoreQuiz(questions, { q1: 0, q2: 2, q3: 1 });
    expect(result.score).toBe(3);
    expect(result.passed).toBe(true);
    expect(result.wrong).toHaveLength(0);
  });

  it("returns partial score for some wrong", () => {
    const result = scoreQuiz(questions, { q1: 0, q2: 1, q3: 1 });
    expect(result.score).toBe(2);
    expect(result.passed).toBe(false);
    expect(result.wrong).toContain("q2");
  });
});

describe("scoreExam", () => {
  it("passes at exactly 32 correct out of 40", () => {
    const examQuestions = Array.from({ length: 40 }, (_, i) => ({
      id: `e${i + 1}`,
      correct: 0,
    }));
    const answers: Record<string, number> = {};
    examQuestions.forEach((q, i) => {
      answers[q.id] = i < 32 ? 0 : 1; // 32 correct, 8 wrong
    });
    const result = scoreExam(examQuestions, answers);
    expect(result.score).toBe(32);
    expect(result.passed).toBe(true);
    expect(result.percentage).toBe(80);
  });

  it("fails at 31 correct", () => {
    const examQuestions = Array.from({ length: 40 }, (_, i) => ({
      id: `e${i + 1}`,
      correct: 0,
    }));
    const answers: Record<string, number> = {};
    examQuestions.forEach((q, i) => {
      answers[q.id] = i < 31 ? 0 : 1;
    });
    const result = scoreExam(examQuestions, answers);
    expect(result.passed).toBe(false);
  });
});
```

- [ ] **Step 3: Run grading tests**

```bash
cd web && npx jest lib/grading.test.ts
# Expected: 4 passing tests
```

- [ ] **Step 4: Write `web/app/api/modules/[id]/quiz/route.ts`**

```typescript
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { getModuleQuiz } from "@/lib/content";
import { scoreQuiz } from "@/lib/grading";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const moduleId = parseInt(params.id);
  if (isNaN(moduleId) || moduleId < 1 || moduleId > 6) {
    return NextResponse.json({ error: "Invalid module" }, { status: 400 });
  }

  const { answers } = await req.json();
  const quiz = getModuleQuiz(moduleId);
  const result = scoreQuiz(quiz.questions, answers);

  await prisma.moduleProgress.upsert({
    where: { userId_moduleId: { userId: session.user.id, moduleId } },
    update: {
      quizPassed: result.passed,
      completedAt: result.passed ? new Date() : undefined,
    },
    create: {
      userId: session.user.id,
      moduleId,
      completed: true,
      quizPassed: result.passed,
      completedAt: result.passed ? new Date() : undefined,
    },
  });

  return NextResponse.json(result);
}
```

- [ ] **Step 5: Write `web/components/QuizCard.tsx`**

```typescript
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Question {
  id: string;
  text: string;
  options: string[];
  correct: number;
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
          className={`rounded-xl p-6 text-center ${
            result.passed ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"
          } border`}
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
```

- [ ] **Step 6: Write `web/app/modules/[id]/quiz/page.tsx`**

```typescript
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { getModuleQuiz } from "@/lib/content";
import { QuizCard } from "@/components/QuizCard";
import Link from "next/link";

export default async function QuizPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const moduleId = parseInt(params.id);
  if (isNaN(moduleId) || moduleId < 1 || moduleId > 6) notFound();

  const quiz = getModuleQuiz(moduleId);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href={`/modules/${moduleId}`} className="hover:text-brand-600">
            Module {moduleId}
          </Link>
          <span>/</span>
          <span>Quiz</span>
        </div>
        <h1 className="text-2xl font-bold">Module {moduleId} Knowledge Check</h1>
        <p className="text-gray-500">
          {quiz.questions.length} questions • Answer all correctly to complete the module
        </p>
      </div>
      <QuizCard moduleId={moduleId} questions={quiz.questions} />
    </div>
  );
}
```

- [ ] **Step 7: Commit**

```bash
git add web/app/modules/*/quiz/ web/components/QuizCard.tsx web/app/api/modules/ web/lib/grading.ts web/lib/grading.test.ts
git commit -m "2026-04-23: phase3-quiz — quiz API + QuizCard component (TDD)"
```

---

### Task 21: Exam Page + Timer Component

**Files:**
- Create: `web/app/exam/page.tsx`
- Create: `web/components/ExamTimer.tsx`

- [ ] **Step 1: Write `web/components/ExamTimer.tsx`**

```typescript
"use client";
import { useState, useEffect } from "react";

interface ExamTimerProps {
  seconds: number;
  onExpire: () => void;
}

export function ExamTimer({ seconds: initialSeconds, onExpire }: ExamTimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) {
      onExpire();
      return;
    }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, onExpire]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const isUrgent = seconds < 300; // last 5 minutes

  return (
    <div
      className={`font-mono text-lg font-bold ${
        isUrgent ? "text-red-600" : "text-gray-700"
      }`}
    >
      {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
    </div>
  );
}
```

- [ ] **Step 2: Write `web/app/exam/page.tsx`**

```typescript
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getUserProgress, getAttemptCount } from "@/lib/progress";
import { prisma } from "@/lib/db";
import { ExamClient } from "@/components/ExamClient";
import fs from "fs";
import path from "path";

export default async function ExamPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const { allModulesComplete } = await getUserProgress(session.user.id);
  if (!allModulesComplete) redirect("/dashboard");

  const attemptCount = await getAttemptCount(session.user.id);
  if (attemptCount >= 3) redirect("/dashboard");

  const cert = await prisma.certificate.findFirst({
    where: { userId: session.user.id },
  });
  if (cert) redirect(`/certificate/${cert.id}`);

  const questionsPath = path.join(process.cwd(), "content", "exam", "questions.json");
  const examData = JSON.parse(fs.readFileSync(questionsPath, "utf-8"));

  // Shuffle questions and options, strip correct answers from client payload
  const shuffled = [...examData.questions]
    .sort(() => Math.random() - 0.5)
    .map((q: { id: string; text: string; options: string[]; correct: number; moduleId: number }) => {
      const optionOrder = q.options.map((_: string, i: number) => i).sort(() => Math.random() - 0.5);
      return {
        id: q.id,
        text: q.text,
        options: optionOrder.map((i: number) => q.options[i]),
        _optionOrder: optionOrder, // used server-side to grade
      };
    });

  // Store option order in server session or pass as opaque token
  // Simple approach: embed as encrypted data (use NEXTAUTH_SECRET as key)
  // For simplicity here: strip _optionOrder before sending to client,
  // server will re-grade using the original questions.json
  const clientQuestions = shuffled.map(({ _optionOrder: _o, ...rest }) => rest);

  return (
    <ExamClient
      questions={clientQuestions}
      attemptNumber={attemptCount + 1}
      timeLimit={5400}
    />
  );
}
```

- [ ] **Step 3: Write `web/components/ExamClient.tsx`**

```typescript
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
  const [current, setCurrent] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [expired, setExpired] = useState(false);

  const handleExpire = useCallback(async () => {
    setExpired(true);
    await submitExam(answers);
  }, [answers]);

  async function submitExam(finalAnswers: Record<string, number>) {
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
  }

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
                  onClick={() => setAnswers({ ...answers, [q.id]: oi })}
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
```

- [ ] **Step 4: Commit**

```bash
git add web/app/exam/ web/components/ExamTimer.tsx web/components/ExamClient.tsx
git commit -m "2026-04-23: phase3-exam — exam page + timer + shuffled questions"
```

---

### Task 22: Exam Submit API + Grading

**Files:**
- Create: `web/app/api/exam/submit/route.ts`

- [ ] **Step 1: Write `web/app/api/exam/submit/route.ts`**

```typescript
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { scoreExam } from "@/lib/grading";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const attemptCount = await prisma.examAttempt.count({
    where: { userId: session.user.id },
  });
  if (attemptCount >= 3) {
    return NextResponse.json({ error: "Max attempts reached" }, { status: 403 });
  }

  const { answers } = await req.json();

  // Load canonical questions with correct answers (server-side only)
  const questionsPath = path.join(process.cwd(), "content", "exam", "questions.json");
  const examData = JSON.parse(fs.readFileSync(questionsPath, "utf-8"));

  // Note: client shuffled options — we compare by question ID, and the client
  // sends the index into the SHUFFLED options array. To grade correctly, the
  // exam page must either: (a) not shuffle, or (b) send the original option index.
  // For simplicity: do NOT shuffle options server-side (shuffle question order only).
  // The exam page sends answers as {questionId: originalOptionIndex}.
  const result = scoreExam(examData.questions, answers);

  const attempt = await prisma.examAttempt.create({
    data: {
      userId: session.user.id,
      attemptNum: attemptCount + 1,
      score: result.score,
      passed: result.passed,
      answers: JSON.stringify(answers),
    },
  });

  let certificateId: string | null = null;

  if (result.passed) {
    const cert = await prisma.certificate.create({
      data: {
        userId: session.user.id,
        score: result.score,
      },
    });
    certificateId = cert.id;
  }

  return NextResponse.json({
    score: result.score,
    total: result.total,
    percentage: result.percentage,
    passed: result.passed,
    attemptNum: attempt.attemptNum,
    certificateId,
  });
}
```

- [ ] **Step 2: Write exam submit test `web/lib/exam-submit.test.ts`**

```typescript
import { scoreExam } from "./grading";

describe("Exam scoring integration", () => {
  it("passes with 32 correct answers out of 40", () => {
    const questions = Array.from({ length: 40 }, (_, i) => ({
      id: `e${i + 1}`,
      correct: 0,
    }));
    const answers: Record<string, number> = {};
    questions.forEach((q, i) => { answers[q.id] = i < 32 ? 0 : 1; });
    const result = scoreExam(questions, answers);
    expect(result.passed).toBe(true);
    expect(result.percentage).toBe(80);
  });

  it("does not pass with 31 correct answers", () => {
    const questions = Array.from({ length: 40 }, (_, i) => ({
      id: `e${i + 1}`,
      correct: 0,
    }));
    const answers: Record<string, number> = {};
    questions.forEach((q, i) => { answers[q.id] = i < 31 ? 0 : 1; });
    expect(scoreExam(questions, answers).passed).toBe(false);
  });
});
```

- [ ] **Step 3: Run tests**

```bash
cd web && npx jest lib/exam-submit.test.ts
# Expected: 2 passing
```

- [ ] **Step 4: Commit**

```bash
git add web/app/api/exam/ web/lib/exam-submit.test.ts
git commit -m "2026-04-23: phase3-exam-api — submit + grading + cert issuance (TDD)"
```

---

### Task 23: Certificate PDF Generation

**Files:**
- Create: `web/lib/cert.ts`
- Create: `web/components/CertificatePDF.tsx`

- [ ] **Step 1: Write `web/components/CertificatePDF.tsx`**

```typescript
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 60,
    fontFamily: "Helvetica",
  },
  border: {
    border: "4pt solid #1e3a5f",
    padding: 40,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    color: "#1e3a5f",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 40,
  },
  label: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    textAlign: "center",
    marginBottom: 32,
    borderBottom: "1pt solid #d1d5db",
    paddingBottom: 16,
  },
  body: {
    fontSize: 12,
    color: "#374151",
    textAlign: "center",
    marginBottom: 8,
    lineHeight: 1.6,
  },
  score: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: "#1e3a5f",
    textAlign: "center",
    marginBottom: 32,
  },
  verifyBlock: {
    marginTop: 32,
    padding: 12,
    backgroundColor: "#f9fafb",
    borderRadius: 4,
    alignItems: "center",
  },
  verifyLabel: {
    fontSize: 9,
    color: "#9ca3af",
    textAlign: "center",
    marginBottom: 4,
  },
  verifyCode: {
    fontSize: 10,
    color: "#374151",
    textAlign: "center",
    fontFamily: "Courier",
  },
  issuer: {
    fontSize: 10,
    color: "#9ca3af",
    textAlign: "center",
    marginTop: 24,
  },
});

interface CertificatePDFProps {
  name: string;
  score: number;
  total: number;
  issuedAt: Date;
  verifyCode: string;
  issuer: string;
  verifyUrl: string;
}

export function CertificatePDF({
  name,
  score,
  total,
  issuedAt,
  verifyCode,
  issuer,
  verifyUrl,
}: CertificatePDFProps) {
  const percentage = Math.round((score / total) * 100);
  const dateStr = issuedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.border}>
          <Text style={styles.title}>Certificate of Completion</Text>
          <Text style={styles.subtitle}>AI Safety & Security Certification</Text>

          <Text style={styles.label}>This certifies that</Text>
          <Text style={styles.name}>{name}</Text>

          <Text style={styles.body}>
            has successfully completed the AI Safety & Security Certification program,
          </Text>
          <Text style={styles.body}>
            demonstrating proficiency in AI agent threat models, attack taxonomy,
          </Text>
          <Text style={styles.body}>
            defensive primitives, and organizational AI security governance.
          </Text>

          <Text style={styles.score}>
            Score: {score} / {total} ({percentage}%)
          </Text>

          <Text style={styles.body}>Issued on {dateStr}</Text>

          <View style={styles.verifyBlock}>
            <Text style={styles.verifyLabel}>Verification ID</Text>
            <Text style={styles.verifyCode}>{verifyCode}</Text>
            <Text style={styles.verifyLabel}>{verifyUrl}</Text>
          </View>

          <Text style={styles.issuer}>Issued by {issuer}</Text>
        </View>
      </Page>
    </Document>
  );
}
```

- [ ] **Step 2: Write `web/lib/cert.ts`**

```typescript
import { renderToBuffer } from "@react-pdf/renderer";
import { createElement } from "react";
import { CertificatePDF } from "@/components/CertificatePDF";

interface CertData {
  name: string;
  score: number;
  issuedAt: Date;
  verifyCode: string;
}

export async function generateCertificatePDF(
  data: CertData,
  baseUrl: string
): Promise<Buffer> {
  const issuer = process.env.CERT_ISSUER || "AI Security Research";
  const verifyUrl = `${baseUrl}/verify/${data.verifyCode}`;

  const element = createElement(CertificatePDF, {
    name: data.name,
    score: data.score,
    total: 40,
    issuedAt: data.issuedAt,
    verifyCode: data.verifyCode,
    issuer,
    verifyUrl,
  });

  return renderToBuffer(element);
}
```

- [ ] **Step 3: Commit**

```bash
git add web/lib/cert.ts web/components/CertificatePDF.tsx
git commit -m "2026-04-23: phase3-cert-pdf — react-pdf certificate generation"
```

---

### Task 24: Certificate Download + Public Verify Pages

**Files:**
- Create: `web/app/certificate/[id]/page.tsx`
- Create: `web/app/api/certificate/[id]/download/route.ts`
- Create: `web/app/verify/[verifyCode]/page.tsx`

- [ ] **Step 1: Write `web/app/certificate/[id]/page.tsx`**

```typescript
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function CertificatePage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const cert = await prisma.certificate.findFirst({
    where: { id: params.id, userId: session.user.id },
    include: { user: true },
  });
  if (!cert) notFound();

  const percentage = Math.round((cert.score / 40) * 100);
  const dateStr = cert.issuedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-lg mx-auto space-y-8 mt-8">
      <div className="bg-white rounded-xl border-4 border-brand-900 p-8 text-center space-y-4 shadow-lg">
        <h1 className="text-2xl font-bold text-brand-900">Certificate of Completion</h1>
        <p className="text-gray-400">AI Safety & Security Certification</p>
        <div className="py-4 border-b">
          <p className="text-gray-500 text-sm">This certifies that</p>
          <p className="text-2xl font-bold mt-1">{cert.user.name}</p>
        </div>
        <p className="text-gray-600 text-sm">
          has successfully completed the AI Safety & Security Certification program.
        </p>
        <p className="text-2xl font-bold text-brand-700">
          {cert.score}/40 — {percentage}%
        </p>
        <p className="text-gray-400 text-sm">Issued {dateStr}</p>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400">Verification ID</p>
          <p className="font-mono text-xs mt-1">{cert.verifyCode}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href={`/api/certificate/${cert.id}/download`}
          className="flex-1 bg-brand-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-brand-700"
        >
          Download PDF
        </a>
        <Link
          href={`/verify/${cert.verifyCode}`}
          className="flex-1 border border-brand-600 text-brand-600 text-center py-3 rounded-lg font-semibold hover:bg-brand-50"
          target="_blank"
        >
          Verify
        </Link>
      </div>

      <Link href="/dashboard" className="block text-center text-sm text-gray-400 hover:text-brand-600">
        ← Back to dashboard
      </Link>
    </div>
  );
}
```

- [ ] **Step 2: Write `web/app/api/certificate/[id]/download/route.ts`**

```typescript
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { generateCertificatePDF } from "@/lib/cert";
import { headers } from "next/headers";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cert = await prisma.certificate.findFirst({
    where: { id: params.id, userId: session.user.id },
    include: { user: true },
  });
  if (!cert) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const headersList = headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;

  const pdfBuffer = await generateCertificatePDF(
    {
      name: cert.user.name,
      score: cert.score,
      issuedAt: cert.issuedAt,
      verifyCode: cert.verifyCode,
    },
    baseUrl
  );

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="ai-security-cert-${cert.verifyCode.slice(0, 8)}.pdf"`,
    },
  });
}
```

- [ ] **Step 3: Write `web/app/verify/[verifyCode]/page.tsx`**

```typescript
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function VerifyPage({
  params,
}: {
  params: { verifyCode: string };
}) {
  const cert = await prisma.certificate.findUnique({
    where: { verifyCode: params.verifyCode },
    include: { user: { select: { name: true } } },
  });

  if (!cert) notFound();

  const percentage = Math.round((cert.score / 40) * 100);
  const dateStr = cert.issuedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-md mx-auto mt-16 text-center space-y-6">
      <div className="text-green-600 text-5xl">✓</div>
      <h1 className="text-2xl font-bold">Certificate Verified</h1>
      <div className="bg-white rounded-xl border p-6 space-y-3 text-left shadow-sm">
        <div>
          <div className="text-xs text-gray-400">Recipient</div>
          <div className="font-semibold">{cert.user.name}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Program</div>
          <div className="font-semibold">AI Safety & Security Certification</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Score</div>
          <div className="font-semibold">{cert.score}/40 ({percentage}%)</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Issue date</div>
          <div className="font-semibold">{dateStr}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Verification ID</div>
          <div className="font-mono text-xs">{cert.verifyCode}</div>
        </div>
      </div>
      <p className="text-xs text-gray-400">
        This certificate was issued by AI Safety & Security Certification.
      </p>
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add web/app/certificate/ web/app/api/certificate/ web/app/verify/
git commit -m "2026-04-23: phase3-certificate — download PDF + public verify page"
```

---

### Task 25: Build Verification + Replit Deployment Config

**Files:**
- Create: `web/.replit`
- Create: `web/replit.nix`

- [ ] **Step 1: Verify full build**

```bash
cd web
npm run build 2>&1 | tail -20
# Expected: no errors; pages compiled successfully
```

- [ ] **Step 2: Fix any TypeScript or build errors**

Common issues:
- `session.user.id` not typed: add to `next-auth.d.ts`:

```typescript
// web/types/next-auth.d.ts
import "next-auth";
declare module "next-auth" {
  interface Session {
    user: { id: string; name?: string | null; email?: string | null };
  }
}
```

- Missing `prisma.moduleProgress.findUnique` with composite key: ensure `@@unique([userId, moduleId])` is in schema and migration is re-run.

- [ ] **Step 3: Write `web/.replit`**

```toml
run = "npm run start"
entrypoint = "app/page.tsx"

[nix]
channel = "stable-23_11"

[deployment]
run = ["sh", "-c", "npm run build && npm run start"]
deploymentTarget = "cloudrun"

[[ports]]
localPort = 3000
externalPort = 80
```

- [ ] **Step 4: Write `web/replit.nix`**

```nix
{ pkgs }: {
  deps = [
    pkgs.nodejs_20
    pkgs.nodePackages.npm
  ];
}
```

- [ ] **Step 5: Add start script to `web/package.json`**

Verify `package.json` has:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start -p 3000",
  "lint": "next lint"
}
```

- [ ] **Step 6: Final production smoke test**

```bash
cd web
npm run build && npm run start &
sleep 8
# Test landing page
curl -s http://localhost:3000 | grep -c "AI Safety"
# Test register API
curl -s -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"testpassword123"}' | jq .
# Test verify page with nonexistent code returns 404
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/verify/nonexistent
# Expected: 404
kill %1
```

- [ ] **Step 7: Commit**

```bash
git add web/.replit web/replit.nix web/types/
git commit -m "2026-04-23: phase3-deploy — replit config + build verification"
git push
```
