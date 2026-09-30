import React from "react";
import {
  Hero,
  TrustedLogos,
  CourseSection,
  LearningPaths,
  ProfessionalGrowthBlock,
  CreatorCTASection,
  CommunityTestimonials,
} from "@/components/home";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#003BE2]">
      <Hero />
      <TrustedLogos />
      <CourseSection />
      <LearningPaths />
      <ProfessionalGrowthBlock />
      <CreatorCTASection />
      <CommunityTestimonials />
      <Footer />
    </main>
  );
}
