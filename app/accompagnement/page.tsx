import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accompagnement | Les Clés Vibratoires",
  description:
    "Un accompagnement complet et personnalisé alliant numérologie stratégique, tarologie et soins énergétiques. Bientôt disponible.",
};

export default function Accompagnement() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#FDFBF8] via-[#F5EDE3] to-[#FDFBF8]">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#8B6F47]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase mb-4">
              Bientôt disponible
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl font-semibold text-[#3A2F25] mb-6">
              Accompagnement
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#F5EDE3] to-[#FDFBF8] rounded-3xl p-10 sm:p-16">
            {/* Icon */}
            <div className="w-20 h-20 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-10 h-10 text-[#8B6F47]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-semibold text-[#3A2F25] mb-6">
              Un accompagnement complet est en préparation
            </h2>

            <p className="text-lg text-[#7D7068] leading-relaxed mb-6">
              Je prépare actuellement une offre d&apos;accompagnement plus complète, 
              alliant <strong className="text-[#8B6F47]">numérologie stratégique®</strong>, 
              <strong className="text-[#8B6F47]"> tarologie</strong> et d&apos;autres outils 
              pour un suivi personnalisé et approfondi.
            </p>

            <p className="text-[#7D7068] leading-relaxed mb-8">
              Cette formule vous permettra de bénéficier d&apos;une approche globale, 
              combinant plusieurs disciplines pour un accompagnement sur mesure 
              dans votre cheminement personnel.
            </p>

            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />

            <p className="text-[#7D7068] italic mb-8">
              Les détails de cette offre seront bientôt disponibles. 
              N&apos;hésitez pas à me contacter pour être informé(e) dès son lancement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#8B6F47] text-white rounded-full hover:bg-[#6B5535] transition-all duration-300 font-medium"
              >
                Me contacter
              </Link>
              <a
                href="https://instagram.com/lesclesvibratoires"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#8B6F47] text-[#8B6F47] rounded-full hover:bg-[#8B6F47] hover:text-white transition-all duration-300 font-medium inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Suivre l&apos;actualité
              </a>
            </div>
          </div>

          {/* En attendant */}
          <div className="mt-16">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#3A2F25] mb-8 text-center">
              En attendant, découvrez mes prestations
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link
                href="/numerologie"
                className="bg-[#FDFBF8] rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <h4 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#3A2F25] mb-2 group-hover:text-[#8B6F47] transition-colors">
                  Numérologie Stratégique®
                </h4>
                <p className="text-[#7D7068] text-sm mb-3">
                  Thème adulte, enfant, couple ou suivi annuel pour mieux vous connaître.
                </p>
                <span className="text-[#8B6F47] font-medium text-sm inline-flex items-center gap-1">
                  Découvrir
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/soins-energetiques"
                className="bg-[#FDFBF8] rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <h4 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#3A2F25] mb-2 group-hover:text-[#8B6F47] transition-colors">
                  Soins Énergétiques
                </h4>
                <p className="text-[#7D7068] text-sm mb-3">
                  Rééquilibrage énergétique à distance pour retrouver harmonie et bien-être.
                </p>
                <span className="text-[#8B6F47] font-medium text-sm inline-flex items-center gap-1">
                  Découvrir
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
