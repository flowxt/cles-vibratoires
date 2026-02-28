import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarologie | Les Clés Vibratoires",
  description:
    "Guidance et psycho-tarot avec Marie. La tarologie comme outil de compréhension de soi, de déblocage et de mise en action. Bientôt disponible.",
};

export default function Tarologie() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#FDFBF8] via-[#F5EDE3] to-[#FDFBF8]">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#8B6F47]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase mb-4">
              Guidance & Psycho-Tarot
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl font-semibold text-[#3A2F25] mb-6">
              Tarologie
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
            <p className="text-lg text-[#7D7068] max-w-2xl mx-auto leading-relaxed">
              Un outil puissant de connaissance de soi et de mise en lumière,
              pour aller au cœur de vos blocages et vous accompagner vers la mise en action.
            </p>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Guidance */}
            <div className="bg-gradient-to-br from-[#F5EDE3] to-[#FDFBF8] rounded-3xl p-8 sm:p-10 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#8B6F47]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-semibold text-[#3A2F25] mb-4">
                Guidance
              </h2>
              <p className="text-[#7D7068] leading-relaxed mb-4">
                La guidance par le tarot offre un éclairage sur votre situation actuelle.
                Elle permet de mettre en lumière des pistes de réflexion, des ressources
                intérieures et des axes de compréhension pour avancer avec plus de clarté.
              </p>
              <p className="text-[#7D7068] leading-relaxed">
                Un moment de reconnexion à soi, guidé par la symbolique des arcanes,
                pour mieux comprendre ce qui se joue et ouvrir de nouvelles perspectives.
              </p>
            </div>

            {/* Psycho-Tarot */}
            <div className="bg-gradient-to-br from-[#F5EDE3] to-[#FDFBF8] rounded-3xl p-8 sm:p-10 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#d4af37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-semibold text-[#3A2F25] mb-4">
                Psycho-Tarot
              </h2>
              <p className="text-[#7D7068] leading-relaxed mb-4">
                Le psycho-tarot est un outil d&apos;accompagnement thérapeutique qui va
                au-delà de la simple lecture de cartes. Il permet de travailler en
                profondeur sur vos blocages, vos schémas répétitifs et vos freins intérieurs.
              </p>
              <p className="text-[#7D7068] leading-relaxed">
                Utilisé en complément de la numérologie, il offre une approche globale
                pour comprendre, débloquer et passer à l&apos;action concrète dans votre vie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* En cours de création */}
      <section className="py-20 bg-[#FDFBF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-10 sm:p-16 shadow-lg border border-[#E8E0D6]">
            <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#C4A265] rounded-full flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-semibold text-[#3A2F25] mb-6">
              Offre en cours de finalisation
            </h2>

            <p className="text-lg text-[#7D7068] leading-relaxed mb-6">
              Je prépare actuellement mes offres de <strong className="text-[#8B6F47]">guidance</strong> et
              de <strong className="text-[#8B6F47]">tirages psycho-tarot</strong>.
              Les détails (formules, tarifs, modalités) seront bientôt disponibles.
            </p>

            <p className="text-[#7D7068] leading-relaxed mb-4">
              La tarologie est déjà intégrée dans certains de mes
              accompagnements pour aller au cœur de vos blocages.
            </p>

            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />

            <p className="text-[#7D7068] italic mb-8">
              Contactez-moi pour être informé(e) dès le lancement
              ou pour toute question sur mes accompagnements incluant la tarologie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#8B6F47] text-white rounded-full hover:bg-[#6B5535] transition-all duration-300 font-medium"
              >
                Me contacter
              </Link>
              <Link
                href="/accompagnement"
                className="px-8 py-4 border-2 border-[#8B6F47] text-[#8B6F47] rounded-full hover:bg-[#8B6F47] hover:text-white transition-all duration-300 font-medium"
              >
                Voir les accompagnements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#8B6F47] to-[#6B5535] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold mb-4">
            Envie d&apos;en savoir plus ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Découvrez comment la tarologie s&apos;intègre dans mes accompagnements personnalisés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/accompagnement"
              className="px-8 py-4 bg-white text-[#8B6F47] rounded-full hover:bg-[#F5EDE3] transition-all duration-300 font-medium text-lg"
            >
              Les accompagnements
            </Link>
            <a
              href="https://instagram.com/lesclesvibratoires"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-lg inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Suivre l&apos;actualité
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
