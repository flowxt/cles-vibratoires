import type { Metadata } from "next";
import Link from "next/link";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "Contact | Les Clés Vibratoires",
  description:
    "Contactez Marie pour prendre rendez-vous en numérologie stratégique ou soins énergétiques. Megève, Haute-Savoie et consultations à distance.",
};

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#FDFBF8] via-[#F5EDE3] to-[#FDFBF8]">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#8B6F47]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase mb-4">
              Prenons contact
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl font-semibold text-[#3A2F25] mb-6">
              Me Contacter
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
            <p className="text-lg text-[#7D7068] max-w-2xl mx-auto">
              Vous avez des questions ou souhaitez prendre rendez-vous ? 
              N&apos;hésitez pas à me contacter, je vous répondrai dans les meilleurs délais.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#3A2F25] mb-8">
                Coordonnées
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-[#FDFBF8] rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B6F47] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3A2F25] mb-1">Email</h3>
                    <a
                      href="mailto:lesclesvibratoires@gmail.com"
                      className="text-[#8B6F47] hover:text-[#6B5535] transition-colors"
                    >
                      lesclesvibratoires@gmail.com
                    </a>
                    <p className="text-sm text-[#7D7068] mt-1">
                      Je réponds généralement sous 24-48h
                    </p>
                  </div>
                </div>

                {/* Localisation */}
                <div className="flex items-start gap-4 p-6 bg-[#FDFBF8] rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B6F47] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3A2F25] mb-1">Localisation</h3>
                    <p className="text-[#7D7068]">
                      Haute-Savoie (Megève et environs)
                    </p>
                    <p className="text-sm text-[#7D7068] mt-1">
                      Consultations à distance également disponibles
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4 p-6 bg-[#FDFBF8] rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3A2F25] mb-1">Instagram</h3>
                    <a
                      href="https://instagram.com/lesclesvibratoires"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8B6F47] hover:text-[#6B5535] transition-colors"
                    >
                      @lesclesvibratoires
                    </a>
                    <p className="text-sm text-[#7D7068] mt-1">
                      Suivez mon actualité et mes partages
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prestations & Tarifs */}
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#3A2F25] mb-8">
                Prestations & Tarifs
              </h2>

              <div className="space-y-6">
                {/* Numérologie Stratégique */}
                <div className="bg-gradient-to-br from-[#F5EDE3] to-white rounded-2xl p-6 border border-[#8B6F47]/20">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#3A2F25] mb-1">
                    Numérologie Stratégique®
                  </h3>
                  <p className="text-[#7D7068] text-xs mb-3">À distance ou à domicile (Haute-Savoie)</p>
                  <div className="space-y-2 text-sm text-[#7D7068]">
                    <div className="flex items-center justify-between py-1.5 border-b border-[#E8E0D6]">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Thème Adulte (dès 24 ans)
                      </span>
                      <span className="font-medium">~2h</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-[#E8E0D6]">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#C97B5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Thème Enfant
                      </span>
                      <span className="font-medium">~1h30</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-[#E8E0D6]">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        Thème Couple
                      </span>
                      <span className="font-medium">~2h</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#6B5535]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Suivi Annuel
                      </span>
                      <span className="font-medium">~1h30</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-[#7D7068] italic">
                    Tarifs communiqués sur demande
                  </p>
                  <Link
                    href="/numerologie"
                    className="mt-3 text-[#8B6F47] hover:text-[#6B5535] font-medium text-sm inline-flex items-center gap-1"
                  >
                    En savoir plus
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Soins énergétiques */}
                <div className="bg-gradient-to-br from-[#F5EDE3] to-white rounded-2xl p-6 border border-[#8B6F47]/20">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#3A2F25]">
                      Soin Énergétique
                    </h3>
                    <span className="text-xl font-bold text-[#8B6F47]">60€</span>
                  </div>
                  <p className="text-[#7D7068] text-xs mb-3">À distance (pour le moment)</p>
                  <ul className="text-[#7D7068] text-sm space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Durée environ 1h00
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Appel avant et après le soin
                    </li>
                  </ul>
                  <Link
                    href="/soins-energetiques"
                    className="text-[#8B6F47] hover:text-[#6B5535] font-medium text-sm inline-flex items-center gap-1"
                  >
                    En savoir plus
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Accompagnements */}
                <div className="bg-gradient-to-br from-[#F5EDE3] to-white rounded-2xl p-6 border border-[#8B6F47]/20">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#3A2F25] mb-1">
                    Accompagnements
                  </h3>
                  <p className="text-[#7D7068] text-xs mb-3">Numérologie & Tarologie</p>
                  <div className="space-y-2 text-sm text-[#7D7068]">
                    <div className="flex items-center justify-between py-1.5 border-b border-[#E8E0D6]">
                      <span>La Boussole Parentale</span>
                      <span className="font-medium text-[#8B6F47]">500€ / 5h</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-[#E8E0D6]">
                      <span>Relation Parents-Enfant</span>
                      <span className="font-medium text-[#8B6F47]">500–600€ / 5-6h</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span>Compréhension de Soi</span>
                      <span className="font-medium text-[#8B6F47]">250€ / 3×1h30</span>
                    </div>
                  </div>
                  <Link
                    href="/accompagnement"
                    className="mt-3 text-[#8B6F47] hover:text-[#6B5535] font-medium text-sm inline-flex items-center gap-1"
                  >
                    En savoir plus
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Note importante */}
              <div className="mt-8 p-6 bg-[#fef3c7] rounded-xl">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-0.5"
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
                  <div>
                    <h4 className="font-semibold text-[#92400e] mb-1">Pour prendre rendez-vous</h4>
                    <p className="text-[#92400e]/80 text-sm">
                      Réservez directement en ligne via le calendrier ci-dessous, ou contactez-moi
                      par email. Le règlement s&apos;effectue après la séance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <CalendlyButton variant="primary" className="w-full text-base" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Réserver en ligne */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#3A2F25] mb-4">
              Réserver en ligne
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6" />
            <p className="text-[#7D7068] max-w-2xl mx-auto">
              Choisissez le créneau qui vous convient directement en ligne. 
              Pour la numérologie, un délai de préparation de 3 semaines est nécessaire avant votre consultation.
            </p>
          </div>

          <CalendlyEmbed />

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E0D6]">
              <h3 className="font-semibold text-[#3A2F25] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Consultations sur rendez-vous
              </h3>
              <p className="text-[#7D7068] text-sm">
                Je m&apos;adapte au mieux à votre emploi du temps. Les créneaux disponibles sont visibles ci-dessus.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E0D6]">
              <h3 className="font-semibold text-[#3A2F25] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                À distance ou en présentiel
              </h3>
              <p className="text-[#7D7068] text-sm">
                Visioconférence, téléphone ou en présentiel dans le secteur de Megève et Haute-Savoie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-[#8B6F47] to-[#6B5535] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold mb-4">
            Prêt(e) à commencer votre voyage intérieur ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Je serai ravie de vous accompagner sur votre chemin de découverte de soi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton variant="white" />
            <a
              href="mailto:lesclesvibratoires@gmail.com"
              className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-lg inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              M&apos;envoyer un email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
