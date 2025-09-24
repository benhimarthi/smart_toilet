import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"; // Assure-toi que ce fichier existe

// Chargement des polices locales
const manRopeVF = localFont({
  src: "./fonts/Manrope-VariableFont_wght.woff",
  variable: "--font-manrope",
  style: "normal",
  display: "swap",
});

const unboundedVf = localFont({
  src: "./fonts/Unbounded-VariableFont_wght.woff2",
  variable: "--font-unbounded",
  style: "normal",
  display: "swap",
});

const brunoAceRegular = localFont({
  src: "./fonts/BrunoAce-Regular.woff2",
  variable: "--font-bruno-ace-regular",
  weight: "900",
  style: "normal",
  display: "swap",
});

const orbitron = localFont({
  src: "./fonts/Orbitron-VariableFont_wght.woff2",
  variable: "--font-orbitron",
  style: "normal",
  display: "swap",
});

// Metadata adapté pour le projet Smart Toilets
export const metadata: Metadata = {
  title: "Smart Toilets | Solutions d'Assainissement et Hygiène",
  description:
    "Découvrez nos toilettes intelligentes pour un assainissement efficace et des habitudes d'hygiène améliorées.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "toilettes intelligentes",
    "assainissement",
    "hygiène",
    "technologie toilette",
    "smart toilets",
    "MOVEELB",
  ],
  openGraph: {
    title: "Smart Toilets | Assainissement et Hygiène",
    description:
      "Des toilettes intelligentes qui allient confort, hygiène et innovation technologique.",
    url: "https://www.smarttoilets.com", // ton futur domaine
    siteName: "Smart Toilets",
    images: [
      {
        url: "/images/og-smart-toilets.jpg", // à remplacer par ton image
        width: 1200,
        height: 630,
        alt: "Smart Toilets - Assainissement et Hygiène",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Toilets | Assainissement et Hygiène",
    description:
      "Découvrez nos solutions de toilettes intelligentes pour un environnement plus propre et plus sain.",
    images: ["/images/twitter-smart-toilets.jpg"], // à remplacer
  },
};

// Layout principal
export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="fr">
      <body
        className={`${unboundedVf.variable} ${brunoAceRegular.variable} ${orbitron.variable} ${manRopeVF.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
