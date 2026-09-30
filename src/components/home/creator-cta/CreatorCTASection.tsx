"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const CreatorCTASection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#003BE2] hero-grid-pattern py-16 sm:py-24 md:py-28 lg:py-32 overflow-hidden select-none">
      {/* DECORATIVE VISUAL ELEMENTS WITH AMBIENT FLOATING ANIMATIONS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* 1. Top-Left Lime Spring/Zig-Zag Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute left-[-20px] xs:left-[-15px] sm:left-[-20px] md:left-0 top-[0px] sm:top-[-60px] md:top-[-160px] w-[80px] xs:w-[110px] sm:w-[170px] md:w-[220px] lg:w-[270px] pointer-events-none"
        >
          <Image
            src="/images/hero/shape-lime-left.png"
            alt="Decorative top-left lime spring"
            width={534}
            height={774}
            className="w-full h-auto object-contain opacity-100"
          />
        </motion.div>

        {/* 2. Top-Left White Scribble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            scale: [1, 1.08, 1],
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.1 },
            scale: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
          }}
          className="absolute left-[8%] xs:left-[12%] sm:left-[15%] md:left-[12%] top-[4%] sm:top-[4%] w-[45px] xs:w-[60px] sm:w-[90px] md:w-[110px] lg:w-[180px] pointer-events-none"
        >
          <Image
            src="/images/hero/new.png"
            alt="Decorative top-left white scribble"
            width={426}
            height={744}
            className="w-full h-auto object-contain opacity-100"
          />
        </motion.div>

        {/* 3. Mid-Left White Cone/Triangle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -10, 0],
            x: [0, 4, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.2 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
          }}
          className="absolute left-[-10px] sm:left-0 top-[48%] sm:top-[45%] w-[45px] xs:w-[60px] sm:w-[100px] md:w-[130px] lg:w-[160px] pointer-events-none"
        >
          <Image
            src="/images/hero/new-t.png"
            alt="Decorative mid-left white triangle"
            width={380}
            height={378}
            className="w-full h-auto object-contain opacity-100"
          />
        </motion.div>

        {/* 4. Bottom-Left Large Lime Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -14, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.3 },
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 },
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.1 },
          }}
          className="absolute left-[1%] sm:left-[4%] md:left-[1%] bottom-[-10px] sm:bottom-[-30px] md:bottom-[-155px] w-[90px] xs:w-[130px] sm:w-[200px] md:w-[260px] lg:w-[360px] pointer-events-none"
        >
          <Image
            src="/images/hero/shape-ring.png"
            alt="Decorative bottom-left lime ring"
            width={688}
            height={686}
            className="w-full h-auto object-contain opacity-100"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(88%) sepia(82%) saturate(2250%) hue-rotate(20deg) brightness(105%) contrast(105%)",
            }}
          />
        </motion.div>

        {/* 5. Top-Right Lime Pyramid/Triangle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            y: [0, 10, 0],
            rotate: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.15 },
            y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
            rotate: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
          }}
          className="absolute right-[8%] xs:right-[12%] sm:right-[15%] md:right-[14%] top-[4%] sm:top-[8%] w-[45px] xs:w-[65px] sm:w-[100px] md:w-[130px] lg:w-[180px] pointer-events-none"
        >
          <Image
            src="/images/hero/shape-triangle.png"
            alt="Decorative top-right lime pyramid"
            width={633}
            height={664}
            className="w-full h-auto object-contain opacity-100"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(88%) sepia(82%) saturate(2250%) hue-rotate(10deg) brightness(105%) contrast(105%)",
            }}
          />
        </motion.div>

        {/* 6. Far Top-Right Large White 3D Cylinder/Pillar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -8, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.2 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
          className="absolute right-[-10px] sm:right-0 top-[-10px] sm:top-10 w-[75px] xs:w-[100px] sm:w-[160px] md:w-[210px] lg:w-[270px] pointer-events-none"
        >
          <Image
            src="/images/hero/shape-scribble.png"
            alt="Decorative top-right white pillar"
            width={500}
            height={500}
            className="w-full h-auto object-contain opacity-100"
            style={{
              filter: "brightness(0) invert(1)",
            }}
          />
        </motion.div>

        {/* 7. Bottom-Right Lime Spring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            y: [0, 12, 0],
            rotate: [3, -3, 3],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.35 },
            y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
            rotate: { duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
          }}
          className="absolute right-[1%] sm:right-[3%] md:right-[4%] bottom-[-10px] sm:bottom-[-30px] md:bottom-[-140px] w-[85px] xs:w-[120px] sm:w-[180px] md:w-[230px] lg:w-[320px] rotate-[3deg] pointer-events-none"
        >
          <Image
            src="/images/hero/shape-lime-right.png"
            alt="Decorative bottom-right lime spring"
            width={534}
            height={774}
            className="w-full h-auto object-contain opacity-100"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(88%) sepia(82%) saturate(2250%) hue-rotate(10deg) brightness(105%) contrast(105%)",
            }}
          />
        </motion.div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-poppins font-semibold text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.2] sm:leading-[1.18] tracking-tight max-w-3xl text-center"
        >
          Unlock Your Potential as a
          <br className="hidden sm:inline" /> Creator with ByteSpace
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-satoshi text-white/90 text-xs xs:text-sm sm:text-base md:text-[17px] leading-[1.65] max-w-3xl text-center mt-4 sm:mt-8 px-2"
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.25,
            type: "spring",
            stiffness: 200,
            damping: 18,
          }}
          className="mt-6 sm:mt-10"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="bg-[#D4FB20] text-gray-900 font-satoshi font-bold text-xs xs:text-sm sm:text-base px-7 py-3 sm:px-10 sm:py-4 rounded-full shadow-lg hover:bg-[#c6f000] transition-colors duration-200 cursor-pointer pointer-events-auto"
          >
            Join as Creator
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorCTASection;
