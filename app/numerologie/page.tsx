import type { Metadata } from "next";
import Link from "next/link";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "Numérologie Stratégique® | Les Clés Vibratoires",
  description:
    "Découvrez la numérologie stratégique® avec Marie. Un outil d'analyse et de compréhension de soi pour identifier vos besoins fondamentaux, vos freins et vos potentiels à activer.",
};

export default function Numerologie() {
  return (
    <div className="pt-20">
      {/* Hero Section - Sans images de cartes */}
      <section className="relative py-20 bg-gradient-to-br from-[#FDFBF8] via-[#F5EDE3] to-[#FDFBF8] overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#8B6F47]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase mb-4">
            Connaissance de soi
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl font-semibold text-[#3A2F25] mb-6">
            Numérologie Stratégique®
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
          <p className="text-lg sm:text-xl text-[#7D7068] leading-relaxed mb-6 max-w-3xl mx-auto">
            La numérologie stratégique® est une approche moderne et concrète de la numérologie, 
            développée par Lydie Castells. Elle vous offre une lecture précise de votre personnalité 
            et sert à <strong className="text-[#8B6F47]">identifier vos besoins fondamentaux</strong>, 
            avec vos freins et vos potentiels.
          </p>

          {/* Encart important : pas divinatoire */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 shadow-md border border-[#8B6F47]/10">
            <div className="flex-shrink-0 w-10 h-10 bg-[#8B6F47]/10 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-[#3A2F25] text-sm sm:text-base font-medium text-left">
              La numérologie stratégique® n&apos;est pas un art divinatoire, mais bien un{" "}
              <strong className="text-[#8B6F47]">outil d&apos;analyse et de compréhension de soi</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que la numérologie stratégique */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
              Comment ça fonctionne ?
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6" />
            <p className="text-lg text-[#7D7068] leading-relaxed max-w-3xl mx-auto">
              La numérologie est un langage symbolique millénaire qui associe les nombres à des 
              significations profondes. Chaque chiffre porte une vibration, une énergie particulière 
              qui influence notre personnalité et notre parcours de vie.
            </p>
          </div>

          {/* Cards explicatives */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 - Votre Identité */}
            <div className="bg-[#FDFBF8] rounded-2xl p-8 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#C4A265] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-3">
                Votre Identité Complète
              </h3>
              <p className="text-[#7D7068]">
                À partir de votre identité complète telle qu&apos;elle figure sur votre carte d&apos;identité 
                ou acte de naissance, ainsi que votre date de naissance, je calcule vos nombres personnels 
                qui révèlent votre essence profonde.
              </p>
            </div>

            {/* Card 2 - L'Arbre */}
            <div className="bg-[#FDFBF8] rounded-2xl p-8 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#f4e4ba] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-3">
                Votre Arbre Numérologique
              </h3>
              <p className="text-[#7D7068]">
                On établit un arbre où chaque nombre correspond à un élément : les racines, le tronc, 
                l&apos;écorce, les feuilles... Chacun représente un aspect de votre personnalité : 
                dons, besoins affectifs, besoins de réalisation, et bien plus.
              </p>
            </div>

            {/* Card 3 - Activateur de potentiels */}
            <div className="bg-[#FDFBF8] rounded-2xl p-8 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#C4A265] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-3">
                Activateur de Potentiels
              </h3>
              <p className="text-[#7D7068]">
                La numérologie stratégique® vous révèle vos <strong>dons et talents</strong>, vos 
                <strong> besoins</strong>, vos <strong>freins</strong> et vos <strong>potentiels à activer</strong>. 
                Mon rôle est de vous accompagner pour les mettre en lumière et les activer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que révèle la numérologie - 6 diapos */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
              Ce que révèle votre étude numérologique
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* 1 - Dons & Talents */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-[#8B6F47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-2">Vos dons & talents</h3>
              <p className="text-[#7D7068] text-sm">
                Identifiez vos forces innées, vos capacités naturelles et apprenez à les utiliser 
                pleinement dans votre vie personnelle et professionnelle.
              </p>
            </div>

            {/* 2 - Besoins fondamentaux */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-[#8B6F47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-2">Vos besoins fondamentaux</h3>
              <p className="text-[#7D7068] text-sm">
                Comprenez vos besoins affectifs, vos besoins de réalisation et ce dont vous avez 
                essentiellement besoin pour vous sentir aligné(e).
              </p>
            </div>

            {/* 3 - Freins & blocages */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-[#8B6F47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-2">Vos freins & ambivalences</h3>
              <p className="text-[#7D7068] text-sm">
                Découvrez vos blocages potentiels et vos ambivalences pour mieux les comprendre 
                et les transformer en leviers de croissance.
              </p>
            </div>

            {/* 4 - Potentiels à activer */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-[#8B6F47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-2">Vos potentiels à activer</h3>
              <p className="text-[#7D7068] text-sm">
                Révélez les ressources qui sommeillent en vous et activez-les pour avancer 
                sur votre chemin de vie avec confiance.
              </p>
            </div>

            {/* 5 - Plan de vie & orientation */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-[#8B6F47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-2">Votre plan de vie</h3>
              <p className="text-[#7D7068] text-sm">
                Découvrez votre objectif de vie et vers quelles orientations professionnelles 
                ou personnelles vous diriger naturellement.
              </p>
            </div>

            {/* 6 - Vibration annuelle */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-[#8B6F47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-2">Votre vibration annuelle</h3>
              <p className="text-[#7D7068] text-sm">
                Comprenez la vibration de votre année personnelle et universelle pour adopter 
                une attitude stratégique dans vos prises de décision et gagner en fluidité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-16 bg-gradient-to-br from-[#8B6F47] to-[#6B5535] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold mb-4">
              Pour qui est la numérologie ?
            </h2>
            <div className="w-16 h-0.5 bg-[#d4af37] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Mieux vous connaître
              </h3>
              <p className="text-white/80 text-sm">
                Vous ressentez le besoin de comprendre qui vous êtes vraiment, 
                d&apos;identifier vos dons, vos besoins et vos potentiels.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Vous êtes à un carrefour
              </h3>
              <p className="text-white/80 text-sm">
                Vous traversez une période de questionnement, de transition ou de changement 
                et cherchez des repères pour avancer.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Comprendre vos schémas
              </h3>
              <p className="text-white/80 text-sm">
                Certains comportements ou situations se répètent et vous 
                aimeriez en comprendre le sens pour les dépasser.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Trouver l&apos;alignement
              </h3>
              <p className="text-white/80 text-sm">
                Vous aspirez à vivre en accord avec vos valeurs profondes et à retrouver 
                du sens dans votre quotidien.
              </p>
            </div>

            {/* Encart Enfant */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#d4af37]/40">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#C97B5D] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Pour votre enfant
              </h3>
              <p className="text-white/80 text-sm">
                Mieux comprendre la personnalité de votre enfant, décoder certains comportements 
                (colère, éparpillement, manque de confiance...) et obtenir des clés pour avancer avec lui.
              </p>
            </div>

            {/* Encart Couple */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
                En couple
              </h3>
              <p className="text-white/80 text-sm">
                Comprendre la dynamique de votre couple, vos complémentarités 
                et vos points de friction pour une relation plus harmonieuse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les Prestations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
              Les Prestations
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6" />
            <p className="text-lg text-[#7D7068] max-w-3xl mx-auto">
              Chaque prestation inclut le temps de restitution, le temps de préparation et 
              d&apos;analyse en amont, ainsi que l&apos;expertise acquise au sein de l&apos;École 
              De Numérologie Stratégique®.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Thème Adulte */}
            <div className="bg-[#FDFBF8] rounded-2xl overflow-hidden border border-[#8B6F47]/10 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-[#8B6F47] to-[#C4A265] px-6 py-3">
                <div className="flex items-center justify-between text-white">
                  <span className="font-medium">Thème Adulte</span>
                  <span className="text-sm opacity-80">À partir de 24 ans</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 text-[#7D7068]">
                  <svg className="w-4 h-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">Durée : ~2h</span>
                </div>
                <ul className="space-y-2.5 text-sm text-[#7D7068]">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Apprendre à mieux se connaître : dons/talents, besoins fondamentaux, objectif de vie...
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Découvrir vos ambivalences et vos blocages potentiels
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Découvrir votre plan de vie et vos orientations professionnelles
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Connaître votre vibration annuelle pour agir avec stratégie et fluidité
                  </li>
                </ul>
              </div>
            </div>

            {/* Thème Enfant */}
            <div className="bg-[#FDFBF8] rounded-2xl overflow-hidden border border-[#C97B5D]/10 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-[#C97B5D] to-[#E0A98A] px-6 py-3">
                <div className="flex items-center justify-between text-white">
                  <span className="font-medium">Thème Enfant</span>
                  <span className="text-sm opacity-80">Restitué aux parents</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 text-[#7D7068]">
                  <svg className="w-4 h-4 text-[#C97B5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">Durée : ~1h30</span>
                </div>
                <ul className="space-y-2.5 text-sm text-[#7D7068]">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#C97B5D] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mieux comprendre la personnalité de votre enfant
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#C97B5D] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Avoir une meilleure orientation pédagogique adaptée à sa personnalité
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#C97B5D] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Décoder certains comportements (colère, éparpillement, manque de confiance...) et obtenir des clés
                  </li>
                </ul>
              </div>
            </div>

            {/* Thème Couple */}
            <div className="bg-[#FDFBF8] rounded-2xl overflow-hidden border border-[#d4af37]/10 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-[#d4af37] to-[#f4e4ba] px-6 py-3">
                <div className="flex items-center justify-between text-white">
                  <span className="font-medium">Thème Couple</span>
                  <span className="text-sm opacity-80">Dynamique relationnelle</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 text-[#7D7068]">
                  <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">Durée : ~2h</span>
                </div>
                <ul className="space-y-2.5 text-sm text-[#7D7068]">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Analyser la compatibilité et la dynamique de votre couple
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Comprendre vos complémentarités et points de friction
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Obtenir des clés pour une relation plus harmonieuse
                  </li>
                </ul>
              </div>
            </div>

            {/* Suivi Annuel */}
            <div className="bg-[#FDFBF8] rounded-2xl overflow-hidden border border-[#6B5535]/10 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-[#6B5535] to-[#8B6F47] px-6 py-3">
                <div className="flex items-center justify-between text-white">
                  <span className="font-medium">Suivi Annuel</span>
                  <span className="text-sm opacity-80">Thème adulte requis</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 text-[#7D7068]">
                  <svg className="w-4 h-4 text-[#6B5535]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">Durée : ~1h30</span>
                </div>
                <ul className="space-y-2.5 text-sm text-[#7D7068]">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#6B5535] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Bilan sur la compréhension de l&apos;année passée
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#6B5535] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Descriptif détaillé de l&apos;année en cours pour gagner en efficacité
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#6B5535] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Être guidé sur les dates importantes de vos projets
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Note sur l'enregistrement */}
          <div className="max-w-3xl mx-auto mt-10 bg-[#F5EDE3]/50 rounded-xl p-6 border border-[#8B6F47]/10">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#8B6F47] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              <p className="text-sm text-[#7D7068]">
                <strong className="text-[#3A2F25]">Bon à savoir :</strong> Nous ne remettons pas de documents papier, 
                mais l&apos;enregistrement de la consultation est autorisé. C&apos;est pendant le rendez-vous 
                que tout se passe !
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <CalendlyButton />
          </div>
        </div>
      </section>

      {/* Déroulement */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
              Comment se déroule une consultation ?
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6" />
            <p className="text-[#7D7068]">
              Les consultations se font principalement <strong className="text-[#3A2F25]">à distance</strong> (visioconférence), 
              ou à domicile en Haute-Savoie.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#8B6F47] to-[#C4A265] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-2">
                  Prise de rendez-vous
                </h3>
                <p className="text-[#7D7068]">
                  Contactez-moi pour choisir la prestation qui vous correspond. 
                  Je vous demanderai votre identité complète telle qu&apos;elle figure sur votre carte d&apos;identité 
                  ou acte de naissance, ainsi que votre date de naissance.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#f4e4ba] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-2">
                  Préparation de votre thème
                </h3>
                <p className="text-[#7D7068]">
                  Avant notre rendez-vous, je consacre plusieurs heures à calculer et analyser 
                  l&apos;ensemble de vos nombres personnels pour préparer une lecture complète et personnalisée.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#8B6F47] to-[#C4A265] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-2">
                  La consultation
                </h3>
                <p className="text-[#7D7068]">
                  Nous échangeons ensemble, principalement en visioconférence (ou à domicile en Haute-Savoie). 
                  Je vous présente votre thème, je réponds à vos questions et nous explorons ensemble 
                  les sujets qui vous tiennent à cœur. L&apos;enregistrement est autorisé.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#f4e4ba] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                4
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-2">
                  Vos clés en main
                </h3>
                <p className="text-[#7D7068]">
                  Vous repartez avec une compréhension claire de vos nombres et des pistes 
                  concrètes pour activer vos potentiels et les intégrer dans votre quotidien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
              Questions Fréquentes
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </div>

          <div className="space-y-6">
            <div className="bg-[#FDFBF8] rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-[#3A2F25] mb-2">
                La numérologie est-elle une pratique divinatoire ?
              </h3>
              <p className="text-[#7D7068]">
                Non. La numérologie stratégique® n&apos;est pas un art divinatoire. Elle ne prédit pas l&apos;avenir 
                mais constitue un véritable outil d&apos;analyse et de compréhension de soi. Elle vous aide à identifier 
                vos besoins fondamentaux, vos freins et vos potentiels à activer.
              </p>
            </div>

            <div className="bg-[#FDFBF8] rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-[#3A2F25] mb-2">
                De quelles informations avez-vous besoin ?
              </h3>
              <p className="text-[#7D7068]">
                J&apos;ai besoin de votre identité complète telle qu&apos;elle figure sur votre 
                carte d&apos;identité ou sur votre acte de naissance, ainsi que votre date de naissance complète.
              </p>
            </div>

            <div className="bg-[#FDFBF8] rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-[#3A2F25] mb-2">
                Combien de temps dure une consultation ?
              </h3>
              <p className="text-[#7D7068]">
                Cela dépend de la prestation : environ 2h pour un thème adulte, 
                1h30 pour un thème enfant, 2h pour un thème couple, et environ 1h30 pour un suivi annuel.
              </p>
            </div>

            <div className="bg-[#FDFBF8] rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-[#3A2F25] mb-2">
                Que comprend le tarif de la prestation ?
              </h3>
              <p className="text-[#7D7068]">
                Le tarif inclut le temps de restitution du thème lors de la consultation, mais aussi 
                le temps de préparation et d&apos;analyse en amont (plusieurs heures de travail) ainsi que 
                l&apos;expertise acquise par des mois de formation et de pratique au sein de l&apos;École De 
                Numérologie Stratégique®.
              </p>
            </div>

            <div className="bg-[#FDFBF8] rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-[#3A2F25] mb-2">
                Recevrai-je un document écrit ?
              </h3>
              <p className="text-[#7D7068]">
                Nous ne remettons pas de documents papier. En revanche, vous êtes autorisé(e) à 
                enregistrer la consultation. C&apos;est pendant le rendez-vous que tout se passe : 
                l&apos;échange en direct est au cœur de l&apos;accompagnement.
              </p>
            </div>

            <div className="bg-[#FDFBF8] rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-[#3A2F25] mb-2">
                Comment se passe le thème pour un enfant mineur ?
              </h3>
              <div className="text-[#7D7068] space-y-3">
                <p>
                  <strong className="text-[#3A2F25]">Enfant mineur :</strong> Le thème est restitué aux parents. 
                  Si l&apos;enfant a plus de 16 ans et qu&apos;il est motivé pour recevoir son thème, il peut participer 
                  à condition d&apos;être accompagné d&apos;un parent et d&apos;avoir déjà fait un travail d&apos;introspection 
                  personnel avec un thérapeute. Le thème nécessite un minimum de connaissance de soi pour 
                  faciliter une prise de conscience.
                </p>
                <p>
                  <strong className="text-[#3A2F25]">Enfant majeur (moins de 24 ans) :</strong> Le thème lui est restitué 
                  directement, avec ou sans parent selon son choix. Le parent peut recevoir seul le thème de 
                  son enfant, avec l&apos;accord de ce dernier.
                </p>
              </div>
            </div>

            <div className="bg-[#FDFBF8] rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-[#3A2F25] mb-2">
                Les consultations peuvent-elles se faire à distance ?
              </h3>
              <p className="text-[#7D7068]">
                Oui, et c&apos;est d&apos;ailleurs le mode privilégié. Les consultations se font principalement 
                en visioconférence. Il est aussi possible de les réaliser à domicile pour les personnes 
                du secteur Haute-Savoie. L&apos;échange est tout aussi riche et personnalisé à distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
            Prêt(e) à activer vos potentiels ?
          </h2>
          <p className="text-lg text-[#7D7068] mb-8">
            Offrez-vous une consultation en numérologie stratégique® pour mieux vous 
            connaître et avancer avec clarté sur votre chemin de vie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton />
            <Link
              href="/soins-energetiques"
              className="px-8 py-4 border-2 border-[#8B6F47] text-[#8B6F47] rounded-full hover:bg-[#8B6F47] hover:text-white transition-all duration-300 font-medium text-lg inline-flex items-center justify-center"
            >
              Découvrir les soins énergétiques
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
