import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#3A2F25] text-white">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Colonne 1 - À propos */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-test.png"
                alt="Les Clés Vibratoires"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[#D4AF37]">
                Les Clés Vibratoires
              </h3>
            </div>
            <p className="text-[#C4B9AD] mb-2 leading-relaxed">
              Accompagnement en numérologie stratégique®, tarologie et soins énergétiques.
            </p>
            <p className="text-[#D4AF37] italic text-sm mb-6">
              L&apos;énergie et la stratégie au service de votre éveil intérieur.
            </p>
          </div>

          {/* Colonne 2 - Prestations */}
          <div>
            <h4 className="font-[family-name:var(--font-cormorant)] text-lg font-medium mb-4 text-white">
              Prestations
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/numerologie"
                  className="text-[#C4B9AD] hover:text-[#D4AF37] transition-colors"
                >
                  Numérologie Stratégique®
                </Link>
              </li>
              <li>
                <Link
                  href="/tarologie"
                  className="text-[#C4B9AD] hover:text-[#D4AF37] transition-colors"
                >
                  Psycho-Tarot
                </Link>
              </li>
              <li>
                <Link
                  href="/soins-energetiques"
                  className="text-[#C4B9AD] hover:text-[#D4AF37] transition-colors"
                >
                  Soins Énergétiques
                </Link>
              </li>
              <li>
                <Link
                  href="/accompagnement"
                  className="text-[#C4B9AD] hover:text-[#D4AF37] transition-colors"
                >
                  Accompagnements
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-[#C4B9AD] hover:text-[#D4AF37] transition-colors"
                >
                  À propos de Marie
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Contact à voir*/}
          <div>
            <h4 className="font-[family-name:var(--font-cormorant)] text-lg font-medium mb-4 text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-[#C4B9AD]">
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#D4AF37]"
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
                <a
                  href="mailto:lesclesvibratoires@gmail.com"
                  className="hover:text-[#D4AF37] transition-colors text-sm"
                >
                  lesclesvibratoires@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-[#D4AF37] mt-0.5"
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
                <span>
                  Haute-Savoie (Megève)
                  <br />
                  <span className="text-sm">Consultations à distance (visioconférence)</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#D4AF37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                <a
                  href="https://instagram.com/lesclesvibratoires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors text-sm"
                >
                  @lesclesvibratoires
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Avertissement */}
      <div className="border-t border-[#4A3F35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-center gap-2.5 text-[#D4AF37]">
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm">
              Les soins énergétiques ne se substituent pas à un suivi médical.
            </p>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-[#4A3F35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#8A7F73] text-xs">
            © {new Date().getFullYear()} Les Clés Vibratoires - Tous droits réservés
          </p>
          <Link href="/cgv" className="text-[#8A7F73] text-xs hover:text-[#D4AF37] transition-colors">
            Conditions Générales de Vente
          </Link>
        </div>
      </div>
    </footer>
  );
}
