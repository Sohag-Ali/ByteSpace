"use client";

import React from "react";

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
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              isActive
                ? "bg-[#CBFC01] text-gray-900 shadow-sm"
                : "bg-[#F4F5F7] text-gray-600 hover:bg-gray-200/80"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default CourseTabs;
