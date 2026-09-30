"use client";

import React from "react";
import LessonItem from "./LessonItem";
import LessonProgressCard from "./LessonProgressCard";

export const LessonContent: React.FC = () => {
  const modules = [
    {
      title: "Module 1: Introduction to Digital Assets",
      description:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      title: "Module 2: Design Principles for Impact",
      description:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      title: "Module 3: Advanced Techniques in Digital Creation",
      description:
        "Explore advanced techniques and practical methods for creating high-quality digital assets.",
    },
    {
      title: "Module 4: User-Centric Design Strategies",
      description:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Module 5: Interactive Media and Engagement",
      description:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      title: "Module 6: Project Showcase and Critique",
      description:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      description:
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ];

  return (
    <div className="space-y-6 font-satoshi animate-in fade-in duration-200">
      {/* 1. Explore the Modules */}
      <div className="space-y-2">
        <h2 className="font-poppins font-bold text-gray-900 text-2xl sm:text-3xl">
          Explore the Modules
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Immerse yourself in the course content as we break down each module
          into comprehensive lessons, providing practical insights and hands-on
          experiences.
        </p>
      </div>

      {/* 2. Lesson List Header & 7 Modules */}
      <div className="pt-4 space-y-4">
        <h3 className="font-poppins font-bold text-gray-900 text-xl sm:text-2xl">
          Lesson List
        </h3>
        <div className="flex flex-col gap-4 sm:gap-5">
          {modules.map((mod) => (
            <LessonItem
              key={mod.title}
              title={mod.title}
              description={mod.description}
            />
          ))}
        </div>
      </div>

      {/* 3. Lesson Content */}
      <div className="pt-6 space-y-2">
        <h3 className="font-poppins font-bold text-gray-900 text-xl sm:text-2xl">
          Lesson Content
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Engage with each lesson through captivating video content, detailed
          textual explanations, and interactive elements. Download resources,
          complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      {/* 4. Lesson Progress Tracking */}
      <div className="pt-6 space-y-2">
        <h3 className="font-poppins font-bold text-gray-900 text-xl sm:text-2xl">
          Lesson Progress Tracking
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Witness your growth as you complete lessons, with an intuitive
          progress tracking feature guiding you through your learning journey.
        </p>

        {/* 55% Progress Card */}
        <LessonProgressCard percentage={55} />
      </div>
    </div>
  );
};

export default LessonContent;
