import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono, Caveat } from "next/font/google";
import { PALETTES, SITE_CONFIG } from "@/lib/config";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const caveat = Caveat({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DirtyJobs.studio — We clean up after your AI",
  description:
    "AI slop cleanup crew for founders who shipped fast. Refactors, audits, security scans, and CTO oversight on whatever your AI just shipped to production.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const accent = PALETTES[SITE_CONFIG.palette].accent;
  const htmlClassName = `${anton.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable}`;
  const accentStyle = { "--accent": accent, "--hazard": accent } as React.CSSProperties;

  return (
    <html lang="en" className={htmlClassName} style={accentStyle}>
      <body data-tone={SITE_CONFIG.tone} data-density={SITE_CONFIG.density}>
        {children}
      </body>
    </html>
  );
}
