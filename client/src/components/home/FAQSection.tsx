"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface FAQ {
q: string;
a: string;
}

const faqs: FAQ[] = [
{
q: "Is it free to start?",
a: "Yes. Our free plan includes resume analysis, job matching, and basic roadmap features. No credit card required.",
},
{
q: "How does the AI resume scoring work?",
a: "We use LLMs to evaluate your resume against ATS criteria, job market data, and role-specific requirements, then return a score with actionable suggestions.",
},
{
q: "What job roles does it support?",
a: "We cover software engineering, data science, DevOps, product management, and design roles across all experience levels.",
},
{
q: "Is my data secure?",
a: "All data is encrypted at rest and in transit. We never sell your data or share it with employers without your explicit consent.",
},
{
q: "Can I import from LinkedIn?",
a: "LinkedIn import is coming soon. Currently you can upload a PDF or paste your resume text directly.",
},
{
q: "How often are job listings updated?",
a: "Our job index is refreshed daily, pulling from major job boards and company career pages.",
},
{
q: "Does it work for non-US markets?",
a: "Yes — we support job markets in the US, UK, Canada, Australia, Germany, and India, with more regions being added.",
},
{
q: "What's included in the free plan?",
a: "Free includes 3 resume analyses/month, 10 job matches/day, and access to the roadmap builder. Premium unlocks unlimited usage and priority AI.",
},
];

interface FAQItemProps {
q: string;
a: string;
}

function FAQItem({ q, a }: FAQItemProps) {
const [open, setOpen] = useState<boolean>(false);

return ( <div className="overflow-hidden rounded-xl border border-gray-100 bg-white">
<button
type="button"
onClick={() => setOpen(!open)}
className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-gray-50"
> <span className="text-sm font-semibold text-gray-800">
{q} </span>


    <ChevronDown
      size={16}
      className={`shrink-0 text-gray-400 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    />
  </button>

  {open && (
    <div className="border-t border-gray-50 px-5 pb-4 text-sm leading-relaxed text-gray-500">
      <p className="pt-3">{a}</p>
    </div>
  )}
</div>


);
}

export default function FAQSection() {
return ( <section
   id="faq"
   className="bg-slate-50 py-24"
 > <div className="mx-auto max-w-7xl px-6">
{/* Header */} <div className="mb-14 text-center"> <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-600">
Questions? Answered. </p>


      <h2
        className="text-4xl font-bold text-gray-900"
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        Everything you need to know
      </h2>
    </div>

    {/* FAQ Grid */}
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 lg:grid-cols-2">
      {faqs.map(({ q, a }) => (
        <FAQItem
          key={q}
          q={q}
          a={a}
        />
      ))}
    </div>

    {/* Footer Text */}
    <p className="mt-10 text-center text-sm text-gray-400">
      Still have questions?{" "}
      <Link
        href="/contact"
        className="font-medium text-indigo-600 hover:underline"
      >
        Contact Support →
      </Link>
    </p>
  </div>
</section>


);
}
