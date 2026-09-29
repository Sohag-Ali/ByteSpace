import React from "react";
import Image from "next/image";
import HeroCourseCard from "./HeroCourseCard";
import HeroProgressCard from "./HeroProgressCard";
import HeroStudentsCard from "./HeroStudentsCard";

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1280px] mx-auto h-[480px] sm:h-[550px] md:h-[620px] lg:h-[660px] mt-2 flex justify-center items-end overflow-hidden z-10">
      {/* Lime Background Circular Shape */}
      <div className="absolute bottom-[-240px] sm:bottom-[-320px] md:bottom-[-400px] lg:bottom-[-440px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[750px] md:w-[920px] lg:w-[1020px] h-[600px] sm:h-[750px] md:h-[920px] lg:h-[1020px] rounded-full bg-[#CBFC01] z-0 pointer-events-none shrink-0" />

      {/* Student / Laptop Image */}
      <div className="relative z-10 w-full max-w-[500px] sm:max-w-[620px] md:max-w-[720px] lg:max-w-[820px] h-full flex items-end justify-center">
        <Image
          src="/images/hero/hero-student.png"
          alt="Student learning with laptop"
          width={820}
          height={660}
          priority
          className="object-contain max-h-[460px] sm:max-h-[540px] md:max-h-[600px] lg:max-h-[640px] w-auto drop-shadow-lg"
        />
      </div>

      {/* Floating Card 1: UI/UX Design (Top Left) */}
      <HeroCourseCard className="absolute left-[3%] sm:left-[8%] md:left-[14%] lg:left-[19%] top-[12%] sm:top-[16%] md:top-[18%] z-20 shadow-xl" />

      {/* Floating Card 2: Learning Progress (Top Right) */}
      <HeroProgressCard className="absolute right-[3%] sm:right-[8%] md:right-[14%] lg:right-[19%] top-[20%] sm:top-[24%] md:top-[26%] z-20 shadow-xl" />

      {/* Floating Card 3: Happy Students (Bottom Left) */}
      <HeroStudentsCard className="absolute left-[4%] sm:left-[9%] md:left-[15%] lg:left-[21%] bottom-[10%] sm:bottom-[14%] md:bottom-[16%] z-20 shadow-xl" />
    </div>
  );
};

export default HeroVisual;
