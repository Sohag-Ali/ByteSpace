"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import RevenueCard from "./RevenueCard";
import YearToDateCard from "./YearToDateCard";
import HappyStudentsCard from "./HappyStudentsCard";

const FEATURES = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const CourseManagementSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 border-t border-gray-100 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE — FEMALE STUDENT VISUAL COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center justify-center min-h-[440px] sm:min-h-[520px] md:min-h-[580px] w-full max-w-md sm:max-w-lg mx-auto lg:max-w-none"
          >
            {/* Soft Radial Glow behind female image */}
            <div
              className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full blur-3xl opacity-70 pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(203, 252, 1, 0.75) 0%, rgba(203, 252, 1, 0.25) 45%, rgba(203, 252, 1, 0.06) 70%, transparent 100%)",
              }}
            />

            {/* Decorative Lime Scribble Asset */}
            <div className="absolute right-[-10px] sm:right-2 top-4 w-[110px] sm:w-[150px] opacity-100 z-0 pointer-events-none">
              <Image
                src="/images/hero/shape-lime-right.png"
                alt="Decorative lime shape"
                width={200}
                height={200}
                className="w-full h-auto object-contain opacity-100"
              />
            </div>

            {/* Female Student Main Image */}
            <div className="relative z-10 w-[240px] sm:w-[320px] md:w-[370px] aspect-[3/4] flex items-center justify-center">
              <Image
                src="/images/Female_student.png"
                alt="Female student creator holding tablet and wearing headphones"
                width={500}
                height={650}
                priority
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>

            {/* Floating Card 1: Total Revenue (Upper Left) */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="absolute top-2 sm:top-6 left-0 sm:left-2 z-20"
            >
              <RevenueCard />
            </motion.div>

            {/* Floating Card 2: Year to Date (Mid Left) */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              whileHover={{ y: -4 }}
              className="absolute top-[135px] sm:top-[160px] left-[-6px] sm:left-4 z-20"
            >
              <YearToDateCard />
            </motion.div>

            {/* Floating Card 3: Happy Students (Lower Right) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              whileHover={{ y: -4 }}
              className="absolute bottom-2 sm:bottom-6 right-0 sm:right-4 z-20"
            >
              <HappyStudentsCard />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — COURSE CREATOR / INSTRUCTOR CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {/* Heading */}
            <h2 className="text-gray-900 font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15]">
              Create & Manage
              <br className="hidden sm:inline" /> Courses Easily.
            </h2>

            {/* Description */}
            <p className="text-gray-600 font-satoshi text-base sm:text-lg mt-5 leading-relaxed max-w-lg">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mt-8">
              {FEATURES.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#003BE2] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="font-satoshi font-semibold text-gray-900 text-sm sm:text-base tracking-tight">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CourseManagementSection;
