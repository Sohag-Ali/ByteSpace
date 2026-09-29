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

      {/* 2. Hero Content & Visual Area */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-between z-10">
        {/* Hero Heading, Description & Search */}
        <HeroContent />

        {/* Visual Area with Student & Floating Cards */}
        <HeroVisual />
      </div>

      {/* Decorative Floating Assets */}
      {/* Decorative 1: Lime Left Scribble */}
      <div className="absolute left-[-20px] xl:left-[10px] top-[140px] md:top-[160px] w-[140px] sm:w-[200px] md:w-[260px] lg:w-[310px] pointer-events-none z-0">
        <Image
          src="/images/hero/shape-lime-left.png"
          alt="Decorative lime left scribble"
          width={320}
          height={460}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Decorative 2: Lime Right Shape */}
      <div className="absolute right-[-10px] xl:right-[10px] top-[150px] md:top-[180px] w-[160px] sm:w-[220px] md:w-[280px] lg:w-[340px] pointer-events-none z-0">
        <Image
          src="/images/hero/shape-lime-right.png"
          alt="Decorative lime right shape"
          width={340}
          height={360}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Decorative 3: White Left Scribble */}
      <div className="absolute left-[60px] sm:left-[120px] md:left-[170px] lg:left-[210px] top-[370px] md:top-[430px] w-[80px] sm:w-[110px] md:w-[140px] pointer-events-none z-0">
        <Image
          src="/images/hero/shape-scribble.png"
          alt="Decorative white scribble left"
          width={140}
          height={240}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Decorative 4: White Right Triangle */}
      <div className="absolute right-[100px] sm:right-[160px] md:right-[210px] lg:right-[260px] top-[370px] md:top-[430px] w-[90px] sm:w-[120px] md:w-[150px] pointer-events-none z-0">
        <Image
          src="/images/hero/shape-triangle.png"
          alt="Decorative white triangle"
          width={150}
          height={150}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Decorative 5: White Right Scribble (Lower) */}
      <div className="absolute right-[10px] sm:right-[40px] md:right-[70px] lg:right-[100px] bottom-[70px] md:bottom-[100px] w-[100px] sm:w-[130px] md:w-[170px] pointer-events-none z-0">
        <Image
          src="/images/hero/shape-scribble.png"
          alt="Decorative white scribble right"
          width={170}
          height={300}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Decorative 6: White Left Ring */}
      <div className="absolute left-[20px] sm:left-[60px] md:left-[100px] lg:left-[130px] bottom-[80px] md:bottom-[120px] w-[130px] sm:w-[180px] md:w-[230px] lg:w-[270px] pointer-events-none z-0">
        <Image
          src="/images/hero/shape-ring.png"
          alt="Decorative white ring"
          width={270}
          height={270}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
