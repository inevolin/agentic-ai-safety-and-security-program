// Static hosting config (GitHub Pages). BASE_PATH is "" when served from a custom domain root.
export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://inevolin.github.io/agentic-ai-safety-and-security-program"
).replace(/\/$/, "");

/** Prefix a root-relative public asset path (e.g. /audio/x.wav) with the base path. */
export function withBase(p: string): string {
  return p.startsWith("/") ? `${BASE_PATH}${p}` : p;
}
