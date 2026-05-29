import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocaleDocument from "@/components/LocaleDocument";
import { landingContent } from "@/data/landingContent";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl),
  title: landingContent.en.metadata.title,
  description: landingContent.en.metadata.description,
  alternates: {
    canonical: siteDetails.siteUrl,
    languages: {
      en: siteDetails.siteUrl,
      ko: `${siteDetails.siteUrl}ko/`,
    },
  },
  openGraph: {
    title: landingContent.en.metadata.title,
    description: landingContent.en.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ko_KR'],
    images: [
      {
        url: '/images/sheetcue-hero.png',
        width: 1608,
        height: 978,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: landingContent.en.metadata.title,
    description: landingContent.en.metadata.description,
    images: ['/images/sheetcue-hero.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased`}
      >
        <LocaleDocument />
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
