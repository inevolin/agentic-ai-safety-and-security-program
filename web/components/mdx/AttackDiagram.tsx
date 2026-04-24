type NodeType = "attacker" | "source" | "agent" | "artifact" | "victim";

interface DiagramNode {
  type: NodeType;
  label: string;
  detail?: string;
}

interface AttackDiagramProps {
  nodes: DiagramNode[];
  caption?: string;
}

const TYPE_META: Record<
  NodeType,
  { chip: string; chipText: string; bg: string; border: string; label: string; detail: string }
> = {
  attacker: {
    chip: "bg-danger-800 text-danger-100",
    chipText: "ATTACKER",
    bg: "bg-danger-950/50",
    border: "border-danger-800/50",
    label: "text-danger-200",
    detail: "text-danger-400/80",
  },
  source: {
    chip: "bg-warn-800/80 text-warn-100",
    chipText: "SOURCE",
    bg: "bg-warn-950/50",
    border: "border-warn-800/50",
    label: "text-warn-200",
    detail: "text-warn-400/80",
  },
  agent: {
    chip: "bg-cyan-800/80 text-cyan-100",
    chipText: "AGENT",
    bg: "bg-cyan-950/50",
    border: "border-cyan-800/50",
    label: "text-cyan-200",
    detail: "text-cyan-400/80",
  },
  artifact: {
    chip: "bg-slate-700 text-slate-200",
    chipText: "ARTIFACT",
    bg: "bg-slate-800/50",
    border: "border-slate-700/50",
    label: "text-slate-200",
    detail: "text-slate-400/80",
  },
  victim: {
    chip: "bg-orange-800/80 text-orange-100",
    chipText: "TARGET",
    bg: "bg-orange-950/50",
    border: "border-orange-800/50",
    label: "text-orange-200",
    detail: "text-orange-400/80",
  },
};

function ChevronArrow() {
  return (
    <svg
      className="flex-shrink-0 w-5 h-5 text-slate-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function AttackDiagram({ nodes, caption }: AttackDiagramProps) {
  return (
    <figure className="my-6">
      <div className="rounded-xl border border-white/5 bg-slate-900/40 p-4 overflow-x-auto">
        <div className="flex items-stretch gap-1 min-w-max">
          {nodes.map((node, i) => {
            const meta = TYPE_META[node.type];
            return (
              <div key={i} className="flex items-center gap-1">
                {i > 0 && (
                  <div className="flex items-center px-0.5">
                    <ChevronArrow />
                  </div>
                )}
                <div
                  className={`flex flex-col gap-1.5 rounded-lg border ${meta.border} ${meta.bg} px-3 py-2.5 min-w-[120px] max-w-[170px] h-full`}
                >
                  <span
                    className={`self-start rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest ${meta.chip}`}
                  >
                    {meta.chipText}
                  </span>
                  <p className={`text-xs font-semibold leading-snug ${meta.label}`}>{node.label}</p>
                  {node.detail && (
                    <p className={`text-[10px] leading-snug ${meta.detail}`}>{node.detail}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-[10px] italic text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
