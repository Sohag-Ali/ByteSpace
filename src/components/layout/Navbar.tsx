import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import MobileMenu from "./MobileMenu";

export const Navbar: React.FC = () => {
  return (
    <header className="w-full h-[120px] bg-transparent relative z-30 shrink-0">
      <div className="max-w-[1440px] mx-auto w-full h-[120px] px-6 lg:px-[159px] flex items-center justify-between">
        {/* LEFT: ByteSpace Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Provided ByteSpace SVG Logo Icon */}
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
            <span className="font-clash font-bold text-[24px] leading-none text-white tracking-normal select-none">
              ByteSpace
            </span>
          </Link>
        </div>

        {/* CENTER: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 font-satoshi font-medium text-[16px] leading-[1.2] text-white tracking-normal">
          <Link href="#" className="hover:text-white/80 transition-colors">
            Home
          </Link>
          <Link href="#" className="hover:text-white/80 transition-colors">
            Courses
          </Link>
          <Link href="#" className="hover:text-white/80 transition-colors">
            Creators
          </Link>
        </nav>

        {/* RIGHT: Sign In, Join Us & Shopping Bag Icon (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 font-satoshi font-medium text-[16px] leading-[1.2] text-white tracking-normal">
          <Link href="/login" className="hover:text-white/80 transition-colors">
            Sign In
          </Link>
          <Link href="#" className="hover:text-white/80 transition-colors">
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Shopping Bag"
            className="p-1 text-white hover:text-white/80 transition-colors cursor-pointer flex items-center justify-center"
          >
            <ShoppingBag className="w-[20px] h-[20px] stroke-[1.5]" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;
