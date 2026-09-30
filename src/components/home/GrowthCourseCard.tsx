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
        "bg-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-gray-100/80 max-w-[220px] sm:max-w-[250px] flex flex-col gap-2.5",
        className
      )}
    >
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100">
        <Image
          src="/images/courses/course-1.svg"
          alt="Learn Figma from Basic"
          width={300}
          height={180}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-satoshi font-bold text-gray-900 text-sm leading-snug line-clamp-1">
          Learn Figma from Basic
        </h4>
        <p className="font-satoshi text-xs text-gray-500 mt-0.5">
          by <span className="font-semibold text-[#003BE2]">purepearl studio</span>
        </p>
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <span className="bg-gray-100 text-gray-600 text-[11px] font-medium px-2.5 py-0.5 rounded-full">
          Beginner
        </span>
        <span className="font-satoshi font-bold text-sm text-[#003BE2]">
          $25<span className="text-[10px] text-gray-400 font-normal">/lifetime</span>
        </span>
      </div>
    </div>
  );
};

export default GrowthCourseCard;
