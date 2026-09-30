"use client";

import React from "react";
import { Star } from "lucide-react";

interface RatingDistributionItem {
  stars: number;
  percentage: number;
  count: number;
}

interface RatingSummaryProps {
  rating?: number;
  distribution?: RatingDistributionItem[];
}

export const RatingSummary: React.FC<RatingSummaryProps> = ({
  rating = 4.7,
  distribution = [
    { stars: 5, percentage: 80, count: 720 },
    { stars: 4, percentage: 55, count: 120 },
    { stars: 3, percentage: 15, count: 21 },
    { stars: 2, percentage: 8, count: 12 },
    { stars: 1, percentage: 12, count: 16 },
  ],
}) => {
  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 p-5 sm:p-6 shadow-xs font-satoshi select-none">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-8">
        {/* LEFT: Lime Rating Box */}
        <div className="bg-[#CBFC01] rounded-2xl p-5 w-full sm:w-32 flex flex-col items-center justify-center shrink-0 shadow-xs text-center py-6 sm:py-5">
          <span className="font-satoshi text-xs font-semibold text-gray-800 tracking-tight">
            Ratings
          </span>
          <span className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mt-1 leading-none">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* RIGHT: 5 Rating Distribution Rows */}
        <div className="flex-1 flex flex-col gap-2.5 min-w-0">
          {distribution.map((item) => (
            <div
              key={item.stars}
              className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm"
            >
              {/* Lime Progress Bar Track */}
              <div className="flex-1 bg-gray-100 rounded-full h-2 sm:h-2.5 overflow-hidden">
                <div
                  className="bg-[#CBFC01] h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              {/* 5 Dark Star Icons */}
              <div className="flex items-center gap-0.5 shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-gray-800 text-gray-800"
                  />
                ))}
              </div>

              {/* Review Count */}
              <span className="w-8 text-right font-medium text-gray-600 shrink-0 text-xs sm:text-sm">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingSummary;
