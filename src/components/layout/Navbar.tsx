"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import MobileMenu from "./MobileMenu";

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "#courses" },
    { name: "Creators", href: "#creators" },
  ];

  return (
    <header className="w-full bg-[#003BE2] hero-grid-pattern border-b border-white/10 select-none relative z-30">
      <div className="max-w-7xl mx-auto w-full h-16 sm:h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* LEFT: ByteSpace Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            aria-label="ByteSpace Home"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBFC01] rounded-lg p-0.5"
          >
            {/* ByteSpace SVG Logo Icon */}
            <svg
              width="29"
              height="32"
              viewBox="0 0 29 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 group-hover:scale-105 transition-transform duration-200"
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
            <span className="font-clash font-bold text-[22px] sm:text-[24px] leading-none text-white tracking-normal select-none">
              ByteSpace
            </span>
          </Link>
        </div>

        {/* CENTER: Navigation Links (Desktop & Tablet) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 font-satoshi font-medium text-[15px] lg:text-[16px] leading-[1.2] tracking-normal"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#CBFC01] rounded ${
                  isActive
                    ? "text-[#CBFC01]"
                    : "text-white/90 hover:text-[#CBFC01]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: Sign In, Join Us & Shopping Bag Icon (Desktop & Tablet) */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8 font-satoshi font-medium text-[15px] lg:text-[16px] leading-[1.2] tracking-normal">
          <Link
            href="/login"
            className={`transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#CBFC01] rounded ${
              pathname === "/login"
                ? "text-[#CBFC01]"
                : "text-white/90 hover:text-[#CBFC01]"
            }`}
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className={`transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#CBFC01] rounded ${
              pathname === "/register"
                ? "text-[#CBFC01]"
                : "text-white/90 hover:text-[#CBFC01]"
            }`}
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Shopping Bag"
            className="p-2 text-white/90 hover:text-[#CBFC01] transition-colors duration-200 cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBFC01] rounded-full"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;
