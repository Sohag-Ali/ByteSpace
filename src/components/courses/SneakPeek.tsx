"use client";

import React from "react";
import Image from "next/image";

export const SneakPeek: React.FC = () => {
  const images = [
    "/images/courses/course-1.svg",
    "/images/courses/course-2.svg",
    "/images/courses/course-3.svg",
    "/images/courses/course-4.svg",
  ];

  return (
    <div className="space-y-4 pt-8 border-t border-gray-100">
      <h3 className="font-poppins font-bold text-gray-900 text-xl sm:text-2xl">
        Sneak Peek
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/60 shadow-sm hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
          >
            <Image
              src={src}
              alt={`Sneak peek thumbnail ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SneakPeek;
