import {
FileText,
Briefcase,
MessageSquare,
Map,
LayoutDashboard,
LucideIcon,
FolderGit2
} from "lucide-react";
import { GithubIcon } from "../../../next-app-template/components/icons";

interface Feature {
icon: LucideIcon;
title: string;
description: string;
highlight: boolean;
}

const features: Feature[] = [
{
icon: FileText,
title: "AI Resume Analyzer",
description:
"Get an instant ATS score, identify skill gaps, and receive tailored suggestions to boost your resume.",
highlight: true,
},
{
icon: Briefcase,
title: "Job Match Engine",
description:
"Semantic matching against thousands of listings finds roles that genuinely fit your experience.",
highlight: false,
},
{
icon: MessageSquare,
title: "Interview Coach",
description:
"Practice with AI mock interviews, get real-time feedback, and track your improvement over time.",
highlight: false,
},
{
icon: Map,
title: "Learning Roadmap",
description:
"Personalized skill-gap analysis generates a step-by-step path to your target role.",
highlight: false,
},
{
icon: FolderGit2,
title: "GitHub Analyzer",
description:
"Automatically score your portfolio strength and surface your best projects to recruiters.",
highlight: false,
},
{
icon: LayoutDashboard,
title: "Portfolio Builder",
description:
"Turn your GitHub activity into a polished, shareable portfolio page in minutes.",
highlight: false,
},
];

export default function FeaturesSection() {
return ( <section
   id="features"
   className="bg-slate-50 py-24"
 > <div className="mx-auto max-w-7xl px-6">
{/* Header */} <div className="mb-16 text-center"> <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-600">
Everything you need </p>


      <h2
        className="mb-4 text-4xl font-bold text-gray-900"
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        The complete AI toolkit for your career
      </h2>

      <p className="mx-auto max-w-2xl text-lg text-gray-500">
        Six powerful tools that work together to
        take you from application to offer.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map(
        ({
          icon: Icon,
          title,
          description,
          highlight,
        }) => (
          <div
            key={title}
            className={`group rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
              highlight
                ? "border-indigo-600 bg-indigo-600 text-white"
                : "border-gray-100 bg-white hover:border-indigo-100"
            }`}
          >
            {/* Icon */}
            <div
              className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${
                highlight
                  ? "bg-white/20"
                  : "bg-indigo-50"
              }`}
            >
              <Icon
                size={20}
                className={
                  highlight
                    ? "text-white"
                    : "text-indigo-600"
                }
              />
            </div>

            {/* Title */}
            <h3
              className={`mb-2 text-lg font-semibold ${
                highlight
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed ${
                highlight
                  ? "text-indigo-100"
                  : "text-gray-500"
              }`}
            >
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
