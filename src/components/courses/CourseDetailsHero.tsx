"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, BarChart2, Users, Share2, Play, Check } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseDetailsHeroProps {
  course: Course;
}

export const CourseDetailsHero: React.FC<CourseDetailsHeroProps> = ({ course }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      const shareData = {
        title: course.title,
        text: `Check out this course on ByteSpace: ${course.title}`,
        url: window.location.href,
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch {
          // Fallback to clipboard copy
          await copyToClipboard();
        }
      } else {
        await copyToClipboard();
      }
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="relative w-full bg-[#003BE2] hero-grid-pattern pt-10 pb-16 sm:pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 text-white select-none">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Row: Title/Info on Left, Share Button on Right */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-10 sm:pb-12">
          {/* Main Info */}
          <div className="max-w-3xl flex flex-col gap-3">
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.18] tracking-tight text-white">
              {course.title}: A Comprehensive Guide
            </h1>
            <p className="font-satoshi text-base sm:text-lg text-white/90 font-normal">
              Unlock the Power of Digital Creation with Expert Guidance
            </p>
            <p className="font-satoshi text-sm text-white/80 mt-0.5">
              by <span className="font-semibold text-[#CBFC01]">{course.instructor}</span>
            </p>

            {/* Information Pills */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {/* Level Pill */}
              <div className="bg-white text-gray-900 font-satoshi font-semibold text-xs sm:text-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                <BarChart2 className="w-4 h-4 text-[#003BE2] stroke-[2.5]" />
                <span>{course.level}</span>
              </div>

              {/* Rating Pill */}
              <div className="bg-white text-gray-900 font-satoshi font-semibold text-xs sm:text-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{course.rating.toFixed(1)} (172 reviews)</span>
              </div>

              {/* Students Pill */}
              <div className="bg-white text-gray-900 font-satoshi font-semibold text-xs sm:text-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                <Users className="w-4 h-4 text-[#003BE2] stroke-[2]" />
                <span>199 Students</span>
              </div>
            </div>
          </div>

          {/* Share Button */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={handleShare}
              className="bg-[#CBFC01] hover:bg-[#b8e800] text-gray-900 font-satoshi font-bold text-sm px-6 py-2.5 rounded-full flex items-center gap-2 cursor-pointer shadow-lg transition-all transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5] text-green-700" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 stroke-[2.5]" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Video Preview Thumbnail (Positioned Left) */}
        <div className="w-full lg:max-w-2xl xl:max-w-3xl">
          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gray-900 group">
            <Image
              src={course.image}
              alt={course.title}
              width={900}
              height={560}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              priority
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Play Button Overlay */}
            <button
              type="button"
              aria-label="Play video preview"
              className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 bg-white/40 backdrop-blur-md hover:bg-white/60 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all transform hover:scale-110 cursor-pointer"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsHero;
