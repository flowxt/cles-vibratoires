import Image from "next/image";
import Link from "next/link";
import CalendlyButton from "@/components/CalendlyButton";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF8] via-[#F5EDE3] to-[#FDFBF8]" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B6F47]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Subtitle */}
            <p className="text-[#8B6F47] text-sm sm:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in">
              Numérologie Stratégique • Magnétisme • Tarologie
            </p>
            
            {/* Main title */}
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#3A2F25] mb-6 animate-fade-in delay-100">
              Les Clés Vibratoires
            </h1>
            
            {/* Separator */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8 animate-fade-in delay-200" />
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-[#7D7068] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in delay-300">
              Découvrez vos clés de transformation pour mieux vous connaître 
              et vous reconnecter à vous-même, avec authenticité et bienveillance.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
              <CalendlyButton>
                Prendre Rendez-vous
              </CalendlyButton>
              <Link
                href="/a-propos"
                className="px-8 py-4 border-2 border-[#8B6F47] text-[#8B6F47] rounded-full hover:bg-[#8B6F47] hover:text-white transition-all duration-300 font-medium text-lg inline-flex items-center justify-center"
              >
                Découvrir mon approche
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-6">
              Bienvenue
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
            <p className="text-lg text-[#7D7068] leading-relaxed mb-6">
              Je suis Marie, passionnée depuis mon adolescence par le développement personnel 
              et le fonctionnement de l&apos;esprit humain.
            </p>
            <p className="text-lg text-[#7D7068] leading-relaxed">
              Pour moi, chaque individu est porteur de ses propres clés de transformation. 
              Mon rôle est d&apos;accompagner la libération des blocages, d&apos;aider à mieux comprendre 
              son fonctionnement intérieur et de retrouver l&apos;harmonisation de soi.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#FDFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
              Mes Prestations
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6" />
            <p className="text-lg text-[#7D7068] max-w-2xl mx-auto">
              Un accompagnement personnalisé pour vous aider à activer vos potentiels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Numérologie Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#8B6F47] to-[#6B5535] p-8 text-white">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold mb-2">
                  Numérologie Stratégique®
                </h3>
                <p className="text-white/70 text-sm">
                  Thème adulte • Thème enfant • Thème couple • Suivi annuel
                </p>
              </div>
              <div className="p-6">
                <p className="text-[#7D7068] mb-6 leading-relaxed">
                  Un outil d&apos;analyse et de compréhension de soi pour identifier vos besoins fondamentaux, 
                  vos dons et talents, vos freins et vos potentiels à activer. 
                  Ce n&apos;est pas un art divinatoire, mais une approche stratégique de connaissance de soi.
                </p>
                <Link
                  href="/numerologie"
                  className="inline-flex items-center text-[#8B6F47] font-medium hover:text-[#6B5535] transition-colors"
                >
                  En savoir plus
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Soins Énergétiques Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/energie.jpg"
                  alt="Soins Énergétiques"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B6F47]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-[#d4af37] text-white text-sm rounded-full mb-2">
                    60€ la séance
                  </span>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white">
                    Soins Énergétiques
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#7D7068] mb-6 leading-relaxed">
                  Les soins énergétiques rééquilibrent votre système énergétique, relâchent les tensions 
                  et favorisent une détente profonde. Un soin doux et non intrusif agissant sur plusieurs plans.
                </p>
                <Link
                  href="/soins-energetiques"
                  className="inline-flex items-center text-[#8B6F47] font-medium hover:text-[#6B5535] transition-colors"
                >
                  En savoir plus
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-[#8B6F47] to-[#6B5535] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-6 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
              Ma vision du soin repose sur le simple fait que je crois que nous avons chacun en nous 
              les clés pour avancer, se retrouver, évoluer, et ainsi se trouver aligné à ses valeurs.
            </blockquote>
            <div className="w-16 h-0.5 bg-[#d4af37] mx-auto mb-6" />
            <p className="text-white/80">
              — Marie, Les Clés Vibratoires
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
              Mon Approche
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center p-8 rounded-2xl bg-[#FDFBF8] hover:bg-[#F5EDE3]/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-3">
                Bienveillance
              </h3>
              <p className="text-[#7D7068] leading-relaxed">
                Chaque consultation est un espace d&apos;écoute, de lumière et de guidance, 
                dans le respect total de votre parcours.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center p-8 rounded-2xl bg-[#FDFBF8] hover:bg-[#F5EDE3]/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-3">
                Authenticité
              </h3>
              <p className="text-[#7D7068] leading-relaxed">
                Je partage mes connaissances et expériences avec sincérité, 
                pour un accompagnement vrai et personnalisé.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center p-8 rounded-2xl bg-[#FDFBF8] hover:bg-[#F5EDE3]/50 transition-colors duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-3">
                Autonomie
              </h3>
              <p className="text-[#7D7068] leading-relaxed">
                Mon rôle est de vous accompagner, pas de faire à votre place. 
                Vous restez acteur de votre propre cheminement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FDFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F5EDE3] to-white rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-xl">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
              Prêt(e) à découvrir vos clés ?
            </h2>
            <p className="text-lg text-[#7D7068] max-w-2xl mx-auto mb-8">
              Que ce soit pour une consultation en numérologie stratégique ou un soin énergétique, 
              je vous accompagne dans votre cheminement vers une meilleure connaissance de vous-même.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton>
                Prendre rendez-vous
              </CalendlyButton>
              <a
                href="https://instagram.com/lesclesvibratoires"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#8B6F47] text-[#8B6F47] rounded-full hover:bg-[#8B6F47] hover:text-white transition-all duration-300 font-medium text-lg inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Suivez-moi sur Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
