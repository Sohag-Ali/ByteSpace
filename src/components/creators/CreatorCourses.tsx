"use client";

import React, { useState } from "react";
import { SlidersHorizontal, BarChart2, Grid, ArrowUpDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "@/components/courses/CourseCard";
import { Course } from "@/data/courses";

const DEFAULT_AVATARS = [
  "/images/hero/avatar1.svg",
  "/images/hero/avatar2.svg",
  "/images/hero/avatar3.svg",
  "/images/hero/avatar4.svg",
];

const CREATOR_COURSES: Course[] = [
  {
    id: "creator-course-1",
    title: "Learn Figma from Basic",
    image: "/images/courses/course-1.svg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    instructor: "Md Sohag Ali",
    level: "Beginner",
    avatars: DEFAULT_AVATARS,
    students: "26+",
    price: 25,
    category: "UI/UX Design",
    isFeatured: true,
  },
  {
    id: "creator-course-2",
    title: "Build Digital Asset",
    image: "/images/courses/course-2.svg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    instructor: "Md Sohag Ali",
    level: "Beginner",
    avatars: DEFAULT_AVATARS,
    students: "26+",
    price: 25,
    category: "Graphic Design",
    isFeatured: true,
  },
  {
    id: "creator-course-3",
    title: "the Power of Big Data",
    image: "/images/courses/course-3.svg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    instructor: "Md Sohag Ali",
    level: "Beginner",
    avatars: DEFAULT_AVATARS,
    students: "26+",
    price: 25,
    category: "Data Science",
    isFeatured: true,
  },
  {
    id: "creator-course-4",
    title: "Balancing Productivity and Focus",
    image: "/images/courses/course-4.svg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    instructor: "Md Sohag Ali",
    level: "Beginner",
    avatars: DEFAULT_AVATARS,
    students: "26+",
    price: 25,
    category: "Productivity",
    isFeatured: true,
  },
  {
    id: "creator-course-5",
    title: "Mastering Money Management",
    image: "/images/courses/course-5.svg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    instructor: "Md Sohag Ali",
    level: "Beginner",
    avatars: DEFAULT_AVATARS,
    students: "26+",
    price: 25,
    category: "Freelance & Entrepreneurship",
    isFeatured: true,
  },
  {
    id: "creator-course-6",
    title: "From Idea to Startup Success",
    image: "/images/courses/course-6.svg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    instructor: "Md Sohag Ali",
    level: "Beginner",
    avatars: DEFAULT_AVATARS,
    students: "26+",
    price: 25,
    category: "Marketing",
    isFeatured: true,
  },
];

export const CreatorCourses: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("relevant");

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 select-none font-satoshi">
      {/* Filter Header Controls matching Courses page style */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 sm:mb-10">
        {/* Left Filter Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          {/* Filter Button */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white border border-gray-200 text-gray-700 font-satoshi font-semibold text-xs sm:text-sm px-4 py-2 sm:py-2.5 rounded-full flex items-center gap-2 shadow-2xs cursor-pointer select-none"
          >
            <SlidersHorizontal className="w-4 h-4 text-gray-500 stroke-[2]" />
            <span>Filter</span>
          </motion.div>

          {/* Level Dropdown/Button */}
          <div className="relative">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                setSelectedLevel(selectedLevel === "All" ? "Beginner" : "All")
              }
              className={`bg-white border border-gray-200 text-gray-700 font-satoshi font-semibold text-xs sm:text-sm px-4 py-2 sm:py-2.5 rounded-full flex items-center gap-2 shadow-2xs cursor-pointer transition-colors ${
                selectedLevel !== "All" ? "border-[#003BE2] text-[#003BE2]" : ""
              }`}
            >
              <BarChart2 className="w-4 h-4 text-gray-500 stroke-[2]" />
              <span>Level: {selectedLevel}</span>
            </motion.button>
          </div>

          {/* Category Dropdown/Button */}
          <div className="relative">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === "All" ? "UI/UX Design" : "All",
                )
              }
              className={`bg-white border border-gray-200 text-gray-700 font-satoshi font-semibold text-xs sm:text-sm px-4 py-2 sm:py-2.5 rounded-full flex items-center gap-2 shadow-2xs cursor-pointer transition-colors ${
                selectedCategory !== "All"
                  ? "border-[#003BE2] text-[#003BE2]"
                  : ""
              }`}
            >
              <Grid className="w-4 h-4 text-gray-500 stroke-[2]" />
              <span>Category</span>
            </motion.button>
          </div>
        </div>

        {/* Right Sort Button */}
        <div className="self-end sm:self-auto">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              setSortBy(sortBy === "relevant" ? "rating" : "relevant")
            }
            className="bg-white border border-gray-200 text-gray-700 font-satoshi font-semibold text-xs sm:text-sm px-4 py-2 sm:py-2.5 rounded-full flex items-center gap-2 shadow-2xs cursor-pointer transition-colors"
          >
            <ArrowUpDown className="w-4 h-4 text-gray-500 stroke-[2]" />
            <span>Most relevant</span>
          </motion.button>
        </div>
      </div>

      {/* 3-Column Course Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`${selectedLevel}-${selectedCategory}-${sortBy}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {CREATOR_COURSES.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CreatorCourses;
