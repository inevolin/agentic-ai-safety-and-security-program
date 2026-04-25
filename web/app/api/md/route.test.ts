import { GET } from "./route";

function mockReq(path: string | null, host = "example.com", proto = "https") {
  return {
    headers: {
      get(name: string) {
        if (name === "host") return host;
        if (name === "x-forwarded-proto") return proto;
        return null;
      },
    },
    nextUrl: {
      searchParams: new URLSearchParams(path === null ? "" : `path=${encodeURIComponent(path)}`),
    },
  } as unknown as Parameters<typeof GET>[0];
}

describe("/api/md", () => {
  it("404 for unknown path", async () => {
    const res = await GET(mockReq("/nonexistent"));
    expect(res.status).toBe(404);
  });

  it("returns markdown for /", async () => {
    const res = await GET(mockReq("/"));
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toMatch(/text\/markdown/);
    const body = await res.text();
    expect(body).toMatch(/^# AI Safety & Security Certification/m);
    expect(body).toContain("https://example.com/learn");
  });

  it("sets Content-Location and Vary headers", async () => {
    const res = await GET(mockReq("/about"));
    expect(res.headers.get("content-location")).toBe("https://example.com/about");
    expect(res.headers.get("vary")).toBe("Accept");
  });

  it("renders /learn as module list with at least 7 modules", async () => {
    const res = await GET(mockReq("/learn"));
    const body = await res.text();
    expect(body).toMatch(/^# Learn/m);
    for (let id = 1; id <= 7; id++) {
      expect(body).toContain(`### Module ${id}:`);
    }
  });

  it("renders short pages /intro, /exam, /verify, /about", async () => {
    for (const p of ["/intro", "/exam", "/verify", "/about"]) {
      const res = await GET(mockReq(p));
      expect(res.status).toBe(200);
      const body = await res.text();
      expect(body).toMatch(/^# /);
    }
  });

  it("emits X-Markdown-Tokens header (numeric)", async () => {
    const res = await GET(mockReq("/"));
    const tokens = res.headers.get("x-markdown-tokens");
    expect(tokens).not.toBeNull();
    expect(Number(tokens)).toBeGreaterThan(0);
  });
});
