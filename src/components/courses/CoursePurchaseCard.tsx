"use client";

import React from "react";
import Image from "next/image";
import { FolderDown, Video, Award, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Course } from "@/data/courses";

interface CoursePurchaseCardProps {
  course: Course;
}

export const CoursePurchaseCard: React.FC<CoursePurchaseCardProps> = ({
  course,
}) => {
  const sampleLessons = [
    {
      number: "01",
      title: "Introduction to Digital Assets",
      duration: "12 mins",
    },
    {
      number: "02",
      title: "Design Principles for Impacts",
      duration: "21 mins",
    },
    {
      number: "03",
      title: "Advanced Techniques in Digital Creation",
      duration: "16 mins",
    },
  ];

  const includesList = [
    { icon: FolderDown, text: "Learning Resources" },
    { icon: Video, text: "Quality Lesson Videos" },
    { icon: Award, text: "Certificate of Completion" },
    { icon: MessageSquare, text: "Private Consultation" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full bg-white rounded-[28px] border border-gray-200/90 p-6 sm:p-7 shadow-2xl flex flex-col gap-6 select-none"
    >
      {/* 1. Lessons Header */}
      <div>
        <h3 className="font-poppins font-bold text-gray-900 text-lg sm:text-xl">
          112 Lessons (24 hours)
        </h3>

        {/* Lesson Rows */}
        <div className="flex flex-col gap-3.5 mt-4 font-satoshi text-xs sm:text-sm">
          {sampleLessons.map((item) => (
            <div
              key={item.number}
              className="flex items-start justify-between gap-2"
            >
              <div className="flex items-start gap-2.5 flex-1 pr-2">
                <span className="font-semibold text-gray-400 shrink-0">
                  {item.number}
                </span>
                <span className="font-medium text-gray-800 leading-tight">
                  {item.title}
                </span>
              </div>
              <span className="text-[#003BE2] font-medium text-xs shrink-0 mt-0.5">
                {item.duration}
              </span>
            </div>
          ))}
          <p className="text-gray-400 font-normal text-xs mt-1">
            99 more videos
          </p>
        </div>
      </div>

      {/* 2. Pitch & Price */}
      <div className="space-y-3 pt-2">
        <p className="font-satoshi text-xs sm:text-sm text-gray-500 leading-relaxed">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div className="flex items-baseline gap-1">
          <span className="font-satoshi font-bold text-3xl sm:text-4xl text-[#003BE2]">
            ${course.price}
          </span>
          <span className="font-satoshi text-xs sm:text-sm text-gray-500 font-normal">
            /lifetime
          </span>
        </div>

        {/* Full-width Enroll Now Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => alert(`Enrolling in ${course.title}...`)}
          className="w-full bg-[#CBFC01] hover:bg-[#b8e800] text-gray-900 font-satoshi font-bold text-sm sm:text-base py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2]"
        >
          Enroll Now
        </motion.button>
      </div>

      {/* 3. This Course Includes */}
      <div className="space-y-3 pt-4 border-t border-gray-100">
        <h4 className="font-poppins font-bold text-gray-900 text-base">
          This course include
        </h4>
        <div className="flex flex-col gap-3 font-satoshi text-xs sm:text-sm text-gray-600">
          {includesList.map((inc, i) => {
            const Icon = inc.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-[#003BE2] shrink-0 stroke-[2]" />
                <span>{inc.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Creator Profile Section */}
      <div className="space-y-3.5 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full border border-gray-200 overflow-hidden bg-gray-100 shrink-0">
            <Image
              src="/images/hero/avatar1.svg"
              alt="PurePearl Studio Creator"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h5 className="font-poppins font-bold text-gray-900 text-sm leading-tight">
              PurePearl Studio
            </h5>
            <p className="font-satoshi text-xs text-gray-500 mt-0.5">
              Professional Creator
            </p>
          </div>
        </div>

        <p className="font-satoshi text-xs text-gray-500 leading-relaxed">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full border border-gray-200 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-satoshi font-semibold text-xs py-2.5 px-4 rounded-full transition-colors cursor-pointer text-center"
        >
          See Full Profile
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CoursePurchaseCard;
