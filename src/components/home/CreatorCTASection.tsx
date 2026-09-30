"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const CreatorCTASection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#003BE2] hero-grid-pattern py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden select-none">
      {/* DECORATIVE VISUAL ELEMENTS (Independent absolute layer matching reference layout) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* 1. Top-Left Lime Spring/Zig-Zag Shape */}
        <div className="absolute left-[-30px] sm:left-[-20px] md:left-0 top-[0px] sm:top-[10px] w-[120px] sm:w-[170px] md:w-[220px] lg:w-[270px]">
          <Image
            src="/images/hero/shape-lime-left.png"
            alt="Decorative top-left lime spring"
            width={534}
            height={774}
            className="w-full h-auto object-contain opacity-100"
          />
        </div>

        {/* 2. Top-Left White Scribble */}
        <div className="absolute left-[13%] sm:left-[15%] md:left-[16%] top-[6%] sm:top-[8%] w-[60px] sm:w-[90px] md:w-[110px] lg:w-[140px]">
          <Image
            src="/images/hero/shape-scribble.png"
            alt="Decorative top-left white scribble"
            width={426}
            height={744}
            className="w-full h-auto object-contain opacity-100"
          />
        </div>

        {/* 3. Mid-Left White Cone/Triangle */}
        <div className="absolute left-[-15px] sm:left-0 top-[42%] sm:top-[45%] w-[70px] sm:w-[100px] md:w-[130px] lg:w-[160px]">
          <Image
            src="/images/hero/shape-triangle.png"
            alt="Decorative mid-left white triangle"
            width={380}
            height={378}
            className="w-full h-auto object-contain opacity-100"
          />
        </div>

        {/* 4. Bottom-Left Large Lime Ring */}
        <div className="absolute left-[2%] sm:left-[4%] md:left-[5%] bottom-[-20px] sm:bottom-[-30px] md:bottom-[-40px] w-[140px] sm:w-[200px] md:w-[260px] lg:w-[320px]">
          <Image
            src="/images/hero/shape-ring.png"
            alt="Decorative bottom-left lime ring"
            width={688}
            height={686}
            className="w-full h-auto object-contain opacity-100"
          />
        </div>

        {/* 5. Top-Right Lime Pyramid/Triangle */}
        <div className="absolute right-[13%] sm:right-[15%] md:right-[16%] top-[6%] sm:top-[8%] w-[70px] sm:w-[100px] md:w-[130px] lg:w-[160px]">
          <Image
            src="/images/hero/shape-lime-right.png"
            alt="Decorative top-right lime pyramid"
            width={633}
            height={664}
            className="w-full h-auto object-contain opacity-100"
          />
        </div>

        {/* 6. Far Top-Right Large White 3D Cylinder/Pillar */}
        <div className="absolute right-[-15px] sm:right-0 top-[-10px] sm:top-0 w-[110px] sm:w-[160px] md:w-[210px] lg:w-[270px]">
          <Image
            src="/images/upper-right.png"
            alt="Decorative top-right white pillar"
            width={500}
            height={500}
            className="w-full h-auto object-contain opacity-100"
          />
        </div>

        {/* 7. Bottom-Right Lime Spring */}
        <div className="absolute right-[1%] sm:right-[3%] md:right-[4%] bottom-[-20px] sm:bottom-[-30px] md:bottom-[-40px] w-[130px] sm:w-[180px] md:w-[230px] lg:w-[290px] rotate-[-15deg]">
          <Image
            src="/images/hero/shape-lime-left.png"
            alt="Decorative bottom-right lime spring"
            width={534}
            height={774}
            className="w-full h-auto object-contain opacity-100"
          />
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-poppins font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.18] tracking-tight max-w-3xl text-center"
        >
          Unlock Your Potential as a
          <br className="hidden sm:inline" /> Creator with ByteSpace
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="font-satoshi text-white/90 text-sm sm:text-base md:text-[17px] leading-[1.65] max-w-3xl text-center mt-6 sm:mt-8 px-2"
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-8 sm:mt-10"
        >
          <button
            type="button"
            className="bg-[#D4FB20] text-gray-900 font-satoshi font-bold text-sm sm:text-base px-8 py-3.5 sm:px-10 sm:py-4 rounded-full shadow-md hover:bg-[#c6f000] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer pointer-events-auto"
          >
            Join as Creator
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorCTASection;
