import React from "react";
import HeroSearch from "./HeroSearch";

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-[1280px] mx-auto px-4 pt-4 md:pt-8 relative z-20">
      {/* Hero Heading */}
      <h1 className="text-white font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.15] tracking-tight max-w-[900px]">
        Get Access to Hundreds
        <br className="hidden sm:inline" /> Courses Available
      </h1>

      {/* Hero Description */}
      <p className="text-white/90 font-normal text-sm sm:text-base md:text-lg max-w-[620px] mt-4 md:mt-6 leading-relaxed">
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </p>

      {/* Hero Search Area */}
      <div className="w-full mt-6 md:mt-8">
        <HeroSearch />
      </div>
    </div>
  );
};

export default HeroContent;
