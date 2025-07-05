import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import Logo from '@/public/assets/logo.png';
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-secondaryColor text-white font-gill-sans">
            <div className="h-4 bg-gradient-to-r from-white to-mainColor"></div>
            {/* Main Footer Content */}
            <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Logo and Description Section */}
                    <div className="lg:col-span-1">
                        <div className="mb-8">
                            <Image
                                src={Logo}
                                alt="Handsel Logo"
                                width={120}
                                height={80}
                                className="mb-6"
                            />
                        </div>

                        <p className="text-white/90 leading-relaxed mb-8 max-w-sm">
                            Whether you're navigating regulatory complexity,
                            digital transformation, or emerging technologies—we
                            deliver the frameworks, insight, and oversight that
                            drive performance and protect reputation.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-mainColor transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-mainColor transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-mainColor transition-colors">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-mainColor transition-colors">
                                <FaFacebook size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Menu Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-white font-semibold mb-4 text-lg">
                            Menu
                            <div className="w-16 h-0.5 bg-mainColor mt-2"></div>
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-white/90 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="text-white/90 hover:text-white transition-colors">About us</a></li>
                            <li><a href="#" className="text-white/90 hover:text-white transition-colors">Services</a></li>
                            <li><a href="#" className="text-white/90 hover:text-white transition-colors">Resources</a></li>
                            <li><a href="#" className="text-white/90 hover:text-white transition-colors">Contact us</a></li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-white font-semibold mb-4 text-lg">
                            Services
                            <div className="w-16 h-0.5 bg-mainColor mt-2"></div>
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-white/90 hover:text-white transition-colors">Corporate Governance</a></li>
                            <li><a href="#" className="text-white/90 hover:text-white transition-colors">Cyber Governance</a></li>
                            <li><a href="#" className="text-white/90 hover:text-white transition-colors">AI Governance</a></li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-white font-semibold mb-4 text-lg">
                            Resources
                            <div className="w-16 h-0.5 bg-mainColor mt-2"></div>
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-white/90 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="text-white/90 hover:text-white transition-colors">Whitepapers</a></li>
                            <li><a href="#" className="text-white/90 hover:text-white transition-colors">Case Studies</a></li>
                            <li><a href="#" className="text-white/90 hover:text-white transition-colors">Webinars & Events</a></li>
                            <li><a href="#" className="text-white/90 hover:text-white transition-colors">Newsletters</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-white font-semibold mb-4 text-lg">
                            Newsletter
                            <div className="w-16 h-0.5 bg-mainColor mt-2"></div>
                        </h3>
                        <div className="space-y-3 mb-8">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 focus:outline-none focus:border-mainColor"
                            />
                            <button className="w-full bg-mainColor hover:bg-mainColor/90 text-white font-semibold py-3 px-6 rounded transition-colors">
                                Subscribe
                            </button>
                        </div>

                        {/* Contact Information */}
                        <div className="text-white/90">
                            <p className="font-semibold text-mainColor mb-2">Handsel Consultancy Limited</p>
                            <p className="text-sm">C: +44 7931 235652</p>
                            <p className="text-sm">E: info@handselconsultancy.co.uk</p>
                            <p className="text-sm">L: 43 Twycross Road, Wokingham Berkshire</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="border-t-6 border-mainColor px-8 sm:px-12 lg:px-16 xl:px-20 py-6">
                <div className="text-center">
                    <p className="text-white/80 text-lg font-bold">
                        Copyright © 2025 Handsel Consultancy Limited ® | All rights reserved |
                        <a href="#" className="text-white/80 hover:text-white transition-colors ml-2">Privacy Policy</a> |
                        <a href="#" className="text-white/80 hover:text-white transition-colors ml-2">Terms of use</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;