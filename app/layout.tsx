import type { Metadata } from "next";
import { Cairo, Cormorant_Garamond } from "next/font/google";

import { AnalyticsProvider } from "@/components/analytics-provider";
import { FloatingConversionActions } from "@/components/floating-conversion-actions";
import { JsonLd } from "@/components/json-ld";
import { MobileQuickActions } from "@/components/mobile-quick-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/content/site";
import { buildOrganizationSchema } from "@/lib/structured-data";

import "./globals.css";

const cairo = Cairo({
  variable: "--font-body",
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | Centre de formation a Bab Ezzouar`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.defaultKeywords],
  alternates: {
    canonical: "/",
  },
  category: "education",
  openGraph: {
    type: "website",
    title: `${siteConfig.shortName} | Centre de formation a Bab Ezzouar`,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "fr_DZ",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | Centre de formation a Bab Ezzouar`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cairo.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-sand-50)] text-[var(--color-ink-800)]">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <AnalyticsProvider />
        <JsonLd data={buildOrganizationSchema()} />

        <div className="site-shell">
          <SiteHeader />
          <main id="main-content" className="flex-1 pb-20 md:pb-0">
            {children}
          </main>
          <SiteFooter />
        </div>

        <MobileQuickActions />
        <FloatingConversionActions />
      </body>
    </html>
  );
}
