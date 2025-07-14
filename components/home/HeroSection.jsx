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
            <div className="relative z-10 flex flex-col items-start justify-end h-[60vh] px-8 sm:px-12 lg:px-16 lg:ml-64 pb-12">
                {/* Logo */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[441px] lg:h-[315px] ml-[-2rem] sm:ml-[-3rem] lg:ml-[-8rem] mb-2 sm:mb-3 lg:mb-6 mt-4 sm:mt-6 lg:mt-8">
                    <Image
                        src={logo}
                        alt="logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Text Content */}
                <div className="text-left">
                    {/* Main Heading */}
                    <h1 className="font-gill-sans text-4xl sm:text-5xl lg:text-6xl font-semibold text-secondaryColor leading-normal">
                        Governance. <span className="italic">Secured.</span> <span className="italic">Smarter.</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;