"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, BarChart2 } from "lucide-react";

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

  return (
    <div className="min-h-screen w-full bg-[#003BE2] hero-grid-pattern flex items-center justify-center py-10 px-4 sm:px-6 lg:px-12 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* LEFT COMPOSITION AREA (Branding, Text, Layered Cards & Floating Shapes) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left text-white">
          {/* Top Left Logo Branding */}
          <Link href="/" className="flex items-center gap-3 group mb-8">
            <svg
              width="36"
              height="40"
              viewBox="0 0 29 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
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
            </svg>
            <span className="font-clash font-bold text-2xl text-white tracking-normal">
              ByteSpace
            </span>
          </Link>

          {/* Heading */}
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
            Sign in with ease
          </h1>

          {/* Subtitle */}
          <p className="font-satoshi text-white/90 text-sm sm:text-base leading-relaxed max-w-md mt-4 mb-10">
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
          </p>

          {/* VISUAL LAYERED COURSE CARDS COMPOSITION */}
          <div className="relative w-full max-w-[480px] min-h-[420px] sm:min-h-[460px] flex items-center justify-center mt-2">
            {/* Decorative Shape 1: Top-Left Lime Ring */}
            <div className="absolute top-[10px] left-[20px] sm:left-[30px] w-16 sm:w-20 z-30 pointer-events-none">
              <Image
                src="/images/hero/shape-ring.png"
                alt="Decorative lime ring"
                width={120}
                height={120}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Decorative Shape 2: Bottom-Left Lime Pyramid */}
            <div className="absolute bottom-[-10px] left-[-10px] sm:left-[0px] w-24 sm:w-32 z-30 pointer-events-none">
              <Image
                src="/images/hero/shape-lime-right.png"
                alt="Decorative lime pyramid"
                width={160}
                height={160}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Decorative Shape 3: Bottom-Right White Scribble */}
            <div className="absolute bottom-[20px] right-[10px] sm:right-[20px] w-20 sm:w-28 z-30 pointer-events-none">
              <Image
                src="/images/hero/shape-scribble.png"
                alt="Decorative white scribble"
                width={150}
                height={150}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* BACK CARD ("Build Digital Asset") */}
            <div className="absolute top-[20px] left-[10px] sm:left-[20px] w-[260px] sm:w-[300px] bg-white rounded-3xl p-4 shadow-xl border border-gray-100 text-gray-900 transform -rotate-3 z-10 transition-transform hover:rotate-0 duration-300">
              <div className="relative w-full h-[120px] sm:h-[140px] rounded-2xl overflow-hidden mb-3">
                <Image
                  src="/images/courses/course-1.svg"
                  alt="Build Digital Asset course thumbnail"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-satoshi px-2 py-0.5 rounded-full">
                  17 Lessons
                </span>
              </div>
              <h3 className="font-poppins font-bold text-sm sm:text-base text-gray-900 leading-snug">
                Build Digital Asset
              </h3>
              <p className="font-satoshi text-xs text-[#003BE2] font-semibold mt-0.5">
                by purepearl studio
              </p>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                <span className="bg-gray-100 text-gray-700 text-[10px] font-satoshi font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <BarChart2 className="w-3 h-3 text-gray-500" /> Beginner
                </span>
                <span className="font-poppins font-bold text-xs sm:text-sm text-[#003BE2]">
                  $25<span className="text-[10px] font-normal text-gray-500">/lifetime</span>
                </span>
              </div>
            </div>

            {/* FRONT CARD ("the Power of Big Data") */}
            <div className="absolute top-[60px] sm:top-[70px] right-[10px] sm:right-[30px] w-[280px] sm:w-[320px] bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-gray-100 text-gray-900 z-20 transform rotate-2 transition-transform hover:rotate-0 duration-300">
              <div className="relative w-full h-[140px] sm:h-[160px] rounded-2xl overflow-hidden mb-3">
                <Image
                  src="/images/courses/course-3.svg"
                  alt="the Power of Big Data course thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 overflow-x-auto text-[10px] font-satoshi text-white">
                  <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full shrink-0">
                    17 Lessons
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full shrink-0">
                    2 hours 16 mins
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full shrink-0">
                    59 Comments
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-poppins font-bold text-base sm:text-lg text-gray-900 leading-snug">
                    the Power of Big Data
                  </h3>
                  <p className="font-satoshi text-xs text-[#003BE2] font-semibold mt-0.5">
                    by purepearl studio
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-gray-900 shrink-0 bg-gray-50 px-2 py-1 rounded-lg">
                  <span>4.5</span>
                  <Star className="w-3.5 h-3.5 fill-[#D4FB20] text-[#D4FB20]" />
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-gray-700 text-[10px] font-satoshi font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <BarChart2 className="w-3 h-3 text-gray-500" /> Beginner
                  </span>
                  <div className="flex items-center -space-x-2">
                    {avatars.slice(0, 3).map((av, idx) => (
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
                <span className="font-poppins font-bold text-sm text-[#003BE2]">
                  $25<span className="text-[10px] font-normal text-gray-500">/lifetime</span>
                </span>
              </div>
            </div>

            {/* FLOATING HAPPY STUDENTS CARD AT BOTTOM */}
            <div className="absolute bottom-[0px] left-[40px] sm:left-[60px] bg-[#CBFC01] text-gray-900 rounded-2xl p-3.5 sm:p-4 shadow-xl border border-lime-300 min-w-[200px] sm:min-w-[220px] z-30">
              <div className="flex items-center justify-between">
                <h4 className="font-satoshi font-bold text-xs sm:text-sm text-gray-900">
                  Happy Students
                </h4>
                <div className="flex items-center gap-0.5 text-[11px] font-bold text-gray-900">
                  <span>4.5</span>
                  <span className="text-[10px] font-normal text-gray-700">(240)</span>
                  <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
                </div>
              </div>
              <div className="flex items-center mt-2 -space-x-2">
                {avatars.map((av, idx) => (
                  <div
                    key={idx}
                    className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white overflow-hidden shrink-0 bg-gray-100"
                  >
                    <Image src={av} alt="student" fill className="object-cover" />
                  </div>
                ))}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center border-2 border-white shrink-0 z-10">
                  2K+
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT AREA (White Login Card) */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
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
              <div className="bg-red-50 text-red-600 text-sm font-satoshi p-3 rounded-xl mb-6">
                {errorMessage}
              </div>
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
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#D4FB20] text-gray-900 font-poppins font-bold text-sm sm:text-base px-9 py-3.5 rounded-full hover:bg-[#c6f000] active:scale-95 transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </button>
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
              <button
                type="button"
                aria-label="Sign in with Facebook"
                className="w-14 h-14 rounded-2xl border border-gray-200/90 flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all cursor-pointer shadow-sm text-gray-900"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              {/* Google Button */}
              <button
                type="button"
                aria-label="Sign in with Google"
                className="w-14 h-14 rounded-2xl border border-gray-200/90 flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all cursor-pointer shadow-sm text-gray-900"
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
              </button>
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
        </div>
      </div>
    </div>
  );
}
