interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Connect",
    description:
      "Link your GitHub and upload your resume in under 30 seconds.",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "AI scores your full profile and pinpoints exactly what to improve.",
  },
  {
    number: "03",
    title: "Match",
    description:
      "Get curated job matches aligned to your actual skills and goals.",
  },
  {
    number: "04",
    title: "Land the Role",
    description:
      "Practice interviews, follow your roadmap, and apply with confidence.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Simple process
          </p>

          <h2
            className="mb-4 text-4xl font-bold text-gray-900"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
            }}
          >
            From signup to offer in 4 steps
          </h2>

          <p className="mx-auto max-w-xl text-lg text-gray-500">
            No complicated setup. Just connect,
            analyze, and start landing interviews.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Desktop connector line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-10 z-0 hidden h-0.5 bg-indigo-100 lg:block" />

          {steps.map(
            ({ number, title, description }) => (
              <div
                key={number}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Number Box */}
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-200">
                  <span className="text-2xl font-bold text-white">
                    {number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}