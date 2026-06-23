interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: "12,000+",
    label: "Developers Placed",
  },
  {
    value: "87%",
    label: "Interview Rate Lift",
  },
  {
    value: "4.9★",
    label: "Average Rating",
  },
  {
    value: "3 Weeks",
    label: "Avg. Time to Offer",
  },
];

export default function StatisticsSection() {
  return (
    <section className="bg-indigo-600 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map(({ value, label }, index) => (
            <div
              key={label}
              className={`py-4 text-center ${
                index < stats.length - 1
                  ? "lg:border-r lg:border-indigo-500"
                  : ""
              }`}
            >
              <p
                className="mb-2 text-4xl font-bold text-white"
                style={{
                  fontFamily:
                    "Plus Jakarta Sans, sans-serif",
                }}
              >
                {value}
              </p>

              <p className="text-sm font-medium text-indigo-200">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}