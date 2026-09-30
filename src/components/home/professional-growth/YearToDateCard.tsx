"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface YearToDateCardProps {
  className?: string;
}

export const YearToDateCard: React.FC<YearToDateCardProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-[#003BE2] text-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 shadow-2xl border border-white/10 min-w-[190px] sm:min-w-[15px] flex flex-col justify-between select-none",
        className,
      )}
    >
      <div>
        <div className="font-satoshi text-sm sm:text-base font-semibold text-white tracking-tight">
          Year to Date
        </div>
        <div className="font-satoshi text-xs text-blue-200 opacity-80 mt-0.5">
          2023
        </div>
      </div>

      <div className="font-poppins font-bold text-2xl sm:text-3xl text-white mt-3 tracking-tight">
        $1,200.38
      </div>

      <div className="mt-3">
        <span className="bg-[#CBFC01] text-gray-900 font-satoshi font-bold text-xs sm:text-sm px-3 py-1 rounded-full inline-block shadow-sm">
          +12$
        </span>
      </div>
    </div>
  );
};

export default YearToDateCard;
