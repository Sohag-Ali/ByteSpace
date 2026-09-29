"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Code2, Monitor, Briefcase, Megaphone, Camera, LucideIcon } from "lucide-react";
import { LearningPath } from "@/data/learning-paths";

interface LearningPathCardProps {
  path: LearningPath;
  index?: number;
}

const ICON_MAP: Record<string, LucideIcon> = {
  Palette,
  Code2,
  Monitor,
  Briefcase,
  Megaphone,
  Camera,
};

export const LearningPathCard: React.FC<LearningPathCardProps> = ({ path, index = 0 }) => {
  const IconComponent = ICON_MAP[path.icon] || Palette;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-white rounded-2xl border border-gray-200/80 p-5 flex flex-col items-center justify-center text-center transition-shadow duration-300 hover:border-gray-300 hover:shadow-md cursor-pointer group"
    >
      {/* Lime Circle Icon Container */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 6 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#D4FB20] flex items-center justify-center mb-3 shrink-0"
      >
        <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-gray-900 stroke-[2.2]" />
      </motion.div>

      {/* Category Name */}
      <h3 className="font-satoshi font-semibold text-gray-900 text-sm sm:text-base tracking-tight leading-snug truncate w-full group-hover:text-[#003BE2] transition-colors">
        {path.title}
      </h3>
    </motion.div>
  );
};

export default LearningPathCard;

