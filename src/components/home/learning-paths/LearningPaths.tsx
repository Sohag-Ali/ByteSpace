"use client";

import React from "react";
import { motion } from "framer-motion";
import { LEARNING_PATHS } from "@/data/learning-paths";
import LearningPathCard from "./LearningPathCard";

export const LearningPaths: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 border-t border-gray-100 relative z-10 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-gray-900 font-poppins font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center leading-[1.2] max-w-4xl mx-auto"
        >
          Explore Diverse Learning Paths at Bytespace
        </motion.h2>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-gray-600 font-satoshi font-normal text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-center mt-4 leading-relaxed px-2"
        >
          At Bytespace, we believe in empowering individuals through knowledge. Our
          diverse range of courses spans various fields, ensuring there&apos;s
          something for everyone. Unleash your potential and explore our carefully
          curated categories.
        </motion.p>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-10 md:mt-12">
          {LEARNING_PATHS.map((path, index) => (
            <LearningPathCard key={path.id} path={path} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
