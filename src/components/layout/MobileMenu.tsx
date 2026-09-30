"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
  ];

  return (
    <div className="md:hidden flex items-center gap-2 sm:gap-3">
      {/* Quick Bag Button for Header bar */}
      <button
        type="button"
        aria-label="Shopping Bag"
        className="p-2 text-white/90 hover:text-[#CBFC01] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBFC01] rounded-full"
      >
        <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
      </button>

      {/* Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CBFC01] rounded-lg cursor-pointer transition-colors duration-200 hover:text-[#CBFC01]"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#CBFC01]" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Dropdown & Backdrop */}
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-16 sm:top-20 bg-black/40 backdrop-blur-xs z-40"
            aria-hidden="true"
          />

          {/* Navigation Drawer */}
          <nav
            aria-label="Mobile Navigation"
            className="absolute top-16 sm:top-20 left-0 right-0 bg-[#003BE2] hero-grid-pattern border-t border-b border-white/15 px-6 py-6 flex flex-col gap-3 font-satoshi font-medium text-base text-white shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBFC01] ${
                    isActive
                      ? "bg-white/10 text-[#CBFC01]"
                      : "hover:bg-white/5 hover:text-[#CBFC01]"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}

            <div className="h-[1px] bg-white/15 my-2" />

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className={`py-2 px-3 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBFC01] ${
                pathname === "/login"
                  ? "bg-white/10 text-[#CBFC01] font-semibold"
                  : "hover:bg-white/5 hover:text-[#CBFC01]"
              }`}
            >
              Sign In
            </Link>

            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className={`py-2 px-3 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBFC01] ${
                pathname === "/register"
                  ? "bg-white/10 text-[#CBFC01] font-semibold"
                  : "hover:bg-white/5 hover:text-[#CBFC01]"
              }`}
            >
              Join Us
            </Link>

            {/* Mobile Cart/Bag Item */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-lg transition-colors duration-200 flex items-center gap-3 text-left hover:bg-white/5 hover:text-[#CBFC01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBFC01]"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              <span>Cart / Bag</span>
            </button>
          </nav>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
