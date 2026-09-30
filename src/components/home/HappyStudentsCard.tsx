"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface HappyStudentsCardProps {
  className?: string;
}

export const HappyStudentsCard: React.FC<HappyStudentsCardProps> = ({ className }) => {
  const avatars = [
    "/images/hero/avatar1.svg",
    "/images/hero/avatar2.svg",
    "/images/hero/avatar3.svg",
    "/images/hero/avatar4.svg",
  ];

  return (
    <div
      className={cn(
        "bg-white text-gray-900 rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 shadow-2xl border border-gray-100/80 min-w-[220px] sm:min-w-[260px] flex flex-col gap-2.5 select-none",
        className
      )}
    >
      <h4 className="font-poppins font-bold text-base sm:text-lg text-gray-900 tracking-tight">
        Happy Students
      </h4>
      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 font-satoshi">
        <span className="font-bold text-gray-900">4.5</span>
        <span className="text-gray-400 font-medium">(240)</span>
        <Star className="w-4 h-4 fill-amber-400 text-amber-400 ml-0.5" />
      </div>

      {/* Avatars Row */}
      <div className="flex items-center mt-1.5 -space-x-2">
        {avatars.map((avatar, idx) => (
          <div
            key={idx}
            className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white overflow-hidden shrink-0 bg-gray-100 shadow-sm"
          >
            <Image
              src={avatar}
              alt={`Student ${idx + 1}`}
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#CBFC01] text-gray-900 text-xs font-bold flex items-center justify-center border-2 border-white shrink-0 z-10 font-satoshi shadow-sm">
          2K+
        </div>
      </div>
    </div>
  );
};

export default HappyStudentsCard;
