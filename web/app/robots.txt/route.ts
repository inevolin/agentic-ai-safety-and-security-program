import { NextRequest } from "next/server";

export const dynamic = "force-static";
export const revalidate = 86400;

function origin(req: NextRequest): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (env) return env;
  const host = req.headers.get("host") ?? "localhost:3000";
  const proto = req.headers.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

export function GET(req: NextRequest) {
  const base = origin(req);

  const body = `# robots.txt — AI Safety & Security Certification
# Spec: RFC 9309 (https://www.rfc-editor.org/rfc/rfc9309)
# Content Signals: https://contentsignals.org/

User-agent: *
Allow: /
Disallow: /api/
Disallow: /certificate/
Disallow: /verify/
Content-Signal: search=yes, ai-train=no, ai-input=yes

# --- AI training crawlers ---

User-agent: GPTBot
Disallow: /api/
Disallow: /certificate/
Disallow: /verify/
Content-Signal: ai-train=no

User-agent: ClaudeBot
Disallow: /api/
Disallow: /certificate/
Disallow: /verify/
Content-Signal: ai-train=no

User-agent: Claude-Web
Disallow: /api/
Disallow: /certificate/
Disallow: /verify/
Content-Signal: ai-train=no

User-agent: anthropic-ai
Disallow: /api/
Disallow: /certificate/
Disallow: /verify/
Content-Signal: ai-train=no

User-agent: Google-Extended
Disallow: /api/
Disallow: /certificate/
Disallow: /verify/
Content-Signal: ai-train=no

User-agent: CCBot
Disallow: /api/
Disallow: /certificate/
Disallow: /verify/
Content-Signal: ai-train=no

User-agent: PerplexityBot
Disallow: /api/
Disallow: /certificate/
Disallow: /verify/
Content-Signal: ai-train=no

User-agent: cohere-ai
Disallow: /api/
Disallow: /certificate/
Disallow: /verify/
Content-Signal: ai-train=no

User-agent: Bytespider
Disallow: /api/
Disallow: /certificate/
Disallow: /verify/
Content-Signal: ai-train=no

User-agent: Meta-ExternalAgent
Disallow: /api/
Disallow: /certificate/
Disallow: /verify/
Content-Signal: ai-train=no

# --- AI search / answer agents (allow indexing, deny training) ---

User-agent: OAI-SearchBot
Allow: /
Disallow: /api/
Disallow: /certificate/
Disallow: /verify/
Content-Signal: search=yes, ai-train=no, ai-input=yes

User-agent: ChatGPT-User
Allow: /
Disallow: /api/
Disallow: /certificate/
Disallow: /verify/
Content-Signal: search=yes, ai-train=no, ai-input=yes

User-agent: PerplexityBot-User
Allow: /
Disallow: /api/
Disallow: /certificate/
Disallow: /verify/
Content-Signal: search=yes, ai-train=no, ai-input=yes

# Sitemap
Sitemap: ${base}/sitemap.xml
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
