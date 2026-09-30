"use client";

import React from "react";
import Link from "next/link";

export interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = "light", className = "" }) => {
  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-gray-900";

  return (
    <Link
      href="/"
      aria-label="ByteSpace Home"
      className={`inline-flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBFC01] rounded-lg p-0.5 select-none ${className}`}
    >
      {/* Original ByteSpace SVG Logo Icon */}
      <svg
        width="29"
        height="32"
        viewBox="0 0 29 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block shrink-0 group-hover:scale-105 transition-transform duration-200"
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

      {/* ByteSpace Text */}
      <span
        className={`font-clash font-semibold text-[22px] sm:text-[24px] leading-none tracking-normal translate-y-[8px] ${textColor}`}
      >
        ByteSpace
      </span>
    </Link>
  );
};

export default Logo;
