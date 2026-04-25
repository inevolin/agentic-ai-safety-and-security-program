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

const ROUTES: { path: string; changefreq: string; priority: string }[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/learn", changefreq: "weekly", priority: "0.9" },
  { path: "/exam", changefreq: "monthly", priority: "0.8" },
  { path: "/intro", changefreq: "monthly", priority: "0.7" },
  { path: "/about", changefreq: "monthly", priority: "0.6" },
  { path: "/verify", changefreq: "monthly", priority: "0.5" },
];

export function GET(req: NextRequest) {
  const base = origin(req);
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = ROUTES.map(
    (r) => `  <url>
    <loc>${base}${r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  ).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
