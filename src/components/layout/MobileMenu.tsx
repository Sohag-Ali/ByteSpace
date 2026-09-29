"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden flex items-center gap-4">
      <button
        type="button"
        aria-label="Shopping Bag"
        className="p-1 text-white hover:text-white/80 transition-colors"
      >
        <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
      </button>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-1 focus:outline-none cursor-pointer"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-[120px] left-0 right-0 bg-[#003BE2] border-t border-white/10 px-6 py-6 flex flex-col gap-4 font-satoshi font-medium text-base text-white shadow-2xl z-50">
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-white/80 py-1"
          >
            Home
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-white/80 py-1"
          >
            Courses
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-white/80 py-1"
          >
            Creators
          </Link>
          <div className="h-[1px] bg-white/10 my-1" />
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-white/80 py-1"
          >
            Sign In
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-white/80 py-1"
          >
            Join Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
