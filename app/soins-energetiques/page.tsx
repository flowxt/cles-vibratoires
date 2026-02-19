import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "Soins Énergétiques | Les Clés Vibratoires",
  description:
    "Découvrez les soins énergétiques à distance proposés par Marie. Rééquilibrage énergétique, détente profonde et bien-être général. 60€ la séance.",
};

export default function SoinsEnergetiques() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#FDFBF8] via-[#F5EDE3] to-[#FDFBF8] overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#8B6F47]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase mb-4">
                Magnétisme & Énergie
              </p>
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-semibold text-[#3A2F25] mb-6">
                Soins Énergétiques
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent mb-6" />
              <p className="text-lg text-[#7D7068] leading-relaxed mb-6">
                Les soins énergétiques ont pour objectif de rééquilibrer le système énergétique 
                du corps. Ils peuvent relâcher les tensions, favoriser la détente profonde 
                et améliorer le bien-être général.
              </p>
              <p className="text-lg text-[#7D7068] leading-relaxed">
                Il s&apos;agit d&apos;un soin non intrusif et doux, agissant sur plusieurs plans : 
                physique, émotionnel, énergétique et mental.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/energie.jpg"
                alt="Soins Énergétiques"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B6F47]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Avertissement */}
      <section className="py-8 bg-[#fef3c7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-[#92400e] mb-1">Information importante</h3>
              <p className="text-[#92400e]/80">
                Je ne pose pas de diagnostic médical et je ne me substitue en aucun cas à un 
                suivi de santé. Le soin énergétique s&apos;inscrit comme un accompagnement complémentaire, 
                destiné à soutenir votre mieux-être en parallèle d&apos;un éventuel traitement médical, ou non.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bienfaits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
              Les Bienfaits du Soin Énergétique
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FDFBF8] rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#C4A265] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#3A2F25] mb-2">
                Rééquilibrage
              </h3>
              <p className="text-[#7D7068] text-sm">
                Harmonisation du système énergétique du corps
              </p>
            </div>

            <div className="bg-[#FDFBF8] rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#C4A265] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#3A2F25] mb-2">
                Détente
              </h3>
              <p className="text-[#7D7068] text-sm">
                Relâchement des tensions et détente profonde
              </p>
            </div>

            <div className="bg-[#FDFBF8] rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#C4A265] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#3A2F25] mb-2">
                Bien-être
              </h3>
              <p className="text-[#7D7068] text-sm">
                Amélioration du bien-être général
              </p>
            </div>

            <div className="bg-[#FDFBF8] rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#C4A265] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#3A2F25] mb-2">
                Multi-plans
              </h3>
              <p className="text-[#7D7068] text-sm">
                Agit sur les plans physique, émotionnel et mental
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement du soin */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
              Comment se déroule le soin ?
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Étapes */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-[#3A2F25] mb-1">Prise de rendez-vous</h3>
                  <p className="text-[#7D7068]">
                    Contactez-moi pour fixer ensemble un créneau qui vous convient. 
                    Je vous expliquerai le déroulement du soin.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-[#3A2F25] mb-1">Informations nécessaires</h3>
                  <p className="text-[#7D7068]">
                    Je vous demanderai une photo ainsi que vos nom, prénom et date de naissance 
                    pour réaliser le soin à distance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-[#3A2F25] mb-1">Appel avant le soin</h3>
                  <p className="text-[#7D7068]">
                    Nous échangeons par téléphone avant la séance pour que je comprenne 
                    vos besoins et attentes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-[#3A2F25] mb-1">Le soin (environ 1h)</h3>
                  <p className="text-[#7D7068]">
                    Installez-vous confortablement dans un endroit calme, sans être dérangé(e), 
                    comme lors d&apos;un soin en cabinet.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-[#3A2F25] mb-1">Appel après le soin</h3>
                  <p className="text-[#7D7068]">
                    Nous échangeons à nouveau pour partager vos ressentis et mes observations 
                    suite au soin.
                  </p>
                </div>
              </div>
            </div>

            {/* Card tarif */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-28">
              <div className="bg-gradient-to-br from-[#8B6F47] to-[#6B5535] p-8 text-white text-center">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold mb-2">
                  Soin Énergétique
                </h3>
                <p className="text-white/80 mb-4">À distance</p>
                <div className="text-5xl font-bold mb-2">60€</div>
                <p className="text-white/60">la séance</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#8B6F47]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#7D7068]">Soin à distance depuis une photo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#8B6F47]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#7D7068]">Durée environ 1h00</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#8B6F47]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#7D7068]">Sur rendez-vous</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#8B6F47]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#7D7068]">Appel avant et après le soin</span>
                  </li>
                </ul>
                <CalendlyButton className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommandations */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F5EDE3] to-[#FDFBF8] rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#8B6F47] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-semibold text-[#3A2F25]">
                Recommandations pour le soin
              </h2>
            </div>
            <p className="text-lg text-[#7D7068] leading-relaxed text-center">
              Il est recommandé que la personne recevant le soin soit installée dans un 
              <strong className="text-[#3A2F25]"> endroit calme</strong>, 
              <strong className="text-[#3A2F25]"> confortablement installée </strong> 
              et <strong className="text-[#3A2F25]">sans être dérangée</strong>, 
              comme lors d&apos;un soin en cabinet. Prévoyez ce moment comme un temps pour vous, 
              un espace de détente et de reconnexion.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#8B6F47] to-[#6B5535] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold mb-4">
            Prêt(e) pour un moment de rééquilibrage ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Offrez-vous un soin énergétique pour retrouver harmonie et bien-être.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton variant="white" />
            <Link
              href="/numerologie"
              className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-lg inline-flex items-center justify-center"
            >
              Découvrir la numérologie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
