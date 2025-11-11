import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "ROAI - Olimpiada Națională de Inteligență Artificială",
    template: "%s | ROAI",
  },
  description:
    "Olimpiada Națională de Inteligență Artificială (ROAI) 2025. Regulament, calendar, resurse, criterii de evaluare, ghiduri și informații pentru elevi și profesori.",
  keywords: [
    "olimpiadă",
    "inteligență artificială",
    "AI",
    "ROAI",
    "educație",
    "elevi",
    "competiție",
  ],
  authors: [{ name: "ROAI Team" }],
  metadataBase: new URL("https://olimpiada-ai.ro"),
  openGraph: {
    type: "website",
    locale: "ro_RO",
    title: "Olimpiada Națională de Inteligență Artificială (ROAI) 2025",
    description:
      "Regulament, calendar, resurse și informații pentru participare la ROAI 2025.",
    siteName: "ROAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olimpiada Națională de Inteligență Artificială (ROAI) 2025",
    description:
      "Regulament, calendar, resurse și informații pentru participare la ROAI 2025.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans relative bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-blue-700 focus:text-white focus:px-3 focus:py-2 focus:rounded focus:z-50"
        >
          Sari la conținut
        </a>
        <Header />
        <main id="main" className="grow relative">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}

