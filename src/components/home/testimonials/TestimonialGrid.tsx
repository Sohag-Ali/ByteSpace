"use client";

import React from "react";
import { TestimonialData } from "./types";
import { TestimonialCard } from "./TestimonialCard";

export interface TestimonialGridProps {
  testimonials: TestimonialData[];
}

export const TestimonialGrid: React.FC<TestimonialGridProps> = ({
  testimonials,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
      {testimonials.map((item, index) => (
        <TestimonialCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};
