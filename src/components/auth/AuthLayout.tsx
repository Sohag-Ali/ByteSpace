"use client";

import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[#003BE2] hero-grid-pattern flex items-center justify-center py-10 px-4 sm:px-6 lg:px-12 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {children}
      </div>
    </div>
  );
}
