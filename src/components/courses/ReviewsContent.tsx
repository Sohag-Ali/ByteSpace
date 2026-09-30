"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RatingSummary from "./RatingSummary";
import ReviewCard, { ReviewItem } from "./ReviewCard";

const SAMPLE_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: "/images/hero/avatar1.svg",
    rating: 5,
    date: "a year ago",
    comment:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: "rev-2",
    name: "Cody Fisher",
    role: "UI/UX Designer",
    avatar: "/images/hero/avatar2.svg",
    rating: 5,
    date: "a year ago",
    comment:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: "rev-3",
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    avatar: "/images/hero/avatar3.svg",
    rating: 5,
    date: "a year ago",
    comment:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

export const ReviewsContent: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number | "all">("all");

  const filterOptions = [
    { label: "All rating", value: "all" },
    { label: "★ 5", value: 5 },
    { label: "★ 4", value: 4 },
    { label: "★ 3", value: 3 },
    { label: "★ 2", value: 2 },
    { label: "★ 1", value: 1 },
  ];

  const filteredReviews = useMemo(() => {
    if (selectedRating === "all") {
      return SAMPLE_REVIEWS;
    }
    return SAMPLE_REVIEWS.filter((r) => r.rating === selectedRating);
  }, [selectedRating]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 font-satoshi select-none"
    >
      {/* 1. Review Introduction Header */}
      <div className="space-y-2">
        <h2 className="font-poppins font-bold text-gray-900 text-2xl sm:text-3xl">
          What Learners Are Saying
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Discover what our learners have to say about their experience with
          &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews
          and ratings from individuals who have embarked on the transformative
          journey of mastering digital asset creation.
        </p>
      </div>

      {/* 2. Rating Summary Card */}
      <div className="pt-2">
        <RatingSummary rating={4.7} />
      </div>

      {/* 3. Individual Reviews Header & Filter Pills */}
      <div className="pt-4 space-y-4">
        <h3 className="font-poppins font-bold text-gray-900 text-xl sm:text-2xl">
          Individual Reviews:
        </h3>

        {/* Rating Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {filterOptions.map((opt) => {
            const isActive = selectedRating === opt.value;
            return (
              <motion.button
                key={String(opt.value)}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedRating(opt.value as number | "all")}
                className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-none ${
                  isActive
                    ? "text-gray-900"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeRatingFilter"
                    className="absolute inset-0 bg-[#CBFC01] rounded-full shadow-xs -z-0"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{opt.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* 4. Vertical List of Review Cards */}
        <div className="flex flex-col gap-4 sm:gap-6 pt-2">
          <AnimatePresence mode="popLayout">
            {filteredReviews.length > 0 ? (
              filteredReviews.map((rev, index) => (
                <ReviewCard key={rev.id} review={rev} index={index} />
              ))
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200"
              >
                <p className="font-satoshi text-gray-500 text-sm">
                  No reviews found for this rating.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewsContent;
