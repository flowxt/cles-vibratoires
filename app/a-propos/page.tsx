import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À Propos | Les Clés Vibratoires - Marie",
  description:
    "Découvrez le parcours de Marie, praticienne en numérologie stratégique et soins énergétiques. Une approche authentique et bienveillante.",
};

export default function APropos() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#FDFBF8] via-[#F5EDE3] to-[#FDFBF8]">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#8B6F47]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase mb-4">
              Mon histoire
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl font-semibold text-[#3A2F25] mb-6">
              À Propos de Moi
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#7D7068] leading-relaxed text-center mb-8">
              Je suis Marie, passionnée depuis mon adolescence par le développement personnel 
              et le fonctionnement de l&apos;esprit humain.
            </p>
            <p className="text-lg text-[#7D7068] leading-relaxed">
              Mon parcours personnel m&apos;a conduite à explorer l&apos;énergie, le magnétisme, l&apos;hypnose, 
              la numérologie stratégique®, ainsi que la tarologie et à développer mon intuition 
              dans la compréhension de soi.
            </p>
            <p className="text-lg text-[#7D7068] leading-relaxed">
              Aujourd&apos;hui, je me prépare à partager ces savoirs pour accompagner ceux qui souhaitent 
              mieux se connaître et se reconnecter à soi, avec authenticité et bienveillance.
            </p>
            <p className="text-lg text-[#7D7068] leading-relaxed">
              Pour moi, chaque individu est porteur de ses propres clés de transformation. 
              Mon rôle est d&apos;accompagner la libération des blocages, d&apos;avoir une meilleure compréhension 
              de son fonctionnement intérieur et de retrouver l&apos;harmonisation de soi.
            </p>
            <p className="text-lg text-[#8B6F47] font-medium text-center mt-8 italic">
              Chaque consultation/soin sera un espace d&apos;écoute, de lumière et de guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Parcours Section */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
              Mon Parcours
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8B6F47] via-[#d4af37] to-[#8B6F47]" />

              {/* Timeline items */}
              <div className="space-y-12">
                {/* Item 1 */}
                <div className="relative flex items-start md:items-center">
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#8B6F47] rounded-full -translate-x-1/2 mt-2 md:mt-0" />
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-2">
                        Les Premières Découvertes
                      </h3>
                      <p className="text-[#7D7068]">
                        Depuis mon adolescence, ma curiosité pour le développement personnel 
                        et le fonctionnement psychologique m&apos;a guidée vers diverses lectures 
                        (Lise Bourbeau, Michel Oudoul, les accords toltèques…) et plus tard vers 
                        diverses formations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative flex items-start md:items-center">
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#d4af37] rounded-full -translate-x-1/2 mt-2 md:mt-0" />
                  <div className="ml-12 md:ml-auto md:w-1/2 md:pl-12">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-2">
                        Le Métier d&apos;Infirmière
                      </h3>
                      <p className="text-[#7D7068]">
                        Le soin a toujours été au centre de ma vie, et en particulier à travers 
                        mon métier d&apos;infirmière où j&apos;ai appris l&apos;importance de l&apos;écoute, de l&apos;empathie, 
                        de la présence et de l&apos;accompagnement des autres.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative flex items-start md:items-center">
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#8B6F47] rounded-full -translate-x-1/2 mt-2 md:mt-0" />
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-2">
                        Coupeuse de Feu & Magnétisme
                      </h3>
                      <p className="text-[#7D7068]">
                        Coupeuse de feu depuis plusieurs années, j&apos;ai décidé de compléter cette 
                        compétence par une formation en magnétisme et soins énergétiques.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="relative flex items-start md:items-center">
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#d4af37] rounded-full -translate-x-1/2 mt-2 md:mt-0" />
                  <div className="ml-12 md:ml-auto md:w-1/2 md:pl-12">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-2">
                        Numérologie Stratégique®
                      </h3>
                      <p className="text-[#7D7068]">
                        Suite à une consultation par curiosité pour la numérologie, j&apos;ai décidé 
                        de me former au parcours professionnel de Lydie Castells pour la 
                        Numérologie Stratégique®.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="relative flex items-start md:items-center">
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#8B6F47] rounded-full -translate-x-1/2 mt-2 md:mt-0" />
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-2">
                        Psycho-Tarot
                      </h3>
                      <p className="text-[#7D7068]">
                        J&apos;ai découvert depuis peu le psycho-tarot, et cette approche (non divinatoire) 
                        de la tarologie m&apos;a beaucoup plu. Je me suis formée à l&apos;initiatique en 2025 
                        et courant 2026, j&apos;envisage la formation au parcours professionnel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-lg text-[#7D7068] leading-relaxed">
              Mon parcours était avant tout une quête personnelle, mais au fil des années, 
              ma vision du soin s&apos;est élargie ainsi que sa possibilité d&apos;accompagnement.
            </p>
            <p className="text-lg text-[#7D7068] leading-relaxed mt-4">
              C&apos;est pourquoi, j&apos;ai décidé de partager mes connaissances et expériences, 
              avec authenticité et bienveillance, pour accompagner chacun sur son chemin 
              de sa propre découverte intérieure.
            </p>
          </div>
        </div>
      </section>

      {/* Ma Vision du Soin */}
      <section className="py-16 bg-gradient-to-br from-[#8B6F47] to-[#6B5535] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold mb-8">
              Ma Vision du Soin
            </h2>
            <div className="w-16 h-0.5 bg-[#d4af37] mx-auto mb-8" />
            
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Ma vision du soin repose sur le simple fait que je crois que nous avons chacun 
              en nous les clés pour avancer, se retrouver, évoluer, et ainsi se trouver aligné à ses valeurs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Ce que je ne suis pas</h3>
                <p className="text-white/80">
                  Je ne guéris pas, je ne réalise pas de miracle, je ne fais pas à votre place.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Ce que je suis</h3>
                <p className="text-white/80">
                  J&apos;accompagne, je guide et j&apos;aide à activer vos potentiels. 
                  Vous restez acteur de votre propre cheminement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations & Compétences */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
              Mes Formations
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#FDFBF8] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔢</span>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-1">Numérologie Stratégique®</h3>
              <p className="text-sm text-[#7D7068]">Lydie Castells</p>
            </div>

            <div className="bg-[#FDFBF8] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-1">Magnétisme</h3>
              <p className="text-sm text-[#7D7068]">Soins énergétiques</p>
            </div>

            <div className="bg-[#FDFBF8] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-1">Coupeuse de Feu</h3>
              <p className="text-sm text-[#7D7068]">Tradition familiale</p>
            </div>

            <div className="bg-[#FDFBF8] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🃏</span>
              </div>
              <h3 className="font-semibold text-[#3A2F25] mb-1">Psycho-Tarot</h3>
              <p className="text-sm text-[#7D7068]">Initiatique 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#3A2F25] mb-4">
            Envie d&apos;en savoir plus ?
          </h2>
          <p className="text-lg text-[#7D7068] mb-8">
            Découvrez mes prestations ou contactez-moi directement pour échanger sur vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/numerologie"
              className="px-8 py-4 bg-[#8B6F47] text-white rounded-full hover:bg-[#6B5535] transition-all duration-300 font-medium"
            >
              Numérologie Stratégique
            </Link>
            <Link
              href="/soins-energetiques"
              className="px-8 py-4 border-2 border-[#8B6F47] text-[#8B6F47] rounded-full hover:bg-[#8B6F47] hover:text-white transition-all duration-300 font-medium"
            >
              Soins Énergétiques
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
