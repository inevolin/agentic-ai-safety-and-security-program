import { cookies } from "next/headers";
import { randomBytes } from "crypto";

export const EXAM_COOKIE = "exam_id";
export const SUBMIT_GRACE_MS = 10_000;

export function getOrSetCookieId(): { cookieId: string; isNew: boolean } {
  const store = cookies();
  const existing = store.get(EXAM_COOKIE)?.value;
  if (existing && /^[a-f0-9]{32,}$/.test(existing)) {
    return { cookieId: existing, isNew: false };
  }
  const cookieId = randomBytes(24).toString("hex");
  return { cookieId, isNew: true };
}

export function getCookieId(): string | null {
  const v = cookies().get(EXAM_COOKIE)?.value;
  if (!v || !/^[a-f0-9]{32,}$/.test(v)) return null;
  return v;
}

export function isDevMode(): boolean {
  return process.env.EXAM_DEV_MODE === "1";
}
