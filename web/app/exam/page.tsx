import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exam | AI Safety Course",
  description: "The timed exam and certificate were part of the hosted edition of this course.",
};

// The exam needed a server (timed sessions, server-side grading, certificate issuing).
// This edition is a static site on GitHub Pages, so the exam is paused.
export default function ExamPage() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="reading-content py-16 max-w-lg mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold text-white">The exam is paused</h1>
        <p className="text-slate-400">
          This course now runs as a static site. The timed exam and new certificates needed a server, so
          they are not available here. All seven modules, the lessons and the audio are still free to use.
        </p>
        <p className="text-slate-500 text-sm">
          Certificates issued earlier can still be checked on the{" "}
          <Link href="/verify" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
            verify page
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/learn" className="btn-primary justify-center">
            Go to the modules
          </Link>
          <Link href="/intro" className="btn-outline justify-center">
            5-minute intro
          </Link>
        </div>
      </div>
    </div>
  );
}
