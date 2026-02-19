"use client";

import { CALENDLY_URL } from "@/lib/config";

interface CalendlyButtonProps {
  variant?: "primary" | "outline" | "white";
  className?: string;
  children?: React.ReactNode;
}

export default function CalendlyButton({
  variant = "primary",
  className = "",
  children,
}: CalendlyButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 font-medium";

  const variants = {
    primary:
      "px-8 py-4 bg-[#8B6F47] text-white hover:bg-[#6B5535] shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg",
    outline:
      "px-8 py-4 border-2 border-[#8B6F47] text-[#8B6F47] hover:bg-[#8B6F47] hover:text-white text-lg",
    white:
      "px-8 py-4 bg-white text-[#8B6F47] hover:bg-[#F5EDE3] text-lg",
  };

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      {children || "Prendre rendez-vous"}
    </a>
  );
}
