import Link from "next/link";
import { ClaudeSponsorBadge } from "@/components/ClaudeSponsor";

const REPO_URL = "https://github.com/inevolin/agentic-ai-safety-and-security-program";

export function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="section-content flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1.5">
          <p className="text-slate-500 text-sm">
            © 2026 AI Safety & Security Certification. Educational use only.
          </p>
          <ClaudeSponsorBadge />
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/verify" className="text-slate-500 hover:text-slate-300 transition-colors">
            Verify certificate
          </Link>
          <Link href="/intro" className="text-slate-500 hover:text-slate-300 transition-colors">
            Start learning
          </Link>
          <Link href="/contact" className="text-slate-500 hover:text-slate-300 transition-colors">
            Contact
          </Link>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            title="View source on GitHub"
            className="text-slate-500 hover:text-slate-300 transition-colors inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.99 0 0 .95-.3 3.11 1.16.9-.25 1.86-.38 2.82-.38s1.92.13 2.82.38c2.16-1.46 3.11-1.16 3.11-1.16.61 1.56.23 2.71.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.04.76 2.1v3.11c0 .3.2.65.78.54 4.46-1.49 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
