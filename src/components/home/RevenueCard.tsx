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
        "bg-[#003BE2] text-white rounded-xl md:rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/10 min-w-[170px] sm:min-w-[190px]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-satoshi text-xs text-blue-100 font-medium">
          Total Revenue
        </span>
        <span className="font-satoshi text-[10px] text-blue-200 bg-white/10 px-2 py-0.5 rounded-md">
          July 1-28
        </span>
      </div>

      <div className="font-satoshi font-bold text-lg sm:text-xl md:text-2xl mt-1 tracking-tight">
        $120.29
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mt-3">
        <div className="bg-[#D4FB20] h-full w-[72%] rounded-full" />
      </div>
    </div>
  );
};

export default RevenueCard;
