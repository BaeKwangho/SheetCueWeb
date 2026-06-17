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
        <header className="sheetcue-glass fixed top-0 left-0 right-0 z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="mx-auto flex items-center justify-between px-5 py-3 md:py-4">
                    {/* Logo */}
                    <Link href={homeUrl} className="flex items-center gap-3">
                        <span className="sheetcue-brand-mark h-10 w-10">
                            <FiMusic className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="manrope cursor-pointer text-xl font-bold text-white">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden items-center space-x-6 md:flex">
                        {nav.menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-sm font-semibold text-[rgba(255,255,255,0.72)] transition-colors hover:text-white">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li className="relative">
                            <details className="group">
                                <summary className="list-none cursor-pointer rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.08)] px-4 py-2 text-sm font-semibold text-[rgba(255,255,255,0.68)] transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                                    {nav.languageMenuLabel}
                                </summary>
                                <div className="absolute right-0 mt-3 w-40 rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#071113] p-2 shadow-2xl shadow-black/40">
                                    {localeRoutes.map((route) => (
                                        <Link
                                            key={route.code}
                                            href={route.path}
                                            className={`block rounded-xl px-3 py-2 text-sm transition-colors hover:bg-white/10 ${route.code === locale ? "bg-[rgba(255,255,255,0.12)] font-bold text-white" : "text-[rgba(255,255,255,0.64)]"}`}
                                        >
                                            {route.nativeLabel}
                                        </Link>
                                    ))}
                                </div>
                            </details>
                        </li>
                        <li>
                            <Link href="#release" className="sheetcue-gradient-button rounded-full px-7 py-3 text-sm font-bold transition">
                                {nav.releaseCta}
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="sheetcue-gradient-button flex h-10 w-10 items-center justify-center rounded-full focus:outline-none"
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
                <div id="mobile-menu" className="sheetcue-glass md:hidden">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {nav.menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="block font-semibold text-[rgba(255,255,255,0.82)] hover:text-white" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <span className="mb-2 block text-sm font-semibold text-[rgba(255,255,255,0.58)]">{nav.languageMenuLabel}</span>
                            <div className="grid grid-cols-2 gap-2">
                                {localeRoutes.map((route) => (
                                    <Link
                                        key={route.code}
                                        href={route.path}
                                        className={`rounded-xl border border-[rgba(255,255,255,0.12)] px-3 py-2 text-sm hover:border-primary hover:text-white ${route.code === locale ? "bg-[rgba(255,255,255,0.12)] font-bold text-white" : "text-[rgba(255,255,255,0.64)]"}`}
                                        onClick={toggleMenu}
                                    >
                                        {route.nativeLabel}
                                    </Link>
                                ))}
                            </div>
                        </li>
                        <li>
                            <Link href="#release" className="sheetcue-gradient-button block w-fit rounded-full px-5 py-2 font-bold" onClick={toggleMenu}>
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
