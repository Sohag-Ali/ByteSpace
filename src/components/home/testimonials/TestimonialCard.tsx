"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TestimonialData } from "./types";

export interface TestimonialCardProps {
  item: TestimonialData;
  index: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  item,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-[32px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-gray-100/80 transition-shadow duration-300 hover:shadow-xl"
    >
      <div>
        {/* Profile Image */}
        <div className="relative w-16 h-16 rounded-full overflow-hidden mb-6 shrink-0 border border-gray-100 shadow-sm">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Name & Role */}
        <div className="mb-4">
          <h3 className="font-poppins font-bold text-gray-900 text-lg sm:text-xl tracking-tight">
            {item.name}
          </h3>
          <p className="font-satoshi font-semibold text-[#003BE2] text-sm mt-0.5">
            {item.role}
          </p>
        </div>

        {/* Testimonial Quote */}
        <p className="font-satoshi text-gray-600 text-sm sm:text-base leading-relaxed">
          {item.testimonial}
        </p>
      </div>
    </motion.div>
  );
};
