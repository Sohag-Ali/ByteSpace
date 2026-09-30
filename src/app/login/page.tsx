"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, BarChart2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Sign in successful!");
    }, 800);
  };

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
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 },
    },
  };

  const cardFrontVariant: Variants = {
    hidden: { opacity: 0, x: 40, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 },
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

  const loginCardVariant: Variants = {
    hidden: { opacity: 0, x: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
    },
  };

  return (
    <div className="min-h-screen w-full bg-[#003BE2] hero-grid-pattern flex items-center justify-center py-10 px-4 sm:px-6 lg:px-12 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* LEFT COMPOSITION AREA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-start text-left text-white"
        >
          {/* Top Left Logo Branding */}
          <motion.div variants={itemFadeUp}>
            <Link href="/" className="flex items-center gap-3 group mb-8">
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
              <span className="font-clash font-bold text-2xl text-white tracking-normal">
                ByteSpace
              </span>
            </Link>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemFadeUp}
            className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]"
          >
            Sign in with ease
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemFadeUp}
            className="font-satoshi text-white/90 text-sm sm:text-base leading-relaxed max-w-md mt-4 mb-10"
          >
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
          </motion.p>

          {/* VISUAL LAYERED COURSE CARDS COMPOSITION */}
          <div className="relative w-full max-w-[520px] min-h-[480px] sm:min-h-[520px] flex items-center justify-center mt-4">
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
              className="absolute top-[10px] sm:top-[20px] left-[-10px] sm:left-[40px] w-24 sm:w-48 z-30 pointer-events-none"
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
                rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              }}
              className="absolute bottom-[-25px] sm:bottom-[15px] left-[-30px] sm:left-[320px] w-36 sm:w-44 z-50 pointer-events-none"
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
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
                x: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
              }}
              className="absolute bottom-[80px] sm:bottom-[-35px] left-[-15px] sm:left-[5px] w-28 sm:w-42 z-30 pointer-events-none"
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
              className="absolute top-[120px] left-[10px] sm:left-[20px] w-[280px] sm:w-[330px] bg-white rounded-[28px] p-5 shadow-xl border border-gray-100 text-gray-900 z-10 transition-shadow hover:shadow-2xl cursor-pointer"
            >
              <div className="relative w-full h-[140px] sm:h-[160px] rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/courses/course-1.svg"
                  alt="Build Digital Asset course thumbnail"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-satoshi font-medium px-3 py-1 rounded-full">
                  17 Lessons
                </span>
              </div>
              <h3 className="font-poppins font-bold text-base sm:text-lg text-gray-900 leading-snug">
                Build Digital Asset
              </h3>
              <p className="font-satoshi text-xs sm:text-sm text-[#003BE2] font-semibold mt-1">
                by purepearl studio
              </p>
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                <span className="bg-gray-100 text-gray-700 text-xs font-satoshi font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-gray-500" /> Beginner
                </span>
                <div className="flex items-center -space-x-2">
                  {avatars.slice(0, 4).map((av, idx) => (
                    <div
                      key={idx}
                      className="relative w-5 h-5 rounded-full border border-white overflow-hidden shrink-0 bg-gray-100"
                    >
                      <Image src={av} alt="avatar" fill className="object-cover" />
                    </div>
                  ))}
                  <span className="w-5 h-5 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center border border-white shrink-0">
                    26+
                  </span>
                </div>
              </div>
              <div className="mt-2.5">
                <span className="font-poppins font-bold text-base text-[#003BE2]">
                  $25<span className="text-xs font-normal text-gray-500">/lifetime</span>
                </span>
              </div>
            </motion.div>

            {/* FRONT CARD ("the Power of Big Data") */}
            <motion.div
              variants={cardFrontVariant}
              whileHover={{ y: -8, scale: 1.02 }}
              className="absolute top-[0px] right-[10px] sm:right-[15px] w-[310px] sm:w-[360px] bg-white rounded-[32px] p-5 sm:p-6 shadow-2xl border border-gray-100 text-gray-900 z-20 cursor-pointer"
            >
              <div className="relative w-full h-[150px] sm:h-[175px] rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/courses/course-3.svg"
                  alt="the Power of Big Data course thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-xs font-satoshi text-white">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full shrink-0">
                    17 Lessons
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full shrink-0">
                    2 hours 16 mins
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full shrink-0">
                    59 Comments
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-poppins font-bold text-lg sm:text-xl text-gray-900 leading-snug">
                    the Power of Big Data
                  </h3>
                  <p className="font-satoshi text-xs sm:text-sm text-[#003BE2] font-semibold mt-1">
                    by purepearl studio
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-gray-900 shrink-0 bg-gray-50 px-2.5 py-1 rounded-lg">
                  <span>4.5</span>
                  <Star className="w-4 h-4 fill-[#CBFC01] text-[#CBFC01]" />
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4 pt-3.5 border-t border-gray-100">
                <span className="bg-gray-100 text-gray-700 text-xs font-satoshi font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-gray-500" /> Beginner
                </span>
                <div className="flex items-center -space-x-2">
                  {avatars.slice(0, 4).map((av, idx) => (
                    <div
                      key={idx}
                      className="relative w-6 h-6 rounded-full border-2 border-white overflow-hidden shrink-0 bg-gray-100"
                    >
                      <Image src={av} alt="avatar" fill className="object-cover" />
                    </div>
                  ))}
                  <span className="w-6 h-6 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shrink-0">
                    26+
                  </span>
                </div>
              </div>
              <div className="mt-2.5">
                <span className="font-poppins font-bold text-lg text-[#003BE2]">
                  $25<span className="text-xs font-normal text-gray-500">/lifetime</span>
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
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
              }}
              className="absolute bottom-[0px] right-[20px] sm:right-[40px] bg-[#CBFC01] text-gray-900 rounded-[24px] p-4 sm:p-4.5 shadow-2xl border border-lime-300 min-w-[240px] sm:min-w-[270px] z-40 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-satoshi font-bold text-sm sm:text-base text-gray-900">
                  Happy Students
                </h4>
                <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
                  <span>4.5</span>
                  <span className="text-xs font-normal text-gray-700">(240)</span>
                  <Star className="w-3.5 h-3.5 fill-[#003BE2] text-[#003BE2]" />
                </div>
              </div>
              <div className="flex items-center -space-x-2">
                {[
                  "/images/testimonials/sarah.jpg",
                  "/images/testimonials/james.jpg",
                  "/images/testimonials/alex.jpg",
                  ...avatars,
                ].slice(0, 7).map((av, idx) => (
                  <div
                    key={idx}
                    className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden shrink-0 bg-gray-100"
                  >
                    <Image src={av} alt="student" fill className="object-cover" />
                  </div>
                ))}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center border-2 border-white shrink-0 z-10">
                  2K+
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT AREA (White Login Card) */}
        <motion.div
          variants={loginCardVariant}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex justify-center lg:justify-end w-full"
        >
          <div className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 shadow-2xl w-full max-w-lg border border-gray-100">
            {/* Header / Subheader */}
            <span className="font-satoshi font-semibold text-[#003BE2] text-sm sm:text-base">
              Sign In
            </span>
            <h2 className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl md:text-[42px] tracking-tight leading-tight mt-1 mb-8">
              Welcome Back
            </h2>

            {/* Error Banner if any */}
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 text-red-600 text-sm font-satoshi p-3 rounded-xl mb-6"
              >
                {errorMessage}
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Input */}
              <div className="flex flex-col items-start">
                <label className="font-satoshi font-semibold text-gray-700 text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  required
                  className="w-full bg-[#F8FAFC] border border-gray-200/90 rounded-2xl px-5 py-3.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:bg-white transition-all"
                />
              </div>

              {/* Password Input */}
              <div className="flex flex-col items-start">
                <label className="font-satoshi font-semibold text-gray-700 text-sm mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  required
                  className="w-full bg-[#F8FAFC] border border-gray-200/90 rounded-2xl px-5 py-3.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:bg-white transition-all"
                />
              </div>

              {/* Sign In Button */}
              <div className="pt-2 flex justify-end">
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-[#CBFC01] text-gray-900 font-poppins font-bold text-sm sm:text-base px-9 py-3.5 rounded-full hover:bg-[#b5e300] transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </motion.button>
              </div>
            </form>

            {/* Divider */}
            <div className="mt-8 mb-6 flex items-center justify-center gap-4">
              <div className="flex-1 border-t border-gray-200" />
              <span className="font-satoshi text-xs sm:text-sm text-gray-400">or</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>

            {/* Social Logins */}
            <div className="flex items-center justify-center gap-4 mb-8">
              {/* Facebook Button */}
              <motion.button
                type="button"
                aria-label="Sign in with Facebook"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-2xl border border-gray-200/90 flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer shadow-sm text-gray-900"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.button>

              {/* Google Button */}
              <motion.button
                type="button"
                aria-label="Sign in with Google"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-2xl border border-gray-200/90 flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer shadow-sm text-gray-900"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Create Account Link */}
            <p className="font-satoshi text-xs sm:text-sm text-gray-500 text-center">
              New user?{" "}
              <Link
                href="/signup"
                className="text-[#003BE2] font-semibold hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
