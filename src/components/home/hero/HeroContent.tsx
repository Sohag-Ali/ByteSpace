"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroSearch from "./HeroSearch";

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-[1280px] mx-auto px-4 pt-4 md:pt-8 relative z-20">
      {/* Hero Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-white font-poppins font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[120%] tracking-[-0.01em] max-w-[935px] text-center"
      >
        Get Access to Hundreds
        <br className="hidden sm:inline" /> Courses Available
      </motion.h1>

      {/* Hero Description */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="text-[#E5E6E8] font-satoshi font-normal text-sm sm:text-base md:text-[18px] max-w-[819px] mt-4 md:mt-6 leading-[160%] tracking-normal text-center"
      >
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </motion.p>

      {/* Hero Search Area */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="w-full mt-6 md:mt-8"
      >
        <HeroSearch />
      </motion.div>
    </div>
  );
};

export default HeroContent;
