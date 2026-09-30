"use client";

import React, { useState } from "react";
import { SlidersHorizontal, BarChart2, Grid, ArrowUpDown, ChevronDown } from "lucide-react";
import { CATEGORIES } from "@/data/courses";

interface CourseFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedLevel: string;
  onSelectLevel: (level: string) => void;
  sortBy: string;
  onSelectSort: (sort: string) => void;
}

export const CourseFilters: React.FC<CourseFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedLevel,
  onSelectLevel,
  sortBy,
  onSelectSort,
}) => {
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
  const sortOptions = [
    { label: "Most relevant", value: "relevant" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Rating", value: "rating" },
    { label: "Newest", value: "newest" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 font-satoshi select-none">
      {/* Top Filter Buttons Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
        {/* Left Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Main Filter Button */}
          <button
            type="button"
            onClick={() => onSelectCategory("Featured")}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200/90 bg-white text-gray-700 hover:bg-gray-50 text-sm font-medium transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4 text-gray-600" />
            <span>Filter</span>
          </button>

          {/* Level Dropdown Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowLevelDropdown(!showLevelDropdown)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200/90 bg-white text-gray-700 hover:bg-gray-50 text-sm font-medium transition-colors cursor-pointer"
            >
              <BarChart2 className="w-4 h-4 text-gray-600" />
              <span>{selectedLevel === "All" ? "Level" : selectedLevel}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
            </button>

            {showLevelDropdown && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-200 rounded-2xl shadow-xl py-2 z-30">
                {levels.map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => {
                      onSelectLevel(lvl === "All Levels" ? "All" : lvl);
                      setShowLevelDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      (selectedLevel === "All" && lvl === "All Levels") ||
                      selectedLevel === lvl
                        ? "bg-[#CBFC01]/30 text-gray-900 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Quick Button */}
          <button
            type="button"
            onClick={() => onSelectCategory("Featured")}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200/90 bg-white text-gray-700 hover:bg-gray-50 text-sm font-medium transition-colors cursor-pointer"
          >
            <Grid className="w-4 h-4 text-gray-600" />
            <span>Category</span>
          </button>
        </div>

        {/* Right Sort Button */}
        <div className="relative ml-auto sm:ml-0">
          <button
            type="button"
            onClick={() => setShowSortDropdown(!showSortDropdown)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200/90 bg-white text-gray-700 hover:bg-gray-50 text-sm font-medium transition-colors cursor-pointer"
          >
            <ArrowUpDown className="w-4 h-4 text-gray-600" />
            <span>
              {sortOptions.find((opt) => opt.value === sortBy)?.label ||
                "Most relevant"}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          </button>

          {showSortDropdown && (
            <div className="absolute top-full right-0 mt-2 w-52 bg-white border border-gray-200 rounded-2xl shadow-xl py-2 z-30">
              {sortOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onSelectSort(opt.value);
                    setShowSortDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                    sortBy === opt.value
                      ? "bg-[#CBFC01]/30 text-gray-900 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Category Pills Row */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                isSelected
                  ? "bg-[#CBFC01] text-gray-900 font-bold shadow-sm"
                  : "bg-[#F4F5F7] text-gray-700 hover:bg-gray-200/80"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CourseFilters;
