import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocaleDocument from "@/components/LocaleDocument";
import { buildPageMetadata } from "@/data/seo";
import { withBasePath } from "@/data/paths";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  ...buildPageMetadata("en"),
  metadataBase: new URL(siteDetails.siteUrl),
  applicationName: siteDetails.siteName,
  creator: "Kwangho Bae",
  publisher: "Kwangho Bae",
  category: "music",
  manifest: withBasePath('/manifest.webmanifest'),
  icons: {
    icon: [
      { url: withBasePath('/icons/favicon-32.png'), sizes: '32x32', type: 'image/png' },
      { url: withBasePath('/icons/favicon-16.png'), sizes: '16x16', type: 'image/png' },
    ],
    shortcut: [withBasePath('/favicon.ico')],
    apple: [
      { url: withBasePath('/icons/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    title: siteDetails.siteName,
    statusBarStyle: 'default',
  },
};

export const viewport: Viewport = {
  themeColor: '#12cfe3',
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
