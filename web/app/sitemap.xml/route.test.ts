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

describe("/sitemap.xml", () => {
  it("returns 200 with application/xml", async () => {
    const res = await GET(mockReq());
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toMatch(/application\/xml/);
  });

  it("starts with XML declaration and urlset", async () => {
    const body = await (await GET(mockReq())).text();
    expect(body.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    expect(body).toContain("<urlset");
    expect(body).toContain("</urlset>");
  });

  it("lists canonical public routes", async () => {
    const body = await (await GET(mockReq("certify.example.com"))).text();
    for (const path of ["/", "/learn", "/exam", "/intro", "/about", "/verify"]) {
      expect(body).toContain(`<loc>https://certify.example.com${path}</loc>`);
    }
  });

  it("excludes private/dynamic routes", async () => {
    const body = await (await GET(mockReq())).text();
    expect(body).not.toContain("/api/");
    expect(body).not.toContain("/certificate/");
    expect(body).not.toMatch(/<loc>[^<]+\/verify\/[^<]+<\/loc>/);
  });

  it("each <url> has lastmod, changefreq, priority", async () => {
    const body = await (await GET(mockReq())).text();
    const urlBlocks = body.match(/<url>[\s\S]*?<\/url>/g) ?? [];
    expect(urlBlocks.length).toBeGreaterThan(0);
    for (const block of urlBlocks) {
      expect(block).toMatch(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/);
      expect(block).toMatch(/<changefreq>/);
      expect(block).toMatch(/<priority>/);
    }
  });
});
