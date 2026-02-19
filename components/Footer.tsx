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
                src="/logo-sansfond.png"
                alt="Les Clés Vibratoires"
                width={48}
                height={48}
                className="w-12 h-12 object-contain brightness-0 invert opacity-90"
              />
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[#D4AF37]">
                Les Clés Vibratoires
              </h3>
            </div>
            <p className="text-[#C4B9AD] mb-6 leading-relaxed">
              Accompagnement en numérologie stratégique et soins énergétiques.
              Découvrez vos clés de transformation pour mieux vous connaître et
              vous reconnecter à vous-même, avec authenticité et bienveillance.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/lesclesvibratoires"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#8B6F47] flex items-center justify-center hover:bg-[#C4A265] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
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
                  Numérologie Stratégique
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
                  Accompagnement
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

          {/* Colonne 3 - Contact */}
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
                  <span className="text-sm">Consultations à distance disponibles</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-[#4A3F35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#8A7F73] text-sm">
              © {new Date().getFullYear()} Les Clés Vibratoires - Tous droits réservés
            </p>
            <p className="text-[#6B6058] text-xs">
              Les soins énergétiques ne se substituent pas à un suivi médical
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
