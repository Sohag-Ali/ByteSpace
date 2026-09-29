"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { COURSES, CATEGORIES } from "@/data/courses";
import CategoryFilters from "./CategoryFilters";
import CourseGrid from "./CourseGrid";

export const CourseSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Featured");

  const filteredCourses = useMemo(() => {
    if (selectedCategory === "Featured" || selectedCategory === "+ More") {
      return COURSES;
    }
    return COURSES.filter((course) => course.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 border-none relative z-10 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-gray-900 font-poppins font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center leading-[1.2] max-w-3xl mx-auto"
        >
          Discover Your Passion,
          <br className="hidden sm:inline" /> Build Your Skills
        </motion.h2>

        {/* 2. Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-gray-600 font-satoshi font-normal text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-center mt-4 leading-relaxed px-2"
        >
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology to
          the arts, and make a difference in your career and life.
        </motion.p>

        {/* 3. Category Filter Pills */}
        <CategoryFilters
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 4. Course Cards Grid */}
        <CourseGrid courses={filteredCourses} />
      </div>
    </section>
  );
};

export default CourseSection;

