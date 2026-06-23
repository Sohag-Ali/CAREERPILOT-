import Link from "next/link";
import { Zap } from "lucide-react";
import { GithubIcon, TwitterIcon } from "../../../next-app-template/components/icons";

const links: Record<string, string[]> = {
Product: ["Features", "Pricing", "Changelog", "Roadmap"],
Resources: ["Blog", "Docs", "API", "Templates"],
Company: ["About", "Careers", "Press"],
Legal: ["Privacy", "Terms", "Cookies"],
};

export default function Footer() {
return ( <footer className="bg-gray-50 border-t border-gray-200"> <div className="max-w-7xl mx-auto px-6 py-16"> <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
{/* Brand */} <div className="col-span-2 lg:col-span-1"> <Link
           href="/"
           className="flex items-center gap-2 font-bold text-lg text-gray-900 mb-3"
         > <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600"> <Zap size={16} className="text-white" /> </span>


          <span>
            CareerPilot
            <span className="text-indigo-600"> AI</span>
          </span>
        </Link>

        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          AI-powered career acceleration for modern developers.
        </p>

        <div className="flex gap-3">
          {[
            { icon: TwitterIcon, href: "https://twitter.com" },
            // { icon: LinkedinIcon, href: "https://linkedin.com" },
            { icon: GithubIcon, href: "https://github.com" },
          ].map((social, index) => {
            const Icon = social.icon;

            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Links */}
      {Object.entries(links).map(([title, items]) => (
        <div key={title}>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            {title}
          </p>

          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-gray-400">
        © 2026 CareerPilot AI · Made for developers
      </p>

      <p className="text-sm text-gray-400">
        All rights reserved
      </p>
    </div>
  </div>
</footer>


);
}
