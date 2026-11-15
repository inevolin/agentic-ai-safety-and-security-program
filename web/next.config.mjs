/** @type {import('next').NextConfig} */
// Static export for GitHub Pages. NEXT_PUBLIC_BASE_PATH is set by .github/workflows/pages.yml
// ("/agentic-ai-safety-and-security-program" on github.io, "" on a custom domain).
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  images: { unoptimized: true },
  experimental: {
    mdxRs: false,
  },
};

export default nextConfig;
