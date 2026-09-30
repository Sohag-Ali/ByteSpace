"use client";

import React from "react";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

const FOOTER_COLUMNS: FooterLink[][] = [
  [
    { label: "Featured Courses", href: "#" },
    { label: "Featured Categories", href: "#" },
    { label: "Business", href: "#" },
    { label: "IT", href: "#" },
    { label: "Design", href: "#" },
  ],
  [
    { label: "Development", href: "#" },
    { label: "Marketing", href: "#" },
    { label: "Photography", href: "#" },
    { label: "Finance", href: "#" },
    { label: "Sport", href: "#" },
  ],
  [
    { label: "Become a Creator", href: "#" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ],
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-gray-900 border-t border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pb-12">
        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* LEFT: LOGO, NEWSLETTER & PRIVACY TEXT */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* ByteSpace Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <svg
                width="29"
                height="32"
                viewBox="0 0 29 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z"
                  fill="#D4FB20"
                />
                <path
                  d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
                  fill="#D4FB20"
                />
                <path
                  d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C21 25.701 10.5 31.5 18.375 31.5L18.375 31.5Z"
                  fill="#D4FB20"
                />
              </svg>
              <span className="font-clash font-bold text-[24px] leading-none text-gray-900 tracking-normal">
                ByteSpace
              </span>
            </Link>

            {/* Newsletter Prompt */}
            <p className="font-satoshi text-gray-600 text-sm sm:text-base mt-4 mb-6 max-w-md leading-relaxed">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-300/90 rounded-full px-5 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="bg-[#D4FB20] text-gray-900 font-satoshi font-semibold text-sm px-8 py-3 rounded-full hover:bg-[#c6f000] active:scale-95 transition-all cursor-pointer shrink-0"
              >
                Search
              </button>
            </form>

            {/* Privacy Consent Text */}
            <p className="font-satoshi text-xs text-gray-500 mt-4 leading-relaxed max-w-md">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* RIGHT: 3 LINK COLUMNS */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 pt-2 lg:pt-1">
            {FOOTER_COLUMNS.map((column, colIdx) => (
              <div key={colIdx} className="flex flex-col space-y-3.5">
                {column.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-satoshi text-sm sm:text-[15px] text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* THIN HORIZONTAL DIVIDER */}
        <div className="border-t border-gray-200/80 mt-12 sm:mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-satoshi text-xs sm:text-sm text-gray-500">
          {/* Left Copyright */}
          <p>© 2023 ByteSpace. All rights reserved.</p>

          {/* Right Legal Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
