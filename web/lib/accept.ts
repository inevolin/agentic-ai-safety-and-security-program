export interface AcceptEntry {
  type: string;
  q: number;
}

export function parseAccept(accept: string | null | undefined): AcceptEntry[] {
  if (!accept) return [];
  return accept.split(",").map((p) => {
    const [type, ...params] = p.trim().split(";").map((s) => s.trim());
    const qParam = params.find((x) => x.toLowerCase().startsWith("q="));
    const q = qParam ? parseFloat(qParam.slice(2)) : 1.0;
    return { type: type.toLowerCase(), q: Number.isFinite(q) ? q : 1.0 };
  });
}

export function prefersMarkdown(accept: string | null | undefined): boolean {
  const parts = parseAccept(accept);
  const md = parts.find((p) => p.type === "text/markdown");
  if (!md || md.q <= 0) return false;
  const html = parts.find((p) => p.type === "text/html");
  const star = parts.find((p) => p.type === "text/*" || p.type === "*/*");
  const competing = html?.q ?? star?.q ?? 0;
  return md.q >= competing;
}
