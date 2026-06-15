import type { Metadata } from "next";

import { ILandingContent, Locale } from "@/types";
import { landingContent, localePathFor, supportedLocales } from "./landingContent";
import { siteDetails } from "./siteDetails";

export const ogImage = {
    url: "og-image.png",
    width: 1200,
    height: 630,
};

export const localeOgMap: Record<Locale, string> = {
    en: "en_US",
    ko: "ko_KR",
    ja: "ja_JP",
    de: "de_DE",
    fr: "fr_FR",
    es: "es_ES",
    "zh-TW": "zh_TW",
};

export const absoluteUrl = (path = "/"): string => {
    const normalizedPath = path === "/" ? "" : path.replace(/^\//, "");
    return new URL(normalizedPath, siteDetails.siteUrl).toString();
};

export const localeUrl = (locale: Locale): string => absoluteUrl(localePathFor(locale));

export const languageAlternates = (): Record<string, string> => ({
    "x-default": localeUrl("en"),
    ...supportedLocales.reduce(
        (languages, locale) => ({
            ...languages,
            [locale]: localeUrl(locale),
        }),
        {} as Record<string, string>,
    ),
});

export const buildPageMetadata = (locale: Locale): Metadata => {
    const content = landingContent[locale];
    const url = localeUrl(locale);
    const ogImageUrl = absoluteUrl(`/${ogImage.url}`);

    return {
        title: content.metadata.title,
        description: content.metadata.description,
        keywords: [
            "SheetCue",
            "PDF score viewer",
            "PDF sheet music",
            "sheet music practice",
            "measure by measure practice",
            "score rehearsal",
            "music practice app",
        ],
        alternates: {
            canonical: url,
            languages: languageAlternates(),
        },
        openGraph: {
            title: content.metadata.title,
            description: content.metadata.description,
            url,
            siteName: siteDetails.siteName,
            type: "website",
            locale: localeOgMap[locale],
            alternateLocale: supportedLocales.filter((item) => item !== locale).map((item) => localeOgMap[item]),
            images: [
                {
                    url: ogImageUrl,
                    width: ogImage.width,
                    height: ogImage.height,
                    alt: `${siteDetails.siteName} PDF score viewer`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: content.metadata.title,
            description: content.metadata.description,
            images: [ogImageUrl],
        },
    };
};

export const buildStructuredData = (content: ILandingContent) => {
    const pageUrl = localeUrl(content.locale);
    const appStoreUrl = content.cta.appStoreUrl;
    const playStoreUrl = content.cta.playStoreUrl;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": `${siteDetails.siteUrl}#organization`,
                name: siteDetails.siteName,
                url: siteDetails.siteUrl,
                logo: absoluteUrl("/images/sheetcue-hero.png"),
                sameAs: [appStoreUrl, playStoreUrl],
            },
            {
                "@type": "SoftwareApplication",
                "@id": `${pageUrl}#software`,
                name: siteDetails.siteName,
                url: pageUrl,
                description: content.metadata.description,
                applicationCategory: "MusicApplication",
                operatingSystem: "iOS, iPadOS, Android",
                image: absoluteUrl(`/${ogImage.url}`),
                downloadUrl: [appStoreUrl, playStoreUrl],
                inLanguage: content.locale,
                offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                },
                publisher: {
                    "@id": `${siteDetails.siteUrl}#organization`,
                },
            },
            {
                "@type": "WebPage",
                "@id": `${pageUrl}#webpage`,
                url: pageUrl,
                name: content.metadata.title,
                description: content.metadata.description,
                inLanguage: content.locale,
                isPartOf: {
                    "@type": "WebSite",
                    "@id": `${siteDetails.siteUrl}#website`,
                    name: siteDetails.siteName,
                    url: siteDetails.siteUrl,
                },
                about: {
                    "@id": `${pageUrl}#software`,
                },
            },
            {
                "@type": "FAQPage",
                "@id": `${pageUrl}#faq`,
                mainEntity: content.faq.items.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: item.answer,
                    },
                })),
            },
        ],
    };
};
