"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export const KeyPoints: React.FC = () => {
  const points = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];

  return (
    <div className="space-y-4 pt-8 border-t border-gray-100">
      <h3 className="font-poppins font-bold text-gray-900 text-xl sm:text-2xl">
        Key Points
      </h3>

      <div className="flex flex-col gap-3 font-satoshi text-gray-700 text-sm sm:text-base">
        {points.map((point) => (
          <div key={point} className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#003BE2] fill-[#003BE2] text-white stroke-[2] shrink-0" />
            <span className="font-medium text-gray-800">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyPoints;
