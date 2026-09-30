"use client";

import React from "react";
import { TESTIMONIALS } from "./testimonialsData";
import { TestimonialHeader } from "./TestimonialHeader";
import { TestimonialGrid } from "./TestimonialGrid";

export const CommunityTestimonials: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAFAFD] py-20 sm:py-24 md:py-28 overflow-hidden select-none">
      {/* Background Soft Glow Gradients - Lime glow exactly between Left Heading and Right Description */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 480px 380px at 52% 30%, rgba(212, 250, 44, 0.84) 0%, rgba(212, 251, 32, 0.18) 45%, transparent 70%),
            radial-gradient(ellipse 500px 450px at 98% 45%, rgba(212, 251, 32, 0.55) 0%, rgba(212, 251, 32, 0.15) 50%, transparent 75%),
            radial-gradient(ellipse 600px 450px at 15% 90%, rgba(142, 180, 252, 0.55) 0%, rgba(185, 210, 255, 0.15) 50%, transparent 80%),
            #FAFAFD
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialHeader />
        <TestimonialGrid testimonials={TESTIMONIALS} />
      </div>
    </section>
  );
};

export default CommunityTestimonials;
export * from "./types";
export * from "./testimonialsData";
export * from "./TestimonialHeader";
export * from "./TestimonialCard";
export * from "./TestimonialGrid";
