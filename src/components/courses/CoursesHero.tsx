"use client";

import React from "react";
import { Search, ChevronDown } from "lucide-react";

interface CoursesHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
}

export const CoursesHero: React.FC<CoursesHeroProps> = ({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
}) => {
  return (
    <section className="relative w-full bg-[#003BE2] hero-grid-pattern py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Main Title */}
        <h1 className="font-poppins font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight tracking-tight">
          Find Your Next Course
        </h1>

        {/* Search Bar & Category Dropdown */}
        <div className="w-full max-w-2xl mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Search Input Box */}
          <div className="relative w-full flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full bg-white text-gray-900 placeholder:text-gray-400 font-satoshi font-medium text-base rounded-full pl-11 pr-5 py-3.5 shadow-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#CBFC01] transition-all"
            />
          </div>

          {/* Lime Category Button */}
          <div className="relative shrink-0 w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto bg-[#CBFC01] hover:bg-[#b8e800] text-gray-900 font-satoshi font-semibold text-base px-6 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>{selectedType}</span>
              <ChevronDown className="w-4 h-4 text-gray-900 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
