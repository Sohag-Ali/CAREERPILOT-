import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";

interface SkillBar {
label: string;
value: number;
}

interface JobMatch {
role: string;
company: string;
match: string;
}

const skillBars: SkillBar[] = [
{
label: "Technical Skills",
value: 92,
},
{
label: "Work Experience",
value: 78,
},
{
label: "ATS Optimization",
value: 85,
},
];

const jobMatches: JobMatch[] = [
{
role: "Senior Frontend Engineer",
company: "Stripe",
match: "96%",
},
{
role: "Full Stack Developer",
company: "Linear",
match: "91%",
},
];

const userInitials = ["BK", "SR", "TM", "AL"];

export default function HeroSection() {
return ( <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-16">
{/* Background Decoration */} <div className="pointer-events-none absolute inset-0"> <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-indigo-100 opacity-40 blur-3xl" /> <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-100 opacity-30 blur-3xl" /> </div>


  <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
    {/* Left Content */}
    <div>
      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5">
        <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-600" />

        <span className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
          AI-Powered Career Acceleration
        </span>
      </div>

      {/* Heading */}
      <h1
        className="mb-6 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl"
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        Your career copilot for landing{" "}
        <span className="text-indigo-600">
          top tech roles
        </span>
      </h1>

      {/* Description */}
      <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-500">
        CareerPilot AI analyzes your resume,
        matches you with relevant jobs,
        coaches you for interviews, and builds
        your learning roadmap — all in one place.
      </p>

      {/* CTA Buttons */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/register"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700"
        >
          Get Started Free
          <ArrowRight size={16} />
        </Link>

        <Link
          href="/demo"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3.5 font-semibold text-gray-700 transition-all hover:bg-gray-50"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
            <Play
              size={12}
              className="ml-0.5 text-indigo-600"
            />
          </span>

          Watch Demo
        </Link>
      </div>

      {/* Social Proof */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {userInitials.map((initials) => (
            <div
              key={initials}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-xs font-bold text-white"
            >
              {initials[0]}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={14}
              className="fill-amber-400 text-amber-400"
            />
          ))}
        </div>

        <span className="text-sm text-gray-500">
          <strong className="text-gray-900">
            4.9/5
          </strong>{" "}
          · 12,000+ devs
        </span>
      </div>
    </div>

    {/* Right Dashboard Mockup */}
    <div className="relative">
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl shadow-indigo-100">
        {/* Resume Score */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Resume Score
            </p>

            <p className="text-2xl font-bold text-gray-900">
              87
              <span className="text-base text-gray-400">
                /100
              </span>
            </p>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-indigo-600">
            <span className="text-lg font-bold text-indigo-600">
              87%
            </span>
          </div>
        </div>

        {/* Skill Bars */}
        <div className="mb-6 space-y-3">
          {skillBars.map(({ label, value }) => (
            <div key={label}>
              <div className="mb-1 flex justify-between text-xs text-gray-500">
                <span>{label}</span>

                <span className="font-semibold text-gray-700">
                  {value}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-indigo-600"
                  style={{
                    width: `${value}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Job Matches */}
        <div className="border-t border-gray-100 pt-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Top Job Matches
          </p>

          <div className="space-y-2">
            {jobMatches.map(
              ({ role, company, match }) => (
                <div
                  key={role}
                  className="flex items-center justify-between rounded-lg bg-gray-50 p-2.5"
                >
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {role}
                    </p>

                    <p className="text-xs text-gray-400">
                      {company}
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-600">
                    {match}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute -right-4 -top-4 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
        ✓ ATS Ready
      </div>
    </div>
  </div>
</section>


);
}
