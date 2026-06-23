'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FiMusic } from 'react-icons/fi';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { getLocaleFromPathname, landingContent, localePathFor, localeRoutes } from '@/data/landingContent';
import { releaseNotesContent, releaseNotesPathFor } from '@/data/releaseNotes';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const locale = getLocaleFromPathname(pathname);
    const nav = landingContent[locale].nav;
    const homeUrl = localePathFor(locale);
    const releaseNotesUrl = releaseNotesPathFor(locale);
    const isReleaseNotesPage = pathname?.includes('/release-notes') ?? false;
    const aboutLinkClass = `text-sm font-medium transition-colors hover:text-secondary ${isReleaseNotesPage ? "text-foreground" : "text-secondary"}`;
    const releaseNotesLinkClass = `text-sm font-medium transition-colors hover:text-secondary ${isReleaseNotesPage ? "text-secondary" : "text-foreground"}`;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed left-0 right-0 top-0 z-50 mx-auto w-full border-b border-line bg-surface/90 backdrop-blur">
            <Container className="!px-0">
                <nav className="mx-auto flex items-center justify-between px-5 py-3">
                    {/* Logo */}
                    <Link href={homeUrl} className="flex items-center gap-2">
                        <FiMusic className="h-7 w-7 min-w-fit text-secondary" />
                        <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden items-center space-x-6 md:flex">
                        <li>
                            <Link href={homeUrl} className={aboutLinkClass}>
                                {nav.aboutLabel}
                            </Link>
                        </li>
                        <li>
                            <Link href={releaseNotesUrl} className={releaseNotesLinkClass}>
                                {releaseNotesContent[locale].navLabel}
                            </Link>
                        </li>
                        <li className="relative">
                            <details className="group">
                                <summary className="list-none cursor-pointer text-sm font-medium text-foreground transition-colors hover:text-secondary [&::-webkit-details-marker]:hidden">
                                    {nav.languageMenuLabel}
                                </summary>
                                <div className="absolute right-0 mt-3 w-36 rounded-lg border border-line bg-surface p-2 shadow-lg">
                                    {localeRoutes.map((route) => (
                                        <Link
                                            key={route.code}
                                            href={isReleaseNotesPage ? releaseNotesPathFor(route.code) : route.path}
                                            className={`block rounded-md px-3 py-2 text-sm transition-colors hover:bg-primary/15 ${route.code === locale ? "font-semibold text-foreground" : "text-foreground-accent"}`}
                                        >
                                            {route.nativeLabel}
                                        </Link>
                                    ))}
                                </div>
                            </details>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="border-b border-line bg-surface shadow-lg md:hidden">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        <li>
                            <Link href={homeUrl} className={`block hover:text-secondary ${isReleaseNotesPage ? "text-foreground" : "font-semibold text-secondary"}`} onClick={toggleMenu}>
                                {nav.aboutLabel}
                            </Link>
                        </li>
                        <li>
                            <Link href={releaseNotesUrl} className={`block hover:text-secondary ${isReleaseNotesPage ? "font-semibold text-secondary" : "text-foreground"}`} onClick={toggleMenu}>
                                {releaseNotesContent[locale].navLabel}
                            </Link>
                        </li>
                        <li>
                            <span className="mb-2 block text-sm font-semibold text-foreground">{nav.languageMenuLabel}</span>
                            <div className="grid grid-cols-2 gap-2">
                                {localeRoutes.map((route) => (
                                    <Link
                                        key={route.code}
                                        href={isReleaseNotesPage ? releaseNotesPathFor(route.code) : route.path}
                                        className={`rounded-md border border-line px-3 py-2 text-sm hover:border-primary hover:text-secondary ${route.code === locale ? "bg-primary/15 font-semibold text-foreground" : "text-foreground-accent"}`}
                                        onClick={toggleMenu}
                                    >
                                        {route.nativeLabel}
                                    </Link>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
