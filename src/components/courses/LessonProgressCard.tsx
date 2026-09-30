"use client";

import React from "react";

interface LessonProgressCardProps {
  percentage?: number;
}

export const LessonProgressCard: React.FC<LessonProgressCardProps> = ({
  percentage = 55,
}) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 shadow-xs max-w-lg mt-4 select-none font-satoshi">
      <span className="text-gray-700 font-semibold text-xs tracking-tight">
        Learning Progress
      </span>
      <div className="font-poppins font-bold text-3xl sm:text-[34px] text-gray-900 mt-1 leading-tight">
        {percentage}%
      </div>

      {/* Lime Progress Bar */}
      <div className="w-full bg-gray-100 rounded-full h-3 sm:h-3.5 overflow-hidden mt-4">
        <div
          className="bg-[#CBFC01] h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default LessonProgressCard;
