'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FiMusic } from 'react-icons/fi';

import { siteDetails } from '@/data/siteDetails';
import { getLocaleFromPathname, landingContent } from '@/data/landingContent';
import { withBasePath } from '@/data/paths';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    const pathname = usePathname();
    const locale = getLocaleFromPathname(pathname);
    const footer = landingContent[locale].footer;
    const homeUrl = locale === "ko" ? "/ko" : "/";

    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href={homeUrl} className="flex items-center gap-2">
                        <FiMusic className="min-w-fit w-5 h-5 md:w-7 md:h-7 text-secondary" />
                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {footer.subheading}
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">{footer.quickLinksTitle}</h4>
                    <ul className="text-foreground-accent">
                        {footer.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-foreground">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">{footer.trustLinksTitle}</h4>

                    <a href={withBasePath(`/privacy/privacy-policy.html#${locale}`)} className="block text-foreground-accent hover:text-foreground">{footer.privacyPolicy}</a>
                    <a href={withBasePath(`/privacy/support.html#${locale}`)} className="block text-foreground-accent hover:text-foreground">{footer.support}</a>
                    <a href={withBasePath(`/privacy/support.html#${locale}`)} className="block text-foreground-accent hover:text-foreground">{footer.contact}</a>

                    {footer.email && <a href={`mailto:${footer.email}`}  className="block text-foreground-accent hover:text-foreground">Email: {footer.email}</a>}
                    {footer.telephone && <a href={`tel:${footer.telephone}`} className="block text-foreground-accent hover:text-foreground">Phone: {footer.telephone}</a>}

                    {footer.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footer.socials).map(platformName => {
                                const socialUrl = footer.socials[platformName];
                                if (platformName && socialUrl) {
                                    return (
                                        <Link
                                            href={socialUrl}
                                            key={platformName}
                                            aria-label={platformName}
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. {footer.copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
