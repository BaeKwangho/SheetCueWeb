export interface IMenuItem {
    text: string;
    url: string;
}

export type Locale = "en" | "ko" | "ja" | "de" | "fr" | "es" | "zh-TW";

export interface IHeroDetails {
    eyebrow: string;
    heading: string;
    subheading: string;
    secondarySubheading: string;
    primaryCta: string;
    primaryCtaUrl: string;
    appStoreCtaUrl: string;
    secondaryCta: string;
    secondaryCtaUrl: string;
    playStoreBadgeSrc: string;
    playStoreBadgeAlt: string;
    appStoreBadgeSrc: string;
    appStoreBadgeAlt: string;
    centerImageSrc: string;
    imageAlt: string;
}

export interface IBenefit {
    title: string;
    description: string;
    imageSrc: string;
    bullets: IBenefitBullet[]
}

export interface IBenefitBullet {
    title: string;
    description: string;
    icon: JSX.Element;
}

export interface IFAQ {
    question: string;
    answer: string;
}

export interface IStats {
    title: string;
    icon: JSX.Element;
    description: string;
}

export interface ISocials {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    threads?: string;
    twitter?: string;
    youtube?: string;
    x?: string;
    [key: string]: string | undefined;
}

export interface IWorkflowStep {
    number: string;
    title: string;
    description: string;
}

export interface ISectionContent {
    id: string;
    title: string;
    description: string;
}

export interface ILandingContent {
    locale: Locale;
    metadata: {
        title: string;
        description: string;
    };
    nav: {
        menuItems: IMenuItem[];
        releaseCta: string;
        languageMenuLabel: string;
    };
    hero: IHeroDetails;
    stats: IStats[];
    benefits: IBenefit[];
    workflow: ISectionContent & {
        imageSrc?: string;
        imageAlt?: string;
        steps: IWorkflowStep[];
    };
    privacy: ISectionContent & {
        points: string[];
    };
    faq: {
        eyebrow: string;
        title: string;
        supportPrompt: string;
        supportLink: string;
        supportUrl: string;
        items: IFAQ[];
    };
    cta: {
        heading: string;
        subheading: string;
        releaseUrl: string;
        privacyUrl: string;
        releaseLabel: string;
        playStoreUrl: string;
        playStoreLabel: string;
        playStoreBadgeSrc: string;
        playStoreBadgeAlt: string;
        appStoreUrl: string;
        appStoreLabel: string;
        appStoreBadgeSrc: string;
        appStoreBadgeAlt: string;
        privacyLabel: string;
    };
    footer: {
        subheading: string;
        quickLinksTitle: string;
        trustLinksTitle: string;
        privacyPolicy: string;
        support: string;
        contact: string;
        quickLinks: IMenuItem[];
        email: string;
        telephone: string;
        socials: ISocials;
        copyright: string;
    };
}
