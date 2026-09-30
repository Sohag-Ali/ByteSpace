"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, BarChart2, BookOpen, Clock, MessageSquare } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  index?: number;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl md:rounded-3xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full group"
    >
      {/* Course Thumbnail Image & Overlay */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 shrink-0">
        <Image
          src={course.image}
          alt={course.title}
          width={600}
          height={380}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Translucent Overlay Pills (Bottom of Image) */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 flex-wrap z-10 pointer-events-none">
          {/* Lessons */}
          <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-satoshi font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
            <BookOpen className="w-3 h-3 stroke-[2]" />
            {course.lessons} Lessons
          </span>
          {/* Duration */}
          <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-satoshi font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3 stroke-[2]" />
            {course.duration}
          </span>
          {/* Comments */}
          <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-satoshi font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
            <MessageSquare className="w-3 h-3 stroke-[2]" />
            {course.comments} Comments
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 md:p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Title & Rating Row */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-satoshi font-bold text-gray-900 text-lg md:text-xl leading-snug line-clamp-1 flex-1 group-hover:text-[#003BE2] transition-colors">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0 font-satoshi text-sm font-semibold text-gray-700 mt-0.5">
              <span>{course.rating}</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
          </div>

          {/* Instructor */}
          <p className="font-satoshi text-xs sm:text-sm text-gray-500 mt-1">
            by{" "}
            <span className="font-semibold text-[#003BE2]">
              {course.instructor}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-3 border-t border-gray-100 mt-auto">
          {/* Level Badge & Student Avatars Row */}
          <div className="flex items-center justify-between gap-2">
            {/* Level Badge */}
            <div className="flex items-center gap-1.5 bg-gray-100 text-gray-600 font-satoshi text-xs font-medium px-3 py-1.5 rounded-full">
              <BarChart2 className="w-3.5 h-3.5 stroke-[2]" />
              <span>{course.level}</span>
            </div>

            {/* Student Avatars + Badge */}
            <div className="flex items-center -space-x-2">
              {course.avatars.map((avatar, idx) => (
                <div
                  key={idx}
                  className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden shrink-0 bg-gray-100"
                >
                  <Image
                    src={avatar}
                    alt={`Student ${idx + 1}`}
                    width={28}
                    height={28}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-7 h-7 rounded-full bg-[#CBFC01] text-black text-[10px] font-satoshi font-bold flex items-center justify-center border-2 border-white shrink-0 z-10">
                {course.students}
              </div>
            </div>
          </div>

          {/* Price Row */}
          <div className="flex items-baseline gap-1">
            <span className="font-satoshi font-bold text-xl md:text-2xl text-[#003BE2]">
              ${course.price}
            </span>
            <span className="font-satoshi text-xs text-gray-500 font-normal">
              /lifetime
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
