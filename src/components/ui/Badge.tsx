import type React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "lime" | "dark" | "light" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "lime",
  size = "sm",
  className = "",
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 font-mono uppercase tracking-widest font-medium rounded-full transition-colors";

  const sizeClasses = {
    sm: "text-[10px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  }[size];

  const variantClasses = {
    lime: "bg-[#D4E79E] text-[#1D2B16] border border-[#C5DC8B]",
    dark: "bg-[#182124] text-[#D4E79E] border border-white/10",
    light: "bg-black/[0.05] text-[#2C3839] border border-black/10",
    outline: "bg-transparent text-neutral-400 border border-current",
  }[variant];

  return (
    <span
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
}
