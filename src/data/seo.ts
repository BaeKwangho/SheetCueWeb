import type { Metadata } from "next";

import { ILandingContent, Locale } from "@/types";
import { landingContent, localePathFor, supportedLocales } from "./landingContent";
import { siteDetails } from "./siteDetails";

export const ogImage = {
    url: "/assets/promo-generated/external-chromaportal-og.webp",
    width: 1200,
    height: 630,
};

export const organizationLogo = "/brand/sheetcue-icon-512.png";

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
    const ogImageUrl = absoluteUrl(ogImage.url);

    return {
        title: content.metadata.title,
        description: content.metadata.description,
        keywords: [
            "SheetCue",
            "PDF score viewer",
            "PDF sheet music",
            "sheet music practice",
            "measure detection",
            "measure by measure practice",
            "local-first music app",
            "score rehearsal",
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
                    alt: `${siteDetails.siteName} PDF score practice flow`,
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
    const softwareId = `${pageUrl}#software`;
    const organizationId = `${siteDetails.siteUrl}#organization`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": organizationId,
                name: siteDetails.siteName,
                url: siteDetails.siteUrl,
                logo: absoluteUrl(organizationLogo),
            },
            {
                "@type": "SoftwareApplication",
                "@id": softwareId,
                name: siteDetails.siteName,
                url: pageUrl,
                description: content.metadata.description,
                applicationCategory: "MusicApplication",
                operatingSystem: "iOS, iPadOS, Android",
                image: absoluteUrl(ogImage.url),
                inLanguage: content.locale,
                offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                    availability: "https://schema.org/PreOrder",
                },
                publisher: {
                    "@id": organizationId,
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
                    "@id": softwareId,
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
