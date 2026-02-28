import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accompagnement | Les Clés Vibratoires",
  description:
    "Accompagnements personnalisés en numérologie stratégique et tarologie. Parentalité, couple, compréhension de soi. Découvrez les formules proposées par Marie.",
};

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[#8B6F47] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Accompagnement() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#FDFBF8] via-[#F5EDE3] to-[#FDFBF8]">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#8B6F47]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase mb-4">
              Numérologie & Tarologie
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl font-semibold text-[#3A2F25] mb-6">
              Accompagnement
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
            <p className="text-lg text-[#7D7068] max-w-3xl mx-auto leading-relaxed">
              J&apos;accompagne les parents à mieux se connaître eux-mêmes et à comprendre
              le fonctionnement de leur enfant, pour construire ensemble des relations
              plus justes et sereines au quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-[#3A2F25] font-[family-name:var(--font-cormorant)] font-medium leading-relaxed italic">
            &ldquo;Quand les parents comprennent leurs propres besoins et ceux de leur enfant,
            la dynamique familiale change naturellement.&rdquo;
          </p>
        </div>
      </section>

      {/* Formule 1 - La Boussole Parentale */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#E8E0D6]">
            <div className="bg-gradient-to-r from-[#8B6F47] to-[#6B5535] p-8 sm:p-10 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-2">Formule 1</p>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold">
                    La Boussole Parentale
                  </h2>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-4xl font-bold">500€</div>
                  <p className="text-white/60">5h d&apos;accompagnement</p>
                </div>
              </div>
              <p className="mt-4 text-white/85 max-w-3xl">
                Un accompagnement structuré pour décrypter votre enfant, clarifier votre couple
                et ajuster votre posture parentale. Comprendre les besoins fondamentaux de chacun
                pour construire une dynamique familiale plus sereine.
              </p>
            </div>

            <div className="p-8 sm:p-10">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#FDFBF8] rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#3A2F25]">Thème Enfant</h3>
                      <p className="text-xs text-[#7D7068]">1h30</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#7D7068] mb-4">
                    Comprendre son enfant, ses besoins fondamentaux, ses forces,
                    ses vulnérabilités et ce pourquoi il est fait.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Analyse du thème de fondation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Besoins fondamentaux</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Forces et freins</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Orientation naturelle</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#FDFBF8] rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#3A2F25]">Thème Couple</h3>
                      <p className="text-xs text-[#7D7068]">2h30 max</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#7D7068] mb-4">
                    Comprendre la dynamique de votre couple et son influence
                    sur l&apos;environnement de l&apos;enfant.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Fonctionnement et besoins de chacun</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Ambivalences potentielles du couple</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Favoriser la bonne entente</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Influence sur l&apos;enfant</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#FDFBF8] rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#3A2F25]">Adaptation Parentale</h3>
                      <p className="text-xs text-[#7D7068]">~1h</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#7D7068] mb-4">
                    De la compréhension à l&apos;action : les parents deviennent
                    acteurs de l&apos;adaptation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Mise en lien parents/enfant</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Identifier les ambivalences</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Ajuster le cadre parental</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Bilan global et plan d&apos;action</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="inline-flex px-8 py-4 bg-[#8B6F47] text-white rounded-full hover:bg-[#6B5535] transition-all duration-300 font-medium"
                >
                  Demander cette formule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formule 2 - Relation Parents-Enfant */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#E8E0D6]">
            <div className="bg-gradient-to-r from-[#8B6F47] to-[#6B5535] p-8 sm:p-10 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-2">Formule 2</p>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold">
                    Construire une Relation<br className="hidden sm:block" /> Parents-Enfant Ajustée
                  </h2>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-4xl font-bold">500–600€</div>
                  <p className="text-white/60">5 à 6h d&apos;accompagnement</p>
                </div>
              </div>
              <p className="mt-4 text-white/85 max-w-3xl">
                Faire évoluer sa posture parentale grâce à la numérologie et au psycho-tarot.
                Un accompagnement en profondeur pour comprendre, débloquer et agir
                dans sa parentalité.
              </p>
            </div>

            <div className="p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="bg-[#FDFBF8] rounded-2xl p-5">
                  <div className="w-8 h-8 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold text-xs mb-3">
                    1
                  </div>
                  <h3 className="font-semibold text-[#3A2F25] text-sm mb-2">Thème Enfant</h3>
                  <p className="text-xs text-[#7D7068]">
                    Comprendre le fonctionnement de l&apos;enfant à travers la numérologie
                  </p>
                </div>

                <div className="bg-[#FDFBF8] rounded-2xl p-5">
                  <div className="w-8 h-8 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold text-xs mb-3">
                    2
                  </div>
                  <h3 className="font-semibold text-[#3A2F25] text-sm mb-2">Thème Adulte + Guidance</h3>
                  <p className="text-xs text-[#7D7068]">
                    Compréhension du parent et mise en lumière d&apos;un blocage avec guidance tarot
                  </p>
                </div>

                <div className="bg-[#FDFBF8] rounded-2xl p-5">
                  <div className="w-8 h-8 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold text-xs mb-3">
                    3
                  </div>
                  <h3 className="font-semibold text-[#3A2F25] text-sm mb-2">Approfondissement</h3>
                  <p className="text-xs text-[#7D7068]">
                    Comprendre les freins et leur influence sur la relation à l&apos;enfant. Psycho-tarot pour aller au cœur des blocages
                  </p>
                </div>

                <div className="bg-[#FDFBF8] rounded-2xl p-5">
                  <div className="w-8 h-8 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold text-xs mb-3">
                    4
                  </div>
                  <h3 className="font-semibold text-[#3A2F25] text-sm mb-2">Mise en Action</h3>
                  <p className="text-xs text-[#7D7068]">
                    Intégration et ajustement. Séance psycho-tarot pour travailler sur un blocage précis
                  </p>
                </div>

                <div className="bg-[#FDFBF8] rounded-2xl p-5">
                  <div className="w-8 h-8 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold text-xs mb-3">
                    5
                  </div>
                  <h3 className="font-semibold text-[#3A2F25] text-sm mb-2">Bilan</h3>
                  <p className="text-xs text-[#7D7068]">
                    Ce qui a changé, ce qui peut être mis en place, questions et perspectives
                  </p>
                </div>
              </div>

              <div className="mt-8 p-5 bg-[#FDFBF8] rounded-xl border border-[#E8E0D6]">
                <p className="text-sm text-[#7D7068] text-center">
                  <strong className="text-[#3A2F25]">Inclut la tarologie :</strong> cette formule intègre
                  des séances de guidance et de psycho-tarot pour travailler en profondeur
                  sur les blocages parentaux.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="inline-flex px-8 py-4 bg-[#8B6F47] text-white rounded-full hover:bg-[#6B5535] transition-all duration-300 font-medium"
                >
                  Demander cette formule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formule 3 - Compréhension de Soi */}
      <section className="py-16 bg-[#FDFBF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#E8E0D6]">
            <div className="bg-gradient-to-r from-[#8B6F47] to-[#6B5535] p-8 sm:p-10 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-2">Formule 3</p>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold">
                    Les Clés de la<br className="hidden sm:block" /> Compréhension de Soi
                  </h2>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-4xl font-bold">250€</div>
                  <p className="text-white/60">3 séances de 1h30</p>
                </div>
              </div>
              <p className="mt-4 text-white/85 max-w-3xl">
                Un parcours de compréhension de soi en profondeur à travers la numérologie stratégique.
                Trois séances pour explorer votre thème, vos blocages et votre temporalité.
              </p>
            </div>

            <div className="p-8 sm:p-10">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#FDFBF8] rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#3A2F25]">Thème Adulte</h3>
                      <p className="text-xs text-[#7D7068]">1h30</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Arbre + Domaine de Vie</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Blocages principaux</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Ambivalences</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#FDFBF8] rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#3A2F25]">Approfondissement</h3>
                      <p className="text-xs text-[#7D7068]">1h30</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Blocages (inclusion)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Mémoires familiales</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Défis + fœtus</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#FDFBF8] rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#3A2F25]">Temporalité</h3>
                      <p className="text-xs text-[#7D7068]">1h30</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Période formative</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>Vibrations</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#7D7068]">
                      <CheckIcon />
                      <span>AP – AU – OA</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="inline-flex px-8 py-4 bg-[#8B6F47] text-white rounded-full hover:bg-[#6B5535] transition-all duration-300 font-medium"
                >
                  Demander cette formule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça fonctionne */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold text-[#3A2F25] mb-4">
              Comment se déroule un accompagnement ?
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[#3A2F25] mb-1">Prise de contact</h3>
                <p className="text-[#7D7068]">
                  Contactez-moi via le formulaire ou par email pour me parler de votre situation
                  et de vos besoins. Nous définirons ensemble la formule la plus adaptée.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[#3A2F25] mb-1">Préparation</h3>
                <p className="text-[#7D7068]">
                  Je prépare les thèmes numérologique en amont de chaque séance
                  pour un accompagnement personnalisé et approfondi.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[#3A2F25] mb-1">Les séances</h3>
                <p className="text-[#7D7068]">
                  Chaque séance se déroule à distance ou en présentiel (Haute-Savoie).
                  Le rythme est adapté à votre situation et vos disponibilités.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-[#8B6F47] rounded-full flex items-center justify-center text-white font-semibold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-[#3A2F25] mb-1">Suivi</h3>
                <p className="text-[#7D7068]">
                  Un accompagnement continu entre les séances pour intégrer les prises
                  de conscience et mettre en place les ajustements au quotidien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#8B6F47] to-[#6B5535] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-semibold mb-4">
            Prêt(e) à transformer votre quotidien ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contactez-moi pour échanger sur votre situation et trouver
            l&apos;accompagnement qui vous correspond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-[#8B6F47] rounded-full hover:bg-[#F5EDE3] transition-all duration-300 font-medium text-lg"
            >
              Me contacter
            </Link>
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
