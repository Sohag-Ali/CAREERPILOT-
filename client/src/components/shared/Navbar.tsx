"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";

interface NavLink {
label: string;
href: string;
}

const navLinks: NavLink[] = [
{ label: "Features", href: "#features" },
{ label: "How It Works", href: "#how-it-works" },
{ label: "Testimonials", href: "#testimonials" },
{ label: "FAQ", href: "#faq" },
];

export default function Navbar() {
const [scrolled, setScrolled] = useState<boolean>(false);
const [open, setOpen] = useState<boolean>(false);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 20);
};


window.addEventListener("scroll", handleScroll);

return () => {
  window.removeEventListener("scroll", handleScroll);
};


}, []);

return (
<header
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
> <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
{/* Logo */} <Link
       href="/"
       className="flex items-center gap-2 font-bold text-lg text-gray-900"
     > <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600"> <Zap size={16} className="text-white" /> </span>


      <span>
        CareerPilot
        <span className="text-indigo-600"> AI</span>
      </span>
    </Link>

    {/* Desktop Navigation */}
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>

    {/* Desktop CTA */}
    <div className="hidden lg:flex items-center gap-3">
      <Link
        href="/login"
        className="text-sm px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
      >
        Sign In
      </Link>

      <Link
        href="/register"
        className="text-sm px-4 py-2 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-all"
      >
        Get Started Free →
      </Link>
    </div>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
      aria-label="Toggle navigation menu"
    >
      {open ? <X size={22} /> : <Menu size={22} />}
    </button>
  </div>

  {/* Mobile Drawer */}
  {open && (
    <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-4">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={() => setOpen(false)}
          className="text-gray-600 font-medium py-1"
        >
          {link.label}
        </a>
      ))}

      <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
        <Link
          href="/login"
          onClick={() => setOpen(false)}
          className="text-center py-2.5 rounded-lg border border-gray-300 text-gray-900 font-medium text-sm"
        >
          Sign In
        </Link>

        <Link
          href="/register"
          onClick={() => setOpen(false)}
          className="text-center py-2.5 rounded-lg bg-indigo-600 text-white font-semibold text-sm"
        >
          Get Started Free
        </Link>
      </div>
    </div>
  )}
</header>


);
}
