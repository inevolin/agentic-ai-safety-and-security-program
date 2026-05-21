import { NextRequest } from "next/server";
import { getAllModules } from "@/lib/content";

export const dynamic = "force-dynamic";

function origin(req: NextRequest): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (env) return env;
  const host = req.headers.get("host") ?? "localhost:3000";
  const proto = req.headers.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

function home(base: string): string {
  return `# AI Safety Course

Learn how to keep AI agents safe from attacks. Based on 21 real attacks tested against Claude Haiku, Sonnet, and Opus.

## Sections

- [Learn](${base}/learn): 7 modules covering prompt injection, agent attacks, multimodal vectors, and defenses
- [Intro](${base}/intro): course overview
- [Exam](${base}/exam): the certification exam
- [About](${base}/about): course background and audience
- [Verify](${base}/verify): check a certificate

## Resources

- Sitemap: ${base}/sitemap.xml
- Robots: ${base}/robots.txt
- Source: https://github.com/inevolin/agentic-ai-safety-and-security-program
`;
}

function about(base: string): string {
  return `# About — AI Safety Course

AI agent security training based on our own red-team research against Claude Haiku, Sonnet, and Opus.

The course documents 21 confirmed bypass vectors across prompt injection, agent attacks, multimodal inputs, training-data poisoning, deception and alignment failure, and influence operations.

- Curriculum: ${base}/learn
- Certification exam: ${base}/exam
- Verify a certificate: ${base}/verify
- Source repository: https://github.com/inevolin/agentic-ai-safety-and-security-program
`;
}

function intro(base: string): string {
  return `# Intro — AI Safety Course

Why this course: companies roll out AI agents faster than security tools can keep up. This course covers the attack surface (system prompts, tool calls, MCP servers, multimodal inputs, training data) and the defenses that hold against today's frontier models.

- Begin learning: ${base}/learn
- Take the exam: ${base}/exam
`;
}

function exam(base: string): string {
  return `# Exam — AI Safety Course

Multiple-choice certification exam. Pass to receive a verifiable certificate with a unique verify code.

- Start exam: ${base}/exam
- Verify an existing certificate: ${base}/verify
`;
}

function verify(base: string): string {
  return `# Verify a Certificate

Enter a certificate verify code at ${base}/verify to confirm authenticity. Each issued certificate has a unique verify code printed on the PDF and embedded in the QR code.
`;
}

function learn(base: string): string {
  let modules: ReturnType<typeof getAllModules> = [];
  try {
    modules = getAllModules();
  } catch {
    // fall through with empty list
  }

  const lines = [
    "# Learn — AI Safety Course",
    "",
    "Curriculum covering AI agent attack vectors and defenses, derived from documented red-team research.",
    "",
    "## Modules",
    "",
  ];

  for (const m of modules) {
    const dur = m.duration ? ` (${m.duration})` : "";
    lines.push(`### Module ${m.id}: ${m.title}${dur}`);
    if (m.description) lines.push("", m.description);
    lines.push("");
    for (const l of m.lessons) {
      lines.push(`- Lesson ${l.id}: ${l.title}`);
    }
    lines.push("");
  }

  lines.push(`Full curriculum: ${base}/learn`, `Take the exam: ${base}/exam`, "");
  return lines.join("\n");
}

const RENDERERS: Record<string, (base: string) => string> = {
  "/": home,
  "/about": about,
  "/intro": intro,
  "/exam": exam,
  "/verify": verify,
  "/learn": learn,
};

export function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path") ?? "/";
  const render = RENDERERS[path];
  if (!render) {
    return new Response("Not found", { status: 404 });
  }
  const base = origin(req);
  const body = render(base);

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Location": `${base}${path}`,
      "Vary": "Accept",
      "Cache-Control": "public, max-age=300, s-maxage=3600",
      "X-Markdown-Tokens": String(Math.ceil(body.length / 4)),
    },
  });
}
