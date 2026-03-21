import type { Metadata } from "next";
import Link from "next/link";
import CalendlyButton from "@/components/CalendlyButton";
import { CALENDLY } from "@/lib/config";
import { FadeIn, FadeUp, ScaleIn, Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Numérologie Stratégique®",
  description:
    "Découvrez la numérologie stratégique® avec Marie. Un outil d'analyse et de compréhension de soi pour identifier vos besoins fondamentaux, vos freins et vos potentiels à activer.",
  alternates: { canonical: "https://www.lesclesvibratoires.fr/numerologie" },
};

export default function Numerologie() {
  return (
    <div className="pt-20">
      {/* Hero Section - Sans images de cartes */}
      <section className="relative py-20 bg-gradient-to-br from-[#FDFBF8] via-[#F5EDE3] to-[#FDFBF8] overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#8B6F47]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase mb-4">
              Connaissance de soi
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl font-semibold text-[#3A2F25] mb-6">
              Numérologie Stratégique®
            </h1>
          </FadeUp>
          <FadeIn delay={0.2}>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
          </FadeIn>
          <FadeUp delay={0.2}>
            <p className="text-lg sm:text-xl text-[#7D7068] leading-relaxed mb-6 max-w-3xl mx-auto">
              La numérologie stratégique® est une approche moderne et concrète de la numérologie, 
              développée par Lydie Castells. Elle vous offre une lecture précise de votre personnalité 
              et sert à <strong className="text-[#8B6F47]">identifier vos besoins fondamentaux</strong>, 
              avec vos freins et vos potentiels.
            </p>
          </FadeUp>

          {/* Encart important : pas divinatoire */}
          <ScaleIn delay={0.3}>
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
          </ScaleIn>
        </div>
      </section>

      {/* Qu'est-ce que la numérologie stratégique */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
                Comment ça fonctionne ?
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6" />
              <p className="text-lg text-[#7D7068] leading-relaxed max-w-3xl mx-auto text-justify">
                La numérologie est un langage symbolique millénaire inspiré des enseignements de Pythagore, 
                pour qui « tout est nombre ». Chaque nombre porte une vibration et une signification 
                particulières, qui influencent notre personnalité et notre chemin de vie.
              </p>
            </div>
          </FadeUp>

          {/* Cards explicatives */}
          <Stagger className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 - Votre Identité */}
            <StaggerItem>
            <div className="bg-[#FDFBF8] rounded-2xl p-8 text-center hover:shadow-lg transition-all h-full flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#C4A265] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-3">
                Votre Identité Complète
              </h3>
              <p className="text-[#7D7068] text-justify">
                À partir de votre <strong className="text-[#8B6F47]">identité complète</strong> telle 
                qu&apos;elle figure sur votre carte d&apos;identité ou acte de naissance, ainsi que votre{" "}
                <strong className="text-[#8B6F47]">date de naissance</strong>, je calcule vos nombres 
                personnels qui révèlent votre essence profonde.
              </p>
            </div>
            </StaggerItem>

            {/* Card 2 - L'Arbre */}
            <StaggerItem>
            <div className="bg-[#FDFBF8] rounded-2xl p-8 text-center hover:shadow-lg transition-all h-full flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#C4A265] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22V12m0 0l-3-3m3 3l3-3m-3-7a4 4 0 00-4 4c0 1.5.8 2.8 2 3.5M12 2a4 4 0 014 4c0 1.5-.8 2.8-2 3.5M7 9.5C5.2 10 4 11.5 4 13c0 2 1.5 3.5 3.5 3.5H8m8 0h.5c2 0 3.5-1.5 3.5-3.5 0-1.5-1.2-3-3-3.5" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-3">
                Votre Arbre Numérologique
              </h3>
              <p className="text-[#7D7068] text-justify">
                On établit un arbre où chaque nombre correspond à un élément : les racines, le tronc, 
                l&apos;écorce, les feuilles...
                <br />
                Chacun représente un aspect de votre personnalité : 
                dons, besoins affectifs, besoins de réalisation, et bien plus.
              </p>
            </div>
            </StaggerItem>

            {/* Card 3 - Activateur de potentiels */}
            <StaggerItem>
            <div className="bg-[#FDFBF8] rounded-2xl p-8 text-center hover:shadow-lg transition-all h-full flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#C4A265] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-3">
                Activateur de Potentiels
              </h3>
              <p className="text-[#7D7068] text-justify">
                La numérologie stratégique® vous révèle vos <strong>dons et talents</strong>, vos 
                <strong> besoins</strong>, vos <strong>freins</strong> et vos <strong>potentiels à activer</strong>. 
                Mon rôle est de vous accompagner pour les mettre en lumière et les activer.
              </p>
            </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Ce que révèle la numérologie - 6 diapos */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
                Ce que révèle votre étude numérologique
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
            </div>
          </FadeUp>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* 1 - Dons & Talents */}
            <StaggerItem>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="w-10 h-10 bg-[#8B6F47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-2">Vos dons & talents</h3>
              <p className="text-[#7D7068] text-sm text-justify">
                Identifiez vos forces innées, vos capacités naturelles et apprenez à les utiliser 
                pleinement dans votre vie personnelle et professionnelle.
              </p>
            </div>
            </StaggerItem>

            {/* 2 - Besoins fondamentaux */}
            <StaggerItem>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="w-10 h-10 bg-[#8B6F47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-2">Vos besoins fondamentaux</h3>
              <p className="text-[#7D7068] text-sm text-justify">
                Comprenez vos besoins affectifs, vos besoins de réalisation et ce dont vous avez 
                essentiellement besoin pour vous sentir aligné(e).
              </p>
            </div>
            </StaggerItem>

            {/* 3 - Freins & blocages */}
            <StaggerItem>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="w-10 h-10 bg-[#8B6F47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-2">Vos freins & ambivalences</h3>
              <p className="text-[#7D7068] text-sm text-justify">
                Découvrez vos blocages potentiels et vos ambivalences pour mieux les comprendre 
                et les transformer en leviers de croissance.
              </p>
            </div>
            </StaggerItem>

            {/* 4 - Potentiels à activer */}
            <StaggerItem>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="w-10 h-10 bg-[#8B6F47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-2">Vos potentiels à activer</h3>
              <p className="text-[#7D7068] text-sm text-justify">
                Révélez les ressources qui sommeillent en vous et activez-les pour avancer 
                sur votre chemin de vie avec confiance.
              </p>
            </div>
            </StaggerItem>

            {/* 5 - Plan de vie & orientation */}
            <StaggerItem>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="w-10 h-10 bg-[#8B6F47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-2">Votre plan de vie</h3>
              <p className="text-[#7D7068] text-sm text-justify">
                Découvrez votre objectif de vie et vers quelles orientations professionnelles 
                ou personnelles vous diriger naturellement.
              </p>
            </div>
            </StaggerItem>

            {/* 6 - Vibration annuelle */}
            <StaggerItem>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="w-10 h-10 bg-[#8B6F47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-2">Votre vibration annuelle</h3>
              <p className="text-[#7D7068] text-sm text-justify">
                Comprenez la vibration de votre année personnelle et universelle pour adopter 
                une attitude stratégique dans vos prises de décision et gagner en fluidité.
              </p>
            </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-16 bg-gradient-to-br from-[#8B6F47] to-[#6B5535] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold mb-4">
                Pour qui est la numérologie ?
              </h2>
              <div className="w-16 h-0.5 bg-[#d4af37] mx-auto" />
            </div>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Mieux vous connaître
              </h3>
              <p className="text-white/80 text-sm text-justify">
                Vous ressentez le besoin de comprendre qui vous êtes vraiment, 
                d&apos;identifier vos dons, vos besoins et vos potentiels.
              </p>
            </div>
            </StaggerItem>

            <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Vous êtes à un carrefour
              </h3>
              <p className="text-white/80 text-sm text-justify">
                Vous traversez une période de questionnement, de transition ou de changement 
                et cherchez des repères pour avancer.
              </p>
            </div>
            </StaggerItem>

            <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Comprendre vos schémas
              </h3>
              <p className="text-white/80 text-sm text-justify">
                Certains comportements ou situations se répètent et vous 
                aimeriez en comprendre le sens pour les dépasser.
              </p>
            </div>
            </StaggerItem>

            <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Trouver l&apos;alignement
              </h3>
              <p className="text-white/80 text-sm text-justify">
                Vous aspirez à vivre en accord avec vos valeurs profondes et à retrouver 
                du sens dans votre quotidien.
              </p>
            </div>
            </StaggerItem>

            {/* Encart Enfant */}
            <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#d4af37]/40 h-full flex flex-col">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#C97B5D] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Pour votre enfant
              </h3>
              <p className="text-white/80 text-sm text-justify">
                Mieux comprendre la personnalité de votre enfant, décoder certains comportements 
                (colère, éparpillement, manque de confiance...) et obtenir des clés pour avancer avec lui.
              </p>
            </div>
            </StaggerItem>

            {/* Encart Couple */}
            <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
                En couple
              </h3>
              <p className="text-white/80 text-sm text-justify">
                Comprendre la dynamique de votre couple, vos complémentarités 
                et vos points de friction pour une relation plus harmonieuse.
              </p>
            </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Les Prestations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
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
          </FadeUp>

          <Stagger className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Thème Adulte */}
            <StaggerItem>
            <div className="bg-[#FDFBF8] rounded-2xl overflow-hidden border border-[#8B6F47]/10 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="bg-gradient-to-r from-[#8B6F47] to-[#6B5535] px-6 py-3">
                <div className="flex items-center justify-between text-white">
                  <span className="font-medium">Thème Adulte</span>
                  <span className="text-sm font-semibold">110€</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4 text-[#7D7068]">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">Durée : ~2h</span>
                  </div>
                  <span className="text-xs text-[#7D7068]">À partir de 24 ans</span>
                </div>
                <ul className="space-y-2.5 text-sm text-[#7D7068]">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Apprendre à mieux se connaître : dons/talents, besoins fondamentaux, objectif de vie...
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Découvrir vos ambivalences et vos blocages potentiels
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Analyse de votre temporalité (plan de vie, saison, année perso) pour agir avec stratégie et fluidité
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Connaître votre vibration annuelle pour agir avec stratégie et fluidité
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6 pt-4 mt-auto border-t border-[#E8E0D6]">
                <a
                  href={CALENDLY.themeAdulte}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#8B6F47] text-white text-sm font-medium rounded-full hover:bg-[#6B5535] transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Réserver
                </a>
              </div>
            </div>
            </StaggerItem>

            {/* Thème Enfant */}
            <StaggerItem>
            <div className="bg-[#FDFBF8] rounded-2xl overflow-hidden border border-[#8B6F47]/10 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="bg-gradient-to-r from-[#8B6F47] to-[#6B5535] px-6 py-3">
                <div className="flex items-center justify-between text-white">
                  <span className="font-medium">Thème Enfant</span>
                  <span className="text-sm font-semibold">85€</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4 text-[#7D7068]">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">Durée : ~1h30</span>
                  </div>
                  <span className="text-xs text-[#7D7068]">Restitué aux parents</span>
                </div>
                <ul className="space-y-2.5 text-sm text-[#7D7068]">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mieux comprendre la personnalité de votre enfant
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Avoir une meilleure orientation pédagogique adaptée à sa personnalité
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Décoder et comprendre certains comportements (colère, éparpillement, manque de confiance...) permet d&apos;apaiser plus vite certaines tensions
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6 pt-4 mt-auto border-t border-[#E8E0D6]">
                <a
                  href={CALENDLY.themeEnfant}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#8B6F47] text-white text-sm font-medium rounded-full hover:bg-[#6B5535] transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Réserver
                </a>
              </div>
            </div>
            </StaggerItem>

            {/* Thème Couple */}
            <StaggerItem>
            <div className="bg-[#FDFBF8] rounded-2xl overflow-hidden border border-[#8B6F47]/10 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="bg-gradient-to-r from-[#8B6F47] to-[#6B5535] px-6 py-3">
                <div className="flex items-center justify-between text-white">
                  <span className="font-medium">Thème Couple</span>
                  <span className="text-sm font-semibold">149€</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4 text-[#7D7068]">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">Durée : ~2h</span>
                  </div>
                  <span className="text-xs text-[#7D7068]">Les 2 partenaires doivent être présents</span>
                </div>
                <ul className="space-y-2.5 text-sm text-[#7D7068]">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Analyser et comprendre les besoins fondamentaux de chacun
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Comprendre les complémentarités et les points de frictions de votre couple
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Obtenir des clés pour une relation plus harmonieuse et tolérante
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6 pt-4 mt-auto border-t border-[#E8E0D6]">
                <a
                  href={CALENDLY.themeCouple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#8B6F47] text-white text-sm font-medium rounded-full hover:bg-[#6B5535] transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Réserver
                </a>
              </div>
            </div>
            </StaggerItem>

            {/* Suivi Annuel */}
            <StaggerItem>
            <div className="bg-[#FDFBF8] rounded-2xl overflow-hidden border border-[#8B6F47]/10 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="bg-gradient-to-r from-[#8B6F47] to-[#6B5535] px-6 py-3">
                <div className="flex items-center justify-between text-white">
                  <span className="font-medium">Suivi Annuel</span>
                  <span className="text-sm font-semibold">99€</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4 text-[#7D7068]">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">Durée : ~1h30</span>
                  </div>
                  <span className="text-xs text-[#7D7068]">Thème adulte requis</span>
                </div>
                <ul className="space-y-2.5 text-sm text-[#7D7068]">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Bilan sur la compréhension de l&apos;année passée
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Découvrir l&apos;orientation de l&apos;année en cours pour gagner en efficacité
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Vérifier si vous êtes aligné avec votre objectif de vie et vos besoins de réalisations
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#8B6F47] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Être guidé dans vos projets
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6 pt-4 mt-auto border-t border-[#E8E0D6]">
                <a
                  href={CALENDLY.suiviAnnuel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#8B6F47] text-white text-sm font-medium rounded-full hover:bg-[#6B5535] transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Réserver
                </a>
              </div>
            </div>
            </StaggerItem>
          </Stagger>

          <FadeUp>
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
          </FadeUp>
        </div>
      </section>

      {/* Déroulement */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
                Comment se déroule une consultation ?
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6" />
              <p className="text-[#7D7068]">
                Les consultations se font <strong className="text-[#3A2F25]">à distance</strong>, en visioconférence.
              </p>
            </div>
          </FadeUp>

          <div className="max-w-3xl mx-auto space-y-8">
            <FadeUp>
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
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#8B6F47] to-[#C4A265] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
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
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#8B6F47] to-[#C4A265] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-2">
                    La consultation
                  </h3>
                  <p className="text-[#7D7068]">
                    Nous échangeons ensemble en visioconférence. 
                    Je vous présente votre thème, je réponds à vos questions et nous explorons ensemble 
                    les sujets qui vous tiennent à cœur. L&apos;enregistrement est autorisé.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#8B6F47] to-[#C4A265] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
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
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
                Questions Fréquentes
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
            </div>
          </FadeUp>

          <div className="space-y-6">
            <FadeUp>
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
            </FadeUp>

            <FadeUp>
            <div className="bg-[#FDFBF8] rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-[#3A2F25] mb-2">
                De quelles informations avez-vous besoin ?
              </h3>
              <p className="text-[#7D7068]">
                J&apos;ai besoin de votre identité complète telle qu&apos;elle figure sur votre 
                carte d&apos;identité ou sur votre acte de naissance, ainsi que votre date de naissance complète.
              </p>
            </div>
            </FadeUp>

            <FadeUp>
            <div className="bg-[#FDFBF8] rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-[#3A2F25] mb-2">
                Combien de temps dure une consultation ?
              </h3>
              <p className="text-[#7D7068]">
                Cela dépend de la prestation : environ 2h pour un thème adulte, 
                1h30 pour un thème enfant, 2h pour un thème couple, et environ 1h30 pour un suivi annuel.
              </p>
            </div>
            </FadeUp>

            <FadeUp>
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
            </FadeUp>

            <FadeUp>
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
            </FadeUp>

            <FadeUp>
            <div className="bg-[#FDFBF8] rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-[#3A2F25] mb-2">
                Comment se passe le thème pour un enfant mineur ?
              </h3>
              <div className="text-[#7D7068] space-y-3">
                <p>
                  <strong className="text-[#3A2F25]">Enfant mineur :</strong> Le thème est restitué aux parents, 
                  sans la présence de l&apos;enfant.
                  <br /><br />
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
            </FadeUp>

            <FadeUp>
            <div className="bg-[#FDFBF8] rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-[#3A2F25] mb-2">
                Les consultations se font-elles à distance ?
              </h3>
              <p className="text-[#7D7068]">
                Oui, toutes les consultations se déroulent à distance, en visioconférence. 
                L&apos;échange est tout aussi riche et personnalisé qu&apos;en personne.
              </p>
            </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
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
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
