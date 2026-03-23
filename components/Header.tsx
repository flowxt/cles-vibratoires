"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const prestationsLinks = [
  { href: "/numerologie", label: "Numérologie Stratégique®", desc: "Thème adulte, enfant, couple, suivi annuel" },
  { href: "/tarologie", label: "Tarologie", desc: "Guidance & psycho-tarot" },
  { href: "/soins-energetiques", label: "Soins Énergétiques", desc: "Rééquilibrage énergétique à distance" },
];

const prestationsPaths = prestationsLinks.map((l) => l.href);

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrestationsOpen, setIsPrestationsOpen] = useState(false);
  const [isMobilePrestationsOpen, setIsMobilePrestationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobilePrestationsOpen(false);
  }, [pathname]);

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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isPrestationsActive = prestationsPaths.some((p) => pathname.startsWith(p));

  const navLinkClass = (href: string) =>
    `relative font-medium text-sm transition-colors duration-300 ${
      isActive(href)
        ? "text-[#8B6F47]"
        : "text-[#3A2F25] hover:text-[#8B6F47]"
    }`;

  const mobileLinkClass = (href: string) =>
    `font-medium py-2.5 px-2 transition-colors duration-300 ${
      isActive(href)
        ? "text-[#8B6F47]"
        : "text-[#3A2F25] hover:text-[#8B6F47]"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-test.png"
              alt="Les Clés Vibratoires"
              width={80}
              height={80}
              className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] object-contain"
              priority
            />
            <span className="hidden sm:block font-[family-name:var(--font-cormorant)] text-xl lg:text-2xl font-medium text-[#8B6F47]">
              Les Clés Vibratoires
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className={navLinkClass("/")}>
              Accueil
              {isActive("/") && <ActiveIndicator />}
            </Link>

            <Link href="/a-propos" className={navLinkClass("/a-propos")}>
              À propos
              {isActive("/a-propos") && <ActiveIndicator />}
            </Link>

            {/* Prestations Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 relative font-medium text-sm transition-colors duration-300 ${
                  isPrestationsActive
                    ? "text-[#8B6F47]"
                    : "text-[#3A2F25] hover:text-[#8B6F47]"
                }`}
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
                {isPrestationsActive && <ActiveIndicator />}
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
                      className={`flex flex-col gap-0.5 px-4 py-3 rounded-xl transition-colors duration-200 group ${
                        isActive(link.href) ? "bg-[#F5EDE3]" : "hover:bg-[#F5EDE3]"
                      }`}
                    >
                      <span className={`font-medium text-sm transition-colors ${
                        isActive(link.href) ? "text-[#8B6F47]" : "text-[#3A2F25] group-hover:text-[#8B6F47]"
                      }`}>
                        {link.label}
                      </span>
                      <span className="text-xs text-[#7D7068]">{link.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/accompagnement" className={navLinkClass("/accompagnement")}>
              Accompagnements
              {isActive("/accompagnement") && <ActiveIndicator />}
            </Link>

            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact
              {isActive("/contact") && <ActiveIndicator />}
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-[#E8E0D6]"
            >
              <div className="flex flex-col gap-1 py-4">
                <Link href="/" className={mobileLinkClass("/")}>
                  Accueil
                </Link>
                <Link href="/a-propos" className={mobileLinkClass("/a-propos")}>
                  À propos
                </Link>

                {/* Prestations accordéon mobile */}
                <div>
                  <button
                    onClick={() => setIsMobilePrestationsOpen(!isMobilePrestationsOpen)}
                    className={`flex items-center justify-between w-full font-medium py-2.5 px-2 transition-colors duration-300 ${
                      isPrestationsActive ? "text-[#8B6F47]" : "text-[#3A2F25] hover:text-[#8B6F47]"
                    }`}
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
                  <AnimatePresence>
                    {isMobilePrestationsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 space-y-1">
                          {prestationsLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className={`block py-2 px-3 rounded-lg transition-all duration-200 ${
                                isActive(link.href)
                                  ? "text-[#8B6F47] bg-[#F5EDE3]"
                                  : "text-[#7D7068] hover:text-[#8B6F47] hover:bg-[#F5EDE3]"
                              }`}
                            >
                              <span className="font-medium text-sm">{link.label}</span>
                              <span className="block text-xs mt-0.5 opacity-75">{link.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/accompagnement" className={mobileLinkClass("/accompagnement")}>
                  Accompagnements
                </Link>
                <Link href="/contact" className={mobileLinkClass("/contact")}>
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="mt-3 px-6 py-3 bg-[#8B6F47] text-white rounded-full hover:bg-[#6B5535] transition-colors duration-300 font-medium text-center"
                >
                  Prendre RDV
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function ActiveIndicator() {
  return (
    <motion.div
      layoutId="nav-indicator"
      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d4af37] rounded-full"
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    />
  );
}
