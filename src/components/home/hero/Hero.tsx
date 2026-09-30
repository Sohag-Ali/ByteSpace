"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#003BE2] hero-grid-pattern flex flex-col justify-between">
      {/* Decorative Layer (Independent Layer with Ambient Motion) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Lime Scribble */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-25px] sm:left-[-20px] md:left-[-15px] lg:left-[-25px] xl:left-[-1px] top-[110px] sm:top-[130px] md:top-[140px] lg:top-[145px] w-[160px] sm:w-[220px] md:w-[280px] lg:w-[330px] xl:w-[270px] z-0"
        >
          <Image
            src="/images/hero/shape-lime-left.png"
            alt="Decorative lime left scribble"
            width={534}
            height={774}
            priority
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Right Lime Shape */}
        <motion.div
          animate={{
            y: [0, 8, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute right-[-10px] sm:right-0 top-[130px] sm:top-[140px] md:top-[150px] lg:top-[145px] w-[160px] sm:w-[220px] md:w-[280px] lg:w-[240px] z-0"
        >
          <Image
            src="/images/hero/shape-scribble.png"
            alt="Decorative white scribble right"
            width={426}
            height={744}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* White Left Scribble */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute left-[60px] sm:left-[120px] md:left-[170px] lg:left-[210px] top-[270px] md:top-[330px] w-[80px] sm:w-[110px] md:w-[170px] z-0"
        >
          <Image
            src="/images/hero/new.png"
            alt="Decorative lime right shape"
            width={633}
            height={664}
            priority
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* White Right Triangle */}
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="absolute right-[10px] sm:right-[160px] md:right-[210px] lg:right-[200px] top-[270px] md:top-[330px] w-[90px] sm:w-[120px] md:w-[170px] z-0"
        >
          <Image
            src="/images/hero/shape-triangle.png"
            alt="Decorative white triangle"
            width={380}
            height={378}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* White Right Scribble (Lower) */}
        <motion.div
          animate={{
            y: [0, -7, 0],
          }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
          className="absolute right-[10px] sm:right-[40px] md:right-[70px] lg:right-[110px] bottom-[70px] md:bottom-[100px] w-[100px] sm:w-[130px] md:w-[220px] z-0 -rotate-5"
        >
          <Image
            src="/images/hero/shape-lime-right.png"
            alt="Decorative lime right shape"
            width={633}
            height={664}
            priority
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* White Left Ring */}
        <motion.div
          animate={{
            rotate: [0, 6, 0],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="absolute left-[10px] sm:left-[50px] md:left-[90px] lg:left-[57px] bottom-[80px] md:bottom-[20px] w-[130px] sm:w-[180px] md:w-[230px] lg:w-[350px] z-15"
        >
          <Image
            src="/images/hero/shape-ring.png"
            alt="Decorative white ring"
            width={688}
            height={686}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* 3. Hero Content & Visual Area */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-between z-10">
        {/* Hero Heading, Description & Search */}
        <HeroContent />

        {/* Visual Area with Student & Floating Cards */}
        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;
