import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CreatorProfileHero, CreatorCourses } from "@/components/creators";

export const metadata: Metadata = {
  title: "Creators",
};

export default function CreatorProfilePage() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col justify-between overflow-x-hidden">
      <div>
        {/* Reusable Navbar */}
        <Navbar />

        {/* Creator Hero Banner */}
        <CreatorProfileHero />

        {/* Creator Courses White Section */}
        <CreatorCourses />
      </div>

      {/* Reusable Footer */}
      <Footer />
    </main>
  );
}
