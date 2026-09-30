"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, BarChart2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

export interface AuthVisualSectionProps {
  title: string;
  description: string;
}

export function AuthVisualSection({
  title,
  description,
}: AuthVisualSectionProps) {
  const avatars = [
    "/images/hero/avatar1.svg",
    "/images/hero/avatar2.svg",
    "/images/hero/avatar3.svg",
    "/images/hero/avatar4.svg",
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const cardBackVariant: Variants = {
    hidden: { opacity: 0, x: -40, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.3,
      },
    },
  };

  const cardFrontVariant: Variants = {
    hidden: { opacity: 0, x: 40, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.4,
      },
    },
  };

  const cardStudentsVariant: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.55 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left text-white w-full mx-auto lg:mx-0"
    >
      {/* Top Left Logo Branding */}
      <motion.div
        variants={itemFadeUp}
        className="w-full flex justify-center lg:justify-start"
      >
        <Link href="/" className="flex items-center gap-3 group mb-6 lg:mb-8">
          <motion.svg
            width="36"
            height="40"
            viewBox="0 0 29 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <path
              d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z"
              fill="#D4FB20"
            />
            <path
              d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
              fill="#D4FB20"
            />
            <path
              d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C21 25.701 10.5 31.5 18.375 31.5L18.375 31.5Z"
              fill="#D4FB20"
            />
          </motion.svg>
        </Link>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={itemFadeUp}
        className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]"
      >
        {title}
      </motion.h1>

      {/* Subtitle / Description */}
      <motion.p
        variants={itemFadeUp}
        className="font-satoshi text-white/90 text-sm sm:text-base leading-relaxed max-w-md mt-3 sm:mt-4 mb-8 lg:mb-10"
      >
        {description}
      </motion.p>

      {/* VISUAL LAYERED COURSE CARDS COMPOSITION */}
      <div className="relative w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[520px] min-h-[440px] sm:min-h-[520px] flex items-center justify-center mt-2 sm:mt-4">
        {/* 1. Lime Ring (Top Left Floating) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[0px] sm:top-[20px] left-[-15px] sm:left-[40px] w-28 sm:w-48 z-30 pointer-events-none"
        >
          <Image
            src="/images/hero/shape-ring.png"
            alt="Decorative lime ring"
            width={140}
            height={140}
            className="w-full h-auto object-contain"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(88%) sepia(82%) saturate(2250%) hue-rotate(20deg) brightness(105%) contrast(105%)",
            }}
          />
        </motion.div>

        {/* 2. Lime Pyramid / Shape (Bottom Right Floating) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, 10, 0],
            rotate: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.4 },
            scale: { duration: 0.6, delay: 0.4 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            rotate: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            },
          }}
          className="absolute bottom-[-15px] sm:bottom-[15px] right-[-15px] sm:left-[320px] w-28 sm:w-44 z-50 pointer-events-none"
        >
          <Image
            src="/images/hero/new.png"
            alt="Decorative lime shape"
            width={200}
            height={200}
            className="w-full h-auto object-contain drop-shadow-xl rotate-0"
          />
        </motion.div>

        {/* 3. Lime Triangle (Bottom Left Floating) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
            x: [0, 5, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.5 },
            scale: { duration: 0.6, delay: 0.5 },
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            },
            x: {
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            },
          }}
          className="absolute bottom-[60px] sm:bottom-[-35px] left-[-20px] sm:left-[5px] w-24 sm:w-42 z-30 pointer-events-none"
        >
          <Image
            src="/images/hero/shape-triangle.png"
            alt="Decorative lime triangle"
            width={180}
            height={180}
            className="w-full h-auto object-contain"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(88%) sepia(82%) saturate(2250%) hue-rotate(20deg) brightness(105%) contrast(105%)",
            }}
          />
        </motion.div>

        {/* BACK CARD ("Build Digital Asset") */}
        <motion.div
          variants={cardBackVariant}
          whileHover={{ y: -6, scale: 1.02 }}
          className="absolute top-[100px] sm:top-[120px] left-[5px] sm:left-[20px] w-[250px] xs:w-[280px] sm:w-[330px] bg-white rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 shadow-xl border border-gray-100 text-gray-900 z-10 transition-shadow hover:shadow-2xl cursor-pointer text-left"
        >
          <div className="relative w-full h-[120px] sm:h-[160px] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4">
            <Image
              src="/images/courses/course-1.svg"
              alt="Build Digital Asset course thumbnail"
              fill
              className="object-cover"
            />
            <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-satoshi font-medium px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
              17 Lessons
            </span>
          </div>
          <h3 className="font-poppins font-bold text-sm sm:text-lg text-gray-900 leading-snug">
            Build Digital Asset
          </h3>
          <p className="font-satoshi text-xs sm:text-sm text-[#003BE2] font-semibold mt-0.5 sm:mt-1">
            by purepearl studio
          </p>
          <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-100">
            <span className="bg-gray-100 text-gray-700 text-[10px] sm:text-xs font-satoshi font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1">
              <BarChart2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500" />{" "}
              Beginner
            </span>
            <div className="flex items-center -space-x-2">
              {avatars.slice(0, 4).map((av, idx) => (
                <div
                  key={idx}
                  className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white overflow-hidden shrink-0 bg-gray-100"
                >
                  <Image src={av} alt="avatar" fill className="object-cover" />
                </div>
              ))}
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black text-white text-[8px] sm:text-[9px] font-bold flex items-center justify-center border border-white shrink-0">
                26+
              </span>
            </div>
          </div>
          <div className="mt-2">
            <span className="font-poppins font-bold text-sm sm:text-base text-[#003BE2]">
              $25
              <span className="text-xs font-normal text-gray-500">
                /lifetime
              </span>
            </span>
          </div>
        </motion.div>

        {/* FRONT CARD ("the Power of Big Data") */}
        <motion.div
          variants={cardFrontVariant}
          whileHover={{ y: -8, scale: 1.02 }}
          className="absolute top-[0px] right-[5px] sm:right-[15px] w-[270px] xs:w-[310px] sm:w-[360px] bg-white rounded-[26px] sm:rounded-[32px] p-4 sm:p-6 shadow-2xl border border-gray-100 text-gray-900 z-20 cursor-pointer text-left"
        >
          <div className="relative w-full h-[125px] sm:h-[175px] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4">
            <Image
              src="/images/courses/course-3.svg"
              alt="the Power of Big Data course thumbnail"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-satoshi text-white">
              <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shrink-0">
                17 Lessons
              </span>
              <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shrink-0 hidden xs:inline-block">
                2 hours 16 mins
              </span>
            </div>
          </div>

          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-poppins font-bold text-base sm:text-xl text-gray-900 leading-snug">
                the Power of Big Data
              </h3>
              <p className="font-satoshi text-[11px] sm:text-sm text-[#003BE2] font-semibold mt-0.5 sm:mt-1">
                by purepearl studio
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs sm:text-sm font-bold text-gray-900 shrink-0 bg-gray-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg">
              <span>4.5</span>
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#CBFC01] text-[#CBFC01]" />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4 pt-2.5 sm:pt-3.5 border-t border-gray-100">
            <span className="bg-gray-100 text-gray-700 text-[10px] sm:text-xs font-satoshi font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1">
              <BarChart2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500" />{" "}
              Beginner
            </span>
            <div className="flex items-center -space-x-2">
              {avatars.slice(0, 4).map((av, idx) => (
                <div
                  key={idx}
                  className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white overflow-hidden shrink-0 bg-gray-100"
                >
                  <Image src={av} alt="avatar" fill className="object-cover" />
                </div>
              ))}
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center border-2 border-white shrink-0">
                26+
              </span>
            </div>
          </div>
          <div className="mt-2">
            <span className="font-poppins font-bold text-base sm:text-lg text-[#003BE2]">
              $25
              <span className="text-xs font-normal text-gray-500">
                /lifetime
              </span>
            </span>
          </div>
        </motion.div>

        {/* FLOATING HAPPY STUDENTS CARD AT BOTTOM */}
        <motion.div
          variants={cardStudentsVariant}
          whileHover={{ scale: 1.05, y: -4 }}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            y: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            },
          }}
          className="absolute bottom-[0px] right-[10px] sm:right-[40px] bg-[#CBFC01] text-gray-900 rounded-[20px] sm:rounded-[24px] p-3.5 sm:p-4.5 shadow-2xl border border-lime-300 min-w-[210px] sm:min-w-[270px] z-40 cursor-pointer text-left"
        >
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <h4 className="font-satoshi font-bold text-xs sm:text-base text-gray-900">
              Happy Students
            </h4>
            <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-gray-900">
              <span>4.5</span>
              <span className="text-[10px] sm:text-xs font-normal text-gray-700">
                (240)
              </span>
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#003BE2] text-[#003BE2]" />
            </div>
          </div>
          <div className="flex items-center -space-x-2">
            {[
              "/images/testimonials/sarah.jpg",
              "/images/testimonials/james.jpg",
              "/images/testimonials/alex.jpg",
              ...avatars,
            ]
              .slice(0, 7)
              .map((av, idx) => (
                <div
                  key={idx}
                  className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden shrink-0 bg-gray-100"
                >
                  <Image src={av} alt="student" fill className="object-cover" />
                </div>
              ))}
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black text-white text-[10px] sm:text-xs font-bold flex items-center justify-center border-2 border-white shrink-0 z-10">
              2K+
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
