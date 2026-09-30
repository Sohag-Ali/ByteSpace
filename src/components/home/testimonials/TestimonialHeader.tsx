"use client";

import React from "react";
import { motion } from "framer-motion";

export const TestimonialHeader: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16 md:mb-20">
      {/* Left Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:col-span-6"
      >
        <h2 className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl lg:text-[50px] leading-[1.15] tracking-tight">
          Discover What Our
          <br />
          Community Is Saying
        </h2>
      </motion.div>

      {/* Right Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="lg:col-span-6"
      >
        <p className="font-satoshi text-gray-600 text-base sm:text-[17px] leading-relaxed max-w-xl">
          At ByteSpace, our vibrant community of learners and creators is at the
          heart of what we do. Hear directly from those who have experienced the
          transformative journey of learning and creating on our platform. Explore
          testimonials that reflect the diverse perspectives of enthusiastic learners
          and accomplished creators.
        </p>
      </motion.div>
    </div>
  );
};
