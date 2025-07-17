"use client";
import Image from 'next/image';
import HeroImage from '@/public/assets/white.jpg';
import logo from '../../public/assets/hero-logo.svg';

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={HeroImage}
                    alt="Team collaboration in modern office"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Overlay for better text readability */}
                {/*<div className="absolute inset-0 bg-black/30"></div>*/}
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-[50vh] sm:h-[60vh] px-8 sm:px-12 lg:px-16 pb-6 md:pb-12 pt-16 sm:pt-32">
                {/* Text Content */}
                <div className="text-center mb-2 sm:mb-8 mt-12 sm:mt-0">
                    {/* Main Heading */}
                    <h1 className="font-gill-sans text-4xl sm:text-5xl lg:text-6xl font-semibold text-secondaryColor leading-normal">
                        Governance. <span className="italic">Secured.</span> <span className="italic">Smarter.</span>
                    </h1>
                </div>

                {/* Logo */}
                <div className="relative w-32 h-32 sm:w-56 sm:h-56 sm:-mb-10">
                    <Image
                        src={logo}
                        alt="logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
            <div className="relative z-20 h-6 bg-gradient-to-r from-mainColor to-white"></div>
        </section>
    );
};

export default HeroSection;