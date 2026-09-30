"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GrowthCourseCardProps {
  className?: string;
}

export const GrowthCourseCard: React.FC<GrowthCourseCardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-[28px] sm:rounded-[36px] p-4 sm:p-5 md:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.14)] border border-gray-100/80 max-w-[300px] sm:max-w-[360px] md:max-w-[410px] flex flex-col gap-3.5 select-none transition-all duration-300",
        className
      )}
    >
      <div className="relative w-full h-[145px] sm:h-[175px] md:h-[195px] rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
        <Image
          src="/images/courses/course-1.svg"
          alt="Learn Figma from Basic"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-satoshi text-white z-10">
          <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full shrink-0 font-medium">
            17 Lessons
          </span>
          <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full shrink-0 font-medium">
            2 hours 16 mins
          </span>
        </div>
      </div>
      <div className="space-y-0.5">
        <h4 className="font-poppins font-bold text-gray-900 text-base sm:text-lg md:text-xl leading-snug line-clamp-1 tracking-tight">
          Learn Figma from Basic
        </h4>
        <p className="font-satoshi text-xs sm:text-sm text-gray-500">
          by <span className="font-semibold text-[#003BE2]">purepearl studio</span>
        </p>
      </div>
      <div className="flex flex-col items-start gap-1.5 pt-2.5 border-t border-gray-100">
        <span className="bg-gray-100 text-gray-700 text-xs sm:text-sm font-satoshi font-semibold px-3 py-1 rounded-full">
          Beginner
        </span>
        <span className="font-poppins font-bold text-base sm:text-lg md:text-xl text-[#003BE2]">
          $25<span className="text-xs text-gray-400 font-normal ml-1">/lifetime</span>
        </span>
      </div>
    </div>
  );
};

export default GrowthCourseCard;
