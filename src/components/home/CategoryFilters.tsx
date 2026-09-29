"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoryFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto px-4 mt-6 md:mt-8 select-none"
    >
      {categories.map((category) => {
        const isMore = category === "+ More";
        const isActive = selectedCategory === category;

        if (isMore) {
          return (
            <motion.button
              key={category}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectCategory(category)}
              className="px-4 py-2 font-satoshi font-semibold text-sm sm:text-base text-[#003BE2] hover:underline cursor-pointer transition-all"
            >
              {category}
            </motion.button>
          );
        }

        return (
          <motion.button
            key={category}
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-satoshi text-xs sm:text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap",
              isActive
                ? "bg-[#CBFC01] text-black font-bold shadow-sm"
                : "bg-[#F3F4F6] text-gray-700 font-medium hover:bg-gray-200"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeCategoryIndicator"
                className="absolute inset-0 bg-[#CBFC01] rounded-full -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default CategoryFilters;

