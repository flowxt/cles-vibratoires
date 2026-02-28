"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const prestationsLinks = [
  { href: "/numerologie", label: "Numérologie Stratégique®", desc: "Thème adulte, enfant, couple, suivi annuel" },
  { href: "/tarologie", label: "Tarologie", desc: "Guidance & psycho-tarot" },
  { href: "/soins-energetiques", label: "Soins Énergétiques", desc: "Rééquilibrage énergétique à distance" },
];

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/accompagnement", label: "Accompagnement" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrestationsOpen, setIsPrestationsOpen] = useState(false);
  const [isMobilePrestationsOpen, setIsMobilePrestationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsPrestationsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsPrestationsOpen(false);
    }, 150);
  };

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
            <span className="hidden sm:block font-[family-name:var(--font-cormorant)] text-xl lg:text-2xl font-medium text-[#8B6F47]">
              Les Clés Vibratoires
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Accueil */}
            <Link
              href="/"
              className="text-[#3A2F25] hover:text-[#8B6F47] transition-colors duration-300 font-medium text-sm"
            >
              Accueil
            </Link>

            {/* À propos */}
            <Link
              href="/a-propos"
              className="text-[#3A2F25] hover:text-[#8B6F47] transition-colors duration-300 font-medium text-sm"
            >
              À propos
            </Link>

            {/* Prestations Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 text-[#3A2F25] hover:text-[#8B6F47] transition-colors duration-300 font-medium text-sm"
                onClick={() => setIsPrestationsOpen(!isPrestationsOpen)}
              >
                Prestations
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isPrestationsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  isPrestationsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-[#E8E0D6] p-3 min-w-[280px]">
                  {prestationsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsPrestationsOpen(false)}
                      className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-[#F5EDE3] transition-colors duration-200 group"
                    >
                      <span className="font-medium text-sm text-[#3A2F25] group-hover:text-[#8B6F47] transition-colors">
                        {link.label}
                      </span>
                      <span className="text-xs text-[#7D7068]">{link.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Accompagnement */}
            <Link
              href="/accompagnement"
              className="text-[#3A2F25] hover:text-[#8B6F47] transition-colors duration-300 font-medium text-sm"
            >
              Accompagnement
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="text-[#3A2F25] hover:text-[#8B6F47] transition-colors duration-300 font-medium text-sm"
            >
              Contact
            </Link>

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
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#3A2F25] hover:text-[#8B6F47] transition-colors duration-300 font-medium py-2.5 px-2"
              >
                Accueil
              </Link>
              <Link
                href="/a-propos"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#3A2F25] hover:text-[#8B6F47] transition-colors duration-300 font-medium py-2.5 px-2"
              >
                À propos
              </Link>

              {/* Prestations accordéon mobile */}
              <div>
                <button
                  onClick={() => setIsMobilePrestationsOpen(!isMobilePrestationsOpen)}
                  className="flex items-center justify-between w-full text-[#3A2F25] hover:text-[#8B6F47] transition-colors duration-300 font-medium py-2.5 px-2"
                >
                  Prestations
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isMobilePrestationsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobilePrestationsOpen && (
                  <div className="pl-4 pb-2 space-y-1">
                    {prestationsLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => { setIsMenuOpen(false); setIsMobilePrestationsOpen(false); }}
                        className="block py-2 px-3 rounded-lg text-[#7D7068] hover:text-[#8B6F47] hover:bg-[#F5EDE3] transition-all duration-200"
                      >
                        <span className="font-medium text-sm">{link.label}</span>
                        <span className="block text-xs mt-0.5 opacity-75">{link.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/accompagnement"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#3A2F25] hover:text-[#8B6F47] transition-colors duration-300 font-medium py-2.5 px-2"
              >
                Accompagnement
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#3A2F25] hover:text-[#8B6F47] transition-colors duration-300 font-medium py-2.5 px-2"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 px-6 py-3 bg-[#8B6F47] text-white rounded-full hover:bg-[#6B5535] transition-colors duration-300 font-medium text-center"
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
