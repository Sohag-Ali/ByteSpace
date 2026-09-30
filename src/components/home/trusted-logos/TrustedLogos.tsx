"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PartnerLogo {
  id: string;
  name: string;
  icon: string;
  alt: string;
}

const partnerLogos: PartnerLogo[] = [
  {
    id: "logo-1",
    name: "Logoipsum",
    icon: "/images/logos/logo-1.svg",
    alt: "Logoipsum wave logo",
  },
  {
    id: "logo-2",
    name: "Logoipsum",
    icon: "/images/logos/logo-2.svg",
    alt: "Logoipsum sun logo",
  },
  {
    id: "logo-3",
    name: "Logoipsum",
    icon: "/images/logos/logo-3.svg",
    alt: "Logoipsum lightning logo",
  },
  {
    id: "logo-4",
    name: "Logoipsum",
    icon: "/images/logos/logo-4.svg",
    alt: "Logoipsum quatrefoil logo",
  },
  {
    id: "logo-5",
    name: "Logoipsum",
    icon: "/images/logos/logo-5.svg",
    alt: "Logoipsum concentric ripple logo",
  },
];

// Duplicate logos array for seamless infinite looping
const marqueeLogos = [
  ...partnerLogos,
  ...partnerLogos,
  ...partnerLogos,
  ...partnerLogos,
];

export const TrustedLogos: React.FC = () => {
  return (
    <section className="w-full bg-[#F4F5F7] py-12 sm:py-16 md:py-20 lg:py-24 border-none relative z-10 overflow-hidden">
      {/* Edge gradient fade masks */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#F4F5F7] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#F4F5F7] to-transparent z-10 pointer-events-none" />

      <div className="w-full flex overflow-hidden">
        {/* Continuous Left-to-Right Framer Motion Infinite Runner */}
        <motion.div
          className="flex items-center gap-12 sm:gap-16 md:gap-20 shrink-0 pr-12 sm:pr-16 md:pr-20"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 select-none group"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 shrink-0">
                <Image
                  src={logo.icon}
                  alt={logo.alt}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-satoshi font-bold text-lg sm:text-xl md:text-2xl text-[#82868E] tracking-tight leading-none">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedLogos;
