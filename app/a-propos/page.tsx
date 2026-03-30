import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, FadeUp, Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "À Propos — Marie",
  description:
    "Découvrez le parcours de Marie, praticienne en numérologie stratégique® et soins énergétiques. Infirmière, maman de 2 enfants neuroatypiques, une approche authentique et bienveillante.",
  alternates: { canonical: "https://www.lesclesvibratoires.fr/a-propos" },
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
            <FadeUp>
              <p className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase mb-4">
                Mon histoire
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl font-semibold text-[#3A2F25] mb-6">
                À Propos de Moi
              </h1>
            </FadeUp>
            <FadeIn delay={0.2}>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <FadeUp>
            <p className="text-xl text-[#7D7068] leading-relaxed">
              Je m&apos;appelle Marie, je suis maman de deux adolescents.
              Infirmière de métier, j&apos;ai toujours été passionnée par la compréhension de l&apos;humain.
            </p>
          </FadeUp>

          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />

          <FadeUp>
            <p className="text-lg text-[#7D7068] leading-relaxed">
              Depuis toujours, j&apos;ai ce besoin de comprendre.
            </p>
          </FadeUp>
          <FadeUp>
            <p className="text-lg text-[#7D7068] leading-relaxed">
              Très tôt, les livres de développement personnel m&apos;ont ouvert une porte. Puis les formations sont venues 
              nourrir cette quête : comprendre comment je fonctionne, apprendre à m&apos;aligner, chercher une version 
              de moi plus juste, plus consciente.
            </p>
          </FadeUp>

          <FadeUp>
            <p className="text-lg text-[#7D7068] leading-relaxed">
              Un tournant important est arrivé avec le diagnostic d&apos;une maladie auto-immune.
              Ce moment m&apos;a poussée à aller encore plus loin dans le travail sur moi, notamment pour mieux 
              gérer la douleur et comprendre ce que mon corps cherchait à me dire.
            </p>
          </FadeUp>

          <FadeUp>
            <p className="text-lg text-[#7D7068] leading-relaxed">
              C&apos;est à travers ce chemin que j&apos;ai découvert l&apos;hypnose, le magnétisme, la numérologie stratégique 
              et la tarologie.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Parcours Section */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <FadeUp>
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
                Mon Parcours
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
            </div>
          </FadeUp>

          <FadeUp>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E0D6] text-center">
              <div className="w-12 h-12 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔑</span>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-3">
                La Numérologie — une révélation
              </h3>
              <p className="text-[#7D7068] leading-relaxed">
                La numérologie a été une véritable révélation : pour la première fois, j&apos;ai eu la sensation 
                que quelque chose validait profondément ce que je ressentais depuis toujours. Les nombres ont agi 
                comme une carte d&apos;identité intérieure : ils ne me disaient pas quoi faire mais ils me rappelaient qui j&apos;étais.
              </p>
              <p className="text-[#7D7068] leading-relaxed mt-3">
                Comprendre mon fonctionnement m&apos;a permis de faire confiance à mon intuition, de me sentir plus 
                alignée, plus légitime.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E0D6] text-center">
              <div className="w-12 h-12 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🃏</span>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-3">
                Le Psycho-Tarot
              </h3>
              <p className="text-[#7D7068] leading-relaxed">
                J&apos;ai découvert le psycho-tarot dans une approche loin de la divination. Une lecture subtile, 
                introspective, qui permet d&apos;aller explorer les blocages inconscients et d&apos;identifier les ressources 
                déjà présentes en nous. C&apos;est aussi un outil puissant pour éclairer ce qui demande à évoluer.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E0D6] text-center">
              <div className="w-12 h-12 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-3">
                Maman de deux enfants neuroatypiques
              </h3>
              <p className="text-[#7D7068] leading-relaxed">
                La numérologie m&apos;a également permis de mieux comprendre mes enfants : leurs forces, leurs fragilités, 
                leurs besoins propres. Leur éducation m&apos;a appris l&apos;ajustement permanent mais aussi à leur faire confiance 
                et reconnaître que, souvent, ils savent déjà ce qui est juste pour eux.
              </p>
              <p className="text-[#7D7068] leading-relaxed mt-3">
                Bien sûr, rien n&apos;est parfait. La parentalité reste un apprentissage constant, mais avec plus de 
                compréhension, les relations deviennent plus fluides, plus claires.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E0D6] text-center">
              <div className="w-12 h-12 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#3A2F25] mb-3">
                La Dimension Énergétique
              </h3>
              <p className="text-[#7D7068] leading-relaxed">
                La dimension énergétique fait partie de moi depuis longtemps. Ma grand-mère était coupeuse de feu, 
                et cette sensibilité m&apos;a toujours accompagnée. L&apos;approfondissement du magnétisme m&apos;a amenée à me former.
              </p>
              <p className="text-[#7D7068] leading-relaxed mt-3">
                J&apos;aime cette approche spirituelle, ancrée dans le concret, dans le corps, dans le vécu.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="pt-4 text-center">
              <p className="text-lg text-[#7D7068] leading-relaxed">
                Aujourd&apos;hui, j&apos;accompagne celles et ceux qui ressentent le besoin d&apos;y voir plus clair, 
                le besoin de mieux se connaître, de mieux se comprendre pour avancer 
                de manière plus alignée et consciente.
              </p>
              <p className="text-xl text-[#8B6F47] font-medium italic mt-6">
                Parce que tout commence par la compréhension de soi.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Ma Vision du Soin */}
      <section className="py-16 bg-gradient-to-br from-[#8B6F47] to-[#6B5535] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold mb-8">
                Ma Vision du Soin
              </h2>
            </FadeUp>
            <FadeIn>
              <div className="w-16 h-0.5 bg-[#d4af37] mx-auto mb-8" />
            </FadeIn>
            <FadeUp delay={0.1}>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Ma vision du soin repose sur le simple fait que je crois que nous avons chacun 
                en nous les clés pour avancer, se retrouver, évoluer, et ainsi se trouver aligné à ses valeurs.
              </p>
            </FadeUp>

            <Stagger className="grid md:grid-cols-2 gap-6 mt-12">
              <StaggerItem>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
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
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
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
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      {/* Formations & Compétences */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
                Mes Formations
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
            </div>
          </FadeUp>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <StaggerItem>
              <div className="bg-[#FDFBF8] rounded-xl p-6 text-center hover:shadow-lg transition-shadow h-full flex flex-col items-center">
                <div className="w-14 h-14 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔢</span>
                </div>
                <h3 className="font-semibold text-[#3A2F25] mb-1">Numérologie Stratégique®</h3>
                <p className="text-sm text-[#7D7068]">Lydie Castells</p>
                <p className="text-xs text-[#8B6F47] mt-auto pt-2">Formation professionnelle</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#FDFBF8] rounded-xl p-6 text-center hover:shadow-lg transition-shadow h-full flex flex-col items-center">
                <div className="w-14 h-14 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-[#3A2F25] mb-1">Magnétisme</h3>
                <p className="text-sm text-[#7D7068]">Au cœur de l&apos;énergie — Genève</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#FDFBF8] rounded-xl p-6 text-center hover:shadow-lg transition-shadow h-full flex flex-col items-center">
                <div className="w-14 h-14 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="font-semibold text-[#3A2F25] mb-1">Coupeuse de Feu</h3>
                <p className="text-sm text-[#7D7068]">Tradition familiale</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#FDFBF8] rounded-xl p-6 text-center hover:shadow-lg transition-shadow h-full flex flex-col items-center">
                <div className="w-14 h-14 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🃏</span>
                </div>
                <h3 className="font-semibold text-[#3A2F25] mb-1">Psycho-Tarot</h3>
                <p className="text-sm text-[#7D7068]">La Tarot Académie — Chiara</p>
                <p className="text-xs text-[#8B6F47] mt-auto pt-2">Formation professionnelle</p>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
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
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
