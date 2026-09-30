import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroStudentsCardProps {
  className?: string;
}

export const HeroStudentsCard: React.FC<HeroStudentsCardProps> = ({ className }) => {
  const avatars = [
    "/images/hero/avatar1.svg",
    "/images/hero/avatar2.svg",
    "/images/hero/avatar3.svg",
    "/images/hero/avatar4.svg",
    "/images/hero/avatar5.svg",
  ];

  return (
    <div
      className={cn(
        "bg-white rounded-2xl md:rounded-[18px] p-3.5 md:p-4 shadow-xl md:shadow-2xl flex flex-col border border-gray-100/50 backdrop-blur-sm min-w-[190px] md:min-w-[210px]",
        className
      )}
    >
      <h4 className="text-gray-900 font-satoshi  text-xs md:text-sm leading-tight">
        Happy Students
      </h4>
      <div className="flex font-satoshi items-center gap-1 mt-0.5 text-[11px] md:text-xs text-gray-500">
        <span className="font-semibold text-gray-700">4.5</span>
        <span>(240)</span>
        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 ml-0.5" />
      </div>

      {/* Avatars Row */}
      <div className="flex items-center mt-2.5 -space-x-2">
        {avatars.map((avatar, idx) => (
          <div
            key={idx}
            className="relative w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white overflow-hidden shrink-0 bg-gray-100"
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
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#CBFC01] text-black text-[10px] md:text-xs font-bold flex items-center justify-center border-2 border-white shrink-0 z-10">
          2K+
        </div>
      </div>
    </div>
  );
};

export default HeroStudentsCard;
