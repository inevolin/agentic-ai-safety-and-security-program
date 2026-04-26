import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — AI Safety Cert",
  description:
    "Get in touch with the team behind the AI Safety & Security Certification — via GitHub or LinkedIn.",
};

const REPO_URL = "https://github.com/inevolin/agentic-ai-safety-and-security-program";
const LINKEDIN_URL = "https://www.linkedin.com/in/iljanevolin/";

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-200px)]">
      <section className="relative section-content py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-100">
          Get in touch
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Questions, collaboration ideas, bug reports, or feedback on the course?
          Two ways to reach us — pick whichever you prefer.
        </p>
      </section>

      <section className="section-content pb-20">
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl border border-slate-700/60 p-8 flex flex-col items-center text-center hover:-translate-y-0.5 transition-transform duration-300 shadow-xl shadow-black/20 hover:border-brand-500/60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-14 h-14 text-slate-200 mb-4"
              aria-hidden="true"
            >
              <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.99 0 0 .95-.3 3.11 1.16.9-.25 1.86-.38 2.82-.38s1.92.13 2.82.38c2.16-1.46 3.11-1.16 3.11-1.16.61 1.56.23 2.71.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.04.76 2.1v3.11c0 .3.2.65.78.54 4.46-1.49 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5z" />
            </svg>
            <h2 className="text-xl font-semibold text-slate-100 mb-2">GitHub</h2>
            <p className="text-sm text-slate-400 mb-4">
              Open an issue or pull request on the project repo. Best for bugs,
              feature requests, and code-level collaboration.
            </p>
            <span className="text-sm text-brand-400 font-medium inline-flex items-center gap-1.5">
              inevolin/agentic-ai-safety-and-security-program
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl border border-slate-700/60 p-8 flex flex-col items-center text-center hover:-translate-y-0.5 transition-transform duration-300 shadow-xl shadow-black/20 hover:border-brand-500/60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-14 h-14 text-[#0A66C2] mb-4"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
            <h2 className="text-xl font-semibold text-slate-100 mb-2">LinkedIn</h2>
            <p className="text-sm text-slate-400 mb-4">
              Direct message Ilja Nevolin, the project author. Best for
              partnerships, speaking, training engagements, and professional
              outreach.
            </p>
            <span className="text-sm text-brand-400 font-medium inline-flex items-center gap-1.5">
              linkedin.com/in/iljanevolin
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
