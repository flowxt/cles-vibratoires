import type { Metadata } from "next";
import Link from "next/link";
import CalendlyButton from "@/components/CalendlyButton";
import ContactForm from "@/components/ContactForm";
import { FadeIn, FadeUp, Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact | Les Clés Vibratoires",
  description:
    "Contactez Marie pour prendre rendez-vous en numérologie stratégique ou soins énergétiques. Consultations à distance.",
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
            <FadeUp>
              <p className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase mb-4">
                Prenons contact
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl font-semibold text-[#3A2F25] mb-6">
                Me Contacter
              </h1>
            </FadeUp>
            <FadeIn delay={0.2}>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
            </FadeIn>
            <FadeUp delay={0.2}>
              <p className="text-lg text-[#7D7068] max-w-2xl mx-auto">
                Vous avez des questions ou souhaitez prendre rendez-vous ?
                N&apos;hésitez pas à me contacter, je vous répondrai dans les meilleurs délais.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Coordonnées */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#3A2F25] mb-8 text-center">
              Coordonnées
            </h2>
          </FadeUp>

          <Stagger className="grid sm:grid-cols-3 gap-6">
            {/* Email */}
            <StaggerItem>
              <div className="flex flex-col items-center text-center p-6 bg-[#FDFBF8] rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#8B6F47] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#3A2F25] mb-1">Email</h3>
                <a
                  href="mailto:lesclesvibratoires@gmail.com"
                  className="text-[#8B6F47] hover:text-[#6B5535] transition-colors text-sm"
                >
                  lesclesvibratoires@gmail.com
                </a>
                <p className="text-xs text-[#7D7068] mt-1">
                  Réponse sous 24-48h
                </p>
              </div>
            </StaggerItem>

            {/* Localisation */}
            <StaggerItem>
              <div className="flex flex-col items-center text-center p-6 bg-[#FDFBF8] rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#8B6F47] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#3A2F25] mb-1">Localisation</h3>
                <p className="text-sm text-[#7D7068]">Haute-Savoie (Megève)</p>
                <p className="text-xs text-[#7D7068] mt-1">
                  Consultations à distance (visio)
                </p>
              </div>
            </StaggerItem>

            {/* Instagram */}
            <StaggerItem>
              <div className="flex flex-col items-center text-center p-6 bg-[#FDFBF8] rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#3A2F25] mb-1">Instagram</h3>
                <a
                  href="https://instagram.com/lesclesvibratoires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B6F47] hover:text-[#6B5535] transition-colors text-sm"
                >
                  @lesclesvibratoires
                </a>
                <p className="text-xs text-[#7D7068] mt-1">
                  Actualité et partages
                </p>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#3A2F25] mb-2 text-center">
              Envoyez-moi un message
            </h2>
            <p className="text-[#7D7068] text-center mb-8">
              Je vous répondrai dans les meilleurs délais.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E0D6] shadow-sm">
              <ContactForm />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Prestations & Tarifs */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#3A2F25] mb-8 text-center">
              Prestations & Tarifs
            </h2>
          </FadeUp>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Numérologie */}
            <StaggerItem>
              <div className="flex flex-col bg-white rounded-2xl p-6 border border-[#E8E0D6]">
                <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#3A2F25] mb-1">
                  Numérologie Stratégique®
                </h3>
                <p className="text-[#7D7068] text-xs mb-4">À distance (visioconférence)</p>
                <div className="space-y-2 text-sm text-[#7D7068] flex-1">
                  <div className="flex items-center justify-between py-1.5 border-b border-[#E8E0D6]">
                    <span>Thème Adulte</span>
                    <span className="font-medium text-[#8B6F47]">110€</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#E8E0D6]">
                    <span>Thème Enfant</span>
                    <span className="font-medium text-[#8B6F47]">85€</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#E8E0D6]">
                    <span>Thème Couple</span>
                    <span className="font-medium text-[#8B6F47]">149€</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span>Suivi Annuel</span>
                    <span className="font-medium text-[#8B6F47]">99€</span>
                  </div>
                </div>
                <Link
                  href="/numerologie"
                  className="mt-4 text-[#8B6F47] hover:text-[#6B5535] font-medium text-sm inline-flex items-center gap-1"
                >
                  En savoir plus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </StaggerItem>

            {/* Soins */}
            <StaggerItem>
              <div className="flex flex-col bg-white rounded-2xl p-6 border border-[#E8E0D6]">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#3A2F25]">
                    Soin Énergétique
                  </h3>
                  <span className="text-xl font-bold text-[#8B6F47]">60€</span>
                </div>
                <p className="text-[#7D7068] text-xs mb-4">À distance</p>
                <ul className="text-[#7D7068] text-sm space-y-2 flex-1">
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
                  className="mt-4 text-[#8B6F47] hover:text-[#6B5535] font-medium text-sm inline-flex items-center gap-1"
                >
                  En savoir plus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </StaggerItem>

            {/* Accompagnements */}
            <StaggerItem>
              <div className="flex flex-col bg-white rounded-2xl p-6 border border-[#E8E0D6]">
                <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#3A2F25] mb-1">
                  Accompagnements
                </h3>
                <p className="text-[#7D7068] text-xs mb-4">Numérologie & Tarologie</p>
                <div className="space-y-2 text-sm text-[#7D7068] flex-1">
                  <div className="flex items-center justify-between py-1.5 border-b border-[#E8E0D6]">
                    <span>Boussole Parentale</span>
                    <span className="font-medium text-[#8B6F47]">599€</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#E8E0D6]">
                    <span>Parents-Enfant</span>
                    <span className="font-medium text-[#8B6F47]">499€</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span>Compréhension de Soi</span>
                    <span className="font-medium text-[#8B6F47]">250€</span>
                  </div>
                </div>
                <Link
                  href="/accompagnement"
                  className="mt-4 text-[#8B6F47] hover:text-[#6B5535] font-medium text-sm inline-flex items-center gap-1"
                >
                  En savoir plus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Réserver en ligne */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-10">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#3A2F25] mb-4">
                Réserver en ligne
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6" />
              <p className="text-[#7D7068] max-w-2xl mx-auto">
                Choisissez le créneau qui vous convient directement en ligne.
                Pour la numérologie, un délai de préparation de 3 semaines est nécessaire avant votre consultation.
              </p>
            </div>
          </FadeUp>

          <Stagger className="grid sm:grid-cols-2 gap-6 mb-10">
            <StaggerItem>
              <div className="bg-[#FDFBF8] rounded-xl p-6 border border-[#E8E0D6]">
                <h3 className="font-semibold text-[#3A2F25] mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Consultations sur rendez-vous
                </h3>
                <p className="text-[#7D7068] text-sm">
                  Je m&apos;adapte au mieux à votre emploi du temps.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#FDFBF8] rounded-xl p-6 border border-[#E8E0D6]">
                <h3 className="font-semibold text-[#3A2F25] mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Consultations à distance
                </h3>
                <p className="text-[#7D7068] text-sm">
                  Toutes les consultations se déroulent à distance, en visioconférence ou par téléphone.
                </p>
              </div>
            </StaggerItem>
          </Stagger>

          <FadeUp>
            <div className="text-center">
              <CalendlyButton variant="primary" className="text-base" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-[#8B6F47] to-[#6B5535] text-white">
        <FadeUp>
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
        </FadeUp>
      </section>
    </div>
  );
}
