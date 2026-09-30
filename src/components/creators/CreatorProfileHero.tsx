"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Package, Users, Check, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export const CreatorProfileHero: React.FC = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="relative w-full bg-[#003BE2] hero-grid-pattern pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-white select-none">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-8">
        
        {/* Top & Description Block */}
        <div className="flex flex-col gap-6 max-w-4xl">
          {/* Profile Header Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6"
          >
            {/* Square Creator Profile Image */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/20 shadow-xl shrink-0 bg-gray-100 cursor-pointer"
            >
              <Image
                src="/images/sohag.png"
                alt="Md Sohag Ali"
                fill
                sizes="(max-width: 640px) 96px, 112px"
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Creator Info Header */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                  Md Sohag Ali
                </h1>
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="bg-[#CBFC01] text-gray-900 font-satoshi font-bold text-xs sm:text-sm px-3.5 py-1 rounded-full shadow-xs"
                >
                  Creator
                </motion.span>
              </div>
              <p className="font-satoshi text-base sm:text-lg text-white/90 font-medium">
                Passionate Frontend Developer
              </p>
            </div>
          </motion.div>

          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-3 font-satoshi text-sm sm:text-base text-white/85 leading-relaxed"
          >
            <p>
              Welcome to the creative world of Md Sohag Ali. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
            </p>
            <p>
              I dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </motion.div>
        </div>

        {/* Bottom Row: Stats Pills on Left, Follow Button on Right */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          {/* Stats Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center gap-3 flex-wrap"
          >
            {/* 3 Products Pill */}
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              className="bg-white text-gray-900 font-satoshi font-semibold text-sm px-4 sm:px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-md cursor-pointer transition-shadow"
            >
              <div className="w-6 h-6 rounded-full bg-[#003BE2] text-white font-bold text-xs flex items-center justify-center shrink-0">
                3
              </div>
              <span>Products</span>
            </motion.div>

            {/* 12 Followers Pill */}
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              className="bg-white text-gray-900 font-satoshi font-semibold text-sm px-4 sm:px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-md cursor-pointer transition-shadow"
            >
              <div className="w-6 h-6 rounded-full bg-[#003BE2] text-white font-bold text-xs flex items-center justify-center shrink-0">
                12
              </div>
              <span>Followers</span>
            </motion.div>
          </motion.div>

          {/* Follow Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="self-start sm:self-auto"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFollowing(!isFollowing)}
              className="bg-[#CBFC01] hover:bg-[#b8e800] text-gray-900 font-satoshi font-bold text-sm sm:text-base px-8 py-2.5 sm:py-3 rounded-full shadow-lg transition-colors cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {isFollowing ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5] text-green-800" />
                  <span>Following</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4 stroke-[2.5]" />
                  <span>Follow</span>
                </>
              )}
            </motion.button>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default CreatorProfileHero;
