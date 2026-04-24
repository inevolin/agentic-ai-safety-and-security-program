import type { ReactNode } from "react";

interface KeyPointProps {
  children: ReactNode;
}

export function KeyPoint({ children }: KeyPointProps) {
  return (
    <div className="my-8 relative">
      {/* Gradient border via pseudo-element technique using box-shadow */}
      <div
        className="rounded-xl p-px"
        style={{
          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
        }}
      >
        <div className="rounded-xl bg-slate-950 px-6 py-6 sm:px-8">
          <div className="flex gap-4">
            {/* Large decorative quote mark */}
            <span
              className="select-none text-5xl font-bold leading-none text-brand-700/60 flex-shrink-0 -mt-1"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <div className="text-xl font-medium leading-relaxed text-slate-100">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
