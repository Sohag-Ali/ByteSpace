import Hero from "@/components/home/Hero";
import TrustedLogos from "@/components/home/TrustedLogos";
import CourseSection from "@/components/home/CourseSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#003BE2]">
      <Hero />
      <TrustedLogos />
      <CourseSection />
    </main>
  );
}
