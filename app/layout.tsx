import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

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

const siteUrl = "https://www.lesclesvibratoires.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Les Clés Vibratoires | Numérologie Stratégique, Magnétisme & Tarologie",
    template: "%s | Les Clés Vibratoires",
  },
  description:
    "Accompagnement en numérologie stratégique® et soins énergétiques par Marie. Découvrez vos clés de transformation pour mieux vous connaître et vous reconnecter à vous-même.",
  keywords: [
    "numérologie stratégique",
    "numérologie",
    "magnétisme",
    "soins énergétiques",
    "psycho-tarot",
    "développement personnel",
    "bien-être",
    "Haute-Savoie",
    "Megève",
    "lesclesvibratoires",
  ],
  authors: [{ name: "Marie — Les Clés Vibratoires", url: siteUrl }],
  creator: "Marie — Les Clés Vibratoires",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "KVoQRtjPiKQGrbUFz-z3U0qF1RbawqXR7B4-ddsn5o4",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/favicon/site.webmanifest" },
    ],
  },
  openGraph: {
    title: "Les Clés Vibratoires | Numérologie Stratégique, Magnétisme & Tarologie",
    description:
      "Accompagnement en numérologie stratégique® et soins énergétiques. Découvrez vos clés de transformation.",
    url: siteUrl,
    siteName: "Les Clés Vibratoires",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Les Clés Vibratoires",
    description:
      "Accompagnement en numérologie stratégique® et soins énergétiques par Marie.",
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
        className={`${cormorant.variable} ${lato.variable} antialiased bg-[#FDFBF8] overflow-x-hidden`}
      >
        <Header />
        <main className="overflow-x-hidden">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
