"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { COURSES } from "@/data/courses";
import {
  CoursesHero,
  CourseFilters,
  CourseCard,
  CoursePagination,
} from "@/components/courses";

const ITEMS_PER_PAGE = 6;

export default function CoursesClientPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [sortBy, setSortBy] = useState("relevant");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("Courses");

  // Filter & Search Logic
  const filteredCourses = useMemo(() => {
    let result = [...COURSES];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q),
      );
    }

    if (selectedCategory !== "Featured" && selectedCategory !== "+ More") {
      result = result.filter((c) => c.category === selectedCategory);
    } else if (selectedCategory === "Featured") {
      result = result.filter((c) => c.isFeatured || true);
    }

    if (selectedLevel !== "All") {
      result = result.filter((c) => c.level === selectedLevel);
    }

    if (sortBy === "price_asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "newest") {
      result.sort((a, b) => b.comments - a.comments);
    }

    return result;
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  const totalPages = Math.max(
    5,
    Math.ceil(filteredCourses.length / ITEMS_PER_PAGE),
  );

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
    setCurrentPage(1);
  };

  const handleSortSelect = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen w-full bg-white flex flex-col justify-between">
      <div>
        <Navbar />

        <CoursesHero
          searchQuery={searchQuery}
          setSearchQuery={handleSearchChange}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        <CourseFilters
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
          selectedLevel={selectedLevel}
          onSelectLevel={handleLevelSelect}
          sortBy={sortBy}
          onSelectSort={handleSortSelect}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <AnimatePresence mode="popLayout">
            {paginatedCourses.length > 0 ? (
              <motion.div
                key={`${currentPage}-${selectedCategory}-${selectedLevel}-${sortBy}-${searchQuery}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {paginatedCourses.map((course, index) => (
                  <CourseCard key={course.id} course={course} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200"
              >
                <h3 className="font-poppins font-bold text-xl text-gray-800">
                  No courses found
                </h3>
                <p className="font-satoshi text-gray-500 mt-2 text-sm max-w-md mx-auto">
                  Try searching for a different keyword or resetting your
                  category filter.
                </p>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("Featured");
                    setSelectedLevel("All");
                  }}
                  className="mt-5 bg-[#003BE2] text-white font-satoshi font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Reset Filters
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <CoursePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
