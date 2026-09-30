"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { COURSES } from "@/data/courses";
import {
  CoursesHero,
  CourseFilters,
  CourseCard,
  CoursePagination,
} from "@/components/courses";

const ITEMS_PER_PAGE = 6;

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [sortBy, setSortBy] = useState("relevant");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("Courses");

  // Filter & Search Logic
  const filteredCourses = useMemo(() => {
    let result = [...COURSES];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== "Featured" && selectedCategory !== "+ More") {
      result = result.filter((c) => c.category === selectedCategory);
    } else if (selectedCategory === "Featured") {
      result = result.filter((c) => c.isFeatured || true);
    }

    // Level filter
    if (selectedLevel !== "All") {
      result = result.filter((c) => c.level === selectedLevel);
    }

    // Sort filter
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

  // Pagination Logic
  const totalPages = Math.max(5, Math.ceil(filteredCourses.length / ITEMS_PER_PAGE));

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
        {/* Reusable Navbar */}
        <Navbar />

        {/* Courses Hero Header */}
        <CoursesHero
          searchQuery={searchQuery}
          setSearchQuery={handleSearchChange}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        {/* Filter Section */}
        <CourseFilters
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
          selectedLevel={selectedLevel}
          onSelectLevel={handleLevelSelect}
          sortBy={sortBy}
          onSelectSort={handleSortSelect}
        />

        {/* Course Card Grid Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {paginatedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {paginatedCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <h3 className="font-poppins font-bold text-xl text-gray-800">
                No courses found
              </h3>
              <p className="font-satoshi text-gray-500 mt-2 text-sm max-w-md mx-auto">
                Try searching for a different keyword or resetting your category filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Featured");
                  setSelectedLevel("All");
                }}
                className="mt-5 bg-[#003BE2] text-white font-satoshi font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Interactive Pagination Bar */}
          <CoursePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      {/* Reusable Footer */}
      <Footer />
    </main>
  );
}
