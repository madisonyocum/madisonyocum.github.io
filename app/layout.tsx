import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";

import { ClickSound } from "@/components/ClickSound";
import { site } from "@/content/site";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

/** Used once, for the italic accent in the headline. */
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: `${site.name} - ${site.role}`,
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#f5f3ef",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <head>
        {/* Reveals are progressive enhancement: no JS, no hidden content. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;animation:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <a className="skipLink" href="#main">
          Skip to content
        </a>
        {children}
        <ClickSound />
      </body>
    </html>
  );
}
