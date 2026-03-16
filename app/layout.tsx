import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KI-Sichtbarkeit für Restaurants | AI Shift Drift",
  description:
    "Kostenlose KI-Scanner für Restaurants: AEO, GEO, Agent-Readiness und Sicherheit. Jetzt prüfen ob ChatGPT dein Restaurant empfiehlt.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "KI-Sichtbarkeit für Restaurants | AI Shift Drift",
    description:
      "Kostenlose KI-Scanner für Restaurants: AEO, GEO, Agent-Readiness und Sicherheit. Jetzt prüfen ob ChatGPT dein Restaurant empfiehlt.",
    locale: "de_DE",
    url: "https://ai-gastro-hub.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased`}>
        <main style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
