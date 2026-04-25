import { NextRequest, NextResponse } from "next/server";
import { prefersMarkdown } from "@/lib/accept";

const MARKDOWN_PATHS = new Set(["/", "/about", "/learn", "/intro", "/exam", "/verify"]);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!MARKDOWN_PATHS.has(pathname)) return NextResponse.next();
  if (!prefersMarkdown(req.headers.get("accept"))) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/api/md";
  url.searchParams.set("path", pathname);
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/", "/about", "/learn", "/intro", "/exam", "/verify"],
};
