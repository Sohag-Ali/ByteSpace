import React from "react";
import { cn } from "@/lib/utils";

interface HeroProgressCardProps {
  className?: string;
}

export const HeroProgressCard: React.FC<HeroProgressCardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl md:rounded-[18px] p-4 md:px-5 md:py-4 shadow-xl md:shadow-2xl flex flex-col border border-gray-100/50 backdrop-blur-sm min-w-[190px] md:min-w-[220px]",
        className
      )}
    >
      <span className="text-gray-500 font-normal text-[11px] md:text-xs">
        Learning Progress
      </span>
      <span className="text-gray-900 font-bold text-2xl md:text-3xl leading-none mt-1.5 mb-2">
        55%
      </span>
      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-2 md:h-2.5 rounded-full overflow-hidden">
        <div className="bg-[#CBFC01] h-full rounded-full w-[55%]" />
      </div>
    </div>
  );
};

export default HeroProgressCard;
