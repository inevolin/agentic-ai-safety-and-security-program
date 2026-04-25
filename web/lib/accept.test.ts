import { parseAccept, prefersMarkdown } from "./accept";

describe("parseAccept", () => {
  it("returns empty for null/undefined/empty", () => {
    expect(parseAccept(null)).toEqual([]);
    expect(parseAccept(undefined)).toEqual([]);
    expect(parseAccept("")).toEqual([]);
  });

  it("parses simple types with default q=1", () => {
    expect(parseAccept("text/html")).toEqual([{ type: "text/html", q: 1 }]);
  });

  it("parses multiple types with q values", () => {
    const r = parseAccept("text/html;q=0.8, text/markdown;q=0.9, */*;q=0.1");
    expect(r).toEqual([
      { type: "text/html", q: 0.8 },
      { type: "text/markdown", q: 0.9 },
      { type: "*/*", q: 0.1 },
    ]);
  });

  it("lowercases types", () => {
    expect(parseAccept("TEXT/Markdown")).toEqual([{ type: "text/markdown", q: 1 }]);
  });

  it("falls back to q=1 on bad q", () => {
    expect(parseAccept("text/html;q=abc")).toEqual([{ type: "text/html", q: 1 }]);
  });
});

describe("prefersMarkdown", () => {
  it("false when no Accept header", () => {
    expect(prefersMarkdown(null)).toBe(false);
    expect(prefersMarkdown("")).toBe(false);
  });

  it("false when only HTML", () => {
    expect(prefersMarkdown("text/html")).toBe(false);
  });

  it("true when only markdown", () => {
    expect(prefersMarkdown("text/markdown")).toBe(true);
  });

  it("true when markdown q >= html q", () => {
    expect(prefersMarkdown("text/markdown;q=0.9, text/html;q=0.8")).toBe(true);
    expect(prefersMarkdown("text/markdown, text/html")).toBe(true);
  });

  it("false when html q > markdown q", () => {
    expect(prefersMarkdown("text/markdown;q=0.5, text/html;q=0.9")).toBe(false);
  });

  it("respects */* fallback q", () => {
    expect(prefersMarkdown("text/markdown;q=0.5, */*;q=0.9")).toBe(false);
    expect(prefersMarkdown("text/markdown;q=0.9, */*;q=0.5")).toBe(true);
  });

  it("false when markdown q=0", () => {
    expect(prefersMarkdown("text/markdown;q=0, text/html;q=0")).toBe(false);
  });
});
