/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: false,
    instrumentationHook: true,
  },
  async headers() {
    const linkHeader = [
      '</sitemap.xml>; rel="sitemap"; type="application/xml"',
      '</robots.txt>; rel="describedby"; type="text/plain"',
      '</about>; rel="author"',
      '</learn>; rel="index"',
      '<https://github.com/inevolin/agentic-ai-safety-and-security-program>; rel="vcs-git"',
    ].join(", ");

    return [
      {
        source: "/",
        headers: [
          { key: "Link", value: linkHeader },
          { key: "Vary", value: "Accept" },
        ],
      },
      {
        source: "/:path((?!api/|_next/).*)",
        headers: [{ key: "Vary", value: "Accept" }],
      },
    ];
  },
};

export default nextConfig;
