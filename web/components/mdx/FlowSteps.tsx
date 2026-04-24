interface Step {
  icon: string;
  label: string;
  desc: string;
}

interface FlowStepsProps {
  steps?: Step[];
}

export function FlowSteps({ steps = [] }: FlowStepsProps) {
  if (steps.length === 0) return null;

  return (
    <div className="my-6">
      {/* Desktop: horizontal row */}
      <div className="hidden sm:flex items-start justify-center gap-0 overflow-x-auto pb-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start">
            <div
              className="flex flex-col items-center w-28 text-center"
              style={{ animation: `fadeSlideIn 0.4s ease both`, animationDelay: `${i * 120}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-700/60 bg-brand-950/60 text-2xl mb-3 shadow-lg shadow-brand-950/50">
                {step.icon}
              </div>
              <p className="text-xs font-semibold text-slate-200 mb-1 leading-snug">
                {step.label}
              </p>
              <p className="text-[11px] text-slate-500 leading-snug">{step.desc}</p>
            </div>

            {i < steps.length - 1 && (
              <div
                className="flex items-start pt-5 mx-1"
                style={{ animation: `fadeIn 0.3s ease both`, animationDelay: `${i * 120 + 80}ms` }}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 32 12"
                  className="w-8 h-3 text-brand-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M0 6 H26 M22 2 L30 6 L22 10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="flex flex-col items-start gap-0 sm:hidden">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-start w-full">
            <div
              className="flex items-start gap-4 w-full"
              style={{ animation: `fadeSlideIn 0.4s ease both`, animationDelay: `${i * 100}ms` }}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-brand-700/60 bg-brand-950/60 text-xl shadow-md shadow-brand-950/40">
                {step.icon}
              </div>
              <div className="pb-4">
                <p className="text-sm font-semibold text-slate-200">{step.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{step.desc}</p>
              </div>
            </div>

            {i < steps.length - 1 && (
              <div
                className="ml-5 mb-1"
                style={{ animation: `fadeIn 0.3s ease both`, animationDelay: `${i * 100 + 60}ms` }}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 12 28"
                  className="w-3 h-7 text-brand-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 0 V22 M2 18 L6 26 L10 18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
