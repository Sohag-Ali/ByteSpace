"use client";

import React from "react";
import { Video } from "lucide-react";

interface LessonItemProps {
  title: string;
  description: string;
}

export const LessonItem: React.FC<LessonItemProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-3.5 sm:gap-4 font-satoshi py-1.5">
      {/* Lime Green Rounded Square Icon Container */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#CBFC01] flex items-center justify-center shrink-0 shadow-xs">
        <Video className="w-5 h-5 text-gray-900 fill-gray-900 stroke-[1.5]" />
      </div>

      {/* Lesson Text Details */}
      <div className="flex flex-col pt-0.5">
        <h4 className="font-poppins font-bold text-gray-900 text-sm sm:text-[15px] leading-snug">
          {title}
        </h4>
        <p className="font-satoshi text-gray-600 text-xs sm:text-sm leading-relaxed mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default LessonItem;
