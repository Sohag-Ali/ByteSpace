"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export interface ReviewItem {
  id: string | number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

interface ReviewCardProps {
  review: ReviewItem;
  index?: number;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -2 }}
      className="w-full bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 p-5 sm:p-6 shadow-xs flex flex-col gap-3.5 select-none font-satoshi transition-shadow hover:shadow-md"
    >
      {/* Top Row: Avatar, Name, Role & Date */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-100 overflow-hidden bg-gray-100 shrink-0 shadow-xs">
            <Image
              src={review.avatar}
              alt={review.name}
              width={44}
              height={44}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-poppins font-bold text-gray-900 text-sm sm:text-base leading-tight">
              {review.name}
            </h4>
            <p className="font-satoshi text-gray-500 text-xs sm:text-sm mt-0.5">
              {review.role}
            </p>
          </div>
        </div>

        <span className="font-satoshi text-xs sm:text-sm text-gray-400 shrink-0 pt-0.5">
          {review.date}
        </span>
      </div>

      {/* Star Rating Row */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating
                ? "fill-gray-800 text-gray-800"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Review Comment Text */}
      <p className="font-satoshi text-gray-600 text-sm sm:text-[15px] leading-relaxed">
        {review.comment}
      </p>
    </motion.div>
  );
};

export default ReviewCard;
