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
        "bg-white text-gray-900 rounded-xl md:rounded-2xl p-3.5 sm:p-4 shadow-xl border border-gray-100 min-w-[180px] sm:min-w-[200px]",
        className
      )}
    >
      <h4 className="font-satoshi font-bold text-xs sm:text-sm text-gray-900">
        Happy Students
      </h4>
      <div className="flex items-center gap-1 mt-0.5 text-[11px] sm:text-xs text-gray-500 font-satoshi">
        <span className="font-semibold text-gray-800">4.5</span>
        <span>(240)</span>
        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 ml-0.5" />
      </div>

      {/* Avatars Row */}
      <div className="flex items-center mt-2.5 -space-x-2">
        {avatars.map((avatar, idx) => (
          <div
            key={idx}
            className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden shrink-0 bg-gray-100"
          >
            <Image
              src={avatar}
              alt={`Student ${idx + 1}`}
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D4FB20] text-gray-900 text-[10px] sm:text-xs font-bold flex items-center justify-center border-2 border-white shrink-0 z-10 font-satoshi">
          2K+
        </div>
      </div>
    </div>
  );
};

export default HappyStudentsCard;
