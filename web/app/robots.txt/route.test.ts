import { GET } from "./route";

function mockReq(host = "example.com", proto = "https") {
  return {
    headers: {
      get(name: string) {
        if (name === "host") return host;
        if (name === "x-forwarded-proto") return proto;
        return null;
      },
    },
  } as unknown as Parameters<typeof GET>[0];
}

describe("/robots.txt", () => {
  it("returns 200 with text/plain content-type", async () => {
    const res = await GET(mockReq());
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toMatch(/text\/plain/);
  });

  it("includes wildcard User-agent rule", async () => {
    const body = await (await GET(mockReq())).text();
    expect(body).toMatch(/User-agent:\s*\*/);
    expect(body).toMatch(/Allow:\s*\//);
  });

  it("disallows /api/, /certificate/, /verify/", async () => {
    const body = await (await GET(mockReq())).text();
    expect(body).toMatch(/Disallow:\s*\/api\//);
    expect(body).toMatch(/Disallow:\s*\/certificate\//);
    expect(body).toMatch(/Disallow:\s*\/verify\//);
  });

  it("includes Content-Signal directives", async () => {
    const body = await (await GET(mockReq())).text();
    expect(body).toMatch(/Content-Signal:.*ai-train/);
    expect(body).toMatch(/Content-Signal:.*search/);
  });

  it("includes major AI crawler User-agent entries", async () => {
    const body = await (await GET(mockReq())).text();
    for (const bot of [
      "GPTBot",
      "ClaudeBot",
      "Claude-Web",
      "anthropic-ai",
      "Google-Extended",
      "CCBot",
      "PerplexityBot",
      "OAI-SearchBot",
    ]) {
      expect(body).toContain(`User-agent: ${bot}`);
    }
  });

  it("references sitemap derived from request host", async () => {
    const body = await (await GET(mockReq("certify.example.com", "https"))).text();
    expect(body).toContain("Sitemap: https://certify.example.com/sitemap.xml");
  });

  it("derives http for localhost", async () => {
    const body = await (await GET(mockReq("localhost:3000", null as unknown as string))).text();
    expect(body).toContain("Sitemap: http://localhost:3000/sitemap.xml");
  });
});
