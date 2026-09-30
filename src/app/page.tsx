import Hero from "@/components/home/Hero";
import TrustedLogos from "@/components/home/TrustedLogos";
import CourseSection from "@/components/home/CourseSection";
import LearningPaths from "@/components/home/LearningPaths";
import ProfessionalGrowthBlock from "@/components/home/ProfessionalGrowthBlock";
import CreatorCTASection from "@/components/home/CreatorCTASection";
import CommunityTestimonials from "@/components/home/CommunityTestimonials";
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




