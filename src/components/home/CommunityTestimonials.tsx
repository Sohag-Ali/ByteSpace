"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    testimonial:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    image: "/images/testimonials/sarah.jpg",
  },
  {
    id: "2",
    name: "James L.",
    role: "Lifelong Learner",
    testimonial:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    image: "/images/testimonials/james.jpg",
  },
  {
    id: "3",
    name: "Alex B.",
    role: "Inspired Creator",
    testimonial:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    image: "/images/testimonials/alex.jpg",
  },
];

export const CommunityTestimonials: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-20 sm:py-24 md:py-28 overflow-hidden select-none">
      {/* Single continuous background gradient layer covering the entire section */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 85% 25%, rgba(212, 251, 32, 0.65) 0%, rgba(212, 251, 32, 0.35) 35%, rgba(212, 251, 32, 0.12) 65%, transparent 100%), radial-gradient(ellipse 60% 60% at 50% 15%, rgba(212, 251, 32, 0.40) 0%, rgba(212, 251, 32, 0.15) 45%, transparent 90%), radial-gradient(ellipse 65% 65% at 0% 80%, rgba(185, 205, 255, 0.45) 0%, rgba(185, 205, 255, 0.20) 45%, transparent 90%), radial-gradient(ellipse 50% 50% at 0% 10%, rgba(215, 225, 255, 0.35) 0%, transparent 80%), #ffffff",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION: HEADING & DESCRIPTION 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 sm:mb-16 md:mb-20">
          {/* Left Heading */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.15] tracking-tight"
          >
            Discover What Our
            <br className="hidden sm:inline" /> Community Is Saying
          </motion.h2>

          {/* Right Description */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-satoshi text-gray-600 text-base sm:text-lg leading-[1.7] max-w-xl"
          >
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creation on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </motion.p>
        </div>

        {/* BOTTOM SECTION: 3 TESTIMONIAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-xl shadow-gray-200/50 border border-gray-100/80 transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-200/80"
            >
              <div>
                {/* Avatar Top Left */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-6 shrink-0 border-2 border-gray-100 shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & Role */}
                <div className="mb-5">
                  <h3 className="font-poppins font-bold text-gray-900 text-lg sm:text-xl tracking-tight">
                    {item.name}
                  </h3>
                  <p className="font-satoshi font-semibold text-[#003BE2] text-sm mt-0.5">
                    {item.role}
                  </p>
                </div>

                {/* Testimonial Quote */}
                <p className="font-satoshi font-normal text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.testimonial}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonials;
