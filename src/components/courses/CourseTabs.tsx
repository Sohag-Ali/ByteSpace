"use client";

import React from "react";
import { motion } from "framer-motion";

interface CourseTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const CourseTabs: React.FC<CourseTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = ["About", "Lesson", "Reviews"];

  return (
    <div className="flex items-center gap-3 font-satoshi select-none mb-8">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <motion.button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-none ${
              isActive
                ? "text-gray-900"
                : "bg-[#F4F5F7] text-gray-600 hover:bg-gray-200/80"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeCourseTab"
                className="absolute inset-0 bg-[#CBFC01] rounded-full shadow-sm -z-0"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default CourseTabs;
