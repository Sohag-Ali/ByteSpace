"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import GrowthCourseCard from "./GrowthCourseCard";
import HeroProgressCard from "../hero/HeroProgressCard";
import RevenueCard from "./RevenueCard";
import YearToDateCard from "./YearToDateCard";
import HappyStudentsCard from "./HappyStudentsCard";

// ==========================================
// CONSTANTS & TYPES
// ==========================================
interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const FEATURES: string[] = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

// ==========================================
// SUB-COMPONENTS
// ==========================================

/**
 * Left-side content for Part 1: Student Path to Growth
 */
const StudentGrowthContent: React.FC = () => (
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
      capabilities and accelerate your career journey. Whether you are looking
      to sharpen specific skills, gain industry expertise, or embark on a new
      career path entirely, we have the resources you need.
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
);

/**
 * Right-side visual composition for Part 1: Male Student Learner
 * (Responsive tuned for Mobile/Tablet while keeping Desktop lg: intact)
 */
const MaleStudentVisual: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[540px] md:max-w-[580px] lg:max-w-[640px] h-[380px] xs:h-[440px] sm:h-[520px] md:h-[560px] lg:h-[600px] mx-auto lg:ml-auto select-none"
  >
    {/* Background Radial Glow */}
    <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] rounded-full blur-3xl opacity-80 pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

    {/* Decorative Lime Shape (Layered on Top) */}
    <div className="absolute top-0 sm:top-2 md:top-16 lg:top-26 right-0 sm:right-[-10px] lg:right-0 w-[100px] xs:w-[130px] sm:w-[170px] lg:w-[220px] z-40 pointer-events-none">
      <Image
        src="/images/hero/shape-lime-right.png"
        alt="Decorative lime shape"
        width={200}
        height={200}
        className="w-full h-auto object-contain opacity-100"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(88%) sepia(82%) saturate(2250%) hue-rotate(10deg) brightness(105%) contrast(105%)",
        }}
      />
    </div>

    {/* Growth Course Card (Background Left) */}
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ y: -4 }}
      className="absolute top-2 xs:top-4 sm:top-8 md:top-12 lg:top-14 left-0 sm:left-2 lg:left-2 z-10 scale-90 xs:scale-95 sm:scale-100 origin-top-left"
    >
      <GrowthCourseCard />
    </motion.div>

    {/* Male Student Main Image (Extra Large & Layered Front) */}
    <div className="absolute bottom-[-10px] sm:bottom-[-20px] md:bottom-[-30px] lg:bottom-[-35px] right-[-10px] xs:right-[-20px] sm:right-[-60px] md:right-[-90px] lg:right-[-120px] w-[260px] xs:w-[320px] sm:w-[440px] md:w-[540px] lg:w-[740px] z-20 pointer-events-none">
      <Image
        src="/images/hero/hero-student.png"
        alt="Male student learner"
        width={1000}
        height={1250}
        priority
        className="w-full h-auto object-contain drop-shadow-2xl"
      />
    </div>

    {/* Learning Progress Card (Floating Right) */}
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.35 }}
      whileHover={{ y: -4 }}
      className="absolute top-[140px] xs:top-[160px] sm:top-[200px] md:top-[240px] lg:top-[290px] right-0 sm:right-2 lg:right-2 z-30 scale-90 xs:scale-95 sm:scale-100 origin-top-right"
    >
      <HeroProgressCard />
    </motion.div>
  </motion.div>
);

/**
 * Left-side visual composition for Part 2: Female Student Creator
 * (Responsive tuned for Mobile/Tablet while keeping Desktop lg: intact)
 */
const FemaleStudentVisual: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[540px] md:max-w-[580px] lg:max-w-[640px] h-[380px] xs:h-[440px] sm:h-[500px] md:h-[540px] lg:h-[580px] mx-auto select-none flex items-center justify-center"
  >
    {/* Background Radial Glow */}
    <div
      className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] rounded-full blur-3xl opacity-75 pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        background:
          "radial-gradient(circle, rgba(203, 252, 1, 0.75) 0%, rgba(203, 252, 1, 0.25) 45%, rgba(203, 252, 1, 0.06) 70%, transparent 100%)",
      }}
    />

    {/* Revenue Card (Top Left - Layered Behind Headset) */}
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ y: -4 }}
      className="absolute top-0 sm:top-2 left-0 sm:left-[-20px] md:left-[-40px] lg:left-[-60px] z-0 scale-90 xs:scale-95 sm:scale-100 origin-top-left"
    >
      <RevenueCard />
    </motion.div>

    {/* Year To Date Card (Mid Left - Layered Behind Arm) */}
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.35 }}
      whileHover={{ y: -4 }}
      className="absolute top-[130px] xs:top-[150px] sm:top-[180px] md:top-[200px] lg:top-[210px] left-0 sm:left-[-20px] md:left-[-40px] lg:left-[-60px] z-0 scale-90 xs:scale-95 sm:scale-100 origin-top-left"
    >
      <YearToDateCard />
    </motion.div>

    {/* Decorative Lime Shape (Right Side Behind Hair) */}
    <div className="absolute top-[100px] xs:top-[120px] sm:top-[150px] md:top-[160px] lg:top-[170px] right-2 sm:right-6 w-[100px] xs:w-[120px] sm:w-[160px] lg:w-[200px] z-0 pointer-events-none">
      <Image
        src="/images/hero/shape-lime-right.png"
        alt="Decorative lime shape"
        width={200}
        height={200}
        className="w-full h-auto object-contain opacity-100"
      />
    </div>

    {/* Female Student Center Image (Enlarged & Positioned Lower) */}
    <div className="absolute bottom-[-15px] sm:bottom-[-30px] md:bottom-[-80px] lg:bottom-[-145px] left-1/2 -translate-x-1/2 w-[280px] xs:w-[350px] sm:w-[460px] md:w-[540px] lg:w-[610px] z-10 pointer-events-none">
      <Image
        src="/images/Female_student.png"
        alt="Female student creator holding tablet and wearing headphones"
        width={1000}
        height={1250}
        priority
        className="w-full h-auto object-contain drop-shadow-2xl"
      />
    </div>

    {/* Happy Students Card (Bottom Right - Layered Front) */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.45 }}
      whileHover={{ y: -4 }}
      className="absolute bottom-2 sm:bottom-4 lg:bottom-4 right-0 sm:right-2 lg:right-2 z-20 scale-90 xs:scale-95 sm:scale-100 origin-bottom-right"
    >
      <HappyStudentsCard />
    </motion.div>
  </motion.div>
);

/**
 * Right-side content for Part 2: Create & Manage Courses
 */
const CourseManagementContent: React.FC = () => (
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
      ByteSpace supports individuals or entities in the creation, publication,
      and administration of educational courses.
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
);

// ==========================================
// MAIN COMPONENT
// ==========================================
export const ProfessionalGrowthBlock: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAFD] py-16 sm:py-20 md:py-24 border-t border-gray-100 relative z-10 overflow-hidden">
      {/* Background Radial Gradient Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 480px 380px at 30% 10%, rgba(209, 239, 73, 0.75) 0%, rgba(212, 251, 32, 0.18) 45%, transparent 80%),
            radial-gradient(ellipse 500px 450px at 1% 90%, rgba(212, 251, 32, 0.55) 0%, rgba(212, 251, 32, 0.15) 50%, transparent 75%),
            radial-gradient(ellipse 600px 450px at 5% 50%, rgba(142, 180, 252, 0.55) 0%, rgba(185, 210, 255, 0.15) 50%, transparent 80%),
            radial-gradient(ellipse 600px 450px at 95% 95%, rgba(142, 180, 252, 0.55) 0%, rgba(185, 210, 255, 0.15) 50%, transparent 80%),
            #FAFAFD
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20 md:space-y-24">
        {/* PART 1: STUDENT PROFESSIONAL GROWTH */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <StudentGrowthContent />
          <MaleStudentVisual />
        </div>

        {/* PART 2: COURSE CREATION & MANAGEMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FemaleStudentVisual />
          <CourseManagementContent />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalGrowthBlock;
