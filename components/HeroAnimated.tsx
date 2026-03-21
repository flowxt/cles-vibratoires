"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CalendlyButton from "@/components/CalendlyButton";

const item = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function HeroAnimated() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF8] via-[#F5EDE3] to-[#FDFBF8]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B6F47]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.p
            className="text-[#8B6F47] text-sm sm:text-base tracking-[0.3em] uppercase mb-6"
            {...item(0.05)}
          >
            Numérologie Stratégique • Magnétisme • Tarologie
          </motion.p>

          <motion.h1
            className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#3A2F25] mb-6"
            {...item(0.15)}
          >
            Les Clés Vibratoires
          </motion.h1>

          <motion.div {...item(0.25)}>
            <Image
              src="/cle-marron.png"
              alt=""
              width={44}
              height={44}
              className="w-11 h-11 object-contain mx-auto mb-3 rotate-90"
              priority
            />
          </motion.div>

          <motion.div
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8"
            {...item(0.3)}
          />

          <motion.p
            className="text-lg sm:text-xl text-[#7D7068] max-w-2xl mx-auto mb-10 leading-relaxed"
            {...item(0.35)}
          >
            Découvrez vos clés de transformation pour mieux vous connaître
            et vous reconnecter à vous-même, avec authenticité et bienveillance.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            {...item(0.45)}
          >
            <CalendlyButton className="btn-shimmer">Prendre Rendez-vous</CalendlyButton>
            <Link
              href="/a-propos"
              className="px-8 py-4 border-2 border-[#8B6F47] text-[#8B6F47] rounded-full hover:bg-[#8B6F47] hover:text-white transition-all duration-300 font-medium text-lg inline-flex items-center justify-center"
            >
              Découvrir mon approche
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 0.8, duration: 0.5 },
          y: { delay: 0.8, duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg className="w-6 h-6 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
