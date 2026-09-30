"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface RevenueCardProps {
  className?: string;
}

export const RevenueCard: React.FC<RevenueCardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-[#003BE2] text-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 shadow-2xl border border-white/10 min-w-[200px] sm:min-w-[300px] flex flex-col justify-between select-none",
        className,
      )}
    >
      <div>
        <div className="font-satoshi text-sm sm:text-base font-semibold text-white tracking-tight">
          Total Revenue
        </div>
        <div className="font-satoshi text-xs text-blue-200 opacity-80 mt-0.5">
          July 1-28
        </div>
      </div>

      <div className="font-poppins font-bold text-2xl sm:text-3xl text-white mt-3 tracking-tight">
        $120.29
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 h-2 sm:h-2.5 rounded-full overflow-hidden mt-3">
        <div className="bg-[#CBFC01] h-full w-[72%] rounded-full" />
      </div>
    </div>
  );
};

export default RevenueCard;
