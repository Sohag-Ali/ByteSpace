"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export function RegistrationForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!fullName || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Registration successful!");
    }, 800);
  };

  const cardVariant: Variants = {
    hidden: { opacity: 0, x: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      className="lg:col-span-6 flex justify-center lg:justify-end w-full"
    >
      <div className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 shadow-2xl w-full max-w-lg border border-gray-100">
        {/* Top small text */}
        <span className="font-satoshi font-semibold text-[#003BE2] text-sm sm:text-base">
          Create an Account
        </span>

        {/* Main Heading */}
        <h2 className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl md:text-[42px] tracking-tight leading-tight mt-1 mb-8">
          Welcome to
          <br />
          ByteSpace
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
          {/* Full Name Input */}
          <div className="flex flex-col items-start">
            <label className="font-satoshi font-semibold text-gray-700 text-sm mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Jamie Davis"
              required
              className="w-full bg-[#F8FAFC] border border-gray-200/90 rounded-2xl px-5 py-3.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:bg-white transition-all"
            />
          </div>

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

          {/* Continue Button */}
          <div className="pt-2 flex justify-end">
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#CBFC01] text-gray-900 font-poppins font-bold text-sm sm:text-base px-9 py-3.5 rounded-full hover:bg-[#b5e300] transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Continue"}
            </motion.button>
          </div>
        </form>

        {/* Bottom Login Link */}
        <p className="font-satoshi text-xs sm:text-sm text-gray-500 text-center mt-12">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#003BE2] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
