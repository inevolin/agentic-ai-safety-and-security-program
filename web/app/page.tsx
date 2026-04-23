import Link from "next/link";

const MODULES = [
  { id: 1, title: "The AI Agent Threat Landscape", duration: "25 min" },
  { id: 2, title: "Attack Taxonomy", duration: "30 min" },
  { id: 3, title: "Attack Anatomy: How Real Attacks Work", duration: "45 min" },
  { id: 4, title: "The 10 Defensive Primitives", duration: "35 min" },
  { id: 5, title: "Deployment Best Practices", duration: "40 min" },
  { id: 6, title: "Organizational Policy & Governance", duration: "30 min" },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center py-16 space-y-6">
        <h1 className="text-4xl font-bold text-brand-900">
          AI Safety & Security Certification
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Learn how AI agents are exploited in enterprise environments — and how to
          defend them. Based on 21 real attacks tested against Claude Haiku, Sonnet,
          and Opus.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/register"
            className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Start for free
          </Link>
          <Link
            href="#curriculum"
            className="border border-brand-600 text-brand-600 hover:bg-brand-50 px-6 py-3 rounded-lg font-semibold"
          >
            View curriculum
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-6 text-center">
        {[
          { stat: "21", label: "Attacks tested" },
          { stat: "16+", label: "Sonnet bypasses confirmed" },
          { stat: "10", label: "Defensive primitives" },
        ].map(({ stat, label }) => (
          <div key={label} className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-3xl font-bold text-brand-600">{stat}</div>
            <div className="text-gray-500 mt-1">{label}</div>
          </div>
        ))}
      </section>

      {/* Case study teaser */}
      <section className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h2 className="font-semibold text-red-800 mb-2">Real attack example</h2>
        <p className="text-red-700 text-sm">
          A vendor invoice PDF contains a fake <code>payment_portal</code> field.
          A finance AI agent processes the invoice and writes the attacker-controlled
          portal URL to the AP tracking page. The finance team processes a $47,500
          wire transfer to the attacker. <strong>Claude Sonnet was bypassed.</strong>
        </p>
        <p className="text-red-700 text-sm mt-2">
          This course teaches you how this attack works — and the three architectural
          controls that would have stopped it.
        </p>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="space-y-4">
        <h2 className="text-2xl font-bold">Curriculum</h2>
        <div className="space-y-3">
          {MODULES.map((m) => (
            <div
              key={m.id}
              className="flex items-center justify-between bg-white rounded-lg p-4 border shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">
                  {m.id}
                </span>
                <span className="font-medium">{m.title}</span>
              </div>
              <span className="text-gray-400 text-sm">{m.duration}</span>
            </div>
          ))}
        </div>
        <div className="bg-brand-50 border border-brand-200 rounded-lg p-4 flex items-center justify-between">
          <div>
            <div className="font-semibold">Final Exam + Certificate</div>
            <div className="text-sm text-gray-500">40 questions • 90 min • 80% to pass</div>
          </div>
          <Link href="/register" className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-700">
            Enroll
          </Link>
        </div>
      </section>
    </div>
  );
}
