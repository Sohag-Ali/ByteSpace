"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFoundClientView() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col justify-between overflow-x-hidden">
      <div>
        <Navbar />

        <div className="relative w-full bg-[#003BE2] hero-grid-pattern py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 text-white text-center flex flex-col items-center justify-center select-none overflow-hidden min-h-[calc(100vh-280px)]">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center relative z-10">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -6, 0],
              }}
              transition={{
                duration: 0.8,
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="font-poppins font-black text-[120px] sm:text-[180px] md:text-[230px] lg:text-[270px] leading-none tracking-tight text-[#CBFC01] select-none bg-gradient-to-b from-[#CBFC01] via-[#CBFC01] to-[#a0e400] bg-clip-text text-transparent drop-shadow-md"
            >
              404
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-poppins font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.15] tracking-tight max-w-2xl mx-auto mt-2 sm:mt-4"
            >
              The page you are looking
              <br className="hidden sm:inline" /> for doesn&apos;t exist
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="font-satoshi text-white/80 text-sm sm:text-base max-w-md mx-auto mt-4 font-normal leading-relaxed"
            >
              Try to use a correct url or go back to homepage to start again
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8"
            >
              <Link href="/">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-[#CBFC01] hover:bg-[#b8e800] text-gray-900 font-satoshi font-bold text-sm sm:text-base px-8 py-3 rounded-full shadow-lg transition-colors cursor-pointer inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Back to Home
                </motion.button>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
