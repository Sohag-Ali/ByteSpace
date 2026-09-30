"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export function LoginForm() {
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

  const loginCardVariant: Variants = {
    hidden: { opacity: 0, x: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.2,
      },
    },
  };

  return (
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
          <span className="font-satoshi text-xs sm:text-sm text-gray-400">
            or
          </span>
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
  );
}
