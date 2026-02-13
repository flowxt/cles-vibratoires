import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Les Clés Vibratoires | Numérologie Stratégique & Magnétisme",
  description:
    "Accompagnement en numérologie stratégique et soins énergétiques par Marie. Découvrez vos clés de transformation pour mieux vous connaître et vous reconnecter à vous-même.",
  keywords: [
    "numérologie",
    "numérologie stratégique",
    "magnétisme",
    "soins énergétiques",
    "développement personnel",
    "bien-être",
    "Haute-Savoie",
    "Thyez",
  ],
  authors: [{ name: "Marie - Les Clés Vibratoires" }],
  openGraph: {
    title: "Les Clés Vibratoires | Numérologie Stratégique & Magnétisme",
    description:
      "Accompagnement en numérologie stratégique et soins énergétiques. Découvrez vos clés de transformation.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${lato.variable} antialiased bg-[#FDFBF8]`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
