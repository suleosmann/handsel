"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/public/assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Resources', href: '/resources' },
        { name: 'Contact us', href: '/contact' }
    ];

    const isActive = (href) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <nav className={`fixed left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-[1280px] transition-all duration-300 ${
            isScrolled ? 'top-2 mt-6' : 'top-12'
        }`}>
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/50 px-16 py-6 h-[100px] flex items-center">
                <div className="flex items-center justify-between w-full">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src={Logo}
                            alt="Hamisi Logo"
                            width={180}
                            height={60}
                            className="h-14 w-auto"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-16">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`text-lg font-medium transition-colors duration-200 relative py-2 ${
                                    isActive(item.href)
                                        ? 'text-gray-900'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {item.name}
                                {isActive(item.href) && (
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-mainColor rounded-full"></div>
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex items-center justify-center w-12 h-12 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className={`w-7 h-7 transform transition-transform duration-200 ${
                                isMenuOpen ? 'rotate-90' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden absolute top-full left-0 right-0 mt-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/50 transition-all duration-300 ${
                        isMenuOpen
                            ? 'opacity-100 visible'
                            : 'opacity-0 invisible'
                    }`}
                >
                    <div className="flex flex-col space-y-6 p-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`text-lg font-medium transition-colors duration-200 py-4 px-6 rounded-xl relative ${
                                    isActive(item.href)
                                        ? 'text-gray-900 bg-gray-50'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                                {isActive(item.href) && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-mainColor rounded-r-full"></div>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;