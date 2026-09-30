import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "lime" | "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "lime",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    lime: "bg-[#CBFC01] text-black hover:bg-[#b5e300] active:bg-[#a4cd00]",
    primary: "bg-[#003BE2] text-white hover:bg-[#0033c4]",
    ghost: "bg-transparent text-white hover:bg-white/10",
    outline: "border border-white/30 text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs rounded-full",
    md: "h-11 px-6 text-sm md:text-base rounded-full",
    lg: "h-14 px-8 text-base rounded-full",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
