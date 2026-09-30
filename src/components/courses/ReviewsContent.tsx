"use client";

import React, { useState, useMemo } from "react";
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
    <div className="space-y-6 font-satoshi animate-in fade-in duration-200 select-none">
      {/* 1. Review Introduction Header */}
      <div className="space-y-2">
        <h2 className="font-poppins font-bold text-gray-900 text-2xl sm:text-3xl">
          What Learners Are Saying
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
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
              <button
                key={String(opt.value)}
                type="button"
                onClick={() => setSelectedRating(opt.value as number | "all")}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#CBFC01] text-gray-900 shadow-xs"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* 4. Vertical List of Review Cards */}
        <div className="flex flex-col gap-4 sm:gap-6 pt-2">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((rev) => (
              <ReviewCard key={rev.id} review={rev} />
            ))
          ) : (
            <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <p className="font-satoshi text-gray-500 text-sm">
                No reviews found for this rating.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewsContent;
