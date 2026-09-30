"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSearchProps {
  className?: string;
  onSearch?: (query: string) => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  className,
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex flex-row items-center justify-center gap-3 w-full max-w-[600px] mx-auto px-4",
        className,
      )}
    >
      {/* Search Input Box */}
      <div className="relative flex items-center bg-white rounded-full px-5 h-12 md:h-14 w-full max-w-[440px] shadow-lg">
        <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          className="w-full bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400 text-sm md:text-base font-normal"
        />
      </div>

      {/* Lime Search Button */}
      <button
        type="submit"
        className="bg-[#CBFC01] text-black font-semibold text-sm md:text-base px-7 md:px-9 h-12 md:h-14 rounded-full hover:bg-[#b8e600] active:bg-[#a5cf00] transition-colors cursor-pointer shrink-0 shadow-md flex items-center justify-center"
      >
        Search
      </button>
    </form>
  );
};

export default HeroSearch;
