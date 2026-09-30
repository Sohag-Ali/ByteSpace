"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import GrowthCourseCard from "./GrowthCourseCard";
import HeroProgressCard from "./HeroProgressCard";
import RevenueCard from "./RevenueCard";
import YearToDateCard from "./YearToDateCard";
import HappyStudentsCard from "./HappyStudentsCard";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const FEATURES = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const ProfessionalGrowthBlock: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 border-t border-gray-100 relative z-10 overflow-hidden">
      {/* CONTINUOUS BACKGROUND RADIAL GLOWS (Flow naturally across both parts) */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-lime-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-lime-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20 md:space-y-24">
        {/* PART 1: UPPER PROFESSIONAL GROWTH (Male Student + Text & Stats) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE — CONTENT & STATISTICS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <h2 className="text-gray-900 font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15]">
              Your Path to Professional
              <br className="hidden sm:inline" /> Growth Starts Here!
            </h2>

            <p className="text-gray-600 font-satoshi text-base sm:text-lg mt-5 leading-relaxed max-w-xl">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="flex items-center gap-8 sm:gap-12 mt-8 md:mt-10 pt-4">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="flex flex-col items-start"
                >
                  <span className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-[#003BE2] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-satoshi font-medium text-xs sm:text-sm text-gray-600 mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE — MALE STUDENT VISUAL COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center justify-center min-h-[420px] sm:min-h-[480px] md:min-h-[540px] w-full max-w-md sm:max-w-lg mx-auto lg:max-w-none"
          >
            <div
              className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full blur-3xl opacity-75 pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(203, 252, 1, 0.75) 0%, rgba(203, 252, 1, 0.25) 45%, rgba(203, 252, 1, 0.06) 70%, transparent 100%)",
              }}
            />

            <div className="absolute right-[-10px] sm:right-2 top-4 w-[110px] sm:w-[150px] z-0 pointer-events-none">
              <Image
                src="/images/hero/shape-lime-right.png"
                alt="Decorative lime shape"
                width={200}
                height={200}
                className="w-full h-auto object-contain opacity-100"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="absolute top-2 sm:top-6 left-0 sm:left-2 z-0"
            >
              <GrowthCourseCard />
            </motion.div>

            <div className="relative z-10 w-[240px] sm:w-[310px] md:w-[360px] aspect-[3/4] flex items-center justify-center">
              <Image
                src="/images/hero/hero-student.png"
                alt="Male student learner"
                width={500}
                height={650}
                priority
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              whileHover={{ y: -4 }}
              className="absolute top-[180px] sm:top-[200px] right-[-6px] sm:right-2 z-20"
            >
              <HeroProgressCard />
            </motion.div>
          </motion.div>
        </div>

        {/* PART 2: LOWER COURSE MANAGEMENT (Female Student + Instructor Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE — FEMALE STUDENT VISUAL COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center justify-center min-h-[440px] sm:min-h-[500px] md:min-h-[550px] w-full max-w-md sm:max-w-lg mx-auto lg:max-w-none"
          >
            <div
              className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full blur-3xl opacity-70 pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(203, 252, 1, 0.75) 0%, rgba(203, 252, 1, 0.25) 45%, rgba(203, 252, 1, 0.06) 70%, transparent 100%)",
              }}
            />

            <div className="absolute right-[-10px] sm:right-2 top-4 w-[110px] sm:w-[150px] z-0 pointer-events-none">
              <Image
                src="/images/hero/shape-lime-right.png"
                alt="Decorative lime shape"
                width={200}
                height={200}
                className="w-full h-auto object-contain opacity-100"
              />
            </div>

            <div className="relative z-10 w-[240px] sm:w-[310px] md:w-[360px] aspect-[3/4] flex items-center justify-center">
              <Image
                src="/images/Female_student.png"
                alt="Female student creator holding tablet and wearing headphones"
                width={500}
                height={650}
                priority
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>

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
            <h2 className="text-gray-900 font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15]">
              Create & Manage
              <br className="hidden sm:inline" /> Courses Easily.
            </h2>

            <p className="text-gray-600 font-satoshi text-base sm:text-lg mt-5 leading-relaxed max-w-lg">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

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

export default ProfessionalGrowthBlock;
