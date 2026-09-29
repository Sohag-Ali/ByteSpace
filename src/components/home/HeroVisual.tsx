import React from "react";
import Image from "next/image";
import HeroCourseCard from "./HeroCourseCard";
import HeroProgressCard from "./HeroProgressCard";
import HeroStudentsCard from "./HeroStudentsCard";

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[680px] xl:h-[750px] flex justify-center items-end overflow-hidden z-10 shrink-0 -mt-10 sm:-mt-16 md:-mt-28 lg:-mt-45 xl:-mt-52">
      {/* Lime Background Circular Shape (Fluid Responsive Aspect Square Dome) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-52%] sm:bottom-[-55%] md:bottom-[-78%] lg:bottom-[-105%] w-[88%] sm:w-[78%] md:w-[72%] lg:w-[95%] max-w-7xl aspect-square rounded-full bg-[#CBFC01] z-0 pointer-events-none shrink-0" />

      {/* Student / Laptop Image Wrapper */}
      <div className="relative z-10 w-[85%] sm:w-[70%] md:w-[58%] lg:w-[50%] xl:w-[100%] max-w-7xl h-full flex items-end justify-center pointer-events-none">
        <Image
          src="/images/hero/hero-student.png"
          alt="Student learning with laptop"
          width={1020}
          height={860}
          priority
          className="object-contain max-h-[380px] sm:max-h-[470px] md:max-h-[570px] lg:max-h-[750px] xl:max-h-[850px] w-auto drop-shadow-xl select-none"
        />
      </div>

      {/* Floating Card 1: UI/UX Design (Top Left of Student) */}
      <HeroCourseCard className="absolute left-[2%] sm:left-[5%] md:left-[10%] lg:left-[16%] xl:left-[20%] top-[20%] sm:top-[22%] md:top-[25%] lg:top-[52%] z-20 shadow-xl scale-85 sm:scale-95 lg:scale-100 origin-left" />

      {/* Floating Card 2: Learning Progress (Top Right of Student) */}
      <HeroProgressCard className="absolute right-[2%] sm:right-[5%] md:right-[10%] lg:right-[16%] xl:right-[25%] top-[25%] sm:top-[28%] md:top-[30%] lg:top-[50%] z-20 shadow-xl scale-85 sm:scale-95 lg:scale-120 origin-right" />

      {/* Floating Card 3: Happy Students (Bottom Left of Student) */}
      <HeroStudentsCard className="absolute left-[2%] sm:left-[5%] md:left-[11%] lg:left-[17%] xl:left-[21%] bottom-[6%] sm:bottom-[8%] md:bottom-[10%] lg:bottom-[6%] z-20 shadow-xl scale-85 sm:scale-95 lg:scale-100 origin-left" />
    </div>
  );
};

export default HeroVisual;
