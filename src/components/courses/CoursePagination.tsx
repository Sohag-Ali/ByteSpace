"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CoursePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const CoursePagination: React.FC<CoursePaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 py-12 font-satoshi select-none">
      {/* Previous Button */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous Page"
        className="w-10 h-10 rounded-full border border-gray-200/90 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBFC01]"
      >
        <ChevronLeft className="w-5 h-5 stroke-[2]" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
        {pages.map((page) => {
          const isActive = currentPage === page;
          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBFC01] ${
                isActive
                  ? "text-gray-900 font-bold bg-gray-100 sm:bg-transparent"
                  : "text-gray-400 hover:text-gray-900 font-medium"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next Page"
        className="w-10 h-10 rounded-full border border-gray-200/90 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBFC01]"
      >
        <ChevronRight className="w-5 h-5 stroke-[2]" />
      </button>
    </div>
  );
};

export default CoursePagination;
