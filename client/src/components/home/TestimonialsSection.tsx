import { Star } from "lucide-react";

interface FeaturedTestimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const featured: FeaturedTestimonial = {
  quote:
    "CareerPilot's resume analyzer helped me go from 0 callbacks to 5 interviews in 2 weeks. The gap analysis was completely eye-opening.",
  name: "Sarah K.",
  role: "Senior Engineer @ Google",
  initials: "SK",
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The interview coach is insanely good. I practiced for 3 days and felt 10x more confident going into my Meta loop.",
    name: "James R.",
    role: "Software Engineer @ Meta",
    initials: "JR",
  },
  {
    quote:
      "I was applying blindly for months. CareerPilot's job matching pointed me to roles I never would have found on my own.",
    name: "Priya S.",
    role: "Full Stack Dev @ Stripe",
    initials: "PS",
  },
  {
    quote:
      "The roadmap feature told me exactly what to learn next. Went from junior to senior offers in 6 months.",
    name: "Tom L.",
    role: "Backend Engineer @ Shopify",
    initials: "TL",
  },
];

function Stars() {
  return (
    <div className="mb-3 flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={14}
          className="fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Loved by developers
          </p>

          <h2
            className="text-4xl font-bold text-gray-900"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
            }}
          >
            Join 12,000+ devs who landed their dream roles
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-8 rounded-2xl bg-indigo-600 p-8 text-white">
          <Stars />

          <blockquote className="mb-6 text-xl font-medium leading-relaxed text-indigo-50">
            &quot;{featured.quote}&quot;
          </blockquote>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
              {featured.initials}
            </div>

            <div>
              <p className="font-semibold text-white">
                {featured.name}
              </p>

              <p className="text-sm text-indigo-200">
                {featured.role}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map(
            ({ quote, name, role, initials }) => (
              <div
                key={name}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-indigo-100 hover:shadow-md"
              >
                <Stars />

                <blockquote className="mb-5 text-sm leading-relaxed text-gray-700">
                  &quot;{quote}&quot;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                    {initials}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {name}
                    </p>

                    <p className="text-xs text-gray-400">
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}