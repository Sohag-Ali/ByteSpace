import React from "react";
import { cn } from "@/lib/utils";

interface HeroCourseCardProps {
  className?: string;
}

export const HeroCourseCard: React.FC<HeroCourseCardProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white font-satoshi rounded-2xl md:rounded-[18px] p-4 md:px-5 md:py-4 shadow-xl md:shadow-2xl flex flex-col justify-center border border-gray-100/50 backdrop-blur-sm",
        className,
      )}
    >
      <h3 className="text-gray-900 font-poppins  text-sm md:text-base leading-tight tracking-tight">
        UI/UX Design
      </h3>
      <p className="text-gray-500 font-normal text-[11px] md:text-xs mt-1 whitespace-nowrap">
        200 Courses <span className="mx-1">•</span> 1000+ Students
      </p>
    </div>
  );
};

export default HeroCourseCard;
