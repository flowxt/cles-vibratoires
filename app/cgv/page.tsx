import type { Metadata } from "next";
import { FadeIn, FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "Conditions générales de vente et d'utilisation des prestations Les Clés Vibratoires — Marie.",
  alternates: { canonical: "https://www.lesclesvibratoires.fr/cgv" },
  robots: { index: false, follow: false },
};

export default function CGV() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-[#FDFBF8] via-[#F5EDE3] to-[#FDFBF8]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeUp>
              <p className="text-[#8B6F47] text-sm tracking-[0.3em] uppercase mb-4">Informations légales</p>
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-semibold text-[#3A2F25] mb-4">
                Conditions Générales de Vente
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 bg-white">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-[#7D7068] text-justify">

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#3A2F25] mt-10 mb-4">
              Article 1 — Identification du prestataire
            </h2>
            <p>
              <strong className="text-[#3A2F25]">Nom :</strong> Marie — Les Clés Vibratoires<br />
              <strong className="text-[#3A2F25]">Localisation :</strong> Haute-Savoie (Megève), France<br />
              <strong className="text-[#3A2F25]">Email :</strong>{" "}
              <a href="mailto:lesclesvibratoires@gmail.com" className="text-[#8B6F47] hover:underline">
                lesclesvibratoires@gmail.com
              </a><br />
              <strong className="text-[#3A2F25]">Instagram :</strong>{" "}
              <a href="https://instagram.com/lesclesvibratoires" target="_blank" rel="noopener noreferrer" className="text-[#8B6F47] hover:underline">
                @lesclesvibratoires
              </a>
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#3A2F25] mt-10 mb-4">
              Article 2 — Champ d&apos;application
            </h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à l&apos;ensemble des prestations proposées 
              par Les Clés Vibratoires, notamment :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Séances de numérologie stratégique® (thèmes individuels, enfants, couple, suivi annuel)</li>
              <li>Soins énergétiques à distance (magnétisme, rééquilibrage)</li>
              <li>Séances de guidance et de psycho-tarot</li>
              <li>Accompagnements personnalisés (formules combinées)</li>
            </ul>
            <p>
              Toute réservation implique l&apos;acceptation sans réserve des présentes CGV.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#3A2F25] mt-10 mb-4">
              Article 3 — Modalités de réservation
            </h2>
            <p>
              Les réservations s&apos;effectuent :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Via le formulaire de contact du site</li>
              <li>Par email à <a href="mailto:lesclesvibratoires@gmail.com" className="text-[#8B6F47] hover:underline">lesclesvibratoires@gmail.com</a></li>
              <li>Via les liens de réservation en ligne disponibles sur le site</li>
            </ul>
            <p>
              Pour les prestations de numérologie, un délai de préparation minimum de 3 semaines est nécessaire 
              entre la prise de rendez-vous et la séance. Ce délai est indispensable pour permettre la préparation 
              personnalisée du thème numérologique.
            </p>
            <p>
              Pour les séances de soin énergétique, les informations suivantes seront demandées avant la séance : 
              nom, prénom, date de naissance et une photo récente.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#3A2F25] mt-10 mb-4">
              Article 4 — Tarifs et paiement
            </h2>
            <p>
              Les tarifs en vigueur sont indiqués sur le site au moment de la réservation. Ils sont exprimés en euros 
              et incluent toutes taxes applicables.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Le règlement s&apos;effectue avant ou lors de la séance, par <strong className="text-[#3A2F25]">carte bancaire via Stripe</strong> 
                {" "}ou par tout autre moyen convenu entre les parties.
              </li>
              <li>
                Les paiements par carte bancaire (CB, Visa, Mastercard) sont sécurisés via la plateforme Stripe, 
                certifiée PCI-DSS. Les coordonnées bancaires ne sont jamais stockées par Les Clés Vibratoires.
              </li>
              <li>Aucune séance ne sera réalisée sans règlement préalable confirmé.</li>
            </ul>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#3A2F25] mt-10 mb-4">
              Article 5 — Annulation et report
            </h2>
            <p>
              Toute annulation doit être signalée par email dans les meilleurs délais.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="text-[#3A2F25]">Annulation plus de 48h avant la séance :</strong> report possible 
                sur une nouvelle date, sans frais.
              </li>
              <li>
                <strong className="text-[#3A2F25]">Annulation moins de 48h avant la séance :</strong> la séance sera 
                due en totalité, sauf cas de force majeure dûment justifié.
              </li>
              <li>
                <strong className="text-[#3A2F25]">Absence sans préavis :</strong> la séance est due en totalité.
              </li>
            </ul>
            <p>
              Pour les accompagnements en formule (plusieurs séances), le report d&apos;une séance reste possible 
              sur accord préalable, dans un délai raisonnable.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#3A2F25] mt-10 mb-4">
              Article 6 — Droit de rétractation
            </h2>
            <p>
              Conformément à l&apos;article L.221-28 du Code de la consommation, le droit de rétractation ne peut être 
              exercé pour les prestations de services pleinement exécutées avant la fin du délai de rétractation 
              et dont l&apos;exécution a commencé avec l&apos;accord du consommateur.
            </p>
            <p>
              Toutefois, en cas de réservation effectuée à distance, un délai de rétractation de 14 jours est applicable 
              si la prestation n&apos;a pas encore eu lieu et si la demande est formulée par écrit dans ce délai.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#3A2F25] mt-10 mb-4">
              Article 7 — Nature des prestations
            </h2>
            <p>
              Les prestations proposées par Les Clés Vibratoires s&apos;inscrivent dans une démarche de bien-être, 
              de développement personnel et de connaissance de soi. Elles ne constituent en aucun cas :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Un acte médical ou paramédical</li>
              <li>Un diagnostic de santé</li>
              <li>Un remplacement d&apos;un suivi médical ou psychologique</li>
              <li>Une démarche divinatoire</li>
            </ul>
            <p>
              Les soins énergétiques et la numérologie sont des pratiques complémentaires qui s&apos;inscrivent en soutien 
              du mieux-être, et non en substitution d&apos;un traitement médical.
            </p>
            <p>
              Le psycho-tarot est utilisé exclusivement comme outil d&apos;introspection et d&apos;accompagnement personnel, 
              sans aucune prétention divinatoire.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#3A2F25] mt-10 mb-4">
              Article 8 — Confidentialité
            </h2>
            <p>
              Les informations communiquées lors des séances (données personnelles, éléments de vie partagés) 
              sont strictement confidentielles et ne sont en aucun cas transmises à des tiers.
            </p>
            <p>
              Les données collectées (nom, prénom, date de naissance, email) sont nécessaires à la réalisation 
              des prestations et sont traitées conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
            <p>
              Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données en écrivant à{" "}
              <a href="mailto:lesclesvibratoires@gmail.com" className="text-[#8B6F47] hover:underline">
                lesclesvibratoires@gmail.com
              </a>.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#3A2F25] mt-10 mb-4">
              Article 9 — Responsabilité
            </h2>
            <p>
              La prestataire ne peut être tenue responsable des choix, décisions ou actions prises par le client 
              à la suite d&apos;une séance. Chaque individu reste acteur et responsable de sa propre vie.
            </p>
            <p>
              Les résultats des séances ne peuvent être garantis, dans la mesure où ils dépendent en partie 
              de l&apos;implication et du cheminement personnel du client.
            </p>

            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#3A2F25] mt-10 mb-4">
              Article 10 — Litiges
            </h2>
            <p>
              En cas de litige, une solution amiable sera recherchée en priorité. À défaut de résolution amiable, 
              tout litige relatif aux présentes CGV sera soumis aux tribunaux compétents français.
            </p>

            <div className="mt-12 p-6 bg-[#FDFBF8] rounded-xl border border-[#E8E0D6] text-center">
              <p className="text-sm text-[#7D7068] italic">
                Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
