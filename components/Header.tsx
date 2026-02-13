"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/numerologie", label: "Numérologie" },
    { href: "/soins-energetiques", label: "Soins Énergétiques" },
    { href: "/accompagnement", label: "Accompagnement" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-sansfond.png"
              alt="Les Clés Vibratoires"
              width={52}
              height={52}
              className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] object-contain"
              priority
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-[family-name:var(--font-cormorant)] text-xl lg:text-2xl font-medium text-[#8B6F47]">
                Les Clés Vibratoires
              </span>
              <span className="text-[10px] lg:text-xs text-[#7D7068] tracking-[0.15em]">
                Numérologie Stratégique • Magnétisme
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#3A2F25] hover:text-[#8B6F47] transition-colors duration-300 font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-[#8B6F47] text-white rounded-full hover:bg-[#6B5535] transition-colors duration-300 font-medium text-sm"
            >
              Prendre RDV
            </Link>
          </nav>

          {/* Menu Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#3A2F25]"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#E8E0D6]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#3A2F25] hover:text-[#8B6F47] transition-colors duration-300 font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-6 py-3 bg-[#8B6F47] text-white rounded-full hover:bg-[#6B5535] transition-colors duration-300 font-medium text-center"
              >
                Prendre RDV
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
