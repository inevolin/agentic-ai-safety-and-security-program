"use client";
import { useState } from "react";
import { Reveal } from "./Reveal";

interface FAQItem {
  q: string;
  a: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <Reveal key={i} delay={i * 60}>
          <div className="glass rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors duration-150"
              aria-expanded={open === i}
            >
              <span className="font-semibold text-slate-200">{item.q}</span>
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 transition-transform duration-200"
                style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                aria-hidden="true"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: open === i ? "400px" : "0px", opacity: open === i ? 1 : 0 }}
            >
              <p className="px-6 pb-5 text-slate-400 leading-relaxed text-sm">{item.a}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
