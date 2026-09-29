import React from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#003BE2] hero-grid-pattern flex flex-col justify-between overflow-hidden">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Decorative Layer (Independent Layer) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Left Lime Scribble */}
        <div className="absolute left-[-25px] sm:left-[-20px] md:left-[-15px] lg:left-[-25px] xl:left-[-35px] top-[110px] sm:top-[130px] md:top-[140px] lg:top-[145px] w-[160px] sm:w-[220px] md:w-[280px] lg:w-[330px] xl:w-[370px]">
          <Image
            src="/images/hero/shape-lime-left.png"
            alt="Decorative lime left scribble"
            width={534}
            height={774}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Lime Shape */}
        <div className="absolute right-[-10px] sm:right-0 top-[130px] sm:top-[140px] md:top-[150px] lg:top-[160px] w-[160px] sm:w-[220px] md:w-[280px] lg:w-[340px]">
          <Image
            src="/images/hero/shape-lime-right.png"
            alt="Decorative lime right shape"
            width={633}
            height={664}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* White Left Scribble */}
        <div className="absolute left-[60px] sm:left-[120px] md:left-[170px] lg:left-[210px] top-[370px] md:top-[430px] w-[80px] sm:w-[110px] md:w-[140px]">
          <Image
            src="/images/hero/shape-scribble.png"
            alt="Decorative white scribble left"
            width={426}
            height={744}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* White Right Triangle */}
        <div className="absolute right-[10px] sm:right-[160px] md:right-[210px] lg:right-[260px] top-[370px] md:top-[430px] w-[90px] sm:w-[120px] md:w-[150px]">
          <Image
            src="/images/hero/shape-triangle.png"
            alt="Decorative white triangle"
            width={380}
            height={378}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* White Right Scribble (Lower) */}
        <div className="absolute right-[10px] sm:right-[40px] md:right-[70px] lg:right-[100px] bottom-[70px] md:bottom-[100px] w-[100px] sm:w-[130px] md:w-[170px]">
          <Image
            src="/images/hero/shape-scribble.png"
            alt="Decorative white scribble right"
            width={426}
            height={744}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* White Left Ring */}
        <div className="absolute left-[20px] sm:left-[60px] md:left-[100px] lg:left-[130px] bottom-[80px] md:bottom-[120px] w-[130px] sm:w-[180px] md:w-[230px] lg:w-[270px]">
          <Image
            src="/images/hero/shape-ring.png"
            alt="Decorative white ring"
            width={688}
            height={686}
            className="w-full h-auto object-contain"
          />
        </div>
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
