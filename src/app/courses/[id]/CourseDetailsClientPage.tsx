"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Course } from "@/data/courses";
import {
  CourseDetailsHero,
  CoursePurchaseCard,
  CourseTabs,
  SneakPeek,
  KeyPoints,
  LessonContent,
  ReviewsContent,
} from "@/components/courses";

interface CourseDetailsClientPageProps {
  course: Course;
}

export default function CourseDetailsClientPage({
  course,
}: CourseDetailsClientPageProps) {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <main className="min-h-screen w-full bg-white flex flex-col justify-between overflow-x-hidden">
      <div>
        <Navbar />

        <CourseDetailsHero course={course} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col pt-6 lg:pt-8">
              <CourseTabs activeTab={activeTab} onTabChange={setActiveTab} />

              <AnimatePresence mode="wait">
                {activeTab === "About" && (
                  <motion.div
                    key="About"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8 font-satoshi"
                  >
                    <div className="space-y-4">
                      <h2 className="font-poppins font-bold text-gray-900 text-2xl sm:text-3xl">
                        Description
                      </h2>
                      <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed">
                        Embark on an enlightening exploration into the world of
                        digital creation with our comprehensive course, &quot;
                        {course.title}: A Comprehensive Guide.&quot; This
                        transformative learning experience invites you to delve
                        deep into the intricacies of crafting impactful digital
                        content. From laying the groundwork with foundational
                        concepts to mastering advanced techniques, this guide is
                        meticulously curated to empower you with the skills
                        essential for navigating the dynamic landscape of
                        digital creation.
                      </p>
                      <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed">
                        In the initial modules, you&apos;ll establish a solid
                        foundation by immersing yourself in the foundational
                        concepts that form the backbone of digital asset
                        creation. Understand the fundamental elements that
                        constitute compelling digital content and gain
                        proficiency in leveraging these elements to communicate
                        effectively in the digital realm.
                      </p>
                      <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed">
                        As you progress through the course, you&apos;ll ascend
                        to higher levels of expertise, delving into the nuances
                        of design principles that drive impactful creations.
                        Uncover the secrets behind effective visual
                        communication, exploring color theory, typography, and
                        layout strategies that elevate your digital assets to
                        new heights. Engage in hands-on exercises that reinforce
                        your understanding, allowing you to apply these
                        principles in practical scenarios.
                      </p>
                    </div>

                    <SneakPeek />

                    <KeyPoints />
                  </motion.div>
                )}

                {(activeTab === "Lesson" || activeTab === "Lessons") && (
                  <motion.div
                    key="Lesson"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LessonContent />
                  </motion.div>
                )}

                {activeTab === "Reviews" && (
                  <motion.div
                    key="Reviews"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ReviewsContent />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 lg:-mt-64 relative z-30">
              <CoursePurchaseCard course={course} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
