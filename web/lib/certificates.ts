// Snapshot of certificates issued while the exam ran on a server (exported 2026-11-15).
// The site is now static, so the exam no longer issues new certificates; these stay verifiable.
export interface IssuedCertificate {
  verifyCode: string;
  name: string;
  score: number;
  issuedAt: string;
}

export const CERTIFICATES: IssuedCertificate[] = [
  { verifyCode: "cmoeubwty00010yjxcn2dcdtf", name: "Ilja Nevolin", score: 45, issuedAt: "2026-04-25T21:17:36.886Z" },
  { verifyCode: "cmoevu9120001wkjxzprldkm8", name: "Ilja Nevolin", score: 40, issuedAt: "2026-04-25T21:59:52.118Z" },
];

export function findCertificate(code: string): IssuedCertificate | undefined {
  return CERTIFICATES.find((c) => c.verifyCode === code);
}
