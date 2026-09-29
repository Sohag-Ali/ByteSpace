"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Course } from "@/data/courses";
import CourseCard from "./CourseCard";

interface CourseGridProps {
  courses: Course[];
}

export const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => {
  if (courses.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-7xl mx-auto px-4 py-16 text-center"
      >
        <p className="font-satoshi text-base text-gray-500">
          No courses found in this category. Please select another category.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CourseGrid;

