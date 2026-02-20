'use client'

import Link from 'next/link';
import { useState } from 'react';

// ***** start - Nav Links
const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
];
// ***** end - Nav Links

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full border-b bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* ***** start - Logo */}
                <Link href="/" className="text-xl font-bold text-gray-800">
                    MyApp
                </Link>
                {/* ***** end - Logo */}

                {/* ***** start - Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                {/* ***** end - Desktop Nav */}

                {/* ***** start - Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
                {/* ***** end - Mobile Menu Button */}

            </div>

            {/* ***** start - Mobile Nav */}
            {isMenuOpen && (
                <nav className="md:hidden border-t bg-white px-4 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
            {/* ***** end - Mobile Nav */}

        </header>
    );
}
