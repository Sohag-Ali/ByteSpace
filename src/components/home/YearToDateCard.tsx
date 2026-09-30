"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface YearToDateCardProps {
  className?: string;
}

export const YearToDateCard: React.FC<YearToDateCardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-[#003BE2] text-white rounded-xl md:rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/10 min-w-[160px] sm:min-w-[180px]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-satoshi text-xs text-blue-100 font-medium">
          Year to Date
        </span>
        <span className="font-satoshi text-[10px] text-blue-200 bg-white/10 px-2 py-0.5 rounded-md">
          2023
        </span>
      </div>

      <div className="flex items-center justify-between gap-2 mt-1.5">
        <span className="font-satoshi font-bold text-lg sm:text-xl md:text-2xl tracking-tight">
          $1,200.38
        </span>
        <span className="bg-[#D4FB20] text-gray-900 font-satoshi font-bold text-[11px] sm:text-xs px-2 py-0.5 rounded-full shrink-0">
          +12%
        </span>
      </div>
    </div>
  );
};

export default YearToDateCard;
