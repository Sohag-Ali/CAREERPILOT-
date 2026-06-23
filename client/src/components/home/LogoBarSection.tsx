const companies: string[] = [
  "Google",
  "Meta",
  "Microsoft",
  "Stripe",
  "Airbnb",
  "Netflix",
  "Shopify",
  "OpenAI",
];

export default function LogoBarSection() {
  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
          Trusted by engineers at world-class companies
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <span
              key={company}
              className="cursor-default select-none text-lg font-bold text-gray-300 transition-colors hover:text-gray-500"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}