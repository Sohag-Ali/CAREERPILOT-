import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const trustSignals: string[] = [
"Free plan included",
"No credit card required",
"Setup in 2 minutes",
];

export default function CTASection() {
return ( <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 py-28">
{/* Background Decoration */} <div className="absolute inset-0 pointer-events-none"> <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/5" /> <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-white/5" /> </div>

  <div className="relative mx-auto max-w-3xl px-6 text-center">
    {/* Emoji */}
    <span className="mb-6 block text-4xl">
      🚀
    </span>

    {/* Heading */}
    <h2
      className="mb-4 text-4xl font-bold leading-tight text-white lg:text-5xl"
      style={{
        fontFamily: "Plus Jakarta Sans, sans-serif",
      }}
    >
      Ready to land your dream role?
    </h2>

    {/* Description */}
    <p className="mb-10 text-lg leading-relaxed text-indigo-200">
      Start your AI-powered job search today.
      Free forever. No credit card needed.
    </p>

    {/* CTA Buttons */}
    <div className="mb-10 flex flex-col justify-center gap-4 sm:flex-row">
      <Link
        href="/register"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-8 py-4 text-base font-bold text-gray-900 shadow-lg transition-all hover:bg-amber-300"
      >
        Get Started Free
        <ArrowRight size={18} />
      </Link>

      <Link
        href="/pricing"
        className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
      >
        View Pricing
      </Link>
    </div>

    {/* Trust Signals */}
    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-indigo-200">
      {trustSignals.map((item) => (
        <span
          key={item}
          className="flex items-center gap-1.5"
        >
          <CheckCircle2
            size={14}
            className="text-emerald-400"
          />
          {item}
        </span>
      ))}
    </div>
  </div>
</section>


);
}
