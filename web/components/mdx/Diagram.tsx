import type { ReactNode } from "react";

interface DiagramProps {
  caption?: string;
  children: ReactNode;
}

export function Diagram({ caption, children }: DiagramProps) {
  return (
    <figure className="my-8">
      <div className="flex items-center justify-center rounded-xl border border-white/5 bg-slate-900/60 p-6">
        {children}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs italic text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
