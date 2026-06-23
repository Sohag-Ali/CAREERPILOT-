import { CheckCircle2 } from "lucide-react";

const benefits: string[] = [
"Understands context, not just keywords",
"Learns your unique career trajectory",
"Real-time market intelligence built in",
"Personalized advice, not generic tips",
"Continuously improves with every interaction",
];

export default function AIBenefitsSection() {
return ( <section className="py-24 bg-slate-50"> <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
{/* Left Content */} <div> <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">
Why AI matters </p>


      <h2
        className="text-4xl font-bold text-gray-900 mb-6 leading-tight"
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        Intelligent, not just automated
      </h2>

      <p className="text-lg text-gray-500 mb-8 leading-relaxed">
        Generic job boards push you into a sea of applicants.
        CareerPilot AI understands your specific background and
        tailors every recommendation to your unique path.
      </p>

      <ul className="space-y-4">
        {benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-start gap-3"
          >
            <CheckCircle2
              size={20}
              className="text-emerald-500 mt-0.5 shrink-0"
            />

            <span className="text-gray-700">
              {benefit}
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* Right Card */}
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6">
      {/* Window Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-emerald-400" />

        <span className="ml-2 text-xs text-gray-400 font-mono">
          AI Analysis
        </span>
      </div>

      <div className="space-y-4">
        {/* Resume Score */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-semibold text-gray-700">
              Resume Score
            </span>

            <span className="text-sm font-bold text-indigo-600">
              87 / 100
            </span>
          </div>

          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[87%] bg-indigo-600 rounded-full" />
          </div>
        </div>

        {/* Suggestions */}
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
          <p className="text-xs font-semibold text-amber-700 mb-1">
            Suggested additions
          </p>

          <p className="text-sm text-amber-600">
            Docker, Kubernetes, System Design
            experience
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-indigo-50 rounded-xl">
            <p className="text-xs text-gray-400 mb-1">
              Role matches
            </p>

            <p className="text-xl font-bold text-indigo-700">
              24
            </p>
          </div>

          <div className="p-3 bg-emerald-50 rounded-xl">
            <p className="text-xs text-gray-400 mb-1">
              Match strength
            </p>

            <p className="text-xl font-bold text-emerald-600">
              Strong
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition"
        >
          See Full Analysis →
        </button>
      </div>
    </div>
  </div>
</section>


);
}
