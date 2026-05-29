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

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const locale = getLocaleFromPathname(pathname);
    const nav = landingContent[locale].nav;
    const homeUrl = localePathFor(locale);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
                    {/* Logo */}
                    <Link href={homeUrl} className="flex items-center gap-2">
                        <FiMusic className="text-secondary min-w-fit w-7 h-7" />
                        <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-6">
                        {nav.menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li className="relative">
                            <details className="group">
                                <summary className="list-none cursor-pointer text-foreground hover:text-foreground-accent transition-colors [&::-webkit-details-marker]:hidden">
                                    {nav.languageMenuLabel}
                                </summary>
                                <div className="absolute right-0 mt-3 w-36 rounded-lg border border-black/10 bg-white p-2 shadow-lg">
                                    {localeRoutes.map((route) => (
                                        <Link
                                            key={route.code}
                                            href={route.path}
                                            className={`block rounded-md px-3 py-2 text-sm transition-colors hover:bg-primary/20 ${route.code === locale ? "font-semibold text-foreground" : "text-foreground-accent"}`}
                                        >
                                            {route.nativeLabel}
                                        </Link>
                                    ))}
                                </div>
                            </details>
                        </li>
                        <li>
                            <Link href="#release" className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors">
                                {nav.releaseCta}
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
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
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {nav.menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <span className="mb-2 block text-sm font-semibold text-foreground">{nav.languageMenuLabel}</span>
                            <div className="grid grid-cols-2 gap-2">
                                {localeRoutes.map((route) => (
                                    <Link
                                        key={route.code}
                                        href={route.path}
                                        className={`rounded-md border border-black/10 px-3 py-2 text-sm hover:border-primary hover:text-primary ${route.code === locale ? "bg-primary/20 font-semibold text-foreground" : "text-foreground-accent"}`}
                                        onClick={toggleMenu}
                                    >
                                        {route.nativeLabel}
                                    </Link>
                                ))}
                            </div>
                        </li>
                        <li>
                            <Link href="#release" className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit" onClick={toggleMenu}>
                                {nav.releaseCta}
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
